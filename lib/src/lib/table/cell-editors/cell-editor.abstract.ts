import { TableCell } from '../models/table-cell.model';
import { AfterViewInit, computed, Directive, ElementRef, inject, input, Input, model } from '@angular/core';
import { Lab900TableCellComponent } from '../components/table-cell/table-cell.component';
import { isDifferent } from '../../utils/different.utils';
import { CellEditorBaseOptions } from './cell-editor.options';
import { cloneDeep } from 'lodash';

@Directive()
export abstract class CellEditorAbstract<TCellEditorOptions extends CellEditorBaseOptions<T>, T = any, V = any>
  implements AfterViewInit
{
  private readonly tableCell: Lab900TableCellComponent = inject(Lab900TableCellComponent);
  protected readonly elm: ElementRef<HTMLElement> = inject(ElementRef);

  public readonly columnConfig = input.required<TableCell<T, any, any, TCellEditorOptions>>();
  public readonly data = model.required<T>();

  @Input({ required: true })
  public handleValueChanged!: (value: V, cell: TableCell<T>, row: T) => void;

  public readonly editOptions = computed<TCellEditorOptions | undefined>(() => this.columnConfig().cellEditorOptions);

  public readonly placeholder = computed<string>(() => this.editOptions()?.placeholder ?? '');

  public readonly cellValue = computed(() => this.getUnformattedValue() ?? null);

  public ngAfterViewInit(): void {
    this.focusAfterViewInit();
  }

  protected focusAfterViewInit(): void {
    const defaultInput = this.elm.nativeElement?.querySelector('.lab900-cell-input');
    if (defaultInput) {
      (defaultInput as HTMLInputElement).focus();
    }
  }

  protected getUnformattedValue(): V {
    const cell = this.columnConfig();
    // we can't use structuredClone here because it doesn't work with functions
    // for example Moment objects will throw an error
    const data = cloneDeep(this.data());
    if (cell.key.includes('.')) {
      const keys = cell.key.split('.');
      let value: any = data;
      for (const key of keys) {
        value = value?.[key];
      }
      return value as V;
    }
    return data?.[cell.key as keyof T] as V;
  }

  public close(): void {
    this.resetTableCell();
  }

  public isDifferent(updatedValue: V, oldValue: V | null): boolean {
    return isDifferent(updatedValue, oldValue);
  }

  public closeAndSave(updatedValue: V, close = true): void {
    if (this.isDifferent(updatedValue, this.cellValue())) {
      if (!this.handleValueChanged) {
        throw Error(`No handleValueChanged method provided for column ${this.columnConfig().key}`);
      }
      this.handleValueChanged(updatedValue, this.columnConfig(), this.data());
    }
    if (close) {
      this.resetTableCell();
    }
  }

  private resetTableCell(): void {
    this.tableCell.closeEditor();
  }
}
