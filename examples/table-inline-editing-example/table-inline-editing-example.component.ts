import { Component, signal } from '@angular/core';
import {
  CellInputEditorComponent,
  CellInputEditorOptions,
  CellSelectEditorComponent,
  CellSelectEditorOptions,
  CellValueChangeEvent,
  CellWithClearingRendererComponent,
  Lab900TableComponent,
  TableCell,
} from '@lab900/ui';

interface Team {
  id: number;
  name: string;
}

interface Employee {
  id: number;
  name: string;
  hoursPerWeek: number;
  team: Team | null;
  archived: boolean;
}

const teams: Team[] = [
  { id: 1, name: 'Platform' },
  { id: 2, name: 'Product' },
];

// disables the editor for archived rows, set per column in cellEditorOptions
const isArchived = (employee?: Employee): boolean => !!employee?.archived;

@Component({
  selector: 'lab900-table-inline-editing-example',
  imports: [Lab900TableComponent],
  template: `
    <p>Click a cell to edit it. Archived rows can't be edited.</p>
    <lab900-table
      [tableCells]="tableCells"
      [data]="employees()"
      [trackByTableFn]="trackById"
      (cellValueChanged)="updateEmployee($event)" />

    <p>Last change: {{ lastChange() ?? '-' }}</p>
  `,
})
export class TableInlineEditingExampleComponent {
  protected readonly lastChange = signal<string | undefined>(undefined);

  protected readonly employees = signal<Employee[]>([
    { id: 1, name: 'John Smith', hoursPerWeek: 38, team: teams[0], archived: false },
    { id: 2, name: 'Lucie Martin', hoursPerWeek: 32, team: teams[1], archived: false },
    { id: 3, name: 'Rob Peeters', hoursPerWeek: 38, team: null, archived: false },
    { id: 4, name: 'Sarah Jansen', hoursPerWeek: 20, team: teams[0], archived: true },
  ]);

  // the 4th type parameter is the editor options type; `any` allows a different editor per column,
  // and `satisfies` still checks the options of each editor
  protected readonly tableCells: TableCell<Employee, any, any, any>[] = [
    {
      key: 'name',
      label: 'Name',
      cellEditor: CellInputEditorComponent,
      cellEditorOptions: { placeholder: 'Enter a name', disabled: isArchived } satisfies CellInputEditorOptions,
    },
    {
      key: 'hoursPerWeek',
      label: 'Hours per week',
      cellEditor: CellInputEditorComponent,
      cellEditorOptions: { type: 'number', disabled: isArchived } satisfies CellInputEditorOptions,
    },
    {
      key: 'team',
      label: 'Team',
      width: '200px',
      cellFormatter: employee => employee.team?.name ?? '',
      // shows a clear button in the cell, which sets the value to null
      cellRenderer: CellWithClearingRendererComponent,
      cellEditor: CellSelectEditorComponent,
      cellEditorOptions: {
        options: teams,
        optionLabelFn: team => team.name,
        compareWithFn: (a, b) => a?.id === b?.id,
        placeholder: 'Select a team',
        disabled: isArchived,
      } satisfies CellSelectEditorOptions<Team, Employee>,
    },
    { key: 'archived', label: 'Archived', cellFormatter: employee => (employee.archived ? 'Yes' : 'No') },
  ];

  protected readonly trackById = (index: number, employee: Employee): number => employee.id;

  // the table does not change the data: save the new value here, or send it to your api
  protected updateEmployee({ row, cell, value }: CellValueChangeEvent<Employee>): void {
    const key = cell.key as keyof Employee;
    this.employees.update(employees =>
      employees.map(employee => (employee.id === row.id ? { ...employee, [key]: value } : employee))
    );
    this.lastChange.set(`${row.name}: ${cell.key} = ${JSON.stringify(value)}`);
  }
}
