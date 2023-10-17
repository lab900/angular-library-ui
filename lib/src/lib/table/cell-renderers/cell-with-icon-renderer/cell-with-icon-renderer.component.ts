import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { CellRendererAbstract } from '../../directives/cell-renderer.abstract';
import { MatIconModule } from '@angular/material/icon';
import { CellWithIconRendererOptions } from './cell-with-icon-renderer.options';
import { combineLatest, Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'lab900-cell-with-icon-renderer',
  standalone: true,
  imports: [NgIf, AsyncPipe, MatIconModule],
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
  T = any
> extends CellRendererAbstract<CellWithIconRendererOptions<T>, T> {
  public readonly icon$: Observable<string>;

  public constructor() {
    super();
    this.icon$ = combineLatest([this.rendererOptions$, this.cellValue$]).pipe(
      map(([options, value]) => options.icon(value)),
      shareReplay(1)
    );
  }
}
