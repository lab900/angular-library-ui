import { Component, ViewChild } from '@angular/core';
import { Lab900Sort, Lab900TableComponent, TableCell, TableRowAction } from '@lab900/ui';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'lab900-table-example',
  template: `<lab900-table
    [tableCells]="tableCells"
    [data]="mockData"
    [tableActionsBack]="tableActions"
    (tableRowOrderChange)="dropTable($event)"
  >
  </lab900-table>`,
})
export class TableDragAndDropExampleComponent {
  @ViewChild(Lab900TableComponent)
  private table: Lab900TableComponent;

  public sort: Lab900Sort[] = [{ id: 'id', direction: 'asc' }];

  public tableActions: TableRowAction[] = [
    {
      label: 'drag_indicator',
      type: 'icon',
      tooltip: { value: 'Move row' },
      draggable: true,
    },
  ];

  public mockData: any[] = [
    {
      id: 1,
      name: 'John',
    },
    {
      id: 2,
      name: 'Lucie',
    },
    {
      id: 3,
      name: 'Rob',
    },
    {
      id: 4,
      name: 'Sarah',
    },
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

  public dropTable(event: CdkDragDrop<any[]>): void {
    /**
     * You can do an api call here to save the new order
     */
    moveItemInArray(this.mockData, event.previousIndex, event.currentIndex);
    this.table.table.renderRows();
  }
}
