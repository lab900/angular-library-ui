import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { CellEditorAbstract } from '../cell-editor.abstract';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { TranslateModule } from '@ngx-translate/core';
import { CellEditorBaseOptions } from '../cell-editor.options';
import { MatInputModule } from '@angular/material/input';
import { DatepickerAutoOpenDirective } from '../../directives/datepicker-auto-open.directive';

@Component({
  selector: 'lab900-cell-date-editor',
  standalone: true,
  imports: [
    AsyncPipe,
    MatDatepickerModule,
    TranslateModule,
    MatInputModule,
    DatepickerAutoOpenDirective,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `<input
      class="lab900-cell-input lab900-cell-input--with-toggle"
      [matDatepicker]="dp1"
      lab900DatepickerAutoOpen
      type="text"
      [value]="cellValue$ | async"
      [placeholder]="(placeholder$ | async) ?? '' | translate"
      (dateChange)="close($event.value)"
    />
    <mat-datepicker #dp1 (closed)="close()" />`,
})
export class CellDateEditorComponent extends CellEditorAbstract<CellEditorBaseOptions> {}
