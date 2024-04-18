import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';
import { TableCell } from '../../models/table-cell.model';
import { ActionButton } from '../../../button/models/action-button.model';
import {
  BehaviorSubject,
  combineLatest,
  Observable,
  ReplaySubject,
} from 'rxjs';
import { map } from 'rxjs/operators';
import { AsyncPipe, NgTemplateOutlet } from '@angular/common';
import { Lab900TableFilterMenuComponent } from '../table-filter-menu/table-filter-menu.component';
import { Lab900ActionButtonComponent } from '../../../button/components/action-button/lab900-action-button.component';

@Component({
  selector: 'lab900-table-header',
  templateUrl: './lab900-table-header.component.html',
  styleUrls: ['./lab900-table-header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    AsyncPipe,
    Lab900TableFilterMenuComponent,
    NgTemplateOutlet,
    Lab900ActionButtonComponent,
  ],
})
export class Lab900TableHeaderComponent {
  @Input()
  public tableHeaderContent?: TemplateRef<any>;

  private readonly _tableHeaderActions$ = new ReplaySubject<ActionButton[]>();
  public readonly tableHeaderActions$: Observable<ActionButton[]> =
    this._tableHeaderActions$.asObservable();

  /**
   * Show a set of action at the top of the table
   */
  @Input()
  public set tableHeaderActions(actions: ActionButton[]) {
    this._tableHeaderActions$.next(actions);
  }

  private readonly _toggleColumns$ = new BehaviorSubject<boolean>(true);
  public readonly toggleColumns$: Observable<boolean> =
    this._toggleColumns$.asObservable();

  /**
   * Show columns filter to hide/show columns
   */
  @Input()
  public set toggleColumns(value: boolean) {
    this._toggleColumns$.next(value);
  }

  private readonly _toggleAndMoveColumns$ = new BehaviorSubject<boolean>(false);
  public readonly toggleAndMoveColumns$: Observable<boolean> =
    this._toggleAndMoveColumns$.asObservable();

  @Input()
  public set toggleAndMoveColumns(value: boolean) {
    this._toggleAndMoveColumns$.next(value);
  }

  private readonly _filterIcon$ = new BehaviorSubject<string>('filter_alt');
  public readonly filterIcon$: Observable<string> =
    this._filterIcon$.asObservable();

  @Input()
  public set filterIcon(icon: string) {
    this._filterIcon$.next(icon);
  }

  @Output()
  public readonly tableCellsFiltered: EventEmitter<TableCell[]> =
    new EventEmitter<TableCell[]>();

  public readonly showFilterMenu$: Observable<boolean> = combineLatest([
    this.toggleAndMoveColumns$,
    this.toggleColumns$,
  ]).pipe(map((values) => values.some((value) => value === true)));

  public readonly showTableHeader$: Observable<boolean> = combineLatest([
    this.showFilterMenu$,
    this.tableHeaderActions$,
  ]).pipe(
    map(([filterMenu, actions]) => {
      return filterMenu || actions?.length > 0 || !!this.tableHeaderContent;
    }),
  );
}
