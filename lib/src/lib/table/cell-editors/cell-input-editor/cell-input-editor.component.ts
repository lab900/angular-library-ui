import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { CellEditorAbstract } from '../cell-editor.abstract';
import { AsyncPipe } from '@angular/common';
import { CellInputEditorOptions } from './cell-input-editor.options';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'lab900-cell-edit-input-renderer',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [AsyncPipe, TranslateModule],
  template: `
    <input
      #input
      class="lab900-cell-input"
      [type]="(editOptions$ | async)?.type || 'text'"
      (blur)="closeAndSave(input.value)"
      (focus)="input.select()"
      (keydown.enter)="closeAndSave(input.value)"
      [value]="cellValue$ | async"
      [max]="(editOptions$ | async)?.maxLength"
      [placeholder]="(placeholder$ | async) ?? '' | translate"
    />
  `,
})
export class CellInputEditorComponent extends CellEditorAbstract<CellInputEditorOptions> {}
