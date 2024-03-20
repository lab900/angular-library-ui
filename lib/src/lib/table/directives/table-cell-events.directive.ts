import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  inject,
  Input,
} from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Lab900TableService } from '../services/table.service';
import { TableCell } from '../models/table-cell.model';

@Directive({
  selector: '[lab900TableCellEvents]',
  standalone: true,
})
export class TableCellEventsDirective<T = any> implements AfterViewInit {
  private readonly matTable = inject(MatTable);
  private readonly tableService = inject(Lab900TableService);
  private readonly elm: ElementRef<HTMLTableCellElement> = inject(ElementRef);

  private data?: T[];

  @Input({ required: true })
  public cellData: T;

  @Input({ required: true })
  public cell: TableCell<T>;

  @Input({ required: true })
  public rowIndex: number;

  public ngAfterViewInit(): void {
    if (!this.matTable || !this.matTable.dataSource) {
      throw new Error('MatTable [dataSource] is required');
    }
    this.data = this.matTable.dataSource as T[];
  }

  @HostListener('click', ['$event'])
  public onCLick(event: MouseEvent): void {
    if (this.cell.click) {
      event.stopImmediatePropagation();
      event.preventDefault();
      this.cell.click(this.cellData, this.cell, event);
    } else if (this.editable()) {
      event.stopImmediatePropagation();
      event.preventDefault();
      this.editMode();
    }
  }

  @HostListener('focus', ['$event'])
  public onFocus(): void {
    if (this.editable()) {
      this.editMode();
    }
  }

  @HostListener('keydown', ['$event'])
  public onKeydown(event: KeyboardEvent): void {
    switch (event.key) {
      case 'Tab': {
        event.preventDefault();
        event.stopImmediatePropagation();
        const arrowKey = event.shiftKey ? 'ArrowLeft' : 'ArrowRight';
        const sibling = this.getNextEditableSibling(arrowKey);
        if (!sibling) {
          // move to the next row
          this.getNextEditableSiblingOnAnotherRow(
            arrowKey === 'ArrowRight' ? 'ArrowDown' : 'ArrowUp',
            true
          );
        }
        break;
      }
      case 'ArrowUp':
      case 'ArrowDown': {
        if (
          (event.target as HTMLElement)?.classList?.contains('disable-td-event')
        ) {
          return;
        }
        this.getNextEditableSiblingOnAnotherRow(event.key, false);
        break;
      }
      case 'ArrowRight':
      case 'ArrowLeft': {
        const sibling = this.getNextEditableSibling(event.key);
        if (!sibling) {
          // move to the next row
          this.getNextEditableSiblingOnAnotherRow(
            event.key === 'ArrowRight' ? 'ArrowDown' : 'ArrowUp',
            true
          );
        }
        break;
      }
      default:
        break;
    }
  }

  private editable(): boolean {
    return (
      !this.tableService._disableEditing$.value &&
      this.cell.cellEditor &&
      !this.cell.cellEditorOptions?.disabled?.(this.data)
    );
  }

  private editMode(): void {
    this.tableService.startInlineEditing(this.cell.key + '_' + this.rowIndex);
  }

  /**
   * While navigating with up or down arrow key, get the next editable cell on another row
   * @private
   */
  private getNextEditableSiblingOnAnotherRow(
    direction: 'ArrowUp' | 'ArrowDown',
    firstMatchingSibling?: boolean
  ): HTMLTableCellElement {
    const siblingKey =
      direction === 'ArrowDown' ? 'nextSibling' : 'previousSibling';
    let nextRow = this.elm.nativeElement.parentElement[
      siblingKey
    ] as HTMLTableRowElement;
    while (nextRow) {
      const childNodes = Array.from(
        nextRow.childNodes
      ) as HTMLTableCellElement[];
      const nextSibling = (
        firstMatchingSibling && siblingKey === 'previousSibling'
          ? childNodes.reverse()
          : childNodes
      ).find(
        (node) =>
          (firstMatchingSibling ||
            node.classList?.contains('cdk-column-' + this.cell.key)) &&
          node.classList?.contains('editable')
      );
      if (nextSibling) {
        return this.onNextEditableSibling(nextSibling);
      }
      nextRow = nextRow[siblingKey] as HTMLTableRowElement;
    }
  }

  /**
   * While navigating with left or right arrow key, get the next editable cell on the same row
   * @private
   */
  private getNextEditableSibling(
    direction: 'ArrowLeft' | 'ArrowRight'
  ): HTMLTableCellElement {
    const siblingKey =
      direction === 'ArrowRight' ? 'nextSibling' : 'previousSibling';
    let nextSibling = this.elm.nativeElement[
      siblingKey
    ] as HTMLTableCellElement;
    while (nextSibling) {
      if (
        nextSibling.nodeType == Node.ELEMENT_NODE &&
        nextSibling.classList.contains('editable')
      ) {
        if (nextSibling) {
          return this.onNextEditableSibling(nextSibling);
        }
      }
      nextSibling = nextSibling[siblingKey] as HTMLTableCellElement;
    }
  }

  private onNextEditableSibling(
    nextSibling: HTMLTableCellElement
  ): HTMLTableCellElement {
    if (nextSibling) {
      nextSibling.focus();
      return nextSibling;
    }
  }
}
