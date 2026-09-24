import { Component, computed, signal } from '@angular/core';
import { Lab900TableComponent, Lab900TableTab, TableCell } from '@lab900/ui';

type TabId = 'employees' | 'contractors';

interface Person {
  id: number;
  name: string;
  team?: string;
  company?: string;
  hourlyRate?: number;
}

const peopleByTab: Record<TabId, Person[]> = {
  employees: [
    { id: 1, name: 'John Smith', team: 'Platform' },
    { id: 2, name: 'Lucie Martin', team: 'Product' },
  ],
  contractors: [
    { id: 3, name: 'Rob Peeters', company: 'Peeters BV', hourlyRate: 85 },
    { id: 4, name: 'Sarah Jansen', company: 'Jansen Consulting', hourlyRate: 95 },
  ],
};

@Component({
  selector: 'lab900-table-tabs-example',
  imports: [Lab900TableComponent],
  template: `
    <lab900-table
      [tableCells]="tableCells"
      [tableTabs]="tabs"
      [(activeTabId)]="activeTab"
      [data]="people()"
      [trackByTableFn]="trackById" />
  `,
})
export class TableTabsExampleComponent {
  protected readonly activeTab = signal<TabId>('employees');

  // the table only switches the tab; load the data of the active tab yourself
  protected readonly people = computed(() => peopleByTab[this.activeTab()]);

  // the columns of the table, for tabs without their own tableCells
  protected readonly tableCells: TableCell<Person>[] = [
    { key: 'name', label: 'Name' },
    { key: 'team', label: 'Team' },
  ];

  protected readonly tabs: Lab900TableTab<TabId, Person>[] = [
    { id: 'employees', label: 'Employees' },
    {
      id: 'contractors',
      label: 'Contractors',
      // a tab can have its own columns
      tableCells: [
        { key: 'name', label: 'Name' },
        { key: 'company', label: 'Company' },
        { key: 'hourlyRate', label: 'Hourly rate', cellFormatter: person => `€ ${person.hourlyRate}` },
      ],
    },
  ];

  protected readonly trackById = (index: number, person: Person): number => person.id;
}
