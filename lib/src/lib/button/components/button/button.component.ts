import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Lab900ButtonType } from '../../models/button.model';

@Component({
  selector: 'lab900-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None,
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
  public containerClass?: string;

  @Output()
  public btnClick = new EventEmitter<any>();

  public get classList(): { suffixIcon: boolean; prefixIcon: boolean } {
    return { suffixIcon: !!this.suffixIcon, prefixIcon: !!this.prefixIcon };
  }
}
