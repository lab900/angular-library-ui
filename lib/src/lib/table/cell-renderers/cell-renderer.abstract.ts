import { Subscription } from 'rxjs';
import { TableCell } from '../models/table-cell.model';
import {
  AfterViewInit,
  computed,
  Directive,
  ElementRef,
  inject,
  input,
  model,
  NgZone,
  OnDestroy,
  signal,
  viewChild,
} from '@angular/core';
import { readPropValue } from '../../utils/utils';
import { Lab900TableService } from '../services/table.service';

@Directive()
export abstract class CellRendererAbstract<CellRenderOptions = any, T = any, V = any>
  implements AfterViewInit, OnDestroy
{
  protected readonly elm: ElementRef<HTMLElement> = inject(ElementRef);
  protected readonly tableService = inject(Lab900TableService);
  protected readonly ngZone = inject(NgZone);

  private observer?: ResizeObserver;
  private observerSub?: Subscription;

  public readonly columnConfig = input.required<TableCell<T, CellRenderOptions>>();
  public readonly data = model.required<T>();

  public readonly renderOptions = computed<CellRenderOptions | undefined>(() => this.columnConfig().cellRenderOptions);

  public readonly handleValueChanged = input<((value: V, cell: TableCell<T>, row: T) => void) | undefined>(undefined);

  public readonly cellInnerElm = viewChild('.lab900-cell-value', {
    read: ElementRef,
  });

  public readonly cellValue = computed(() => this.getCellValue());

  private readonly textOverflowing = signal<boolean>(false);
  public readonly tooltip = computed(() => {
    const config = this.columnConfig();
    const data = this.data();
    const cellValue = this.cellValue();
    const textOverflowing = this.textOverflowing();
    if (config.cellTooltip?.text && (!config.cellTooltip?.onlyOnOverflow || textOverflowing)) {
      return readPropValue(config.cellTooltip.text, data);
    } else if (textOverflowing) {
      return String(cellValue);
    }
    return undefined;
  });
  public readonly tooltipPosition = computed(
    () => this.columnConfig().cellTooltip?.tooltipOptions?.tooltipPosition ?? 'below'
  );

  public ngAfterViewInit(): void {
    this.observeCellContentOverflow();
  }

  public ngOnDestroy(): void {
    this.observerSub?.unsubscribe();
    this.observer?.unobserve(this.elm.nativeElement);
  }

  protected getCellValue(): V | string {
    const config = this.columnConfig();
    const data = this.data();
    const disableEditing = this.tableService.disableEditing();

    const value = this.cellFormatter(config, data);
    if (
      !value &&
      config.cellEditorOptions?.placeholder &&
      !disableEditing &&
      !config.cellEditorOptions?.disablePlaceholderOutsideEditor &&
      !config.cellEditorOptions?.disabled?.(data)
    ) {
      this.elm.nativeElement.querySelector('.lab900-cell-value')?.classList.add('value-is-placeholder');
      return config.cellEditorOptions?.placeholder;
    }
    this.elm.nativeElement.querySelector('.lab900-cell-value')?.classList.remove('value-is-placeholder');
    return value;
  }

  protected cellFormatter(cell: TableCell<T>, data: T): any {
    if (cell?.cellFormatter) {
      return cell.cellFormatter(data, cell);
    } else if (cell.key.includes('.')) {
      const keys = cell.key.split('.');
      let value: any = data;
      for (const key of keys) {
        value = value?.[key];
      }
      return value;
    }
    return data?.[cell.key as keyof T];
  }

  /**
   * Observe the cell content overflow and set the textOverflowing$ observable
   * @protected
   */
  protected observeCellContentOverflow(): void {
    this.ngZone.runOutsideAngular(() => {
      this.observer?.unobserve(this.elm.nativeElement);
      this.observer = new ResizeObserver(entries => {
        const innerScrollWidth = this.elm.nativeElement.querySelector('.lab900-cell-value')?.scrollWidth ?? 0;
        const maxWidth = (entries[0].target as any).offsetWidth;
        this.textOverflowing.set(innerScrollWidth > maxWidth);
      });
      this.observer.observe(this.elm.nativeElement);
    });
  }
}
