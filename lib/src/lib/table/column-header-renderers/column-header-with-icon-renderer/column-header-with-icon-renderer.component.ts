import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ColumnHeaderRendererAbstract } from '../column-header-renderer-abstract.directive';
import { ColumnHeaderSortingComponent } from '../column-header-sorting/column-header-sorting.component';
import { ColumnHeaderWithIconRendererOptions } from './column-header-with-icon-renderer.options';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'lab900-default-column-header-renderer',
  standalone: true,
  imports: [
    AsyncPipe,
    ColumnHeaderSortingComponent,
    MatIconModule,
    TranslateModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    @if (rendererOptions$ | async; as options) {
      <div class="lab900-column-header lab900-column-header--with-icon">
        @if (!options.svgIcon) {
          <mat-icon>{{ options.icon }}</mat-icon>
        }
        @if (options.svgIcon) {
          <mat-icon [svgIcon]="options.icon"></mat-icon>
        }
        {{ columnLabel$ | async | translate }}
        @if (!disableSort) {
          <lab900-column-header-sorting
            [columnConfig]="columnConfig$ | async"
          ></lab900-column-header-sorting>
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
