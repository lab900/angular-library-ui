import { Component, computed, signal } from '@angular/core';
import { Lab900Sort, Lab900TableComponent, TableCell } from '@lab900/ui';

interface Employee {
  id: number;
  name: string;
  role: string;
  salary: number;
}

@Component({
  selector: 'lab900-table-sorting-example',
  imports: [Lab900TableComponent],
  template: `
    <lab900-table
      [tableCells]="tableCells"
      [data]="sortedEmployees()"
      [trackByTableFn]="trackById"
      [sort]="sort()"
      [multiSort]="true"
      (sortChange)="sort.set($event)" />

    <p>Current sort: {{ sortDescription() }}</p>
  `,
})
export class TableSortingExampleComponent {
  // the table only shows and emits the sort; the rows are sorted here, or by your api
  protected readonly sort = signal<Lab900Sort[]>([{ id: 'role', direction: 'asc' }]);

  protected readonly employees: Employee[] = [
    { id: 1, name: 'John Smith', role: 'Developer', salary: 4200 },
    { id: 2, name: 'Lucie Martin', role: 'Designer', salary: 3900 },
    { id: 3, name: 'Rob Peeters', role: 'Developer', salary: 3600 },
    { id: 4, name: 'Sarah Jansen', role: 'Team lead', salary: 5100 },
    { id: 5, name: 'Max De Smet', role: 'Designer', salary: 4100 },
  ];

  protected readonly sortedEmployees = computed(() => {
    const sort = this.sort().filter(s => s.direction);
    return [...this.employees].sort((a, b) => {
      // with multiSort, the first sort decides and the next ones break ties
      for (const { id, direction } of sort) {
        const key = id as keyof Employee;
        const result = a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0;
        if (result !== 0) {
          return direction === 'asc' ? result : -result;
        }
      }
      return 0;
    });
  });

  protected readonly sortDescription = computed(
    () =>
      this.sort()
        .filter(s => s.direction)
        .map(s => `${s.id} ${s.direction}`)
        .join(', ') || 'none'
  );

  protected readonly tableCells: TableCell<Employee>[] = [
    { key: 'name', label: 'Name', sortable: true },
    { key: 'role', label: 'Role', sortable: true },
    { key: 'salary', label: 'Salary', sortable: true, cellFormatter: employee => `€ ${employee.salary}` },
    // a column without `sortable` has no sort button
    { key: 'id', label: 'ID', width: '60px' },
  ];

  protected readonly trackById = (index: number, employee: Employee): number => employee.id;
}
