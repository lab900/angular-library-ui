import { ChangeDetectionStrategy, Component, computed, input, output, ViewEncapsulation } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Lab900ButtonType } from '../../models/button.model';
import { NgClass, NgTemplateOutlet } from '@angular/common';
import { MatButton, MatFabButton, MatIconButton, MatMiniFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { TranslatePipe } from '@ngx-translate/core';
import { PreventDoubleClickDirective } from '../../directives/preventDoubleClick.directive';

@Component({
  selector: 'lab900-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgTemplateOutlet,
    NgClass,
    MatButton,
    MatIconButton,
    MatIcon,
    MatFabButton,
    TranslatePipe,
    MatMiniFabButton,
    PreventDoubleClickDirective,
  ],
})
export class Lab900ButtonComponent {
  public readonly type = input<Lab900ButtonType | undefined>(undefined);
  public readonly color = input<ThemePalette>('primary');
  public readonly suffixIcon = input<string | undefined>();
  public readonly prefixIcon = input<string | undefined>();
  public readonly label = input.required<string>();
  public readonly disabled = input<boolean>(false);
  public readonly svgIcon = input<boolean>(false);
  public readonly buttonType = input<'button' | 'reset' | 'submit'>('button');
  public readonly containerClass = input<string | undefined>();
  public readonly buttonId = input<string | undefined>();
  public readonly throttleTimeInMs = input<number>(500);

  public readonly btnClick = output<Event>();

  protected readonly classList = computed(() => {
    return { suffixIcon: !!this.suffixIcon(), prefixIcon: !!this.prefixIcon() };
  });
}
