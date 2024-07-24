import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  ElementRef,
  inject,
  input,
  output,
  ViewEncapsulation,
} from '@angular/core';
import { CellValueChangeEvent, TableCell } from '../../models/table-cell.model';
import { DefaultCellRendererComponent } from '../../cell-renderers/default-cell-renderer/default-cell-renderer.component';
import { Lab900TableService } from '../../services/table.service';
import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'lab900-table-cell-inner',
  standalone: true,
  templateUrl: './table-cell-inner.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [NgComponentOutlet],
})
export class TableCellInnerComponent<T = any> {
  private readonly tableService = inject(Lab900TableService);
  private readonly elRef = inject(ElementRef);

  public readonly defaultCellRenderer = DefaultCellRendererComponent;

  public readonly cell = input.required<TableCell<T>>();
  public readonly rowValue = input.required<T>();
  public readonly rowIndex = input.required<number>();
  public readonly valueChanged = output<CellValueChangeEvent<T>>();

  private previousClasses: string[] = [];

  public readonly canEdit = computed(() => {
    return (
      this.cell().cellEditor &&
      !this.tableService.disableEditing() &&
      !this.cell().cellEditorOptions?.disabled?.(this.rowValue())
    );
  });

  public readonly isEditing = computed(() => {
    const cell = this.cell();
    const dataUniqueId = cell.key + '_' + this.rowIndex();

    return (
      this.tableService.inlineEditingCellkey() === dataUniqueId &&
      cell.cellEditor &&
      !cell.cellEditorOptions?.disabled?.(this.rowValue())
    );
  });

  public readonly cellClasses = computed(() => {
    return (
      this.getCellClasses(this.cell(), this.rowValue())?.trim().split(' ') ?? []
    ).filter((s) => !!s?.length);
  });

  public constructor() {
    effect(() => {
      const parentElm = this.elRef?.nativeElement?.parentElement;
      if (parentElm) {
        if (this.isEditing()) {
          parentElm.classList.add('edit-mode');
        } else {
          parentElm.classList.remove('edit-mode');
        }
        if (this.canEdit()) {
          parentElm.classList.add('editable');
        } else {
          parentElm.classList.remove('editable');
        }
        parentElm.tabIndex = this.canEdit() ? 0 : -1;
        if (this.cellClasses()) {
          parentElm.classList.remove(...this.previousClasses);
          parentElm.classList.add(...this.cellClasses());
          this.previousClasses = this.cellClasses();
        }
      }
    });
  }

  public readonly handleValueChanged = (
    value: any,
    cell: TableCell<T>,
    row: T,
  ): void => {
    if (cell?.cellEditorOptions?.valueChanged) {
      cell.cellEditorOptions.valueChanged({ value, cell, row });
    }
    this.valueChanged.emit({ value, cell, row });
  };

  private getCellClasses(cell: TableCell<T>, data: T): string {
    return typeof cell.cellClass === 'function'
      ? cell.cellClass(data, cell)
      : cell.cellClass;
  }
}
