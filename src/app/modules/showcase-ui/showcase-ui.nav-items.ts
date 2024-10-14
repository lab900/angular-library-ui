import { NavItemGroup } from '@lab900/ui';
import { showcaseUiConfig } from './showcase-ui.constants';
import { MatDrawer } from '@angular/material/sidenav';

function navigationFinished(matDrawer?: MatDrawer, shouldClose?: boolean) {
  if (matDrawer && shouldClose) {
    matDrawer.close();
  }
}

export const showcaseUiNavItems = (matDrawer?: MatDrawer, shouldClose?: boolean): NavItemGroup[] => [
  {
    label: showcaseUiConfig?.title,
    items: [
      {
        label: 'label.guides',
        children: [
          {
            label: 'label.getting-started',
            route: 'getting-started',
            navigationFinished: () => navigationFinished(matDrawer, shouldClose),
          },
        ],
      },
      {
        label: 'label.components',
        children: [
          {
            label: 'Buttons',
            route: 'buttons',
            navigationFinished: () => navigationFinished(matDrawer, shouldClose),
          },
          {
            label: 'Nav List',
            route: 'nav-list',
            navigationFinished: () => navigationFinished(matDrawer, shouldClose),
          },
          {
            label: 'Alerts',
            route: 'alerts',
            navigationFinished: () => navigationFinished(matDrawer, shouldClose),
          },
          {
            label: 'Table',
            route: 'table',
            navigationFinished: () => navigationFinished(matDrawer, shouldClose),
          },
          {
            label: 'Page header',
            route: 'page-header',
            navigationFinished: () => navigationFinished(matDrawer, shouldClose),
          },
          {
            label: 'Merger',
            route: 'merger',
            navigationFinished: () => navigationFinished(matDrawer, shouldClose),
          },
        ],
      },
    ],
  },
];
