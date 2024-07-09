import {
  Directive,
  effect,
  HostListener,
  input,
  output,
  signal,
} from '@angular/core';
import { timer } from 'rxjs';
import { filter, throttle } from 'rxjs/operators';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';

@Directive({
  selector: '[lab900PreventDoubleClick]',
  standalone: true,
})
export class PreventDoubleClickDirective {
  private readonly click = signal<Event | null>(null);
  private readonly throttledClick = toSignal(
    toObservable(this.click).pipe(
      filter((click) => click != null),
      throttle(() => timer(this.throttleTimeInMs())),
    ),
  );

  private isThrottled = false;

  /**
   * @default 500
   */
  public readonly throttleTimeInMs = input(500);
  public readonly throttledClickOutput = output<Event>({
    alias: 'throttledClick',
  });

  public constructor() {
    effect(() => {
      const event = this.throttledClick();
      if (event) {
        this.throttledClickOutput.emit(event);
      }
    });
  }

  @HostListener('click', ['$event'])
  public onClick(event: Event): void {
    event.preventDefault();
    event.stopPropagation();

    if (!this.isThrottled) {
      this.isThrottled = true;
      this.click.set(event);

      setTimeout(() => {
        this.isThrottled = false;
      }, this.throttleTimeInMs());
    } else {
      event.preventDefault();
      event.stopPropagation();
    }
  }
}
