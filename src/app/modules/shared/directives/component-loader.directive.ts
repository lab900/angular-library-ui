import {
  Directive,
  Input,
  OnChanges,
  SimpleChanges,
  Type,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[lab900ComponentLoader]',
})
export class ComponentLoaderDirective implements OnChanges {
  @Input()
  private lab900ComponentLoader!: Type<any>;

  public constructor(public container: ViewContainerRef) {}

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.lab900ComponentLoader) {
      this.loadComponent();
    }
  }

  private loadComponent(): void {
    this.container.clear();
    if (this.lab900ComponentLoader) {
      this.container.createComponent(this.lab900ComponentLoader);
    }
  }
}
