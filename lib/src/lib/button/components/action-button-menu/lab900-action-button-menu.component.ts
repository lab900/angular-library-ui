import { Component, Input, ViewChild } from '@angular/core';
import { ActionButton } from '../../models/action-button.model';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { coerceObservable, readPropValue } from '../../../utils/utils';
import { Observable } from 'rxjs';
import { MatIcon } from '@angular/material/icon';
import { AsyncPipe } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { PreventDoubleClickDirective } from '../../directives/preventDoubleClick.directive';
import { map } from 'rxjs/operators';

@Component({
  selector: 'lab900-action-button-menu',
  templateUrl: './lab900-action-button-menu.component.html',
  standalone: true,
  imports: [MatMenu, MatIcon, MatMenuItem, MatMenuTrigger, AsyncPipe, TranslateModule, PreventDoubleClickDirective],
})
export class Lab900ActionButtonMenuComponent {
  @ViewChild('actionMenu', { static: true })
  public actionMenu?: MatMenu;

  @Input({ required: true })
  public actions!: ActionButton[];

  @Input()
  public data: any;

  public getLabel(action: ActionButton): string {
    return readPropValue(action.label, this.data);
  }

  public getDisabled(action: ActionButton): Observable<boolean> {
    return coerceObservable(readPropValue(action.disabled, this.data)).pipe(map(v => !!v));
  }

  public doAction(e: Event, action: ActionButton): void {
    e.stopPropagation();
    if (action.action) {
      action.action(this.data, e);
    }
  }

  public getPrefixIcon(action: ActionButton): string {
    return readPropValue(action.prefixIcon, this.data) ?? '';
  }

  public getSuffixIcon(action: ActionButton): string {
    return readPropValue(action.suffixIcon, this.data) ?? '';
  }

  public getSubActionHidden(subAction: ActionButton): Observable<boolean> {
    return coerceObservable(readPropValue(subAction.hide, this.data)).pipe(map(v => !!v));
  }
}
