import { NavItemGroup } from '@lab900/ui';
import { showcaseUiConfig } from './showcase-ui.constants';

export const showcaseUiNavItems: NavItemGroup[] = [
  {
    label: showcaseUiConfig?.title,
    items: [
      {
        label: 'label.guides',
        children: [
          {
            label: 'label.getting-started',
            route: 'getting-started',
          },
        ],
      },
      {
        label: 'label.components',
        children: [
          {
            label: 'Buttons',
            route: 'buttons',
          },
          {
            label: 'Nav List',
            route: 'nav-list',
          },
          {
            label: 'Data List',
            route: 'data-list',
          },
          {
            label: 'Sharing',
            route: 'sharing',
          },
          {
            label: 'Alerts',
            route: 'alerts',
          },
          {
            label: 'Table',
            route: 'table',
          },
          {
            label: 'Page header',
            route: 'page-header',
          },
          {
            label: 'Merger',
            route: 'merger',
          },
        ],
      },
    ],
  },
];
