import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { CellRendererAbstract } from '../cell-renderer.abstract';
import { MatIconModule } from '@angular/material/icon';
import { CellWithIconRendererOptions } from './cell-with-icon-renderer.options';
import { combineLatest, Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'lab900-cell-with-icon-renderer',
  standalone: true,
  imports: [AsyncPipe, MatIconModule, MatTooltipModule, TranslateModule],
  templateUrl: './cell-with-icon-renderer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
      .lab900-cell-value--with-icon {
        display: flex;
        align-items: center;
      }
    `,
  ],
})
export class CellWithIconRendererComponent<
  T = any,
> extends CellRendererAbstract<CellWithIconRendererOptions<T>, T> {
  public readonly icon$: Observable<string> = combineLatest([
    this.rendererOptions$,
    this.data$,
  ]).pipe(
    map(([options, data]) => options?.icon(data) ?? ''),
    shareReplay({ bufferSize: 1, refCount: true }),
  );
}
