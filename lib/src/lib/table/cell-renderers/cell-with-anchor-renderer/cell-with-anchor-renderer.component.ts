import { ChangeDetectionStrategy, Component, computed, ViewEncapsulation } from '@angular/core';
import { CellRendererAbstract } from '../cell-renderer.abstract';
import { CellWithAnchorRendererOptions } from './cell-with-anchor-renderer.options';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'lab900-cell-with-anchor',
  standalone: true,
  imports: [MatTooltipModule, MatCheckboxModule, TranslateModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `@if (anchorHref(); as href) {
    <div
      class="lab900-cell-value lab900-cell-value--with-anchor"
      [matTooltip]="tooltip()"
      [matTooltipPosition]="tooltipPosition()"
      (click)="$event.stopImmediatePropagation()">
      <a [target]="renderOptions()?.target ?? '_self'" [href]="href">
        {{ cellValue() | translate }}
      </a>
    </div>
  }`,
})
export class CellWithAnchorRendererComponent<T = any> extends CellRendererAbstract<
  CellWithAnchorRendererOptions<T>,
  T
> {
  public readonly anchorHref = computed(() => this.renderOptions()?.url(this.data()));
}
