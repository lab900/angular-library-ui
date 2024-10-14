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
  private readonly elm: ElementRef<HTMLTableCellElement> = inject(ElementRef);
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

  private siblingCells?: HTMLTableCellElement[];
  private siblingRows?: HTMLTableRowElement[];
  private rowIdx?: number;
  private cellIdx?: number;

  public ngAfterViewInit(): void {
    if (!this.matTable || !this.matTable.dataSource) {
      throw new Error('MatTable [dataSource] is required');
    }

    this.siblingCells = this.getAllSiblingCells();
    this.cellIdx = this.siblingCells.indexOf(this.elm.nativeElement);
    this.siblingRows = this.getAllSiblingRows();
    this.rowIdx = this.siblingRows.indexOf(this.elm.nativeElement.parentElement as HTMLTableRowElement);

    /**
     * Listen to keydown, focus and click events on the cell
     * This will be run outside of Angular zone to prevent change detection
     * Wrap the event handlers in `ngZone.run` to trigger change detection
     */
    this.ngZone.runOutsideAngular(() => {
      fromEvent(this.elm.nativeElement, 'keydown')
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe(event => {
          this.onKeydown(event as KeyboardEvent);
        });

      fromEvent(this.elm.nativeElement, 'focus')
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe(() => {
          this.onFocus();
        });

      fromEvent(this.elm.nativeElement, 'click')
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe(event => {
          this.onClick(event as MouseEvent);
        });
    });
  }

  private getTableData(): T[] {
    return this.matTable.dataSource as T[];
  }

  private onClick(event: MouseEvent): void {
    if (!event.shiftKey && (event.target as HTMLElement)?.classList?.contains('disable-td-event')) {
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
    this.ngZone.run(() => {
      if (this.editable()) {
        this.editMode();
      }
    });
  }

  private onKeydown(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowUp':
      case 'ArrowDown': {
        if (!event.shiftKey && (event.target as HTMLElement)?.classList?.contains('disable-td-event')) {
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
    const siblings = this.siblingCells ? [...this.siblingCells] : [];
    const cells =
      position === 'before' ? siblings.slice(0, this.cellIdx).reverse() : siblings.slice((this.cellIdx ?? 0) + 1);
    const matching = cells.filter(cell => this.matchingCell(cell, false));
    if (matching?.[0]) {
      matching[0].focus();
    } else {
      return this.getNextEditableSiblingOnAnotherRow(position, false);
    }
  }

  private getNextEditableSiblingOnAnotherRow(position: 'before' | 'after', sameColumn = true): void {
    const allRows = this.siblingRows ? [...this.siblingRows] : [];
    const rows =
      position === 'before' ? allRows.slice(0, this.rowIdx).reverse() : allRows.slice((this.rowIdx ?? 0) + 1);
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
    const elm: HTMLTableCellElement = this.elm.nativeElement;
    const cells = elm.parentElement?.children;
    return cells ? ([...Array.from(cells)] as HTMLTableCellElement[]) : [];
  }

  private getAllSiblingRows(): HTMLTableRowElement[] {
    const elm: HTMLTableCellElement = this.elm.nativeElement;
    const rows = elm.parentElement?.parentElement?.children;
    return rows ? ([...Array.from(rows)] as HTMLTableRowElement[]) : [];
  }

  private matchingCell(cell: HTMLTableCellElement, sameColumnKey: boolean): boolean {
    return (
      (!sameColumnKey || cell.classList?.contains('cdk-column-' + this.cell().key.replace('.', '-'))) &&
      cell.classList?.contains('editable')
    );
  }
}
