import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { MergeObject } from '../../models/merge-object.model';
import { MergeConfig, MergeConfigBase } from '../../models/merge-config.model';
import { MatIcon, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import MergeIcon from '../../../../assets/icons/merge';
import { isDifferent } from '../../../utils/different.utils';
import { MatProgressBar } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
import { MatRadioButton } from '@angular/material/radio';
import { Lab900MergerItemComponent } from '../merger-item/merger-item.component';
import { MatIconButton } from '@angular/material/button';

@Component({
  selector: 'lab900-merger',
  templateUrl: './merger.component.html',
  styleUrls: ['./merger.component.scss'],
  standalone: true,
  imports: [
    MatProgressBar,
    CommonModule,
    MatRadioButton,
    Lab900MergerItemComponent,
    MatIcon,
    MatIconButton,
  ],
})
export class Lab900MergerComponent<T> implements OnInit, OnChanges {
  @Input()
  public readonly leftObject: MergeObject<T>;

  @Input()
  public readonly rightObject: MergeObject<T>;

  @Input()
  public schema: MergeConfig<T>[];

  @Input()
  public fixed = false;

  @Input()
  public loading: boolean;

  public selected: 'left' | 'right' = 'right';

  public result: T;

  public constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconLiteral(
      'merge',
      sanitizer.bypassSecurityTrustHtml(MergeIcon),
    );
  }

  public ngOnInit(): void {
    this.loading = !this.leftObject || !this.rightObject || !this.schema;
    this.result = { ...this.rightObject.data };
    this.setInitialValues(false);
  }

  public reset(): void {
    this.result = { ...this.getBase() };
    this.setInitialValues(true);
  }

  public setInitialValues(reset: boolean): void {
    this.schema.forEach((s, index) => {
      if (s.active) {
        if (reset && !s.disabled) {
          this.schema[index].active = false;
        } else {
          const baseValue = this.getBase(s.active)[s.attribute];
          if (s.combine) {
            this.result[s.attribute] = [
              ...this.result[s.attribute],
              ...baseValue,
            ];
          } else {
            this.result[s.attribute] = baseValue;
          }
        }
      }
    });
  }

  public compare(config: MergeConfig<T>): boolean {
    if (config?.combine) {
      return false;
    } else if (config?.nestedObject) {
      let different = false;
      for (let i = 0; i < config?.nestedObject.length && !different; i++) {
        different = this.compareValues(
          config.nestedObject[i].attribute,
          config.attribute,
        );
      }
      return different;
    } else {
      return this.compareValues(config.attribute);
    }
  }

  private compareValues(attribute: string, parentAttribute?: string): boolean {
    const leftValue = parentAttribute
      ? this.leftObject.data[parentAttribute][attribute]
      : this.leftObject.data[attribute];
    const rightValue = parentAttribute
      ? this.rightObject.data[parentAttribute][attribute]
      : this.rightObject.data[attribute];

    return isDifferent(leftValue, rightValue);
  }

  private getBase(active = false): T {
    if (active) {
      return this.selected === 'right'
        ? this.leftObject.data
        : this.rightObject.data;
    }
    return this.selected === 'right'
      ? this.rightObject.data
      : this.leftObject.data;
  }

  public toggleActive(config: MergeConfig<T>, index: number): void {
    const base: T = { ...this.getBase(!config.active) };
    if (config?.nestedObject) {
      config.nestedObject.forEach((c: MergeConfigBase) => {
        const attribute = config?.attribute ?? c.attribute;
        this.result[attribute] = base[attribute];
      });
    } else {
      this.result[config.attribute] = base[config.attribute];
    }
    if (!config.active && config.combine) {
      this.result[config.attribute] = [
        ...(this.leftObject.data[config.attribute] as T[]),
        ...(this.rightObject.data[config.attribute] as T[]),
      ];
    }

    this.schema[index] = { ...this.schema[index], active: !config.active };
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (
      (changes.leftObject || changes.rightObject) &&
      this.leftObject &&
      this.rightObject &&
      !(changes.leftObject.firstChange || changes.rightObject.firstChange)
    ) {
      this.reset();
    }
  }

  public switchMaster(): void {
    this.selected = this.selected === 'right' ? 'left' : 'right';
    this.reset();
  }
}
