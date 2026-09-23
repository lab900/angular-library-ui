import { Routes } from '@angular/router';
import { ShowcaseRoute } from '../shared/models/showcase-route.model';
import { ShowcaseExample } from '../shared/models/showcase-example.model';
import { AlertsExampleComponent } from './examples/alerts-example/alerts-example.component';
import { NavListExampleComponent } from './examples/nav-list-example/nav-list-example.component';
import { TableExampleComponent } from './examples/table-example/table-example.component';
import { PageHeaderExampleComponent } from './examples/page-header-example/page-header-example.component';
import { PageHeaderActionsExampleComponent } from './examples/page-header-actions-example/page-header-actions-example.component';
import { MergerExampleComponent } from './examples/merger-example/merger-example.component';
import { ButtonExampleComponent } from './examples/button-example/button-example.component';
import { showcaseUiConfig } from './showcase-ui.constants';
import { showcaseUiNavItems } from './showcase-ui.nav-items';
import { TableSortingExampleComponent } from './examples/table-sorting-example/table-sorting-example.component';
import { TableInlineEditingExampleComponent } from './examples/table-inline-editing-example/table-inline-editing-example.component';
import { TableCustomContentExampleComponent } from './examples/table-custom-content-example/table-custom-content-example.component';
import { TableRowActionsExampleComponent } from './examples/table-row-actions-example/table-row-actions-example.component';
import { TableSelectionExampleComponent } from './examples/table-selection-example/table-selection-example.component';
import { TableDragAndDropExampleComponent } from './examples/table-drag-and-drop-example/table-drag-and-drop-example.component';
import { TableTabsExampleComponent } from './examples/table-tabs-example/table-tabs-example.component';
import { TableExpandableRowsExampleComponent } from './examples/table-expandable-rows-example/table-expandable-rows-example.component';
import { ActionButtonExampleComponent } from './examples/action-button-example/action-button-example.component';
import { alertsApi, buttonsApi, mergerApi, navListApi, pageHeaderApi, tableApi } from './showcase-ui.api';

export default [
  {
    path: '',
    loadComponent: () => import('../shared/components/showcase-home/showcase-home.component'),
    data: { config: showcaseUiConfig, nav: showcaseUiNavItems() },
  },
  {
    path: 'getting-started',
    loadComponent: () => import('../shared/components/markdown-page/markdown-page.component'),
    data: { filePath: 'guides/getting-started.md' },
  },
  new ShowcaseRoute(
    'buttons',
    'Buttons',
    [
      new ShowcaseExample(
        ButtonExampleComponent,
        'Buttons',
        'Every button type, with an icon and disabled. Clicks are throttled, 500 ms by default (throttleTimeInMs).'
      ),
      new ShowcaseExample(
        ActionButtonExampleComponent,
        'Action buttons',
        'A config object instead of inputs. Every field accepts a value, a function of the data, or a signal.'
      ),
    ],
    undefined,
    buttonsApi
  ),
  new ShowcaseRoute(
    'alerts',
    'Alerts',
    [new ShowcaseExample(AlertsExampleComponent, 'Alerts', 'The four alert types. The content is projected.')],
    undefined,
    alertsApi
  ),
  new ShowcaseRoute(
    'nav-list',
    'Nav list',
    [
      new ShowcaseExample(
        NavListExampleComponent,
        'Nav list',
        'Routes, external links, nested levels, and how routeMatchOptions decides which item is active.'
      ),
    ],
    undefined,
    navListApi
  ),
  new ShowcaseRoute(
    'table',
    'Table',
    [
      new ShowcaseExample(
        TableExampleComponent,
        'Basic table',
        'The minimum: tableCells for the columns, data, and trackByTableFn. Nested keys and cellFormatter.'
      ),
      new ShowcaseExample(
        TableSortingExampleComponent,
        'Sorting',
        'Sortable columns with multiSort. The table emits sortChange; you sort the data.'
      ),
      new ShowcaseExample(
        TableInlineEditingExampleComponent,
        'Inline editing',
        'Input and select editors per column, disabled per row. The table emits cellValueChanged; you save the value.'
      ),
      new ShowcaseExample(
        TableCustomContentExampleComponent,
        'Custom content and styling',
        'Header actions, content slots, an empty state, row and cell classes, footers and row clicks.'
      ),
      new ShowcaseExample(
        TableRowActionsExampleComponent,
        'Row actions',
        'Actions at the start and end of each row, with a tooltip, state and sub actions per row.'
      ),
      new ShowcaseExample(
        TableSelectionExampleComponent,
        'Selectable rows',
        'Checkboxes with select all, an initial selection, and rows that cannot be selected.'
      ),
      new ShowcaseExample(
        TableDragAndDropExampleComponent,
        'Drag and drop rows',
        'A draggable row action turns on drag and drop. The table emits tableRowOrderChange; you reorder the data.'
      ),
      new ShowcaseExample(
        TableTabsExampleComponent,
        'Tabs',
        'Tabs above the table, one with its own columns. Bind activeTabId to load the data of the tab.'
      ),
      new ShowcaseExample(
        TableExpandableRowsExampleComponent,
        'Expandable rows',
        'A lab900TableRowDetail template below a row. Click a row to expand it; bind expandedRows to control it.'
      ),
    ],
    undefined,
    tableApi
  ),
  new ShowcaseRoute(
    'page-header',
    'Page header',
    [
      new ShowcaseExample(
        PageHeaderExampleComponent,
        'Page header',
        'A title, breadcrumbs built from data, tabs and actions. The tabs need a mat-tab-nav-panel.'
      ),
      new ShowcaseExample(
        PageHeaderActionsExampleComponent,
        'Page header actions',
        'Actions aligned left and right, an icon action and an action with a menu.'
      ),
    ],
    undefined,
    pageHeaderApi
  ),
  new ShowcaseRoute(
    'merger',
    'Merger',
    [
      new ShowcaseExample(
        MergerExampleComponent,
        'Merger',
        'Compare two objects and pick values from the other side. The schema sets one row per property.'
      ),
    ],
    undefined,
    mergerApi
  ),
] satisfies Routes;
