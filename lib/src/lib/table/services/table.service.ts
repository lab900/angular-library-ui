import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, ReplaySubject } from 'rxjs';
import { TableCell } from '../models/table-cell.model';
import { filter, map, shareReplay, withLatestFrom } from 'rxjs/operators';
import { Lab900TableTab } from '../models/table-tabs.model';

@Injectable()
export class Lab900TableService<T extends object = object, TabId = string> {
  private readonly _columns$ = new ReplaySubject<TableCell<T>[]>();
  public readonly columns$: Observable<TableCell<T>[]>;

  private readonly _tabs$ = new BehaviorSubject<Lab900TableTab<TabId, T>[] | null>(null);
  public readonly tabs$ = this._tabs$.asObservable().pipe(filter((tabs) => tabs != null));

  private readonly _tabId$ = new BehaviorSubject<TabId | null>(null);
  public readonly tabId$ = this._tabId$.asObservable().pipe(
    withLatestFrom(this.tabs$),
    map(([tabId, tabs]) => tabId ?? tabs?.[0]?.id),
    filter((tabId) => tabId != null),
  );

  public constructor() {
    this.columns$ = combineLatest([this._tabId$.asObservable(), this._tabs$.asObservable(), this._columns$.asObservable()]).pipe(
      map(([tabId, tabs, columns]) => {
        if (tabs?.length) {
          const activeTab = tabId ? tabs.find((tab) => tab.id === tabId) : tabs?.[0];
          if (activeTab?.tableCells) {
            return activeTab?.tableCells;
          }
        }
        return columns;
      }),
      filter((columns) => columns != null),
      map((columns) => columns.sort(Lab900TableService.reorderColumnsFn)),
      map((columns) => columns.filter((c) => !!c.key && !c.hide)),
      shareReplay(1),
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

  public updateTabs(tabs: Lab900TableTab<TabId, T>[] | null): void {
    this._tabs$.next(tabs);
  }
}
