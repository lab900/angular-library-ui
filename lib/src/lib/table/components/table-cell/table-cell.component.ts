import {
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  HostBinding,
  inject,
  input,
  isSignal,
  OnDestroy,
  OnInit,
  output,
  viewChild,
  ViewEncapsulation,
} from '@angular/core';
import { CellValueChangeEvent, TableCell } from '../../models/table-cell.model';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatFooterCell,
  MatFooterCellDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatTable,
} from '@angular/material/table';
import { readPropValue } from '../../../utils/utils';
import { Lab900TableService } from '../../services/table.service';
import { NgClass, NgComponentOutlet } from '@angular/common';
import { DefaultColumnHeaderRendererComponent } from '../../column-header-renderers/default-column-header-renderer/default-column-header-renderer.component';
import { TranslatePipe } from '@ngx-translate/core';
import { TableCellInnerComponent } from '../table-cell-inner/table-cell-inner.component';
import { TableCellEventsDirective } from '../../directives/table-cell-events.directive';
import { MatTooltip } from '@angular/material/tooltip';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'lab900-table-cell[cell]',
  templateUrl: './table-cell.component.html',
  imports: [
    NgClass,
    TranslatePipe,
    NgComponentOutlet,
    TableCellInnerComponent,
    TableCellEventsDirective,
    MatTooltip,
    MatHeaderCell,
    MatColumnDef,
    MatCell,
    MatCellDef,
    MatFooterCell,
    MatHeaderCellDef,
    MatFooterCellDef,
    MatProgressSpinner,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class Lab900TableCellComponent<T = any> implements OnDestroy, OnInit {
  private readonly tableService = inject(Lab900TableService);
  public readonly table = inject(MatTable);

  @HostBinding()
  public readonly className = 'lab900-table-cell';

  public readonly columnDef = viewChild(MatColumnDef);

  public readonly tdElement = viewChild<ElementRef<HTMLTableCellElement>>('.lab900-td');

  public readonly cell = input.required<TableCell<T>>();
  public readonly data = input.required<T[]>();
  public readonly disableSort = input<boolean>(false);
  public readonly maxColumnWidthFromTable = input<string | undefined>(undefined);
  public readonly showFooterCell = input<boolean>(false);

  public readonly columnMaxWidth = computed(() => {
    return this.cell().cellMaxWidth ?? this.maxColumnWidthFromTable();
  });

  public readonly columnHeaderTemplate = computed(() => {
    return this.cell().headerRenderer ?? this.defaultHeaderRenderer;
  });

  public readonly columnWidth = computed(() => {
    if (this.cell().width === '*') {
      return '100%';
    }
    return this.cell().width;
  });

  public readonly sticky = computed(() => !this.cell().hide && this.cell().sticky);

  public readonly cellFooter = computed(() => {
    let footer = this.cell().footer;
    let footerValue;
    if (!isSignal(footer) && typeof footer === 'function') {
      footer = footer(this.data(), this.cell());
    }
    if (isSignal(footer)) {
      footerValue = footer();
    } else if (typeof footer === 'string') {
      footerValue = footer;
    }
    return footerValue;
  });

  public readonly cellFooterLoading = computed(() => {
    return this.cell().footerLoading?.() ?? false;
  });

  public readonly cellHeaderClass = computed(() => {
    const cellHeaderClass = this.cell().cellHeaderClass;
    if (cellHeaderClass) {
      return readPropValue<TableCell<T>>(cellHeaderClass, this.cell());
    }
    return '';
  });

  public readonly headerClick = output<TableCell<T>>();
  public readonly valueChanged = output<CellValueChangeEvent<T>>();

  public readonly sort = this.tableService.sort;
  public readonly defaultHeaderRenderer = DefaultColumnHeaderRendererComponent;

  public ngOnInit(): void {
    const columnDef = this.columnDef();
    if (this.table && columnDef) {
      this.table.addColumnDef(columnDef);
    }
  }

  public ngOnDestroy(): void {
    const columnDef = this.columnDef();
    if (this.table && columnDef) {
      this.table.removeColumnDef(columnDef);
    }
  }

  public handleHeaderClick(cell: TableCell<T>): void {
    if (!this.disableSort()) {
      this.headerClick.emit(cell);
    }
  }

  public closeEditor(): void {
    this.tableService.closeInlineEditing();
  }
}
