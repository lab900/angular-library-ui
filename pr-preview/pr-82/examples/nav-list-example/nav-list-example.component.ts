import { Component } from '@angular/core';
import { IsActiveMatchOptions } from '@angular/router';
import { Lab900NavListComponent, NavItemGroup } from '@lab900/ui';

@Component({
  selector: 'lab900-nav-list-example',
  imports: [Lab900NavListComponent],
  template: `
    <lab900-nav-list [navItemGroups]="navItemGroups" [showLevelArrows]="true" [routeMatchOptions]="matchOptions" />
  `,
})
export class NavListExampleComponent {
  // the default for every item: the path must match, extra query params are allowed
  protected readonly matchOptions: IsActiveMatchOptions = {
    paths: 'exact',
    queryParams: 'subset',
    matrixParams: 'subset',
    fragment: 'ignored',
  };

  protected readonly navItemGroups: NavItemGroup[] = [
    {
      label: 'Links',
      icon: { name: 'link', position: 'right' },
      items: [
        { label: 'Route: Table page', route: '/table', icon: { name: 'table_chart' } },
        { label: 'Route: this page (active)', route: '/nav-list' },
        {
          label: 'External, new tab',
          href: { url: 'https://angular.dev', target: '_blank' },
          icon: { name: 'open_in_new', position: 'right' },
        },
        { label: 'External, same tab', href: { url: 'https://angular.dev', target: '_self' } },
      ],
    },
    {
      label: 'Nested levels',
      items: [
        {
          label: 'Level 1',
          icon: { name: 'folder' },
          children: [
            { label: 'Level 2: Buttons page', route: '/buttons' },
            {
              label: 'Level 2',
              children: [
                { label: 'Level 3: Alerts page', route: '/alerts' },
                { label: 'Level 3: this page (active)', route: '/nav-list' },
              ],
            },
          ],
        },
      ],
    },
    {
      label: 'Route matching',
      items: [
        {
          // only active with exactly these query params, so the extra param keeps it inactive here
          label: 'Exact query params (inactive)',
          route: '/nav-list',
          routeQueryParams: { tab: 'examples', extraParam: 'random' },
          routeMatchOptions: { paths: 'exact', queryParams: 'exact', matrixParams: 'ignored', fragment: 'ignored' },
        },
        {
          // active as long as the current url contains these query params
          label: 'Query param subset (active)',
          route: '/nav-list',
          routeQueryParams: { tab: 'examples' },
          routeMatchOptions: { paths: 'subset', queryParams: 'subset', matrixParams: 'ignored', fragment: 'ignored' },
        },
      ],
    },
  ];
}
