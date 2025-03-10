import { ChangeDetectionStrategy, Component, computed, ViewEncapsulation } from '@angular/core';
import { CellRendererAbstract } from '../cell-renderer.abstract';
import { MatIcon } from '@angular/material/icon';
import { CellWithIconRendererOptions } from './cell-with-icon-renderer.options';
import { MatTooltip } from '@angular/material/tooltip';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'lab900-cell-with-icon-renderer',
  imports: [MatIcon, MatTooltip, TranslatePipe],
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
export class CellWithIconRendererComponent<T = any> extends CellRendererAbstract<CellWithIconRendererOptions<T>, T> {
  public readonly icon = computed(() => this.renderOptions()?.icon(this.data()));
}
