import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TESTING_PROVIDERS } from '../../../testing/testing.providers';
import { Lab900ButtonComponent } from './button.component';

describe('Lab900ButtonComponent', () => {
  let fixture: ComponentFixture<Lab900ButtonComponent>;

  const button = (): HTMLButtonElement => fixture.nativeElement.querySelector('button');

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Lab900ButtonComponent],
      providers: [...TESTING_PROVIDERS],
    });
    fixture = TestBed.createComponent(Lab900ButtonComponent);
  });

  it('should name an icon button with the aria label and hide the icon', () => {
    fixture.componentRef.setInput('type', 'icon');
    fixture.componentRef.setInput('label', 'delete');
    fixture.componentRef.setInput('ariaLabel', 'Delete row');
    fixture.detectChanges();
    expect(button().getAttribute('aria-label')).toBe('Delete row');
    expect(button().querySelector('mat-icon')?.getAttribute('aria-hidden')).toBe('true');
  });

  it('should fall back to the icon name on an icon button without an aria label', () => {
    fixture.componentRef.setInput('type', 'mini-fab');
    fixture.componentRef.setInput('label', 'add');
    fixture.detectChanges();
    expect(button().getAttribute('aria-label')).toBe('add');
  });

  it('should leave the visible label as the name of a text button', () => {
    fixture.componentRef.setInput('type', 'raised');
    fixture.componentRef.setInput('label', 'Save');
    fixture.componentRef.setInput('prefixIcon', 'save');
    fixture.detectChanges();
    expect(button().hasAttribute('aria-label')).toBe(false);
    expect(button().querySelector('mat-icon')?.getAttribute('aria-hidden')).toBe('true');
  });
});
