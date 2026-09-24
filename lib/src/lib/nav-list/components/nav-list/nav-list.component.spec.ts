import { signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { TESTING_PROVIDERS } from '../../../testing/testing.providers';
import { NavItemGroup } from '../../models/nav-item.model';
import { Lab900NavListComponent } from './nav-list.component';

describe('Lab900NavListComponent', () => {
  let component: Lab900NavListComponent;
  let fixture: ComponentFixture<Lab900NavListComponent>;
  const hidden = signal(true);

  const createGroups = (): NavItemGroup[] => [
    {
      label: 'group',
      items: [
        { label: 'a', route: 'a' },
        { label: 'b', route: 'b', hide: () => hidden() },
        { label: 'parent', children: [{ label: 'child', route: 'child' }] },
      ],
    },
  ];

  beforeEach(() => {
    hidden.set(true);
    TestBed.configureTestingModule({
      imports: [Lab900NavListComponent],
      providers: [...TESTING_PROVIDERS, provideRouter([])],
    });
    fixture = TestBed.createComponent(Lab900NavListComponent);
    component = fixture.componentInstance;
  });

  it('should not mutate the input', () => {
    const groups = createGroups();
    fixture.componentRef.setInput('navItemGroups', groups);
    component.filteredNavItemGroups();
    expect(groups[0].items.length).toBe(3);
    expect(groups[0].uniqueId).toBeUndefined();
    expect(groups[0].items[2].children?.[0].uniqueId).toBeUndefined();
  });

  it('should keep the ids of the same config objects across recomputes', () => {
    fixture.componentRef.setInput('navItemGroups', createGroups());
    const before = component.filteredNavItemGroups();
    hidden.set(false);
    const after = component.filteredNavItemGroups();
    expect(after).not.toBe(before);
    expect(after[0].uniqueId).toBe(before[0].uniqueId);
    expect(after[0].items[0].uniqueId).toBe(before[0].items[0].uniqueId);
    expect(after[0].items[2].children?.[0].uniqueId).toBe(before[0].items[1].children?.[0].uniqueId);
  });

  it('should show a hidden item again once hide flips', () => {
    fixture.componentRef.setInput('navItemGroups', createGroups());
    expect(component.filteredNavItemGroups()[0].items.map(i => i.label)).toEqual(['a', 'parent']);
    hidden.set(false);
    expect(component.filteredNavItemGroups()[0].items.map(i => i.label)).toEqual(['a', 'b', 'parent']);
    hidden.set(true);
    expect(component.filteredNavItemGroups()[0].items.map(i => i.label)).toEqual(['a', 'parent']);
  });

  it('should give different config objects different ids', () => {
    fixture.componentRef.setInput('navItemGroups', createGroups());
    const ids = component.filteredNavItemGroups()[0].items.map(i => i.uniqueId);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('should render', () => {
    fixture.componentRef.setInput('navItemGroups', createGroups());
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('lab900-nav-item').length).toBe(2);
  });
});
