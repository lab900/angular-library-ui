import { Component, Input } from '@angular/core';
import { ActionButton, ActionButtonComponent } from '../../models/action-button.model';
import { coerceObservable, readPropValue } from '../../../utils/utils';
import { Observable } from 'rxjs';
import { MatButtonToggle, MatButtonToggleGroup } from '@angular/material/button-toggle';
import { MatIcon } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { AsyncPipe } from '@angular/common';
import { PreventDoubleClickDirective } from '../../directives/preventDoubleClick.directive';
import { map } from 'rxjs/operators';

@Component({
  selector: 'lab900-action-button-toggle',
  templateUrl: './lab900-action-button-toggle.component.html',
  imports: [MatButtonToggleGroup, MatButtonToggle, MatIcon, TranslateModule, AsyncPipe, PreventDoubleClickDirective],
})
export class Lab900ActionButtonToggleComponent<T = any> implements ActionButtonComponent<T> {
  private _disabled = false;

  @Input({ required: true })
  public action!: ActionButton<T>;

  @Input()
  public data?: T;

  public getSelected(): ActionButton<T> | null {
    if (this.action.subActions) {
      for (const action of this.action.subActions) {
        if ((typeof action.selected === 'function' && action.selected(this.data)) || action.selected === true) {
          return action;
        }
      }
    }
    return null;
  }

  public getHidden(): Observable<boolean> {
    return coerceObservable(readPropValue(this.action.hide, this.data)).pipe(map(hidden => !!hidden));
  }

  public getDisabled(): Observable<boolean> {
    return coerceObservable(this._disabled || readPropValue(this.action.disabled, this.data)).pipe(
      map(disabled => !!disabled)
    );
  }

  public getSubActionDisabled(action: ActionButton): Observable<boolean> {
    return coerceObservable(readPropValue(action.disabled, this.data)).pipe(map(disabled => !!disabled));
  }

  public getSubActionHidden(subAction: ActionButton<T>): Observable<boolean> {
    return coerceObservable(readPropValue(subAction.hide, this.data)).pipe(map(hidden => !!hidden));
  }

  public getLabel(action: ActionButton): Observable<string> {
    return coerceObservable(readPropValue(action.label, this.data));
  }

  public disable(): void {
    this._disabled = true;
  }

  public enable(): void {
    this._disabled = false;
  }
}
