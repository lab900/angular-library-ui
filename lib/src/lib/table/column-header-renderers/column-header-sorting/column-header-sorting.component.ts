import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { Lab900TableService } from '../../services/table.service';
import { combineLatest, Observable, ReplaySubject } from 'rxjs';
import { distinctUntilChanged, filter, map, shareReplay } from 'rxjs/operators';
import { TableCell } from '../../models/table-cell.model';

@Component({
  selector: 'lab900-column-header-sorting',
  standalone: true,
  imports: [NgIf, AsyncPipe],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <ng-container *ngIf="sortIcon$ | async as icon">
    <span class="material-icons lab900-sort-arrow" *ngIf="icon">
      {{ icon }}
    </span>
  </ng-container>`,
  styles: [
    `
      .lab900-sort-arrow {
        font-size: 12px;
        display: block;
        margin-left: 4px;
      }
    `,
  ],
})
export class ColumnHeaderSortingComponent {
  public readonly sortIcon$: Observable<'north' | 'south' | ''>;

  protected readonly _columnConfig$ = new ReplaySubject<TableCell>();
  public readonly columnConfig$: Observable<TableCell> = this._columnConfig$
    .asObservable()
    .pipe(shareReplay(1));

  @Input({ required: true })
  public set columnConfig(value: TableCell) {
    this._columnConfig$.next(value);
  }

  public constructor(protected tableService: Lab900TableService) {
    const sortDirection$ = combineLatest([
      this.tableService.sort$,
      this.columnConfig$,
    ]).pipe(
      filter(([, col]) => !!col?.sortable),
      map(
        ([sort, col]) =>
          sort?.find((s) => s.id === (col.sortKey ?? col.key))?.direction ?? ''
      )
    );

    this.sortIcon$ = sortDirection$.pipe(
      distinctUntilChanged(),
      map((dir) => {
        if (dir === 'asc') {
          return 'north';
        } else if (dir === 'desc') {
          return 'south';
        }
        return '';
      })
    );
  }
}
