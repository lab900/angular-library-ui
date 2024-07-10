import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { CellRendererAbstract } from '../cell-renderer.abstract';
import { CellWithAnchorRendererOptions } from './cell-with-anchor-renderer.options';
import { combineLatest, Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'lab900-cell-with-anchor',
  standalone: true,
  imports: [AsyncPipe, MatTooltipModule, MatCheckboxModule, TranslateModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `@if (href$ | async; as href) {
    <div
      class="lab900-cell-value lab900-cell-value--with-anchor"
      [matTooltip]="(tooltip$ | async) ?? ''"
      [matTooltipPosition]="(tooltipPosition$ | async) ?? undefined"
      (click)="$event.stopImmediatePropagation()"
    >
      <a [target]="(rendererOptions$ | async)?.target ?? '_self'" [href]="href">
        {{ cellValue$ | async | translate }}
      </a>
    </div>
  }`,
})
export class CellWithAnchorRendererComponent<
  T = any,
> extends CellRendererAbstract<CellWithAnchorRendererOptions<T>, T> {
  public readonly href$: Observable<string> = combineLatest([
    this.rendererOptions$,
    this.data$,
  ]).pipe(
    map(([options, data]) => options?.url(data) ?? ''),
    shareReplay({ bufferSize: 1, refCount: true }),
  );
}
