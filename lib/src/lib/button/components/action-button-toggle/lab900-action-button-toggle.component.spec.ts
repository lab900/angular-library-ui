import { signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TESTING_PROVIDERS } from '../../../testing/testing.providers';
import { ActionButton } from '../../models/action-button.model';
import { Lab900ActionButtonToggleComponent } from './lab900-action-button-toggle.component';

describe('Lab900ActionButtonToggleComponent', () => {
  let fixture: ComponentFixture<Lab900ActionButtonToggleComponent<{ id: number }>>;
  const hideB = signal(true);

  const labels = (): string[] =>
    Array.from<HTMLElement>(fixture.nativeElement.querySelectorAll('mat-button-toggle')).map(el =>
      (el.textContent ?? '').trim()
    );

  beforeEach(() => {
    hideB.set(true);
    TestBed.configureTestingModule({
      imports: [Lab900ActionButtonToggleComponent],
      providers: [...TESTING_PROVIDERS],
    });
    fixture = TestBed.createComponent(Lab900ActionButtonToggleComponent<{ id: number }>);
    const action: ActionButton<{ id: number }> = {
      label: 'toggle',
      type: 'toggle',
      subActions: [{ label: 'a' }, { label: 'b', hide: hideB }, { label: 'c', hide: data => data.id === 1 }],
    };
    fixture.componentRef.setInput('action', action);
    fixture.componentRef.setInput('data', { id: 1 });
    fixture.detectChanges();
  });

  it('should hide the sub actions whose own hide is true', () => {
    expect(labels()).toEqual(['a']);
  });

  it('should show a sub action again once its hide flips', () => {
    hideB.set(false);
    fixture.detectChanges();
    expect(labels()).toEqual(['a', 'b']);
  });

  it('should pass the data to a hide function', () => {
    fixture.componentRef.setInput('data', { id: 2 });
    fixture.detectChanges();
    expect(labels()).toEqual(['a', 'c']);
  });
});
