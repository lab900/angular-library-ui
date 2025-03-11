import {
  AfterViewInit,
  Component,
  ComponentRef,
  computed,
  HostBinding,
  input,
  Input,
  OnChanges,
  SimpleChanges,
  untracked,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { MergeConfig } from '../../models/merge-config.model';
import { isObservable, Observable, of } from 'rxjs';
import { MergerItemComponent } from '../../abstracts/custom-component.abstract';
import { TranslatePipe } from '@ngx-translate/core';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'lab900-merger-item',
  templateUrl: './merger-item.component.html',
  styleUrls: ['./merger-item.component.scss'],
  imports: [TranslatePipe, AsyncPipe],
})
export class Lab900MergerItemComponent<T> implements AfterViewInit, OnChanges {
  public readonly config = input.required<MergeConfig<T>>();
  public readonly data = input.required<T>();

  protected readonly flexDirection = computed(() =>
    this.config().nextLine || this.config().nestedObject ? 'column' : 'row'
  );

  @Input()
  @HostBinding('class.selected')
  public active!: boolean;

  @ViewChild('customComponentContainer', { read: ViewContainerRef })
  private customComponentContainer!: ViewContainerRef;

  private customComponentRef?: ComponentRef<MergerItemComponent<T>>;

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.data && this.customComponentRef) {
      this.customComponentRef.setInput('data', this.data());
    }
  }

  public ngAfterViewInit(): void {
    this.createComponent();
  }

  public display(config: MergeConfig<T>, parentAttribute?: string): Observable<any> {
    const value = parentAttribute
      ? (this.data()?.[parentAttribute as keyof T] as any)?.[config.attribute as any]
      : this.data()?.[config.attribute as keyof T];
    const formattedValue = config?.formatter ? config.formatter(value) : value;
    return isObservable(formattedValue) ? formattedValue : of(formattedValue);
  }

  private createComponent(): void {
    const component = this.config().component;
    if (component) {
      this.customComponentRef = this.customComponentContainer.createComponent(component);
      setTimeout(() => {
        if (this.customComponentRef) {
          this.customComponentRef.setInput('data', untracked(this.data));
          this.customComponentRef.location.nativeElement.style.width = '100%';
        }
      });
    }
  }
}
