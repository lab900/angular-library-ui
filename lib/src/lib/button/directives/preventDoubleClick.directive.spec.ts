import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PreventDoubleClickDirective } from './preventDoubleClick.directive';

@Component({
  imports: [PreventDoubleClickDirective],
  template: `
    <button lab900PreventDoubleClick [throttleTimeInMs]="500" (throttledClick)="clicks.push($event)">click</button>
  `,
})
class HostComponent {
  public readonly clicks: Event[] = [];
}

describe('PreventDoubleClickDirective', () => {
  let fixture: ComponentFixture<HostComponent>;
  let button: HTMLButtonElement;

  const click = (timeStamp: number): Event => {
    const event = new MouseEvent('click', { cancelable: true });
    Object.defineProperty(event, 'timeStamp', { value: timeStamp });
    button.dispatchEvent(event);
    return event;
  };

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
    button = fixture.nativeElement.querySelector('button');
  });

  it('should emit synchronously, inside the click event', () => {
    const event = click(1000);
    expect(fixture.componentInstance.clicks).toEqual([event]);
  });

  it('should drop a second click within the throttle time', () => {
    click(1000);
    const second = click(1300);
    expect(fixture.componentInstance.clicks.length).toBe(1);
    expect(second.defaultPrevented).toBe(true);
  });

  it('should emit again after the throttle time', () => {
    click(1000);
    click(1500);
    expect(fixture.componentInstance.clicks.length).toBe(2);
  });
});
