import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Lab900ButtonType } from '../../models/button.model';
import { NgClass, NgTemplateOutlet } from '@angular/common';
import {
  MatButton,
  MatFabButton,
  MatIconButton,
  MatMiniFabButton,
} from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { PreventDoubleClickDirective } from '../../directives/preventDoubleClick.directive';

@Component({
  selector: 'lab900-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgTemplateOutlet,
    NgClass,
    MatButton,
    MatIconButton,
    MatIcon,
    MatFabButton,
    TranslateModule,
    MatMiniFabButton,
    PreventDoubleClickDirective,
  ],
})
export class Lab900ButtonComponent {
  @Input()
  public type?: Lab900ButtonType;

  @Input()
  public color: ThemePalette = 'primary';

  @Input()
  public suffixIcon?: string;

  @Input()
  public prefixIcon?: string;

  @Input()
  public label: string;

  @Input()
  public disabled?: boolean;

  @Input()
  public svgIcon = false;

  @Input()
  public buttonType?: 'button' | 'reset' | 'submit' = 'button';

  @Input()
  public containerClass?: string;

  @Output()
  public btnClick = new EventEmitter<any>();

  public get classList(): { suffixIcon: boolean; prefixIcon: boolean } {
    return { suffixIcon: !!this.suffixIcon, prefixIcon: !!this.prefixIcon };
  }
}
