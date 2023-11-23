import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import {
  ActionButton,
  ActionButtonComponent,
} from '../../models/action-button.model';
import { TooltipPosition } from '@angular/material/tooltip';
import { ThemePalette } from '@angular/material/core';
import { Lab900ButtonType } from '../../models/button.model';
import { readPropValue } from '../../../utils/utils';
import {
  BehaviorSubject,
  combineLatest,
  Observable,
  ReplaySubject,
} from 'rxjs';
import { filter, map, shareReplay, take } from 'rxjs/operators';

@Component({
  selector: 'lab900-action-button',
  templateUrl: './lab900-action-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Lab900ActionButtonComponent<T = any>
  implements ActionButtonComponent<T>
{
  private readonly _action$ = new ReplaySubject<ActionButton<T>>();
  public readonly action$: Observable<ActionButton> = this._action$
    .asObservable()
    .pipe(shareReplay(1));
  public readonly tooltipPosition$: Observable<TooltipPosition> =
    this.action$.pipe(map((action) => action.tooltip?.position ?? 'above'));

  @Input({ required: true })
  public set action(action: ActionButton<T>) {
    this._action$.next(action);
  }

  private readonly _data$ = new BehaviorSubject<any>(undefined);
  public readonly data$ = this._data$.asObservable().pipe(shareReplay(1));

  @Input()
  public set data(data: any) {
    this._data$.next(data);
  }

  @Output()
  public valueChanged = new EventEmitter<any>();

  public readonly buttonType$: Observable<Lab900ButtonType | 'toggle'>;
  public readonly color$: Observable<ThemePalette>;
  public readonly label$: Observable<string>;
  public readonly hidden$: Observable<boolean>;

  private readonly _disabled$ = new BehaviorSubject<boolean>(false);
  public readonly disabled$: Observable<boolean>;
  public readonly suffixIcon$: Observable<string>;
  public readonly prefixIcon$: Observable<string>;
  public readonly containerClass$: Observable<string>;

  public constructor() {
    const stream = combineLatest([this.action$, this.data$]).pipe(
      shareReplay(1)
    );

    this.buttonType$ = stream.pipe(map(([a, d]) => readPropValue(a.type, d)));
    this.color$ = stream.pipe(map(([a, d]) => readPropValue(a.color, d)));
    this.label$ = stream.pipe(map(([a, d]) => readPropValue(a.label, d)));
    this.hidden$ = stream.pipe(map(([a, d]) => readPropValue(a.hide, d)));
    this.disabled$ = combineLatest([stream, this._disabled$]).pipe(
      map(([[a, d], disabled]) => {
        return disabled || readPropValue(a.disabled, d);
      })
    );

    this.prefixIcon$ = stream.pipe(
      map(([a, d]) => readPropValue(a.prefixIcon, d))
    );
    this.suffixIcon$ = stream.pipe(
      map(([a, d]) => readPropValue(a.suffixIcon, d))
    );
    this.containerClass$ = stream.pipe(
      map(([a, d]) => readPropValue(a.containerClass, d))
    );
  }

  public doAction(e: Event): void {
    e.stopPropagation();
    combineLatest([this.action$, this.data$])
      .pipe(
        take(1),
        filter(([a]) => !!a.action)
      )
      .subscribe(([a, d]) => {
        a.action(d, e, this);
      });
  }

  public disable(): void {
    this._disabled$.next(true);
  }

  public enable(): void {
    this._disabled$.next(false);
  }
}
