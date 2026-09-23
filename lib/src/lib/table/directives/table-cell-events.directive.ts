import { AfterViewInit, computed, DestroyRef, Directive, ElementRef, inject, input, NgZone } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Lab900TableService } from '../services/table.service';
import { TableCell } from '../models/table-cell.model';
import { fromEvent } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Directive({
  selector: '[lab900TableCellEvents]',
  standalone: true,
})
export class TableCellEventsDirective<T = any> implements AfterViewInit {
  private readonly matTable = inject(MatTable);
  private readonly tableService = inject(Lab900TableService);
  private readonly innerElm: ElementRef<HTMLElement> = inject(ElementRef);
  private cellElement!: HTMLTableCellElement;
  private readonly ngZone = inject(NgZone);
  protected readonly destroyRef = inject(DestroyRef);

  public readonly cellData = input.required<T>();
  public readonly cell = input.required<TableCell<T>>();
  public readonly rowIndex = input.required<number>();

  private readonly editable = computed(() => {
    return (
      !this.tableService.disableEditing() &&
      this.cell().cellEditor &&
      !this.cell().cellEditorOptions?.disabled?.(this.cellData())
    );
  });

  public ngAfterViewInit(): void {
    if (!this.matTable || !this.matTable.dataSource) {
      throw new Error('MatTable [dataSource] is required');
    }
    this.cellElement = this.innerElm.nativeElement.parentElement as HTMLTableCellElement;

    if (!this.cellElement || this.cellElement.tagName !== 'TD') {
      throw new Error('No parent td element found for TableCellEventsDirective');
    }

    /**
     * Listen to keydown, focus and click events on the cell
     * This will be run outside of Angular zone to prevent change detection
     * Wrap the event handlers in `ngZone.run` to trigger change detection
     */
    this.ngZone.runOutsideAngular(() => {
      fromEvent(this.cellElement, 'keydown')
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe(event => {
          this.onKeydown(event as KeyboardEvent);
        });

      fromEvent(this.cellElement, 'focus')
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe(() => {
          this.onFocus();
        });

      fromEvent(this.cellElement, 'click')
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe(event => {
          this.onClick(event as MouseEvent);
        });
    });
  }

  private getTableData(): T[] {
    return this.matTable.dataSource as T[];
  }

  /**
   * Since Angular Material v22 an overlay (for example the select panel) is rendered inline,
   * inside the element that opened it, instead of in the overlay container on the body.
   * Events from such an overlay bubble up to the td and must not start or restart the cell editor.
   * Therefore we look at the full ancestor chain and not only at the event target itself.
   * The overlay can already be removed from the DOM when the event gets to the td.
   * In that case the target is not a part of the cell anymore and we ignore the event too.
   */
  private isDisabledCellEvent(event: Event): boolean {
    const target = event.target as HTMLElement | null;
    if (!target) {
      return false;
    }
    return !!target.closest?.('.disable-td-event, .cdk-overlay-pane') || !this.cellElement.contains(target);
  }

  private onClick(event: MouseEvent): void {
    if (!event.shiftKey && this.isDisabledCellEvent(event)) {
      return;
    }
    const clickFn = this.cell().click;
    if (clickFn) {
      event.stopImmediatePropagation();
      event.preventDefault();
      this.ngZone.run(() => clickFn(this.cellData(), this.cell(), event));
    } else if (this.editable()) {
      event.stopImmediatePropagation();
      event.preventDefault();
      this.ngZone.run(() => this.editMode());
    }
  }

  private onFocus(): void {
    // only enter the zone when there is something to do, to avoid a change detection run on every focus
    if (this.editable()) {
      this.ngZone.run(() => this.editMode());
    }
  }

  private onKeydown(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowUp':
      case 'ArrowDown': {
        if (!event.shiftKey && this.isDisabledCellEvent(event)) {
          return;
        }
        event.preventDefault();
        event.stopImmediatePropagation();
        this.getNextEditableSiblingOnAnotherRow(event.key === 'ArrowDown' ? 'after' : 'before');
        break;
      }
      case 'Tab':
      case 'ArrowRight':
      case 'ArrowLeft': {
        event.preventDefault();
        event.stopImmediatePropagation();
        const position = event.key === 'ArrowLeft' || (event.key === 'Tab' && event.shiftKey) ? 'before' : 'after';
        this.getNextEditableSibling(position);
        break;
      }
      default:
        break;
    }
  }

  private editMode(): void {
    this.tableService.startInlineEditing(this.cell().key + '_' + this.rowIndex());
  }

  private getNextEditableSibling(position: 'before' | 'after'): void {
    // read the siblings on demand, so they match the current DOM after the rows changed
    const siblings = this.getAllSiblingCells();
    const cellIdx = siblings.indexOf(this.cellElement);
    const cells = position === 'before' ? siblings.slice(0, cellIdx).reverse() : siblings.slice(cellIdx + 1);
    const matching = cells.filter(cell => this.matchingCell(cell, false));
    if (matching?.[0]) {
      matching[0].focus();
    } else {
      return this.getNextEditableSiblingOnAnotherRow(position, false);
    }
  }

  private getNextEditableSiblingOnAnotherRow(position: 'before' | 'after', sameColumn = true): void {
    const allRows = this.getAllSiblingRows();
    const rowIdx = allRows.indexOf(this.cellElement.parentElement as HTMLTableRowElement);
    const rows = position === 'before' ? allRows.slice(0, rowIdx).reverse() : allRows.slice(rowIdx + 1);
    const matching = rows
      .map(row => {
        const childNodes = Array.from(row.childNodes) as HTMLTableCellElement[];
        return (!sameColumn && position === 'before' ? childNodes.reverse() : childNodes).find(cell =>
          this.matchingCell(cell, sameColumn)
        );
      })
      .filter(cell => !!cell);
    if (matching?.[0]) {
      matching[0].focus();
    }
  }

  private getAllSiblingCells(): HTMLTableCellElement[] {
    const elm: HTMLTableCellElement = this.cellElement;
    const cells = elm.parentElement?.children;
    return cells ? (Array.from(cells) as HTMLTableCellElement[]) : [];
  }

  private getAllSiblingRows(): HTMLTableRowElement[] {
    const elm: HTMLTableCellElement = this.cellElement;
    const rows = elm.parentElement?.parentElement?.children;
    return rows ? (Array.from(rows) as HTMLTableRowElement[]) : [];
  }

  private matchingCell(cell: HTMLTableCellElement, sameColumnKey: boolean): boolean {
    return (
      (!sameColumnKey || cell.classList?.contains('cdk-column-' + this.cell().key.replace('.', '-'))) &&
      cell.classList?.contains('editable')
    );
  }
}
