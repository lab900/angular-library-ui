import { ChangeDetectionStrategy, Component, computed, inject, input, linkedSignal, model } from '@angular/core';
import { outputFromObservable, toObservable } from '@angular/core/rxjs-interop';
import { MergeObject } from '../../models/merge-object.model';
import { MergeConfig } from '../../models/merge-config.model';
import { MatIcon, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import MergeIcon from '../../../../assets/icons/merge';
import { isDifferent } from '../../../utils/different.utils';
import { MatProgressBar } from '@angular/material/progress-bar';
import { MatRadioButton } from '@angular/material/radio';
import { Lab900MergerItemComponent } from '../merger-item/merger-item.component';
import { MatIconButton } from '@angular/material/button';

/** The values that start the merge again when one of them changes. */
interface MergeSources<T> {
  schema: MergeConfig<T>[];
  leftObject: MergeObject<T>;
  rightObject: MergeObject<T>;
  selectedSide: 'left' | 'right';
}

@Component({
  selector: 'lab900-merger',
  templateUrl: './merger.component.html',
  styleUrls: ['./merger.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatProgressBar, MatRadioButton, Lab900MergerItemComponent, MatIcon, MatIconButton],
})
export class Lab900MergerComponent<T> {
  private readonly iconRegistry = inject(MatIconRegistry);
  private readonly sanitizer = inject(DomSanitizer);

  public readonly leftObject = input.required<MergeObject<T>>();
  public readonly rightObject = input.required<MergeObject<T>>();
  public readonly fixed = input<boolean>(false);
  public readonly loading = input<boolean>(false);

  public readonly schemaInput = input.required<MergeConfig<T>[]>({ alias: 'schema' });

  /** The side that the merge starts from. The active values of the other side are merged into it. */
  public readonly selectedSide = model<'left' | 'right'>('right');

  /**
   * The schema with the merge choices of the user. A new schema comes in as it is. When the objects or the
   * master side change, the choices start again, but the disabled configs keep their state.
   */
  public readonly schema = linkedSignal<MergeSources<T>, MergeConfig<T>[]>({
    source: () => ({
      schema: this.schemaInput(),
      leftObject: this.leftObject(),
      rightObject: this.rightObject(),
      selectedSide: this.selectedSide(),
    }),
    computation: (source, previous) =>
      previous && previous.source.schema === source.schema ? this.clearChoices(previous.value) : source.schema,
  });
  public readonly schemaChange = outputFromObservable(toObservable(this.schema));

  private readonly master = computed(() => (this.selectedSide() === 'right' ? this.rightObject() : this.leftObject()));
  private readonly other = computed(() => (this.selectedSide() === 'right' ? this.leftObject() : this.rightObject()));

  /** The merged object. It is calculated again when the objects, the master side or the schema change. */
  public readonly result = computed<T>(() => {
    const master = this.master().data;
    const other = this.other().data;
    const result: T = { ...master };
    this.schema().forEach(config => {
      if (config.active) {
        this.applyConfig(result, config, master, other);
      }
    });
    return result;
  });
  public readonly resultChange = outputFromObservable(toObservable(this.result));

  protected readonly showLoading = computed(
    () => this.loading() || !this.leftObject() || !this.rightObject() || !this.schema()
  );

  protected readonly leftData = computed(() =>
    this.selectedSide() === 'left' ? this.result() : this.leftObject().data
  );

  protected readonly rightData = computed(() =>
    this.selectedSide() === 'right' ? this.result() : this.rightObject().data
  );

  protected readonly rows = computed(() =>
    this.schema().map((config, index) => ({ index, config, different: this.compare(config) }))
  );

  public constructor() {
    this.iconRegistry.addSvgIconLiteral('merge', this.sanitizer.bypassSecurityTrustHtml(MergeIcon));
  }

  /** Removes all merge choices that the user made. Configs that are disabled keep their state. */
  public reset(): void {
    this.schema.update(configs => this.clearChoices(configs));
  }

  public toggleActive(index: number): void {
    this.schema.update(configs =>
      configs.map((config, i) => (i === index ? { ...config, active: !config.active } : config))
    );
  }

  public switchMaster(): void {
    this.selectedSide.update(selectedSide => (selectedSide === 'right' ? 'left' : 'right'));
  }

  private clearChoices(configs: MergeConfig<T>[]): MergeConfig<T>[] {
    return configs.map(config => (config.disabled ? config : { ...config, active: false }));
  }

  private applyConfig(result: T, config: MergeConfig<T>, master: T, other: T): void {
    if (config.attribute) {
      const attribute = config.attribute as keyof T;
      if (config.combine) {
        (result as any)[attribute] = [...(master[attribute] as any[]), ...(other[attribute] as any[])];
      } else {
        result[attribute] = other[attribute];
      }
    } else {
      config.nestedObject?.forEach(nested => {
        const attribute = nested.attribute as keyof T;
        result[attribute] = other[attribute];
      });
    }
  }

  private compare(config: MergeConfig<T>): boolean {
    if (config?.combine) {
      return false;
    } else if (config?.nestedObject) {
      return config.nestedObject.some(nested => this.compareValues(nested.attribute!, config.attribute));
    } else if (config.attribute) {
      return this.compareValues(config.attribute);
    }
    return false;
  }

  private compareValues(attribute: string, parentAttribute?: string): boolean {
    const leftData = this.leftObject().data as any;
    const rightData = this.rightObject().data as any;
    const leftValue = parentAttribute ? leftData[parentAttribute]?.[attribute] : leftData[attribute];
    const rightValue = parentAttribute ? rightData[parentAttribute]?.[attribute] : rightData[attribute];

    return isDifferent(leftValue, rightValue);
  }
}
