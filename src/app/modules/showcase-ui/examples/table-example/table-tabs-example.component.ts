import { Component, ViewChild } from '@angular/core';
import { Lab900TableComponent, TableCell, Lab900TableTab } from '@lab900/ui';

const mockDataA: any[] = [
  {
    id: 1,
    name: 'John',
  },
  {
    id: 2,
    name: 'Lucie',
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
    id: 5,
    name: 'Max',
  },
  {
    id: 6,
    name: 'Jane',
  },
  {
    id: 7,
    name: 'Oliver',
  },
];

const tableCellsAlt: TableCell[] = [
  {
    key: 'id',
    label: 'ID',
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
    key: 'name',
    label: 'Name',
  },
];

@Component({
  selector: 'lab900-table-tabs-example',
  template: `<lab900-table
    [loading]="true"
    [tableCells]="tableCells"
    [data]="activeData"
    [tableTabs]="tabs"
    (activeTabIdChange)="switchData($event)"
  >
  </lab900-table>`,
})
export class TableTabsExampleComponent {
  @ViewChild(Lab900TableComponent)
  private table: Lab900TableComponent;

  public activeData: any[] = mockDataA;

  public tabs: Lab900TableTab<'a' | 'b' | 'c'>[] = [
    { id: 'a', label: 'tab A' },
    { id: 'b', label: 'tab B', tableCells: tableCellsAlt },
    { id: 'c', label: 'tab C', tableCells: tableCellsAlt2 },
  ];

  public tableCells: TableCell[] = [
    {
      key: 'id',
      label: 'ID',
    },
    {
      key: 'name',
      label: 'Name',
    },
  ];

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
