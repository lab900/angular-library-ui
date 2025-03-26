import { Component, ViewChild } from '@angular/core';
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
      <button mat-flat-button color="primary" (click)="mergerComponent?.reset()">
        {{ 'reset' | translate }}
      </button>
    </div>
    <lab900-merger [leftObject]="exampleData[0]" [rightObject]="exampleData[1]" [schema]="exampleSchema" />
    <button style="margin-right: 1rem" mat-raised-button color="primary" (click)="showResult()">
      {{ 'log_result' | translate }}
    </button>
  `,
  styles: [
    `
      .merger-example-header {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 1rem;
      }
    `,
  ],
})
export class MergerExampleComponent {
  public exampleData: MergeObject<MergerDataExample>[] = mergerDataExample;
  public exampleSchema: MergeConfig<MergerDataExample>[] = mergerSchemaExample;

  @ViewChild(Lab900MergerComponent)
  public mergerComponent?: Lab900MergerComponent<MergerDataExample>;

  public showResult(): void {
    console.log(this.mergerComponent?.result);
  }
}
