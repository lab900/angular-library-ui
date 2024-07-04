import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { throttle } from 'rxjs/operators';

@Directive({
  selector: '[lab900PreventDoubleClick]',
  standalone: true,
})
export class PreventDoubleClickDirective {
  private clicks = new Subject<Event>();
  private isThrottled = false;

  @Output() throttledClick = new EventEmitter<Event>();

  public constructor() {
    this.clicks.pipe(throttle(() => timer(1000))).subscribe((event) => {
      this.throttledClick.emit(event);
      this.isThrottled = false;
    });
  }

  @HostListener('click', ['$event'])
  public onClick(event: Event): void {
    event.preventDefault();
    event.stopPropagation();

    if (!this.isThrottled) {
      this.isThrottled = true;
      this.clicks.next(event);

      setTimeout(() => {
        this.isThrottled = false;
      }, 1000); // Should match throttle time
    }
  }
}
