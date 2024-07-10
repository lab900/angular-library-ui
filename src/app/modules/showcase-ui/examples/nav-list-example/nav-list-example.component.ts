import { Component } from '@angular/core';
import { IsActiveMatchOptions } from '@angular/router';
import { Lab900NavListComponent, NavItemGroup } from '@lab900/ui';

@Component({
  selector: 'lab900-nav-list-example',
  standalone: true,
  imports: [Lab900NavListComponent],
  template:
    '<lab900-nav-list [navItemGroups]="navItemGroups" [showLevelArrows]="true" [routeMatchOptions]="matchOptions"/>',
})
export class NavListExampleComponent {
  public matchOptions: IsActiveMatchOptions = {
    paths: 'exact',
    queryParams: 'subset',
    matrixParams: 'subset',
    fragment: 'ignored',
  };
  public navItemGroups: NavItemGroup[] = [
    {
      icon: {
        name: 'home',
        position: 'right',
      },
      label: 'Nav group 1',
      items: [
        {
          label: 'External link',
          href: { url: 'https://www.google.be', target: '_blank' },
          icon: { name: 'open_in_new', position: 'right' },
        },
        {
          label: 'External link',
          href: { url: 'https://www.google.be', target: '_self' },
        },
        {
          icon: {
            name: 'edit',
          },
          label: 'Sub level',
          children: [
            {
              icon: {
                name: 'open_in_new',
                position: 'right',
              },
              label: 'Actual link',
              route: '/nav-list',
            },
            {
              label: 'Actual link',
              route: '/',
            },
            {
              label: 'Sub level 2',
              children: [
                {
                  label: 'Actual link',
                  href: { url: 'https://www.google.be', target: '_blank' },
                },
                {
                  label: 'Actual link',
                  route: '/',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      label: 'Nav group 2',
      items: [
        {
          label: 'Sub level',
          children: [
            {
              label: 'Actual link',
              route: '/nav-list',
            },
            {
              label: 'Actual link',
              route: '/',
            },
            {
              label: 'Sub level 2',
              children: [
                {
                  label: 'Actual link',
                  route: '/nav-list',
                },
                {
                  label: 'Actual link',
                  route: '/',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      label: 'Match Paths',
      items: [
        {
          label: 'Item with children',
          children: [
            {
              label: 'child 1',
              href: {
                url: '/nav-list',
                target: '_blank',
              },
            },
          ],
        },
        {
          label: 'Exact path / exact query params',
          route: '/nav-list',
          routeQueryParams: {
            tab: 'examples',
            extraParam: 'random',
          },
          routeMatchOptions: {
            paths: 'exact',
            queryParams: 'exact',
            matrixParams: 'ignored',
            fragment: 'ignored',
          },
        },
        {
          label: 'Exact path / query param subset',
          route: '/nav-list',
          routeQueryParams: {
            tab: 'examples',
          },
          routeMatchOptions: {
            paths: 'subset',
            queryParams: 'subset',
            matrixParams: 'ignored',
            fragment: 'ignored',
          },
        },
      ],
    },
  ];
}
