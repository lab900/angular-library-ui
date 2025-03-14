import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { CellEditorAbstract } from '../cell-editor.abstract';
import { CellInputEditorOptions } from './cell-input-editor.options';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'lab900-cell-edit-input-renderer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [TranslatePipe],
  template: `
    <input
      #input
      class="lab900-cell-input"
      [type]="editOptions()?.type || 'text'"
      (blur)="closeAndSave(input.value)"
      (focus)="input.select()"
      (keydown.enter)="closeAndSave(input.value)"
      [value]="cellValue()"
      [max]="editOptions()?.maxLength"
      [placeholder]="placeholder() | translate" />
  `,
})
export class CellInputEditorComponent extends CellEditorAbstract<CellInputEditorOptions> {
  public isDifferent(updatedValue: any, oldValue: any): boolean {
    return super.isDifferent(updatedValue ?? '', oldValue ?? '');
  }
}
