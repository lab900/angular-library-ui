import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { TESTING_PROVIDERS } from '../../../testing/testing.providers';
import { NavItem } from '../../models/nav-item.model';
import { NavItemComponent } from './nav-item.component';

describe('NavItemComponent', () => {
  let fixture: ComponentFixture<NavItemComponent>;

  const element = (): HTMLElement => fixture.nativeElement;

  const render = (item: NavItem): void => {
    fixture.componentRef.setInput('item', item);
    fixture.detectChanges();
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NavItemComponent],
      providers: [...TESTING_PROVIDERS, provideRouter([])],
    });
    fixture = TestBed.createComponent(NavItemComponent);
  });

  it('should keep a link in the tab order', () => {
    render({ label: 'a', route: 'a' });
    const link = element().querySelector('a.nav-item-btn')!;
    expect(link.hasAttribute('tabindex')).toBe(false);
    expect(link.getAttribute('href')).toBe('/a');
  });

  it('should toggle the children with a button that reports aria-expanded', () => {
    render({ label: 'parent', children: [{ label: 'child', route: 'child' }] });
    const toggle = element().querySelector<HTMLButtonElement>('button.nav-item-btn')!;
    expect(toggle.getAttribute('aria-expanded')).toBe('false');

    toggle.click();
    fixture.detectChanges();
    expect(toggle.getAttribute('aria-expanded')).toBe('true');
    expect(element().querySelectorAll('lab900-nav-item').length).toBe(1);
  });
});
