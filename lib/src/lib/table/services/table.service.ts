import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  combineLatest,
  Observable,
  ReplaySubject,
} from 'rxjs';
import { TableCell } from '../models/table-cell.model';
import { filter, map, shareReplay, take, withLatestFrom } from 'rxjs/operators';
import { Lab900TableTab } from '../models/table-tabs.model';
import { Lab900Sort } from '../models/table-sort.model';

@Injectable()
export class Lab900TableService<T extends object = object, TabId = string> {
  private readonly _columns$ = new ReplaySubject<TableCell<T>[]>();
  public readonly columns$: Observable<TableCell<T>[]>;
  public readonly visibleColumns$: Observable<TableCell<T>[]>;

  public readonly _disableEditing$ = new BehaviorSubject<boolean>(false);
  public readonly disableEditing$: Observable<boolean> =
    this._disableEditing$.asObservable();

  private readonly _tabs$ = new BehaviorSubject<
    Lab900TableTab<TabId, T>[] | null
  >(null);
  public readonly tabs$ = this._tabs$
    .asObservable()
    .pipe(filter((tabs) => tabs != null));

  private readonly _tabId$ = new BehaviorSubject<TabId | null>(null);
  public readonly tabId$ = this._tabId$.asObservable().pipe(
    withLatestFrom(this.tabs$),
    map(([tabId, tabs]) => tabId ?? tabs?.[0]?.id),
    filter((tabId) => tabId != null)
  );

  private readonly _sort$ = new ReplaySubject<Lab900Sort[] | null>();
  public readonly sort$: Observable<Lab900Sort[] | null> =
    this._sort$.asObservable();

  public constructor() {
    this.columns$ = combineLatest([
      this._tabId$.asObservable(),
      this._tabs$.asObservable(),
      this._columns$.asObservable(),
    ]).pipe(
      map(([tabId, tabs, columns]) => {
        if (tabs?.length) {
          const activeTab = tabId
            ? tabs.find((tab) => tab.id === tabId)
            : tabs?.[0];
          if (activeTab?.tableCells) {
            return activeTab?.tableCells;
          }
        }
        return columns;
      }),
      filter((columns) => columns != null),
      map((columns) => columns.sort(Lab900TableService.reorderColumnsFn)),
      map((columns) => columns.filter((c) => !!c.key)),
      shareReplay(1)
    );
    this.visibleColumns$ = this.columns$.pipe(
      map((columns) => columns.filter((c) => !c.hide)),
      shareReplay(1)
    );
  }

  public static reorderColumnsFn(a: TableCell, b: TableCell): number {
    return (a.columnOrder ?? 10000) - (b.columnOrder ?? 10000);
  }

  public updateColumns(columns: TableCell<T>[] | null): void {
    this._columns$.next(columns);
  }

  public updateTabId(tabId: TabId | null): void {
    this._tabId$.next(tabId);
  }

  public updateDisableEditing(value: boolean): void {
    this._disableEditing$.next(value);
  }

  public updateTabs(tabs: Lab900TableTab<TabId, T>[] | null): void {
    this._tabs$.next(tabs);
  }

  public updateSorting(sort: Lab900Sort[] | null): void {
    this._sort$.next(sort);
  }

  public updateColumnSorting(
    column: TableCell<T>,
    multiSort: boolean,
    callback?: (sort: Lab900Sort[] | null) => void
  ): void {
    const sortKey = column.sortKey ?? column.key;
    this.sort$
      .pipe(
        take(1),
        map((sort) => sort ?? [])
      )
      .subscribe((sort) => {
        if (multiSort) {
          const currentIndex = sort.findIndex((s) => s.id === sortKey);
          if (currentIndex >= 0) {
            const { direction } = sort[currentIndex];
            if (direction === 'desc') {
              sort.splice(currentIndex, 1);
            } else {
              sort[currentIndex] = { ...sort[currentIndex], direction: 'desc' };
            }
          } else {
            sort.push({ id: sortKey, direction: 'asc' });
          }
        } else {
          const inCurrent = sort.find((s) => s.id === sortKey);
          sort = [
            {
              id: sortKey,
              direction: inCurrent?.direction === 'asc' ? 'desc' : 'asc',
            },
          ];
        }
        this.updateSorting(sort);
        callback?.(sort);
      });
  }
}
