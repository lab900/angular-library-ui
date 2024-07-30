import { MergeConfig } from '@lab900/ui';
import { of } from 'rxjs';
import { CustomExampleComponent } from '../custom-example.component';
import { MergerDataExample } from '../models/merger-data-example.model';

export const mergerSchemaExample: MergeConfig<MergerDataExample>[] = [
  {
    attribute: 'address',
    nestedObject: [
      {
        attribute: 'country',
        label: 'label.street',
      },
      {
        attribute: 'street',
        label: 'label.street',
      },
      {
        attribute: 'number',
        label: 'label.number',
      },
      {
        attribute: 'box',
        label: 'label.street',
      },
    ],
  },
  {
    attribute: 'dateOfBirth',
    label: 'label.birthday',
  },
  {
    attribute: 'languages',
    label: 'language',
    formatter: data => of(data.sort().join(', ')),
    nextLine: true,
    combine: true,
    active: true,
    disabled: true,
  },
  {
    attribute: 'text',
    component: CustomExampleComponent,
  },
  {
    nestedObject: [
      {
        attribute: 'name',
        label: 'label.last-name',
      },
      {
        attribute: 'firstName',
        label: 'label.first-name',
      },
    ],
  },
];
