import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { CellRendererAbstract } from '../cell-renderer.abstract';
import { MatIconModule } from '@angular/material/icon';
import { CellWithClearingRendererOptions } from './cell-with-clearing-renderer.options';
import { combineLatest, Observable, startWith } from 'rxjs';
import { map, shareReplay, take, withLatestFrom } from 'rxjs/operators';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'lab900-cell-with-clearing-renderer',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    MatIconModule,
    MatTooltipModule,
    TranslateModule,
    MatButtonModule,
  ],
  templateUrl: './cell-with-clearing-renderer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
      .lab900-cell-value--with-icon {
        display: flex;
        align-items: center;
      }

      .lab900-cell-value--with-icon button {
        padding: 0 !important;
        width: 36px !important;
        height: 36px !important;
      }
    `,
  ],
})
export class CellWithClearingRendererComponent<
  T = any
> extends CellRendererAbstract<CellWithClearingRendererOptions<T>, T> {
  public readonly disabled$ = combineLatest([
    this.columnConfig$,
    this.data$,
  ]).pipe(
    map(
      ([config, data]) => config?.cellEditorOptions?.disabled?.(data) ?? false
    )
  );

  public readonly icon$: Observable<string | undefined> = combineLatest([
    this.disabled$,
    this.columnConfig$,
    this.cellValueWithoutPlaceholder$,
    this.data$,
  ]).pipe(
    map(([disabled, config, value, data]) => {
      if (!disabled && !!value) {
        return config?.cellRenderOptions?.icon(data) ?? 'close';
      }
      return undefined;
    }),
    shareReplay(1)
  );

  public readonly svgIcon$: Observable<boolean> = this.rendererOptions$.pipe(
    startWith({ svgIcon: false }),
    map((options) => options?.svgIcon ?? false),
    shareReplay(1)
  );

  public handleClear(event: MouseEvent): void {
    event.preventDefault();
    event.stopImmediatePropagation();
    this.columnConfig$
      .pipe(take(1), withLatestFrom(this.data$))
      .subscribe(([config, data]) => {
        if (!this.handleValueChanged) {
          throw Error(
            `No handleValueChanged method provided for column ${config.key}`
          );
        }
        this.data = { ...data, [config.key]: null };
        this.handleValueChanged?.(null, config, data);
      });
  }
}
