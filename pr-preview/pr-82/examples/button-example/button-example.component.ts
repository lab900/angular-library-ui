import { Component, signal } from '@angular/core';
import { Lab900ButtonComponent } from '@lab900/ui';

@Component({
  selector: 'lab900-button-example',
  imports: [Lab900ButtonComponent],
  styles: `
    .button-grid {
      display: grid;
      grid-template-columns: 80px repeat(3, max-content);
      gap: 16px 24px;
      align-items: center;
    }
    .column-title {
      font-weight: 500;
    }
  `,
  template: `
    <div class="button-grid">
      <span></span>
      <span class="column-title">Default</span>
      <span class="column-title">With icon</span>
      <span class="column-title">Disabled</span>

      <span class="column-title">raised</span>
      <lab900-button type="raised" label="Save" (btnClick)="clicked.set('raised')" />
      <lab900-button type="raised" label="Save" prefixIcon="save" (btnClick)="clicked.set('raised with icon')" />
      <lab900-button type="raised" label="Save" [disabled]="true" />

      <span class="column-title">stroked</span>
      <lab900-button type="stroked" label="Edit" (btnClick)="clicked.set('stroked')" />
      <lab900-button type="stroked" label="Edit" prefixIcon="edit" (btnClick)="clicked.set('stroked with icon')" />
      <lab900-button type="stroked" label="Edit" [disabled]="true" />

      <span class="column-title">flat</span>
      <lab900-button type="flat" label="Open" (btnClick)="clicked.set('flat')" />
      <lab900-button type="flat" label="Open" suffixIcon="open_in_new" (btnClick)="clicked.set('flat with icon')" />
      <lab900-button type="flat" label="Open" [disabled]="true" />

      <span class="column-title">accent</span>
      <lab900-button type="raised" color="accent" label="Accent" (btnClick)="clicked.set('accent')" />
      <span></span>
      <span></span>
    </div>

    <p>For the icon types, the label is the name of the Material icon.</p>
    <div class="button-grid">
      <span class="column-title">icon</span>
      <span class="column-title">fab</span>
      <span class="column-title">mini-fab</span>
      <span></span>

      <lab900-button type="icon" label="delete" (btnClick)="clicked.set('icon')" />
      <lab900-button type="fab" label="add" (btnClick)="clicked.set('fab')" />
      <lab900-button type="mini-fab" label="add" (btnClick)="clicked.set('mini-fab')" />
    </div>

    <p>Last clicked: {{ clicked() ?? '-' }}</p>
  `,
})
export class ButtonExampleComponent {
  protected readonly clicked = signal<string | undefined>(undefined);
}
