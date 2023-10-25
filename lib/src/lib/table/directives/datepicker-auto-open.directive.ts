import { ChangeDetectorRef, Directive, ElementRef, Input } from '@angular/core';
import { MatDatepickerPanel } from '@angular/material/datepicker';

@Directive({
  selector: 'input[matDatepicker][lab900DatepickerAutoOpen]',
  standalone: true,
})
export class DatepickerAutoOpenDirective {
  @Input({ required: true })
  public matDatepicker!: MatDatepickerPanel<any, any>;

  public constructor(
    el: ElementRef<HTMLInputElement>,
    change: ChangeDetectorRef
  ) {
    el.nativeElement.addEventListener('focus', () => {
      this.matDatepicker.open();
      change.detectChanges();
    });
  }
}
