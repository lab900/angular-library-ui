import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { CellRendererAbstract } from '../../directives/cell-renderer.abstract';
import { CellWithAnchorRendererOptions } from './cell-with-anchor-renderer.options';
import { combineLatest, Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'lab900-cell-with-anchor',
  standalone: true,
  imports: [NgIf, AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `<div
    class="lab900-cell-value lab900-cell-value--with-anchor"
    *ngIf="href$ | async as href"
  >
    <a [target]="(rendererOptions$ | async).target ?? '_self'" [href]="href">
      {{ cellValue$ | async }}
    </a>
  </div>`,
})
export class CellWithAnchorRendererComponent<
  T = any
> extends CellRendererAbstract<CellWithAnchorRendererOptions<T>, T> {
  public readonly href$: Observable<string>;

  public constructor() {
    super();
    this.href$ = combineLatest([this.rendererOptions$, this.cellValue$]).pipe(
      map(([options, value]) => options.url(value)),
      shareReplay(1)
    );
  }
}
