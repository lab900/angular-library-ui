import { Directive, HostListener, input, output } from '@angular/core';

@Directive({
  selector: '[lab900PreventDoubleClick]',
  standalone: true,
})
export class PreventDoubleClickDirective {
  private lastClickTime: number | null = null;

  /**
   * @default 500
   */
  public readonly throttleTimeInMs = input(500);
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
