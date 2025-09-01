import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';
import { ThemePalette } from '@angular/material/core';
import { Lab900ButtonType } from '../../models/button.model';
import { computeReactiveOption, computeReactiveStringOption } from '../../../utils/utils';
import { Lab900ButtonComponent } from '../button/button.component';
import { MatMenuModule } from '@angular/material/menu';
import { Lab900ActionButtonToggleComponent } from '../action-button-toggle/lab900-action-button-toggle.component';
import { TranslatePipe } from '@ngx-translate/core';
import { Lab900ActionDirective } from '../lab900-action.directive';
import { Lab900ActionButtonMenuItemComponent } from '../action-button-menu-item/lab900-action-button-menu-item.component';

@Component({
  selector: 'lab900-action-button',
  templateUrl: './lab900-action-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    Lab900ButtonComponent,
    MatTooltip,
    Lab900ActionButtonToggleComponent,
    TranslatePipe,
    Lab900ActionButtonMenuItemComponent,
    MatMenuModule,
  ],
})
export class Lab900ActionButtonComponent<T = undefined> extends Lab900ActionDirective<T> {
  protected readonly defaultTooltipPosition = 'above';

  protected readonly buttonType = computed(() => {
    return computeReactiveOption<T, 'toggle' | Lab900ButtonType>(this.action().type, this.data);
  });

  protected readonly themeColor = computed(() => {
    return computeReactiveOption<T, ThemePalette>(this.action().color, this.data);
  });

  protected readonly containerClass = computed(() => {
    return computeReactiveStringOption<T>(this.action().containerClass, this.data);
  });

  protected readonly buttonId = computed(() => {
    return computeReactiveStringOption<T>(this.action().buttonId, this.data);
  });
}
