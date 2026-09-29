import { Component, signal } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { Lab900TableComponent, SelectableRows, TableCell } from '@lab900/ui';

interface Employee {
  id: number;
  name: string;
  external: boolean;
}

@Component({
  selector: 'lab900-table-selection-example',
  imports: [Lab900TableComponent],
  template: `
    <lab900-table
      [tableCells]="tableCells"
      [data]="employees"
      [trackByTableFn]="trackById"
      [selectableRows]="selectableRows"
      (selectionChanged)="onSelectionChanged($event)" />

    <p>Selected: {{ selectedNames() || 'none' }}</p>
  `,
})
export class TableSelectionExampleComponent {
  protected readonly employees: Employee[] = [
    { id: 1, name: 'John Smith', external: false },
    { id: 2, name: 'Lucie Martin', external: false },
    { id: 3, name: 'Rob Peeters', external: true },
    { id: 4, name: 'Sarah Jansen', external: false },
  ];

  // the table emits selectionChanged only when the user changes the selection, not for the initial selection
  protected readonly selectedNames = signal(this.employees[0].name);

  protected readonly selectableRows: SelectableRows<Employee> = {
    enabled: true,
    position: 'left',
    showSelectAllCheckbox: true,
    // rows selected at the start
    selectedItems: [this.employees[0]],
    // compare by id, so the selection survives new row objects, for example after a reload
    compareFn: (a, b) => a.id === b.id,
    // no checkbox for external employees
    hideSelectableRow: employee => employee.external,
  };

  protected readonly tableCells: TableCell<Employee>[] = [
    { key: 'name', label: 'Name' },
    { key: 'external', label: 'External', cellFormatter: employee => (employee.external ? 'Yes' : 'No') },
  ];

  protected readonly trackById = (index: number, employee: Employee): number => employee.id;

  protected onSelectionChanged(selection: SelectionModel<Employee>): void {
    this.selectedNames.set(selection.selected.map(employee => employee.name).join(', '));
  }
}
