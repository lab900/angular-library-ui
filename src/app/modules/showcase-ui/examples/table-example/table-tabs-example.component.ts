import { Component, ViewChild } from '@angular/core';
import { Lab900TableComponent, TableCell } from '@lab900/ui';
import { Lab900TableTab } from '../../../../../../dist/@lab900/ui/lib/table/models/table-tabs.model';

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

@Component({
  selector: 'lab900-table-tabs-example',
  template: `<lab900-table [tableCells]="tableCells" [data]="activeData" [tableTabs]="tabs" (activeTabIdChange)="switchData($event)">
  </lab900-table>`,
})
export class TableTabsExampleComponent {
  @ViewChild(Lab900TableComponent)
  private table: Lab900TableComponent;

  public activeData: any[] = mockDataA;
  public tabs: Lab900TableTab<'a' | 'b' | 'c'>[] = [
    { id: 'a', label: 'tab A' },
    { id: 'b', label: 'tab B' },
    { id: 'c', label: 'tab C' },
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
