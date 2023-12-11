import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgZone,
  OnDestroy,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { combineLatest, Observable, ReplaySubject, Subscription } from 'rxjs';
import { CellValueChangeEvent, TableCell } from '../../models/table-cell.model';
import { filter, map, shareReplay } from 'rxjs/operators';
import { DefaultCellRendererComponent } from '../../cell-renderers/default-cell-renderer/default-cell-renderer.component';
import { Lab900TableService } from '../../services/table.service';
import { Lab900TableComponent } from '../table/table.component';

@Component({
  selector: 'lab900-table-cell-inner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-cell-inner.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class TableCellInnerComponent<T = any> implements OnInit, OnDestroy {
  public readonly defaultCellRenderer = DefaultCellRendererComponent;

  private readonly _rowValue = new ReplaySubject<T>();
  public readonly rowValue$: Observable<T> = this._rowValue.asObservable();

  private readonly _cell$ = new ReplaySubject<TableCell<T>>();
  public readonly cell$: Observable<TableCell<T>> = this._cell$
    .asObservable()
    .pipe(
      filter((c) => !!c?.key),
      shareReplay(1)
    );

  @Input({ required: true })
  public set cell(value: TableCell<T>) {
    this._cell$.next(value);
  }

  @Input({ required: true })
  public set rowValue(value: T) {
    this._rowValue.next(value);
  }

  @Input({ required: true })
  public rowIndex!: number;

  @Output()
  private readonly valueChanged = new EventEmitter<CellValueChangeEvent<T>>();

  public readonly canEdit$: Observable<boolean>;
  public readonly isEditing$: Observable<boolean>;

  private classSub?: Subscription;
  public readonly cellClasses$: Observable<string[]>;

  public constructor(
    private readonly tableService: Lab900TableService,
    private readonly table: Lab900TableComponent,
    private readonly elRef: ElementRef,
    private readonly ngZone: NgZone
  ) {
    this.canEdit$ = combineLatest([
      this.cell$,
      this.rowValue$,
      this.tableService.disableEditing$,
    ]).pipe(
      map(
        ([cell, rowValue, disableEditing]) =>
          !disableEditing &&
          cell.cellEditor &&
          !cell.cellEditorOptions?.disabled?.(rowValue)
      )
    );

    this.isEditing$ = combineLatest([
      this.canEdit$,
      this.cell$,
      this.rowValue$,
      this.tableService.inlineEditingCellkey$,
    ]).pipe(
      map(([canEdit, cell, rowValue, showEditorForElement]) => {
        if (!canEdit || !showEditorForElement) {
          return false;
        }
        const dataUniqueId = this.getUniqueKey(cell, rowValue, this.rowIndex);
        return (
          showEditorForElement === dataUniqueId &&
          cell.cellEditor &&
          !cell.cellEditorOptions?.disabled?.(rowValue)
        );
      })
    );

    this.cellClasses$ = combineLatest([this.cell$, this.rowValue$]).pipe(
      map(([cell, rowValue]) => {
        return (
          this.getCellClasses(cell, rowValue)?.trim().split(' ') ?? []
        ).filter((s) => !!s?.length);
      })
    );
  }

  public ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => {
      const parentElm = this.elRef?.nativeElement?.parentElement;
      if (parentElm) {
        this.classSub = combineLatest([
          this.isEditing$,
          this.canEdit$,
          this.cellClasses$,
        ]).subscribe(([isEditing, canEdit, cellClasses]) => {
          parentElm.classList.toggle('edit-mode', isEditing);
          parentElm.classList.toggle('editable', canEdit);
          parentElm.tabIndex = canEdit ? 0 : -1;
          if (cellClasses) {
            parentElm.classList.add(...cellClasses);
          }
        });
      }
    });
  }

  public ngOnDestroy(): void {
    this.classSub?.unsubscribe();
  }

  public readonly handleValueChanged = (
    value: any,
    cell: TableCell<T>,
    row: T
  ): void => {
    if (cell?.cellEditorOptions?.valueChanged) {
      cell.cellEditorOptions.valueChanged({ value, cell, row });
    }
    this.valueChanged.emit({ value, cell, row });
  };

  private getUniqueKey(cell: TableCell<T>, data: T, rowIndex: number): string {
    return cell.key + '_' + this.table.trackByTableFn(rowIndex, data as any);
  }

  private getCellClasses(cell: TableCell<T>, data: T): string {
    return typeof cell.cellClass === 'function'
      ? cell.cellClass(data, cell)
      : cell.cellClass;
  }
}
