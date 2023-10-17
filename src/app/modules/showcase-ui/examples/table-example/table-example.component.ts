import { Component } from '@angular/core';
import {
  ActionButton,
  CellWithAnchorRendererComponent,
  CellWithIconRendererComponent,
  CellWithIconRendererOptions,
  CheckboxCellRendererComponent,
  CheckboxCellRendererOptions,
  ColumnHeaderWithIconRendererComponent,
  Lab900Sort,
  Paging,
  TableCell,
} from '@lab900/ui';

@Component({
  selector: 'lab900-table-example',
  template: ` <lab900-table
    [pageSizeConfig]="{ hidePageSize: true, pageSizeOptions: [5, 10] }"
    [tableCells]="tableCells"
    [sort]="sort"
    (sortChange)="sortChange($event)"
    [data]="mockData"
    [paging]="paging"
    [tableActionsBack]="tableActions"
    [tableHeaderActions]="tableHeaderActions"
    [toggleColumns]="false"
    [toggleAndMoveColumns]="true"
    filterIcon="settings"
    [selectableRows]="{
      enabled: true,
      selectedItems: selectedItems,
      disabled: true,
      sticky: true,
      position: 'left'
    }"
    [onRowClick]="rowClick"
    [multiSort]="true"
    [rowClass]="getRowClass"
    (tableCellsFiltered)="filtered($event)"
    [maxColumnWidth]="'200px'"
    [tableFooterActions]="tableFooterActions"
    [preFooterTitle]="'Quantity Total'"
  >
    <div *lab900TableTopContent>Custom top content</div>
    <div *lab900TableHeaderContent>Custom header</div>

    <div *lab900TableEmpty>
      <div class="no-results">
        <p>No results template (can be anything)</p>
      </div>
    </div>
    <div *lab900TableLeftFooter>Test content left side of footer</div>
  </lab900-table>`,
  styleUrls: ['table-example.component.scss'],
})
export class TableExampleComponent {
  public sort: Lab900Sort[] = [{ id: 'id', direction: 'asc' }];

  public tableFooterActions: ActionButton[] = [
    {
      label: 'Kies een locatie',
      type: 'flat',
    },
    {
      label: 'Button',
      type: 'stroked',
    },
  ];

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
      nameLong: 'A very very veeeeeeeeryyy loooooooooong name',
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

  public paging: Paging = {
    pageIndex: 0,
    pageSize: 5,
    totalItems: this.mockData.length,
  };

  public tableCells: TableCell[] = [
    {
      key: 'name',
      label: 'Name',
      cellHeaderClass: 'center-cell',
      headerRenderer: ColumnHeaderWithIconRendererComponent,
      headerRenderOptions: {
        icon: 'accessibility',
      },
      cellRenderer: CellWithAnchorRendererComponent,
      cellRenderOptions: {
        url: (data) => `mailto:${data.email}`,
        target: '_blank',
      },
      sortable: true,
      cellTooltip: {
        text: (data) => data.email,
        tooltipOptions: { tooltipPosition: 'left' },
      },
      columnOrder: 0,
      footer: '<a href="#">Click here!</a>',
      sticky: true,
    },
    {
      key: 'nameLong',
      label: 'Long name',
      sortable: true,
      cellClass: 'clickable-cell',
      cellTooltip: { text: (data) => data.nameLong, onlyOnOverflow: true },
      cellMaxWidth: '300px', // overrides the maxColumnWidth on the table
      columnOrder: 1,
      click: (data, cell, mouseEvent) => {
        mouseEvent.stopPropagation();
        console.log(
          'click cell content > function params:',
          { data },
          { cell },
          { mouseEvent }
        );
      },
    },
    {
      key: 'quantity',
      label: 'Quantity',
      cellClass: 'clickable-cell',
      footer: (tableData) => {
        return tableData
          .map((data) => data.quantity)
          .reduce((valA, valB) => valA + valB, 0);
      },
      footerCellClass: 'table-footer-highlight',
    },
    {
      key: 'id',
      label: 'ID',
      sortable: true,
      cellClass: 'clickable-cell',
      width: '*',
      columnOrder: 3,
    },
    {
      key: 'active',
      label: 'Active',
      cellHeaderClass: 'rainbow',
      cellClass: 'center-cell',
      columnOrder: 2,
      cellRenderer: CheckboxCellRendererComponent,
      cellRenderOptions: <CheckboxCellRendererOptions>{
        valueChange: (checked, value) => console.log(checked, value),
      },
    },
    {
      key: 'email',
      label: 'Email',
      columnOrder: 4,
      hide: true,
    },
    {
      key: 'city',
      label: 'City',
      cellHeaderTooltip: 'This column shows the city',
      cellHeaderTooltipPosition: 'above',
      columnOrder: 5,
      hide: true,
    },
    {
      key: 'warning',
      label: 'Warning',
      cellFormatter: () => '',
      cellRenderer: CellWithIconRendererComponent,
      cellRenderOptions: <CellWithIconRendererOptions>{
        icon: (data) => (data?.warning ? 'warning' : 'check'),
      },
      cellTooltip: {
        text: (data) =>
          data.warning
            ? 'This is a dangerous entry'
            : 'This is not a dangerous entry',
      },
    },
  ];

  public sortChange(sort: Lab900Sort[]): void {
    sort.forEach((s) => {
      this.mockData.sort(
        (a: any, b: any) =>
          (a[s.id] < b[s.id] ? -1 : 1) * (s.direction === 'asc' ? 1 : -1)
      );
      this.mockData = [...this.mockData];
    });
  }

  public rowClick(row, i, event): void {
    console.log('click row > function params:', { row }, { i }, { event });
  }

  public filtered(tableCells: TableCell[]): void {
    console.log({ tableCells });
  }

  public getRowClass(row: any): string {
    return row.active ? 'bg-green' : '';
  }
}
