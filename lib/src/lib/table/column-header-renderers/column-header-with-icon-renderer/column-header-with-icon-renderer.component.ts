import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ColumnHeaderRendererAbstract } from '../column-header-renderer-abstract.directive';
import { ColumnHeaderSortingComponent } from '../column-header-sorting/column-header-sorting.component';
import { ColumnHeaderWithIconRendererOptions } from './column-header-with-icon-renderer.options';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'lab900-default-column-header-renderer',
  imports: [ColumnHeaderSortingComponent, MatIconModule, TranslateModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    @if (renderOptions(); as options) {
      <div class="lab900-column-header lab900-column-header--with-icon">
        @if (options.icon) {
          <mat-icon>{{ options.icon }}</mat-icon>
        } @else if (options.svgIcon) {
          <mat-icon [svgIcon]="options.icon" />
        }
        {{ columnLabel() | translate }}
        @if (!disableSort) {
          <lab900-column-header-sorting [columnConfig]="columnConfig()" />
        }
      </div>
    }
  `,
  styles: [
    `
      .lab900-column-header {
        display: flex;
        align-items: center;
      }
    `,
  ],
})
export class ColumnHeaderWithIconRendererComponent extends ColumnHeaderRendererAbstract<ColumnHeaderWithIconRendererOptions> {}
