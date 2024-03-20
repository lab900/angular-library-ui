import { Component, TrackByFunction } from '@angular/core';
import {
  ActionButton,
  CellDateEditorComponent,
  CellInputEditorComponent,
  CellInputEditorOptions,
  CellSelectEditorComponent,
  CellSelectEditorOptions,
  CellValueChangeEvent,
  Lab900Sort,
  Lab900TableComponent,
  Lab900TableEmptyDirective,
  Lab900TableHeaderContentDirective,
  Lab900TableTopContentDirective,
  TableCell,
} from '@lab900/ui';
import moment from 'moment/moment';

@Component({
  selector: 'lab900-table-example',
  standalone: true,
  imports: [
    Lab900TableComponent,
    Lab900TableTopContentDirective,
    Lab900TableHeaderContentDirective,
    Lab900TableEmptyDirective,
  ],
  template: ` <lab900-table
    [tableCells]="tableCells"
    [sort]="sort"
    (sortChange)="sortChange($event)"
    [data]="mockData"
    [tableHeaderActions]="tableHeaderActions"
    [toggleAndMoveColumns]="true"
    filterIcon="settings"
    [multiSort]="true"
    [rowClass]="getRowClass"
    (tableCellsFiltered)="filtered($event)"
    [maxColumnWidth]="'200px'"
    [preFooterTitle]="'Quantity Total'"
    (cellValueChanged)="cellValueChanged($event)"
    [trackByTableFn]="trackByTableFn"
  >
    <div *lab900TableTopContent>Custom top content</div>
    <div *lab900TableHeaderContent>Custom header</div>

    <div *lab900TableEmpty>
      <div class="no-results">
        <p>No results template (can be anything)</p>
      </div>
    </div>
  </lab900-table>`,
  styleUrls: ['table-example.component.scss'],
})
export class TableExampleComponent {
  public sort: Lab900Sort[] = [{ id: 'id', direction: 'asc' }];

  public tableHeaderActions: ActionButton[] = [
    {
      label: 'Kies een locatie',
      type: 'flat',
      // suffixIcon: 'keyboard_arrow_down',
    },
    {
      label: 'Button',
      type: 'stroked',
    },
    {
      label: 'keyboard_arrow_down',
      type: 'icon',
    },
    {
      label: 'Exporteer lijst',
      type: 'stroked',
      prefixIcon: 'keyboard_arrow_down',
      subActions: [
        {
          label: 'Word',
          type: 'stroked',
        },
        {
          label: 'PDF',
          type: 'stroked',
        },
      ],
    },
    {
      label: 'Exporteer lijst',
      type: 'toggle',
      prefixIcon: 'keyboard_arrow_down',
      subActions: [
        {
          label: 'Word',
          type: 'stroked',
          selected: () => false,
        },
        {
          label: 'PDF',
          type: 'stroked',
          selected: true,
        },
      ],
    },
  ];

  public tableActions: ActionButton[] = [
    {
      label: 'edit',
      type: 'icon',
      tooltip: { value: 'View this' },
      disabled: (d) => d?.id === 1,
    },
    {
      label: (data) => (data.id === 1 ? 'delete_forever' : 'delete'),
      containerClass: (data) => (data.id === 1 ? 'action-button--red' : ''),
      type: 'icon',
      action: () => confirm('Are you sure?'),
    },
  ];

  public mockData: any[] = [
    {
      name: 'John Cena',
      nameLong:
        'John Cena, the guy from wrestling and movies and stuff, and also just from the memes',
      id: 1,
      nested: {
        test: 'xxx',
      },
      email: 'john@cena.com',
      city: 'New York City',
      quantity: 123,
      warning: true,
    },
    {
      name: 'A name',
      id: 2,
      active: true,
      nested: {},
      email: 'b@name.com',
      quantity: 456,
      warning: false,
    },
    {
      name: '',
      nameLong: 'A name very long :)',
      id: 3,
      quantity: 789,
    },
  ];

  public selectedItems = [this.mockData[0]];

  public tableCells: TableCell[] = [
    {
      key: 'type',
      label: 'DOSSIER.TAB.TIMELOG.TYPE',
      cellClass: (data) => (data.required ? 'table-cell-required-field' : ''),
      width: '100px',
      cellEditor: CellSelectEditorComponent as any,
      cellEditorOptions: <CellSelectEditorOptions>{
        panelWidth: '200px',
        options: ['option A', 'option B', 'option C'],
      },
    },
    {
      key: 'birthday',
      label: 'Birthday',
      cellEditor: CellDateEditorComponent,
      width: '160px',
      cellFormatter: ({ birthday }) => {
        return birthday ? moment(birthday).format('DD/MM/YYYY') : '';
      },
      cellEditorOptions: <CellSelectEditorOptions>{
        valueChanged: ({ value, cell, row }: CellValueChangeEvent) => {
          row[cell.key] = value;
        },
        placeholder: 'Select a birthday',
      },
    },

    {
      key: 'nameLong',
      label: 'Long name',
      sortable: true,
      cellEditor: CellInputEditorComponent,
      cellEditorOptions: <CellInputEditorOptions>{
        placeholder: 'Enter a long name',
        valueChanged: ({ value, cell, row }: CellValueChangeEvent) => {
          row[cell.key] = value;
        },
      },
    },
  ];
  public trackByTableFn: TrackByFunction<any> = (index, item) => item.id;

  public sortChange(sort: Lab900Sort[]): void {
    sort.forEach((s) => {
      this.mockData.sort(
        (a: any, b: any) =>
          (a[s.id] < b[s.id] ? -1 : 1) * (s.direction === 'asc' ? 1 : -1)
      );
      this.mockData = [...this.mockData];
    });
  }

  public filtered(tableCells: TableCell[]): void {
    console.log({ tableCells });
  }

  public getRowClass(row: any): string {
    return row.active ? 'bg-green' : '';
  }

  public cellValueChanged(event: CellValueChangeEvent): void {
    event.row[event.cell.key] = event.value;
    setTimeout(() => {
      this.mockData = [...this.mockData.map((d) => ({ ...d }))];
    }, 200);
    console.log('CellValueChangeEvent', event);
  }
}
