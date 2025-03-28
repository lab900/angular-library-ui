import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerInputEvent,
  MatDatepickerToggle,
} from '@angular/material/datepicker';
import { CellEditorAbstract } from '../cell-editor.abstract';
import { CellEditorBaseOptions } from '../cell-editor.options';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslatePipe, MatDatepickerInput, MatDatepickerToggle, MatDatepicker],
  selector: 'lab900-cell-date-editor',
  template: `
    <div style="min-width: 110px">
      <input
        #input
        [matDatepicker]="datePicker"
        class="lab900-cell-input lab900-cell-input--with-toggle"
        type="text"
        (focus)="input.select()"
        [value]="cellValue()"
        (dateInput)="changeValue($event, 'input')"
        (dateChange)="changeValue($event, 'change')"
        [placeholder]="placeholder() | translate"
        (keydown.enter)="closeOrSave()"
        (keydown.tab)="closeOrSave()" />
      <mat-datepicker-toggle [tabIndex]="-1" (click)="$event.stopImmediatePropagation()" [for]="datePicker" />
      <mat-datepicker
        #datePicker
        (opened)="openPicker()"
        (closed)="opened$.next(false); input.focus()"
        [restoreFocus]="false" />
    </div>
  `,
})
export class CellDateEditorComponent extends CellEditorAbstract<CellEditorBaseOptions> {
  public readonly updatedDate$ = new BehaviorSubject<any>(undefined);
  public readonly opened$ = new BehaviorSubject<boolean>(false);

  public changeValue(event: MatDatepickerInputEvent<any>, type: 'input' | 'change'): void {
    if (type === 'change' && this.opened$.value) {
      return;
    }

    if (event.value == null || !isNaN(Date.parse(event.value))) {
      this.updatedDate$.next(event.value);
      if (type === 'change') {
        super.closeAndSave(this.updatedDate$.value, false);
      }
    }
  }

  public openPicker(): void {
    this.opened$.next(true);
  }

  /**
   * Because the blur event would trigger when we open the datepicker we have to track it this way to close the editor
   */
  @HostListener('document:click', ['$event'])
  public clickOutside(event: any): void {
    if (!this.elm.nativeElement.contains(event.target) && !this.opened$.value) {
      this.closeOrSave();
    }
  }

  public closeOrSave(): void {
    if (this.updatedDate$.value === undefined) {
      this.close();
    } else {
      this.closeAndSave(this.updatedDate$.value, false);
    }
  }
}
