import { Component } from '@angular/core';
import { Lab900TableComponent, TableCell } from '@lab900/ui';

interface Employee {
  id: number;
  name: string;
  role: string;
  team: { name: string };
  startDate: Date;
}

@Component({
  selector: 'lab900-table-example',
  imports: [Lab900TableComponent],
  template: `<lab900-table [tableCells]="tableCells" [data]="employees" [trackByTableFn]="trackById" />`,
})
export class TableExampleComponent {
  protected readonly employees: Employee[] = [
    { id: 1, name: 'John Smith', role: 'Developer', team: { name: 'Platform' }, startDate: new Date(2021, 2, 1) },
    { id: 2, name: 'Lucie Martin', role: 'Designer', team: { name: 'Product' }, startDate: new Date(2019, 8, 15) },
    { id: 3, name: 'Rob Peeters', role: 'Developer', team: { name: 'Product' }, startDate: new Date(2023, 0, 9) },
    { id: 4, name: 'Sarah Jansen', role: 'Team lead', team: { name: 'Platform' }, startDate: new Date(2017, 5, 1) },
  ];

  // one TableCell per column; `key` is the property to show and also the column id
  protected readonly tableCells: TableCell<Employee>[] = [
    { key: 'id', label: 'ID', width: '60px' },
    { key: 'name', label: 'Name' },
    { key: 'role', label: 'Role' },
    // a dotted key reads a nested property
    { key: 'team.name', label: 'Team' },
    // cellFormatter turns the row into the text of the cell
    { key: 'startDate', label: 'Start date', cellFormatter: employee => employee.startDate.toLocaleDateString() },
  ];

  // required: tells the table which row is which when the data changes
  protected readonly trackById = (index: number, employee: Employee): number => employee.id;
}
