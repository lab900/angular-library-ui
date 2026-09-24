import { computed, inject, Injectable, NgZone, OnDestroy, signal } from '@angular/core';
import { TableCell } from '../models/table-cell.model';
import { Lab900TableTab } from '../models/table-tabs.model';
import { Lab900Sort } from '../models/table-sort.model';

@Injectable()
export class Lab900TableService<T extends object = object, TabId = string> implements OnDestroy {
  private readonly ngZone = inject(NgZone);

  /**
   * One ResizeObserver for all cells of the table, instead of one per cell
   */
  private resizeObserver?: ResizeObserver;
  private readonly resizeCallbacks = new Map<Element, (entry: ResizeObserverEntry) => void>();

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

  public ngOnDestroy(): void {
    this.resizeObserver?.disconnect();
    this.resizeCallbacks.clear();
  }

  /**
   * Observe the size of an element. The callback runs outside the Angular zone.
   */
  public observeResize(element: Element, callback: (entry: ResizeObserverEntry) => void): void {
    if (typeof ResizeObserver === 'undefined') {
      return;
    }
    if (!this.resizeObserver) {
      this.resizeObserver = this.ngZone.runOutsideAngular(
        () =>
          new ResizeObserver(entries => {
            for (const entry of entries) {
              this.resizeCallbacks.get(entry.target)?.(entry);
            }
          })
      );
    }
    this.resizeCallbacks.set(element, callback);
    this.resizeObserver.observe(element);
  }

  public unobserveResize(element: Element): void {
    if (this.resizeCallbacks.delete(element)) {
      this.resizeObserver?.unobserve(element);
    }
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
    this.sort.update((currentSort = []) =>
      multiSort ? this.toggleMultiSort(currentSort, sortKey) : this.toggleSingleSort(currentSort, sortKey)
    );
    callback?.(this.sort());
  }

  private toggleMultiSort(sort: Lab900Sort[], sortKey: string): Lab900Sort[] {
    const currentIndex = sort.findIndex(s => s.id === sortKey);
    if (currentIndex < 0) {
      return [...sort, { id: sortKey, direction: 'asc' }];
    }
    if (sort[currentIndex].direction === 'desc') {
      return sort.filter((_, i) => i !== currentIndex);
    }
    return sort.map((s, i) => (i === currentIndex ? { ...s, direction: 'desc' as const } : s));
  }

  private toggleSingleSort(sort: Lab900Sort[], sortKey: string): Lab900Sort[] {
    const current = sort.find(s => s.id === sortKey);
    if (!current) {
      return [{ id: sortKey, direction: 'asc' }];
    }
    if (current.direction === 'asc') {
      return [{ id: sortKey, direction: 'desc' }];
    }
    return [];
  }

  public startInlineEditing(cellKey: string): void {
    this.inlineEditingCellKey.set(cellKey);
  }

  public closeInlineEditing(): void {
    this.inlineEditingCellKey.set(undefined);
  }
}
