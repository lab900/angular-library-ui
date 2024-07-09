import {
  Directive,
  EventEmitter,
  HostListener,
  Input,
  Output,
  effect,
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
      throttle(() => timer(this.throttleTimeInMs)),
    ),
  );

  private isThrottled = false;

  /**
   * @default 500
   */
  @Input()
  public throttleTimeInMs = 500;

  @Output()
  public readonly throttledClickOutput = new EventEmitter<Event>();

  public constructor() {
    effect(() => {
      if (this.throttledClick() !== null) {
        this.throttledClickOutput.emit(this.throttledClick());
      }
    });
  }

  @HostListener('click', ['$event'])
  public onClick(event: Event): void {
    if (!this.isThrottled) {
      this.isThrottled = true;
      this.click.set(event);

      setTimeout(() => {
        this.isThrottled = false;
      }, this.throttleTimeInMs);
    } else {
      event.preventDefault();
      event.stopPropagation();
    }
  }
}
