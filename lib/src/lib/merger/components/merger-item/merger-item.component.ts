import {
  ChangeDetectionStrategy,
  Component,
  ComponentRef,
  computed,
  effect,
  input,
  untracked,
  viewChild,
  ViewContainerRef,
} from '@angular/core';
import { MergeConfig, MergeConfigBase } from '../../models/merge-config.model';
import { isObservable, Observable, of } from 'rxjs';
import { MergerItemComponent } from '../../abstracts/custom-component.abstract';
import { TranslatePipe } from '@ngx-translate/core';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'lab900-merger-item',
  templateUrl: './merger-item.component.html',
  styleUrls: ['./merger-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.selected]': 'active()',
  },
  imports: [TranslatePipe, AsyncPipe],
})
export class Lab900MergerItemComponent<T> {
  public readonly config = input.required<MergeConfig<T>>();
  public readonly data = input.required<T>();
  public readonly active = input<boolean>(false);

  protected readonly flexDirection = computed(() =>
    this.config().nextLine || this.config().nestedObject ? 'column' : 'row'
  );

  /** The values of the nested configs. The list is empty when the config has no nested object. */
  protected readonly nestedValues = computed(() => {
    const config = this.config();
    return (config.nestedObject ?? []).map(nested => ({
      attribute: nested.attribute,
      label: nested.label ?? '',
      value: this.display(nested, config.attribute),
    }));
  });

  /** The value of the config itself. */
  protected readonly value = computed(() => this.display(this.config()));

  private readonly customComponentContainer = viewChild('customComponentContainer', { read: ViewContainerRef });

  private readonly customComponent = computed(() => this.config().component);

  private customComponentRef?: ComponentRef<MergerItemComponent<T>>;

  public constructor() {
    effect(() => {
      const container = this.customComponentContainer();
      const component = this.customComponent();
      this.customComponentRef?.destroy();
      this.customComponentRef = undefined;
      if (container && component) {
        const componentRef = container.createComponent(component);
        componentRef.setInput('data', untracked(this.data));
        componentRef.location.nativeElement.style.width = '100%';
        this.customComponentRef = componentRef;
      }
    });

    effect(() => {
      const data = this.data();
      this.customComponentRef?.setInput('data', data);
    });
  }

  private display(config: MergeConfigBase, parentAttribute?: string): Observable<any> {
    const data = this.data();
    const value = parentAttribute
      ? (data?.[parentAttribute as keyof T] as any)?.[config.attribute as any]
      : data?.[config.attribute as keyof T];
    const formattedValue = config?.formatter ? config.formatter(value) : value;
    return isObservable(formattedValue) ? formattedValue : of(formattedValue);
  }
}
