import { Component, signal, viewChild } from '@angular/core';
import { mergerDataExample } from './config/merger-data-example';
import { Lab900MergerComponent, MergeConfig, MergeObject } from '@lab900/ui';
import { mergerSchemaExample } from './config/merger-schema-example';
import { MergerDataExample } from './models/merger-data-example.model';
import { TranslatePipe } from '@ngx-translate/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'lab900-merger-example',
  imports: [TranslatePipe, Lab900MergerComponent, MatButton],
  template: `
    <div class="merger-example-header">
      <span>master: {{ master() }}</span>
      <button mat-flat-button color="primary" (click)="mergerComponent()?.reset()">
        {{ 'reset' | translate }}
      </button>
    </div>
    <lab900-merger
      [leftObject]="exampleData[0]"
      [rightObject]="exampleData[1]"
      [schema]="exampleSchema"
      [(selectedSide)]="master" />
    <button style="margin-right: 1rem" mat-raised-button color="primary" (click)="showResult()">
      {{ 'log_result' | translate }}
    </button>
  `,
  styles: [
    `
      .merger-example-header {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1rem;
      }
    `,
  ],
})
export class MergerExampleComponent {
  public readonly exampleData: MergeObject<MergerDataExample>[] = mergerDataExample;
  public readonly exampleSchema: MergeConfig<MergerDataExample>[] = mergerSchemaExample;

  public readonly master = signal<'left' | 'right'>('right');

  public readonly mergerComponent = viewChild(Lab900MergerComponent<MergerDataExample>);

  public showResult(): void {
    console.log(this.mergerComponent()?.result());
  }
}
