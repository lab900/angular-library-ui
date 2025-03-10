import { ChangeDetectionStrategy, Component, computed, ElementRef, input, signal, viewChild } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { LowerCasePipe } from '@angular/common';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatTooltip } from '@angular/material/tooltip';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { MarkdownComponent } from 'ngx-markdown';

export interface ExampleFile {
  extension: string;
  data: string;
  format: string;
}

@Component({
  selector: 'lab900-example-viewer',
  templateUrl: './example-viewer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatCardTitle,
    TranslatePipe,
    LowerCasePipe,
    MatCard,
    MatCardHeader,
    MatTooltip,
    MatIconButton,
    MatIcon,
    MatCardContent,
    MatTabGroup,
    MatTab,
    MarkdownComponent,
  ],
})
export class ExampleViewerComponent {
  public readonly extensions = input<string[]>(['HTML', 'TS', 'SCSS']);
  public readonly fileDir = input<string | undefined>(undefined);
  public readonly exampleTitle = input<string>('Example');

  protected readonly exampleComponent = viewChild<ElementRef>('exampleComponent');
  protected readonly exampleName = computed(() =>
    this.exampleComponent()?.nativeElement?.children?.[0]?.localName.replace('lab900-', '')
  );

  protected readonly examplePath = computed(
    () => 'examples/' + (this.fileDir() || this.exampleName()) + '/' + this.exampleName() + '.component.'
  );

  protected readonly showSource = signal(false);

  protected toggleSourceView(): void {
    this.showSource.set(!this.showSource());
  }
}
