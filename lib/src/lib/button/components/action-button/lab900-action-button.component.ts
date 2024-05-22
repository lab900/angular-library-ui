import {
  Component,
  computed,
  EventEmitter,
  input,
  Output,
  Signal,
} from '@angular/core';
import {
  ActionButton,
  ActionButtonComponent,
} from '../../models/action-button.model';
import { MatTooltip } from '@angular/material/tooltip';
import { ThemePalette } from '@angular/material/core';
import { Lab900ButtonType } from '../../models/button.model';
import { coerceObservable, readPropValue } from '../../../utils/utils';
import { AsyncPipe } from '@angular/common';
import { Lab900ButtonComponent } from '../button/button.component';
import { MatMenuTrigger } from '@angular/material/menu';
import { Lab900ActionButtonMenuComponent } from '../action-button-menu/lab900-action-button-menu.component';
import { Lab900ActionButtonToggleComponent } from '../action-button-toggle/lab900-action-button-toggle.component';
import { TranslateModule } from '@ngx-translate/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { combineLatest, switchMap } from 'rxjs';

@Component({
  selector: 'lab900-action-button',
  templateUrl: './lab900-action-button.component.html',
  standalone: true,
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
export class Lab900ActionButtonComponent<T = any>
  implements ActionButtonComponent<T>
{
  public readonly data = input.required<T>();
  public readonly action = input.required<ActionButton<T>>();
  public readonly tooltipPosition = computed(
    () => this.action()?.tooltip?.position ?? 'above',
  );

  public readonly disabled = input(false, {
    transform: (value: boolean | string) =>
      typeof value === 'string' ? value === '' : value,
  });

  @Output()
  public valueChanged = new EventEmitter<any>();

  public readonly buttonType: Signal<Lab900ButtonType | 'toggle'> = computed(
    () => readPropValue(this.action()?.type, this.data()),
  );

  public readonly color: Signal<ThemePalette> = computed(() =>
    readPropValue(this.action()?.color, this.data()),
  );

  public readonly label: Signal<string> = computed(() =>
    readPropValue(this.action()?.label, this.data()),
  );

  public readonly hidden = toSignal(
    combineLatest([toObservable(this.action), toObservable(this.data)]).pipe(
      switchMap(([action, data]) =>
        coerceObservable(readPropValue(action?.hide, data)),
      ),
    ),
    { initialValue: false },
  );

  public readonly suffixIcon: Signal<string> = computed(() =>
    readPropValue(this.action()?.suffixIcon, this.data()),
  );

  public readonly prefixIcon: Signal<string> = computed(() =>
    readPropValue(this.action()?.prefixIcon, this.data()),
  );

  public readonly containerClass: Signal<string> = computed(() =>
    readPropValue(this.action()?.containerClass, this.data()),
  );

  public doAction(e: Event): void {
    e.stopPropagation();
    this.action().action(this.data(), e, this);
  }

  public disable(): void {
    this.disabled.set(true);
  }

  public enable(): void {
    this.disabled.set(false);
  }
}
