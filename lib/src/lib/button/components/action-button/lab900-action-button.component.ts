import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActionButton, ActionButtonComponent } from '../../models/action-button.model';
import { MatTooltip, TooltipPosition } from '@angular/material/tooltip';
import { ThemePalette } from '@angular/material/core';
import { Lab900ButtonType } from '../../models/button.model';
import { coerceObservable, readPropValue } from '../../../utils/utils';
import { BehaviorSubject, combineLatest, Observable, ReplaySubject } from 'rxjs';
import { filter, map, shareReplay, switchMap, take } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { Lab900ButtonComponent } from '../button/button.component';
import { MatMenuTrigger } from '@angular/material/menu';
import { Lab900ActionButtonMenuComponent } from '../action-button-menu/lab900-action-button-menu.component';
import { Lab900ActionButtonToggleComponent } from '../action-button-toggle/lab900-action-button-toggle.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'lab900-action-button',
  templateUrl: './lab900-action-button.component.html',
  imports: [
    AsyncPipe,
    Lab900ButtonComponent,
    MatTooltip,
    MatMenuTrigger,
    Lab900ActionButtonMenuComponent,
    Lab900ActionButtonToggleComponent,
    TranslateModule,
  ],
})
export class Lab900ActionButtonComponent<T = any> implements ActionButtonComponent<T> {
  private readonly _action$ = new ReplaySubject<ActionButton<T>>();
  public readonly action$: Observable<ActionButton> = this._action$
    .asObservable()
    .pipe(shareReplay({ bufferSize: 1, refCount: true }));
  public readonly tooltipPosition$: Observable<TooltipPosition> = this.action$.pipe(
    map(action => action.tooltip?.position ?? 'above')
  );

  @Input({ required: true })
  public set action(action: ActionButton<T>) {
    this._action$.next(action);
  }

  private readonly _data$ = new BehaviorSubject<any>(undefined);
  public readonly data$ = this._data$.asObservable().pipe(shareReplay({ bufferSize: 1, refCount: true }));

  @Input()
  public set data(data: any) {
    this._data$.next(data);
  }

  @Output()
  public valueChanged = new EventEmitter<any>();

  public readonly buttonType$: Observable<Lab900ButtonType | 'toggle' | undefined>;
  public readonly color$: Observable<ThemePalette>;
  public readonly label$: Observable<string>;
  public readonly hidden$: Observable<boolean>;

  private readonly _disabled$ = new BehaviorSubject<boolean>(false);
  public readonly disabled$: Observable<boolean>;
  public readonly suffixIcon$: Observable<string | undefined>;
  public readonly prefixIcon$: Observable<string | undefined>;
  public readonly containerClass$: Observable<string | undefined>;
  public readonly buttonId$: Observable<string | undefined>;

  public constructor() {
    const stream = combineLatest([this.action$, this.data$]).pipe(shareReplay({ bufferSize: 1, refCount: true }));

    this.buttonType$ = stream.pipe(map(([a, d]) => readPropValue(a.type, d)));
    this.color$ = stream.pipe(map(([a, d]) => readPropValue(a.color, d)));
    this.label$ = stream.pipe(map(([a, d]) => readPropValue(a.label, d)));
    this.hidden$ = stream
      .pipe(switchMap(([a, d]) => coerceObservable(readPropValue(a.hide, d))))
      .pipe(map(hidden => !!hidden));
    this.disabled$ = combineLatest([stream, this._disabled$]).pipe(
      switchMap(([[a, d], disabled]) => {
        return coerceObservable(disabled || readPropValue(a.disabled, d));
      }),
      map(disabled => !!disabled)
    );

    this.prefixIcon$ = stream.pipe(map(([a, d]) => readPropValue(a.prefixIcon, d)));
    this.suffixIcon$ = stream.pipe(map(([a, d]) => readPropValue(a.suffixIcon, d)));
    this.containerClass$ = stream.pipe(map(([a, d]) => readPropValue(a.containerClass, d)));
    this.buttonId$ = stream.pipe(map(([a, d]) => readPropValue(a.buttonId, d)));
  }

  public doAction(e: Event): void {
    e.stopPropagation();
    combineLatest([this.action$, this.data$])
      .pipe(
        take(1),
        filter(([a]) => !!a.action)
      )
      .subscribe(([a, d]) => {
        a.action?.(d, e, this);
      });
  }

  public disable(): void {
    this._disabled$.next(true);
  }

  public enable(): void {
    this._disabled$.next(false);
  }
}
