import { Component, computed, signal } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Lab900TableComponent, TableCell, TableRowAction } from '@lab900/ui';

interface Task {
  id: number;
  title: string;
}

@Component({
  selector: 'lab900-table-drag-and-drop-example',
  imports: [Lab900TableComponent],
  template: `
    <lab900-table
      [tableCells]="tableCells"
      [data]="tasks()"
      [trackByTableFn]="trackById"
      [tableActionsBack]="actions"
      (tableRowOrderChange)="moveTask($event)" />

    <p>Order: {{ order() }}</p>
  `,
})
export class TableDragAndDropExampleComponent {
  protected readonly tasks = signal<Task[]>([
    { id: 1, title: 'Write the release notes' },
    { id: 2, title: 'Review the pull request' },
    { id: 3, title: 'Update the dependencies' },
    { id: 4, title: 'Deploy to production' },
  ]);

  protected readonly order = computed(() =>
    this.tasks()
      .map(task => task.id)
      .join(', ')
  );

  // a row action with draggable: true turns on drag & drop, and is the handle to drag the row with
  protected readonly actions: TableRowAction<Task>[] = [
    {
      type: 'icon',
      label: 'drag_indicator',
      tooltip: { value: 'Move row' },
      draggable: true,
    },
  ];

  protected readonly tableCells: TableCell<Task>[] = [
    { key: 'id', label: 'ID', width: '60px' },
    { key: 'title', label: 'Task' },
  ];

  protected readonly trackById = (index: number, task: Task): number => task.id;

  // the table does not reorder the data: set the new order here, or save it with your api
  protected moveTask(event: CdkDragDrop<Task[]>): void {
    this.tasks.update(tasks => {
      const reordered = [...tasks];
      moveItemInArray(reordered, event.previousIndex, event.currentIndex);
      return reordered;
    });
  }
}
