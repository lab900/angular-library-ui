import { Directive } from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { BehaviorSubject } from 'rxjs';
import { filter, take } from 'rxjs/operators';

@Directive({
  selector: 'mat-select[lab900SelectAutoOpen]',
  standalone: true,
})
export class SelectAutoOpenDirective {
  private focussed = new BehaviorSubject(false);
  public constructor(select: MatSelect) {
    const nativeEl = select._elementRef.nativeElement;
    nativeEl.addEventListener('focus', () => {
      this.focussed.next(true);
    });
    this.focussed
      .asObservable()
      .pipe(
        filter((f) => !!f),
        take(1)
      )
      .subscribe(() => {
        select.open();
      });
  }
}
