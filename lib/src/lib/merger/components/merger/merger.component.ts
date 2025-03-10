import { Component, input, Input, model, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MergeObject } from '../../models/merge-object.model';
import { MergeConfig, MergeConfigBase } from '../../models/merge-config.model';
import { MatIcon, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import MergeIcon from '../../../../assets/icons/merge';
import { isDifferent } from '../../../utils/different.utils';
import { MatProgressBar } from '@angular/material/progress-bar';
import { MatRadioButton } from '@angular/material/radio';
import { Lab900MergerItemComponent } from '../merger-item/merger-item.component';
import { MatIconButton } from '@angular/material/button';
import { NgClass } from '@angular/common';

@Component({
  selector: 'lab900-merger',
  templateUrl: './merger.component.html',
  styleUrls: ['./merger.component.scss'],
  imports: [MatProgressBar, MatRadioButton, Lab900MergerItemComponent, MatIcon, MatIconButton, NgClass],
})
export class Lab900MergerComponent<T> implements OnInit, OnChanges {
  @Input()
  public readonly leftObject!: MergeObject<T>;

  @Input()
  public readonly rightObject!: MergeObject<T>;

  public readonly schema = model.required<MergeConfig<T>[]>();
  public readonly fixed = input<boolean>(false);
  public readonly loading = model<boolean>(false);

  public selected: 'left' | 'right' = 'right';

  public result?: T;

  public constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconLiteral('merge', sanitizer.bypassSecurityTrustHtml(MergeIcon));
  }

  public ngOnInit(): void {
    this.loading.set(!this.leftObject || !this.rightObject || !this.schema());
    this.result = { ...this.rightObject.data };
    this.setInitialValues(false);
  }

  public reset(): void {
    this.result = { ...this.getBase() };
    this.setInitialValues(true);
  }

  public setInitialValues(reset: boolean): void {
    const schema = this.schema();
    schema.forEach((s, index) => {
      if (s.active && this.result) {
        if (reset && !s.disabled) {
          schema[index].active = false;
        } else if (s.attribute) {
          const attr = s.attribute as keyof T;
          const baseValue = this.getBase(s.active)[attr] as any;
          const value = this.result[attr] as any;
          if (s.combine) {
            this.result[attr] = [...value, ...baseValue] as any;
          } else {
            this.result[attr] = baseValue;
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
        different = this.compareValues(config.nestedObject[i].attribute!, config.attribute);
      }
      return different;
    } else if (config.attribute) {
      return this.compareValues(config.attribute);
    }
    return false;
  }

  private compareValues(attribute: string, parentAttribute?: string): boolean {
    const leftValue = parentAttribute
      ? (this.leftObject.data as any)[parentAttribute][attribute]
      : (this.leftObject.data as any)[attribute];
    const rightValue = parentAttribute
      ? (this.rightObject.data as any)[parentAttribute][attribute]
      : (this.rightObject.data as any)[attribute];

    return isDifferent(leftValue, rightValue);
  }

  private getBase(active = false): T {
    if (active) {
      return this.selected === 'right' ? this.leftObject.data : this.rightObject.data;
    }
    return this.selected === 'right' ? this.rightObject.data : this.leftObject.data;
  }

  public toggleActive(config: MergeConfig<T>, index: number): void {
    const base: T = { ...this.getBase(!config.active) };
    if (config?.nestedObject && this.result) {
      config.nestedObject.forEach((c: MergeConfigBase) => {
        const attribute = (config?.attribute ?? c.attribute) as keyof T;
        (this.result as any)[attribute] = base[attribute];
      });
    } else if (config.attribute && this.result) {
      (this.result as any)[config.attribute] = (base as any)[config.attribute];
    }
    if (!config.active && config.combine && config.attribute) {
      const attribute = config?.attribute as keyof T;
      (this.result as any)[attribute] = [
        ...(this.leftObject.data[attribute] as T[]),
        ...(this.rightObject.data[attribute] as T[]),
      ];
    }

    this.schema.update(current => {
      current[index] = { ...current[index], active: !config.active };
      return current;
    });
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
