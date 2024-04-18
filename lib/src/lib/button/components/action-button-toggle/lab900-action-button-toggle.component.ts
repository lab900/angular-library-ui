import { Component, Input } from '@angular/core';
import {
  ActionButton,
  ActionButtonComponent,
} from '../../models/action-button.model';
import { coerceObservable, readPropValue } from '../../../utils/utils';
import { Observable } from 'rxjs';
import {
  MatButtonToggle,
  MatButtonToggleGroup,
} from '@angular/material/button-toggle';
import { MatIcon } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'lab900-action-button-toggle',
  templateUrl: './lab900-action-button-toggle.component.html',
  standalone: true,
  imports: [
    MatButtonToggleGroup,
    MatButtonToggle,
    MatIcon,
    TranslateModule,
    AsyncPipe,
  ],
})
export class Lab900ActionButtonToggleComponent<T = any>
  implements ActionButtonComponent<T>
{
  private _disabled = false;

  @Input({ required: true })
  public action: ActionButton<T>;

  @Input()
  public data: T;

  public getSelected(): ActionButton<T> {
    for (const action of this.action.subActions) {
      if (
        (typeof action.selected === 'function' && action.selected(this.data)) ||
        action.selected === true
      ) {
        return action;
      }
    }
    return null;
  }

  public getHidden(): Observable<boolean> {
    return coerceObservable(readPropValue(this.action.hide, this.data));
  }

  public getDisabled(): Observable<boolean> {
    return coerceObservable(
      this._disabled || readPropValue(this.action.disabled, this.data),
    );
  }

  public getSubActionDisabled(action: ActionButton): Observable<boolean> {
    return coerceObservable(readPropValue(action.disabled, this.data));
  }

  public doAction(e: Event): void {
    e.stopPropagation();
    this.action?.action?.(this.data, e, this);
  }

  public disable(): void {
    this._disabled = true;
  }

  public enable(): void {
    this._disabled = false;
  }
}
