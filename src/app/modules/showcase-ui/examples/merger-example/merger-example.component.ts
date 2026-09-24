import { Component, input, signal, viewChild } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { Lab900MergerComponent, MergeConfig, MergeObject, MergerItemComponent } from '@lab900/ui';
import { TranslatePipe } from '@ngx-translate/core';
import { MatButton } from '@angular/material/button';

interface Person {
  name: string;
  firstName: string;
  languages: string[];
  address: {
    country: string;
    street: string;
    number: number;
    box: string;
  };
  bio?: string;
  dateOfBirth?: Date;
}

/**
 * A custom component to show a value. The merger sets `data` to the whole object of its side.
 */
@Component({
  selector: 'lab900-merger-bio',
  template: `<p>{{ data()?.bio }}</p>`,
})
export class MergerBioComponent implements MergerItemComponent<Person> {
  public readonly data = input<Person>();
}

@Component({
  selector: 'lab900-merger-example',
  imports: [TranslatePipe, Lab900MergerComponent, MatButton, JsonPipe],
  styles: `
    .merger-example-header {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1rem;
    }
  `,
  template: `
    <div class="merger-example-header">
      <span>Master side: {{ selectedSide() }}</span>
      <button mat-flat-button (click)="merger().reset()">{{ 'reset' | translate }}</button>
    </div>

    <lab900-merger
      [leftObject]="left"
      [rightObject]="right"
      [schema]="schema"
      [(selectedSide)]="selectedSide"
      (resultChange)="result.set($event)" />

    <h4>Result</h4>
    <pre>{{ result() | json }}</pre>
  `,
})
export class MergerExampleComponent {
  protected readonly merger = viewChild.required(Lab900MergerComponent<Person>);

  // the side the merge starts from; the rows you select on the other side are merged into it
  protected readonly selectedSide = signal<'left' | 'right'>('right');
  protected readonly result = signal<Person | undefined>(undefined);

  protected readonly left: MergeObject<Person> = {
    title: 'Axelle Red, a title that is too long to fit in the box',
    data: {
      name: 'Axelle',
      firstName: 'Red',
      address: { country: 'Belgium', street: 'Example street', number: 12, box: 'A' },
      languages: ['Dutch', 'English'],
    },
  };

  protected readonly right: MergeObject<Person> = {
    title: 'Axelle Blue',
    data: {
      name: 'Axelle',
      firstName: 'Blue',
      address: { country: 'Netherlands', street: 'Example street', number: 13, box: 'A' },
      languages: ['French', 'German'],
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum nunc vel convallis malesuada.',
      dateOfBirth: new Date(1990, 4, 17),
    },
  };

  // every config is one row in the merger
  protected readonly schema: MergeConfig<Person>[] = [
    // a config with an attribute shows one property
    // formatter turns the value into the text of the row
    {
      attribute: 'dateOfBirth',
      label: 'label.birthday',
      formatter: (date?: Date) => date?.toLocaleDateString() ?? '',
    },
    // nestedObject shows the fields of an object property together, and merges them together
    {
      attribute: 'address',
      nestedObject: [
        { attribute: 'country', label: 'label.country' },
        { attribute: 'street', label: 'label.street' },
        { attribute: 'number', label: 'label.number' },
        { attribute: 'box', label: 'label.box' },
      ],
    },
    // combine: true merges both arrays instead of replacing one; active and disabled fix the choice
    {
      attribute: 'languages',
      label: 'language',
      formatter: (languages: string[]) => [...languages].sort().join(', '),
      nextLine: true,
      combine: true,
      active: true,
      disabled: true,
    },
    // component shows the value with your own component
    { attribute: 'bio', component: MergerBioComponent },
    // without an attribute, nestedObject groups top-level properties in one row
    {
      nestedObject: [
        { attribute: 'name', label: 'label.last-name' },
        { attribute: 'firstName', label: 'label.first-name' },
      ],
    },
  ];
}
