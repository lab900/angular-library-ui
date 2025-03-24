import { computed, Injectable, signal } from '@angular/core';
import { TableCell } from '../models/table-cell.model';
import { Lab900TableTab } from '../models/table-tabs.model';
import { Lab900Sort } from '../models/table-sort.model';

@Injectable()
export class Lab900TableService<T extends object = object, TabId = string> {
  public readonly inlineEditingCellKey = signal<string | undefined>(undefined);

  public readonly disableEditing = signal<boolean>(false);

  private readonly _tabs = signal<Lab900TableTab<TabId, T>[]>([]);
  public readonly tabs = this._tabs.asReadonly();

  private readonly _tabId = signal<TabId | null>(null);
  public readonly tabId = computed(() => this._tabId() ?? this._tabs()?.[0]?.id);

  public readonly sort = signal<Lab900Sort[] | undefined>(undefined);

  public static reorderColumnsFn(a: TableCell, b: TableCell): number {
    return (a.columnOrder ?? 10000) - (b.columnOrder ?? 10000);
  }

  public updateTabId(tabId: TabId | null): void {
    this._tabId.set(tabId);
  }

  public updateDisableEditing(value: boolean): void {
    this.disableEditing.set(value);
  }

  public updateTabs(tabs: Lab900TableTab<TabId, T>[] | null): void {
    this._tabs.set([...(tabs ?? [])]);
  }

  public updateSorting(sort: Lab900Sort[] | undefined): void {
    this.sort.set(sort ? [...sort] : undefined);
  }

  public updateColumnSorting(
    column: TableCell<T>,
    multiSort: boolean,
    callback?: (sort: Lab900Sort[] | undefined) => void
  ): void {
    const sortKey = column.sortKey ?? column.key;
    this.sort.update((sort = []) => {
      if (multiSort) {
        const currentIndex = sort.findIndex(s => s.id === sortKey);
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
        return [...sort];
      } else {
        const inCurrent = sort.find(s => s.id === sortKey);
        return [
          {
            id: sortKey,
            direction: inCurrent?.direction === 'asc' ? 'desc' : 'asc',
          },
        ];
      }
    });
    callback?.(this.sort());
  }

  public startInlineEditing(cellKey: string): void {
    this.inlineEditingCellKey.set(cellKey);
  }

  public closeInlineEditing(): void {
    this.inlineEditingCellKey.set(undefined);
  }
}
