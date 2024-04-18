import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  inject,
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

@Component({
  selector: 'lab900-table-cell-inner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-cell-inner.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class TableCellInnerComponent<T = any> implements OnInit, OnDestroy {
  private readonly tableService = inject(Lab900TableService);
  private readonly elRef = inject(ElementRef);
  private readonly ngZone = inject(NgZone);

  public readonly defaultCellRenderer = DefaultCellRendererComponent;

  private readonly _rowValue = new ReplaySubject<T>();
  public readonly rowValue$: Observable<T> = this._rowValue.asObservable();

  private readonly _cell$ = new ReplaySubject<TableCell<T>>();
  public readonly cell$: Observable<TableCell<T>> = this._cell$
    .asObservable()
    .pipe(
      filter((c) => !!c?.key),
      shareReplay({ bufferSize: 1, refCount: true }),
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
  private previousClasses: string[] = [];

  public constructor() {
    this.canEdit$ = combineLatest([
      this.cell$,
      this.rowValue$,
      this.tableService.disableEditing$,
    ]).pipe(
      map(
        ([cell, rowValue, disableEditing]) =>
          !disableEditing &&
          cell.cellEditor &&
          !cell.cellEditorOptions?.disabled?.(rowValue),
      ),
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
        const dataUniqueId = cell.key + '_' + this.rowIndex;
        return (
          showEditorForElement === dataUniqueId &&
          cell.cellEditor &&
          !cell.cellEditorOptions?.disabled?.(rowValue)
        );
      }),
    );

    this.cellClasses$ = combineLatest([this.cell$, this.rowValue$]).pipe(
      map(([cell, rowValue]) => {
        return (
          this.getCellClasses(cell, rowValue)?.trim().split(' ') ?? []
        ).filter((s) => !!s?.length);
      }),
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
          if (isEditing) {
            parentElm.classList.add('edit-mode');
          } else {
            parentElm.classList.remove('edit-mode');
          }
          if (canEdit) {
            parentElm.classList.add('editable');
          } else {
            parentElm.classList.remove('editable');
          }
          parentElm.tabIndex = canEdit ? 0 : -1;
          if (cellClasses) {
            parentElm.classList.remove(...this.previousClasses);
            parentElm.classList.add(...cellClasses);
            this.previousClasses = cellClasses;
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
    row: T,
  ): void => {
    if (cell?.cellEditorOptions?.valueChanged) {
      cell.cellEditorOptions.valueChanged({ value, cell, row });
    }
    this.valueChanged.emit({ value, cell, row });
  };

  private getCellClasses(cell: TableCell<T>, data: T): string {
    return typeof cell.cellClass === 'function'
      ? cell.cellClass(data, cell)
      : cell.cellClass;
  }
}
