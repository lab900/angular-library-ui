import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { CellEditorAbstract } from '../cell-editor.abstract';
import { A11yModule } from '@angular/cdk/a11y';
import { AsyncPipe } from '@angular/common';
import { CellInputEditorOptions } from './cell-input-editor.options';

@Component({
  selector: 'lab900-cell-edit-input-renderer',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [A11yModule, AsyncPipe],
  template: `
    <input
      #input
      class="lab900-cell-input"
      [type]="(editOptions$ | async)?.type || 'text'"
      cdkTrapFocus
      cdkTrapFocusAutoCapture
      (blur)="close(input.value)"
      (keydown.enter)="close(input.value)"
      [value]="cellValue$ | async"
      [max]="(editOptions$ | async)?.maxLength"
      [placeholder]="(editOptions$ | async)?.placeholder"
    />
  `,
})
export class CellInputEditorComponent extends CellEditorAbstract<CellInputEditorOptions> {}
