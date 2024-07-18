import {
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  HostBinding,
  inject,
  input,
  OnDestroy,
  OnInit,
  output,
  viewChild,
  ViewEncapsulation,
} from '@angular/core';
import { CellValueChangeEvent, TableCell } from '../../models/table-cell.model';
import {
  MatColumnDef,
  MatTable,
  MatTableModule,
} from '@angular/material/table';
import { readPropValue } from '../../../utils/utils';
import { Lab900TableService } from '../../services/table.service';
import { NgClass, NgComponentOutlet } from '@angular/common';
import { DefaultCellRendererComponent } from '../../cell-renderers/default-cell-renderer/default-cell-renderer.component';
import { DefaultColumnHeaderRendererComponent } from '../../column-header-renderers/default-column-header-renderer/default-column-header-renderer.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { TableCellInnerComponent } from '../table-cell-inner/table-cell-inner.component';
import { TableCellEventsDirective } from '../../directives/table-cell-events.directive';
import { CdkColumnDef } from '@angular/cdk/table';

@Component({
  selector: 'lab900-table-cell[cell]',
  templateUrl: './table-cell.component.html',
  standalone: true,
  imports: [
    DefaultCellRendererComponent,
    MatTableModule,
    NgClass,
    DefaultColumnHeaderRendererComponent,
    MatTooltipModule,
    TranslateModule,
    NgComponentOutlet,
    TableCellInnerComponent,
    TableCellEventsDirective,
    CdkColumnDef,
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

  public readonly tdElement =
    viewChild<ElementRef<HTMLTableCellElement>>('.lab900-td');

  public readonly cell = input.required<TableCell<T>>();
  public readonly data = input.required<T[]>();
  public readonly disableSort = input<boolean>(false);
  public readonly maxColumnWidthFromTable = input<string | undefined>(
    undefined,
  );

  public readonly columnMaxWidth = computed(() => {
    return this.cell()?.cellMaxWidth ?? this.maxColumnWidthFromTable();
  });

  public readonly columnWidth = computed(() => {
    if (this.cell()?.width === '*') {
      return '100%';
    }
    return this.cell()?.width;
  });

  public readonly sticky = computed(
    () => !this.cell()?.hide && !!this.cell()?.sticky,
  );

  public readonly cellFooter = computed(() => {
    const footer = this.cell()?.footer;
    return typeof footer === 'function'
      ? footer(this.data(), this.cell())
      : footer;
  });

  public readonly cellHeaderClass = computed(() => {
    return readPropValue<TableCell<T>>(
      this.cell().cellHeaderClass,
      this.cell(),
    );
  });

  public readonly headerClick = output<TableCell<T>>();
  public readonly valueChanged = output<CellValueChangeEvent<T>>();

  public readonly sort = this.tableService.sort;
  public readonly defaultHeaderRenderer = DefaultColumnHeaderRendererComponent;

  public ngOnInit(): void {
    if (this.table) {
      this.table.addColumnDef(this.columnDef());
    }
  }

  public ngOnDestroy(): void {
    if (this.table) {
      this.table.removeColumnDef(this.columnDef());
    }
  }

  public handleHeaderClick(cell: TableCell<T>): void {
    if (!this.disableSort) {
      this.headerClick.emit(cell);
    }
  }

  public closeEditor(): void {
    this.tableService.closeInlineEditing();
  }
}
