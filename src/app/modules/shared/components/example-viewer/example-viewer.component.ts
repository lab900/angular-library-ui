import { ChangeDetectionStrategy, Component, computed, ElementRef, input, signal, viewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MarkdownModule } from 'ngx-markdown';
import { LowerCasePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

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
    MatCardModule,
    TranslateModule,
    MatButtonModule,
    MatTabsModule,
    MarkdownModule,
    LowerCasePipe,
    MatIconModule,
    MatTooltipModule,
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
