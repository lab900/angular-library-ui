import { TableCell } from '../models/table-cell.model';
import { computed, Directive, input } from '@angular/core';
import { readPropValue } from '../../utils/utils';

@Directive()
export abstract class ColumnHeaderRendererAbstract<ColumnHeaderRenderOptions = any, T = any> {
  public columnConfig = input.required<TableCell<T>>();
  public disableSort = input<boolean>(false);

  public readonly renderOptions = computed<ColumnHeaderRenderOptions | undefined>(
    () => this.columnConfig().headerRenderOptions
  );

  public readonly columnLabel = computed(() =>
    readPropValue<TableCell<T>>(this.columnConfig().label, this.columnConfig())
  );
}
