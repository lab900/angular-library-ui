import { Directive, NgZone } from '@angular/core';
import { MatSelect } from '@angular/material/select';

@Directive({
  selector: 'mat-select[lab900SelectAutoOpen]',
  standalone: true,
})
export class SelectAutoOpenDirective {
  private count = 0;
  public constructor(select: MatSelect, ngZone: NgZone) {
    ngZone.runOutsideAngular(() => {
      const nativeEl = select._elementRef.nativeElement;
      nativeEl.addEventListener('focus', () => {
        if (this.count === 0) {
          select.open();
          this.count++;
        }
      });
    });
  }
}
