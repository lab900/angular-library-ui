import { ChangeDetectionStrategy, Component, computed, input, ViewEncapsulation } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { AbstractActionComponent } from '../abstract-action-component';
import { MatButtonToggle } from '@angular/material/button-toggle';
import { MatIcon } from '@angular/material/icon';
import { PreventDoubleClickDirective } from '../../directives/preventDoubleClick.directive';

@Component({
  selector: 'lab900-action-button-toggle-item',
  templateUrl: './lab900-action-button-toggle-item.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslatePipe, PreventDoubleClickDirective, MatButtonToggle, MatIcon],
})
export class Lab900ActionButtonToggleItemComponent<T = unknown> extends AbstractActionComponent<T> {
  public readonly toggleGroupDisabled = input<boolean>(false);
  protected readonly toggleDisabled = computed(() => this.toggleGroupDisabled() || this.disabled());
}
