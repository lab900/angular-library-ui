import { Component, effect, signal, TrackByFunction, untracked } from '@angular/core';
import {
  ActionButton,
  CellInputEditorComponent,
  CellInputEditorOptions,
  CellSelectEditorComponent,
  CellSelectEditorOptions,
  CellValueChangeEvent,
  CellWithClearingRendererComponent,
  Lab900Sort,
  Lab900TableComponent,
  Lab900TableEmptyDirective,
  Lab900TableHeaderContentDirective,
  Lab900TableTopContentDirective,
  TableCell,
} from '@lab900/ui';
import { tableExampleData } from './table-example.data';

@Component({
  selector: 'lab900-table-example',
  imports: [
    Lab900TableComponent,
    Lab900TableTopContentDirective,
    Lab900TableHeaderContentDirective,
    Lab900TableEmptyDirective,
  ],
  template: ` <lab900-table
    [tableCells]="tableCells()"
    [sort]="sort"
    (sortChange)="sortChange($event)"
    [data]="mockData()"
    [tableHeaderActions]="tableHeaderActions"
    [toggleAndMoveColumns]="true"
    filterIcon="settings"
    [multiSort]="true"
    [rowClass]="getRowClass"
    (tableCellsChange)="filtered($event)"
    [maxColumnWidth]="'200px'"
    [preFooterTitle]="'Quantity Total'"
    (cellValueChanged)="cellValueChanged($event)"
    [trackByTableFn]="trackByTableFn"
    [onRowClick]="onRowClick">
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
          action: () => console.log('Word'),
          tooltip: {
            value: 'Exporteer naar een Word document',
          },
        },
        {
          label: 'PDF',
          type: 'stroked',
          action: () => console.log('PDF'),
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

  public mockData = signal<any[]>(tableExampleData);

  public tableCells = signal<TableCell[]>([]);

  public constructor() {
    effect(() => {
      const data = untracked(this.mockData);
      setTimeout(() => {
        this.mockData.update(() => {
          data[0].totals = 1000;
          return [...data];
        });
      }, 1000);
    });

    setTimeout(() => {
      this.tableCells.set([
        {
          key: 'expeditionLogStatus',
          label: 'Status',
          footer: data => (data?.[0] as any)?.totals,
        },
        {
          key: 'nominatedQuantityBaseUnit.amount',
          label: 'nominatedQuantityBaseUnit',
          sortable: true,
          cellEditor: CellInputEditorComponent,
          cellEditorOptions: {
            placeholder: '0,00',
            valueChanged: ({ value, cell, row }: CellValueChangeEvent) => {
              row[cell.key] = value;
            },
          } as CellInputEditorOptions,
          cellFormatter: data => {
            const measurement = data?.nominatedQuantityBaseUnit;
            if (typeof measurement?.amount !== 'number') {
              return '';
            }
            return measurement.amount.toString();
          },
        },
        {
          key: 'clientReferences.reference1',
          label: 'clientReferences.reference1',
          sortable: true,
          cellEditor: CellInputEditorComponent,
          cellEditorOptions: {
            placeholder: 'reference1',
            valueChanged: ({ value, cell, row }: CellValueChangeEvent) => {
              row[cell.key] = value;
            },
          } as CellInputEditorOptions,
        },
        {
          key: 'clientReferences.reference2',
          label: 'clientReferences.reference2',
          sortable: true,
          cellEditor: CellInputEditorComponent,
          cellEditorOptions: {
            placeholder: 'reference2',

            valueChanged: ({ value, cell, row }: CellValueChangeEvent) => {
              row[cell.key] = value;
            },
          } as CellInputEditorOptions,
        },
        {
          key: 'clientReferences.reference3',
          label: 'clientReferences.reference3',
          sortable: true,
          cellEditor: CellInputEditorComponent,
          cellEditorOptions: {
            placeholder: 'reference3',

            valueChanged: ({ value, cell, row }: CellValueChangeEvent) => {
              row[cell.key] = value;
            },
          } as CellInputEditorOptions,
        },
        {
          key: 'type',
          label: 'NORMAL SELECT',
          cellClass: data => (data.required ? 'table-cell-required-field' : ''),
          width: '160px',
          cellEditor: CellSelectEditorComponent as any,
          cellRenderer: CellWithClearingRendererComponent,
          cellFormatter: ({ type }) => type?.name ?? '',
          cellEditorOptions: {
            panelWidth: '200px',
            placeholder: 'Select a type 2',
            compareWithFn: (a, b) => a?.id && b?.id && a?.id === b?.id,
            optionLabelFn: option => option?.name ?? '?',
            options: [
              { id: 1, name: 'Type 1' },
              { id: 2, name: 'Type 2' },
            ],
            valueChanged: ({ value, cell, row }: CellValueChangeEvent) => {
              row[cell.key] = value;
            },
            disabled: e => (e as any).expeditionLogStatus === 'ACTIVATED' || false,
          } as CellSelectEditorOptions,
        },
      ]);
    }, 500);
  }

  public trackByTableFn: TrackByFunction<any> = (index, item) => item.id;

  public sortChange(sort: Lab900Sort[]): void {
    sort.forEach(s => {
      this.mockData.update(current => {
        return [...current].sort((a: any, b: any) => (a[s.id] < b[s.id] ? -1 : 1) * (s.direction === 'asc' ? 1 : -1));
      });
    });
  }

  public filtered(tableCells: TableCell[]): void {
    console.log({ tableCells });
  }

  public getRowClass(row: any): string {
    return row.active ? 'bg-green' : '';
  }

  public cellValueChanged(event: CellValueChangeEvent): void {
    this.mockData.update(current => {
      current.map(d => {
        if (d.uuid === event.row.uuid) {
          if (event.cell.key.includes('clientReferences')) {
            return {
              ...d,
              clientReferences: {
                ...d.clientReferences,
                [event.cell.key.split('.')[1]]: event.value,
              },
            };
          }
          return { ...d, [event.cell.key]: event.value };
        }
        return d;
      });
      return [...current];
    });
    console.log(event.row);
    console.log('CellValueChangeEvent', event);
  }

  public onRowClick(row: any): void {
    console.log('Row clicked', row);
  }
}
