import { Directive, HostListener, input, output } from '@angular/core';

/**
 * Ignores the clicks that follow a click within `throttleTimeInMs`. Listen to `throttledClick` instead of `click`.
 */
@Directive({
  selector: '[lab900PreventDoubleClick]',
  standalone: true,
})
export class PreventDoubleClickDirective {
  private lastClickTime: number | null = null;

  /**
   * Clicks within this time after the previous click are ignored
   * @default 500
   */
  public readonly throttleTimeInMs = input(500);
  /** Emits on a click, at most once per `throttleTimeInMs` */
  public readonly throttledClickOutput = output<Event>({
    alias: 'throttledClick',
  });

  @HostListener('click', ['$event'])
  public onClick(event: Event): void {
    const now = event.timeStamp || performance.now();
    if (this.lastClickTime != null && now - this.lastClickTime < this.throttleTimeInMs()) {
      event.preventDefault();
      return;
    }
    this.lastClickTime = now;
    this.throttledClickOutput.emit(event);
  }
}
