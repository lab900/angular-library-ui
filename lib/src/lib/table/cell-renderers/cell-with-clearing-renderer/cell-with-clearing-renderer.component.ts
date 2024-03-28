import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { CellWithClearingRendererOptions } from './cell-with-clearing-renderer.options';
import { combineLatest } from 'rxjs';
import { map, take, withLatestFrom } from 'rxjs/operators';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { CellRendererAbstract } from '../cell-renderer.abstract';

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
> extends CellRendererAbstract<CellWithClearingRendererOptions, T> {
  public readonly tooltipWithoutHtml$ = this.tooltip$.pipe(
    map((tooltip) => {
      return tooltip?.replace(/<[^>]*>/g, '');
    })
  );
  public readonly disabled$ = combineLatest([
    this.columnConfig$,
    this.data$,
  ]).pipe(
    map(([config, data]) => {
      const value = this.cellFormatter(config, data);
      const disabled = config?.cellEditorOptions?.disabled?.(data) ?? false;
      return !value || disabled;
    })
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
