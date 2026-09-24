import { ChangeDetectionStrategy, Component, input, output, ViewEncapsulation } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Lab900ButtonType } from '../../models/button.model';
import { NgTemplateOutlet } from '@angular/common';
import { MatButton, MatFabButton, MatIconButton, MatMiniFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { TranslatePipe } from '@ngx-translate/core';
import { PreventDoubleClickDirective } from '../../directives/preventDoubleClick.directive';

/**
 * A Material button of any type, with icons and a translated label. Clicks are throttled, so a double click
 * emits `btnClick` once.
 */
@Component({
  selector: 'lab900-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgTemplateOutlet,
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
  /** The Material button variant. Without a type it is a text button. */
  public readonly type = input<Lab900ButtonType | undefined>(undefined);
  public readonly color = input<ThemePalette>('primary');
  /** Material icon name after the label. Not shown on the icon and fab types. */
  public readonly suffixIcon = input<string | undefined>();
  /** Material icon name before the label. Not shown on the icon and fab types. */
  public readonly prefixIcon = input<string | undefined>();
  /** A translation key. For the icon and fab types it is the icon name instead. */
  public readonly label = input.required<string>();
  /**
   * A translation key for the accessible name of the button. Set it on the icon and fab types: without it, a screen
   * reader reads the icon name.
   */
  public readonly ariaLabel = input<string | undefined>();
  public readonly disabled = input<boolean>(false);
  /** Read the icon names as names of icons registered in the `MatIconRegistry`, not as Material icon names. */
  public readonly svgIcon = input<boolean>(false);
  /** The `type` attribute of the `<button>` element. Use `submit` to submit a form. */
  public readonly buttonType = input<'button' | 'reset' | 'submit'>('button');
  /** CSS classes on the `<button>` element */
  public readonly containerClass = input<string | undefined>();
  /** The `id` of the `<button>` element */
  public readonly buttonId = input<string | undefined>();
  /** Clicks within this time after the previous click are ignored */
  public readonly throttleTimeInMs = input<number>(500);

  /** Emits on a click, at most once per `throttleTimeInMs` */
  public readonly btnClick = output<Event>();
}
