import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ColumnHeaderRendererAbstract } from '../column-header-renderer-abstract.directive';
import { ColumnHeaderSortingComponent } from '../column-header-sorting/column-header-sorting.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'lab900-default-column-header-renderer',
  standalone: true,
  imports: [ColumnHeaderSortingComponent, TranslateModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `<div class="lab900-column-header">
    {{ columnLabel() | translate }}
    @if (!disableSort()) {
      <lab900-column-header-sorting [columnConfig]="columnConfig()" />
    }
  </div>`,
  styles: [
    `
      .lab900-column-header {
        display: flex;
        align-items: center;
      }
    `,
  ],
})
export class DefaultColumnHeaderRendererComponent extends ColumnHeaderRendererAbstract {}
