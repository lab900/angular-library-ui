import { Subscription } from 'rxjs';
import { TableCell } from '../models/table-cell.model';
import {
  AfterViewInit,
  computed,
  Directive,
  effect,
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
  public readonly disabled = computed(() => this.columnConfig()?.cellEditorOptions?.disabled?.(this.data()) ?? false);
  public readonly renderOptions = computed<CellRenderOptions | undefined>(() => this.columnConfig().cellRenderOptions);
  public readonly handleValueChanged = input<((value: V, cell: TableCell<T>, row: T) => void) | undefined>(undefined);

  public readonly cellInnerElm = viewChild('.lab900-cell-value', {
    read: ElementRef,
  });

  public readonly cellValue = computed(() => this.getCellValue());
  public readonly hasCellValue = computed(() => {
    const value = this.cellValue();
    if (typeof value === 'string') {
      return value.trim().length > 0;
    }
    return value != null;
  });

  public readonly cellValueOrPlaceholder = computed(() => {
    return this.showPlaceholder() ? this.columnConfig().cellEditorOptions?.placeholder : this.cellValue();
  });

  private readonly textOverflowing = signal<boolean>(false);
  public readonly tooltip = computed<string>(() => {
    const config = this.columnConfig();
    const data = this.data();
    const cellValue = this.cellValue();
    const textOverflowing = this.textOverflowing();
    if (config.cellTooltip?.text && (!config.cellTooltip?.onlyOnOverflow || textOverflowing)) {
      return readPropValue(config.cellTooltip.text, data);
    } else if (textOverflowing) {
      return String(cellValue);
    }
    return '';
  });
  public readonly tooltipPosition = computed(
    () => this.columnConfig().cellTooltip?.tooltipOptions?.tooltipPosition ?? 'below'
  );

  public readonly showPlaceholder = computed(() => {
    const hasCellValue = this.hasCellValue();
    const config = this.columnConfig();
    const disableEditing = this.tableService.disableEditing() || this.disabled();

    return (
      !hasCellValue &&
      config.cellEditorOptions?.placeholder &&
      !disableEditing &&
      !config.cellEditorOptions?.disablePlaceholderOutsideEditor
    );
  });

  public constructor() {
    effect(() => {
      if (this.showPlaceholder()) {
        this.elm.nativeElement.querySelector('.lab900-cell-value')?.classList.add('value-is-placeholder');
      } else {
        this.elm.nativeElement.querySelector('.lab900-cell-value')?.classList.remove('value-is-placeholder');
      }
    });
  }

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
    return this.cellFormatter(config, data);
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
