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
      [matTooltip]="tooltip() | translate"
      [matTooltipPosition]="tooltipPosition()"
      (click)="$event.stopImmediatePropagation()">
      @if (textBeforeUrl() !== '') {
        {{ textBeforeUrl() | translate }}
      }
      @if (anchorHref()) {
        <a [target]="renderOptions()?.target ?? '_self'" [href]="anchorHref()">
          {{ cellValue() | translate }}
        </a>
      } @else {
        {{ cellValue() | translate }}
      }
    </div>
  }`,
})
export class CellWithAnchorRendererComponent<T = any> extends CellRendererAbstract<
  CellWithAnchorRendererOptions<T>,
  T
> {
  public readonly anchorHref = computed(() => this.renderOptions()?.url(this.data()));
  public readonly textBeforeUrl = computed(() => this.renderOptions()?.textBeforeUrl?.(this.data()) ?? '');
}
