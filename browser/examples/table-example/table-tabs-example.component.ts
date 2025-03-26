import { Component } from '@angular/core';
import { Lab900TableComponent, Lab900TableTab, TableCell } from '@lab900/ui';

const mockDataA: any[] = [
  {
    id: 1,
    name: 'john',
  },
  {
    id: 2,
    name: 'lucie',
  },
  {
    id: 3,
  },
];

const mockDataB: any[] = [
  {
    id: 3,
    name: 'Rob',
  },
  {
    id: 4,
    name: 'Sarah',
  },
];

const mockDataC: any[] = [
  {
    testKey: 5,
    name: 'Max',
  },
  {
    testKey: 6,
    name: 'Jane',
  },
  {
    testKey: 7,
    name: 'Oliver',
  },
];

const tableCellsAlt: TableCell[] = [
  {
    key: 'id',
    label: 'ID',
    width: '50px',
  },
  {
    key: 'name',
    label: 'Name',
  },
  {
    key: 'alt',
    label: 'Tab specific column',
  },
];

const tableCellsAlt2: TableCell[] = [
  {
    key: 'testKey',
    label: 'TestKey',
  },
];

@Component({
  selector: 'lab900-table-tabs-example',
  imports: [Lab900TableComponent],
  template: `<lab900-table
    [loading]="true"
    [tableCells]="tableCells"
    [data]="activeData"
    [tableTabs]="tabs"
    (activeTabIdChange)="switchData($event)"
    [trackByTableFn]="trackByTableFn" />`,
})
export class TableTabsExampleComponent {
  public activeData: any[] = mockDataA;

  public tabs: Lab900TableTab<'a' | 'b' | 'c'>[] = [
    { id: 'a', label: 'tab A' },
    { id: 'b', label: 'tab B', tableCells: tableCellsAlt },
    { id: 'c', label: 'tab C', tableCells: tableCellsAlt2 },
  ];

  public tableCells: TableCell<any>[] = [
    {
      key: 'id',
      label: 'ID',
      cellClass: 'test',
      width: '50px',
    },
    {
      key: 'name',
      label: 'Name',
      cellClass: data => 'lcs-approval-status-cell ' + data?.name,
    },
  ];

  public trackByTableFn = (index: number, item: any): any => item.id;

  public switchData(tabId: 'a' | 'b' | 'c'): void {
    switch (tabId) {
      case 'a':
        this.activeData = mockDataA;
        break;
      case 'b':
        this.activeData = mockDataB;
        break;
      case 'c':
        this.activeData = mockDataC;
        break;
    }
  }
}
