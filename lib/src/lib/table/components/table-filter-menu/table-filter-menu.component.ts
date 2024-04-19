import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { TableCell } from '../../models/table-cell.model';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDragHandle,
  CdkDragPlaceholder,
  CdkDragPreview,
  CdkDropList,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { Observable } from 'rxjs';
import { map, take, withLatestFrom } from 'rxjs/operators';
import { Lab900TableService } from '../../services/table.service';
import { readPropValue } from '../../../utils/utils';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { AsyncPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'lab900-table-filter-menu',
  templateUrl: './table-filter-menu.component.html',
  styleUrls: ['./table-filter-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    MatMenuModule,
    MatCheckboxModule,
    TranslateModule,
    MatIconModule,
    AsyncPipe,
    CdkDropList,
    CdkDrag,
    CdkDragPlaceholder,
    CdkDragPreview,
    CdkDragHandle,
    MatButtonModule,
  ],
})
export class Lab900TableFilterMenuComponent {
  public readonly tableCells$: Observable<TableCell[]>;
  public readonly visibleCells$: Observable<TableCell[]>;
  public readonly hiddenCells$: Observable<TableCell[]>;

  @Input()
  public filterIcon = 'filter_alt';

  @Input()
  public toggleAndMoveColumns = false;

  @Output()
  public filterChanged: EventEmitter<TableCell[]> = new EventEmitter<
    TableCell[]
  >();

  public constructor(private tableService: Lab900TableService) {
    this.tableCells$ = this.tableService.columns$.pipe(
      map((cells) => cells?.filter((cell: TableCell) => !cell.alwaysVisible)),
    );
    this.visibleCells$ = this.tableCells$.pipe(
      map((cells) => cells?.filter((cell: TableCell) => !cell.hide)),
    );
    this.hiddenCells$ = this.tableCells$.pipe(
      map((cells) => cells?.filter((cell: TableCell) => !!cell.hide)),
    );
  }

  public getCellLabel(cell: TableCell): string {
    return readPropValue(cell.label, cell);
  }

  public handleCheckboxClick(event: MouseEvent, cell: TableCell): void {
    event.stopPropagation();
    event.preventDefault();
    this.tableService.columns$.pipe(take(1)).subscribe((tableCells) => {
      const index = tableCells.findIndex((c) => c.key === cell.key);
      tableCells[index].hide = !tableCells[index].hide;
      this.filterChanged.emit(tableCells);
    });
  }

  public drop($event: CdkDragDrop<TableCell[]>): void {
    this.visibleCells$
      .pipe(withLatestFrom(this.tableService.columns$), take(1))
      .subscribe(([visibleColumns, tableCells]) => {
        moveItemInArray(
          visibleColumns,
          $event.previousIndex,
          $event.currentIndex,
        );
        visibleColumns.forEach((cell, newColumnOrder) => {
          const index = tableCells.findIndex((c) => c.key === cell.key);
          tableCells[index].columnOrder = newColumnOrder;
        });
        this.filterChanged.emit(tableCells);
      });
  }
}
