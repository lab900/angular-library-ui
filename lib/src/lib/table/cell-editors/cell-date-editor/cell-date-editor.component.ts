import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { CellEditorAbstract } from '../cell-editor.abstract';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { A11yModule } from '@angular/cdk/a11y';
import { TranslateModule } from '@ngx-translate/core';
import { CellEditorBaseOptions } from '../cell-editor.options';

@Component({
  selector: 'lab900-cell-date-editor',
  standalone: true,
  imports: [AsyncPipe, MatDatepickerModule, A11yModule, TranslateModule],
  templateUrl: './cell-date-editor.component.html',
})
export class CellDateEditorComponent extends CellEditorAbstract<CellEditorBaseOptions> {
  public datePickerClosed(dateInput: HTMLInputElement): void {
    setTimeout(() => {
      this.close(dateInput.value);
    });
  }
}
