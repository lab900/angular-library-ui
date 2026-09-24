import { ShowcaseApiSection } from '../shared/models/showcase-api.model';

// The API tab of each page. The names must be exported from `@lab900/ui`; run `npm run docs:api` after a change.

export const buttonsApi: ShowcaseApiSection[] = [
  {
    title: 'Components',
    description:
      'Use lab900-button for one button with inputs, lab900-action-button for a button from a config object.',
    symbols: ['Lab900ButtonComponent', 'Lab900ActionButtonComponent', 'Lab900ActionButtonToggleComponent'],
  },
  {
    title: 'Configuration',
    description: 'An ActionButton configures one action button. The page header and the table take lists of them.',
    symbols: ['ActionButton', 'ActionButtonEvent', 'Lab900ButtonType'],
  },
  {
    title: 'Directives',
    description: 'The building blocks of the buttons, for your own elements.',
    symbols: ['Lab900ActionDirective', 'PreventDoubleClickDirective'],
  },
];

export const alertsApi: ShowcaseApiSection[] = [
  {
    title: 'Component',
    symbols: ['AlertComponent'],
  },
  {
    title: 'Types',
    symbols: ['Alert'],
  },
];

export const navListApi: ShowcaseApiSection[] = [
  {
    title: 'Components',
    symbols: ['Lab900NavListComponent', 'IconComponent'],
  },
  {
    title: 'Configuration',
    description: 'The list takes groups; a group holds items, and an item can hold more items.',
    symbols: ['NavItemGroup', 'NavItem', 'Icon'],
  },
];

export const pageHeaderApi: ShowcaseApiSection[] = [
  {
    title: 'Component',
    description: 'The actions are ActionButton configs, documented on the Buttons page.',
    symbols: ['Lab900PageHeaderComponent'],
  },
  {
    title: 'Configuration',
    symbols: ['PageHeaderNavItem', 'BreadCrumb'],
  },
  {
    title: 'Building blocks',
    description: 'The page header renders these itself. Use them on their own for a custom header.',
    symbols: ['BreadCrumbsComponent', 'PageHeaderNavItemComponent'],
  },
];

export const mergerApi: ShowcaseApiSection[] = [
  {
    title: 'Component',
    symbols: ['Lab900MergerComponent'],
  },
  {
    title: 'Configuration',
    description: 'Two MergeObjects to compare, and a schema of MergeConfigs: one row per config.',
    symbols: ['MergeObject', 'MergeConfig', 'MergeConfigBase'],
  },
  {
    title: 'Custom components',
    description: 'Set `component` in a MergeConfig to show a row with your own component.',
    symbols: ['MergerItemComponent'],
  },
  {
    title: 'Building blocks',
    description: 'The merger renders one per side of each row. Use it on its own for a custom merger layout.',
    symbols: ['Lab900MergerItemComponent'],
  },
];

export const tableApi: ShowcaseApiSection[] = [
  {
    title: 'Component',
    description: 'The table itself. Only tableCells, data and trackByTableFn are needed; everything else is optional.',
    symbols: ['Lab900TableComponent'],
  },
  {
    title: 'Configuration',
    description: 'The objects you pass to the table inputs. A TableCell configures one column.',
    symbols: [
      'TableCell',
      'TableCellTooltip',
      'TableRowAction',
      'SelectableRows',
      'ExpandableRows',
      'Lab900TableTab',
      'Lab900Sort',
      'CellValueChangeEvent',
    ],
  },
  {
    title: 'Content slots',
    description:
      'Structural directives for your own content. Put one on an element inside lab900-table, for example `<h4 *lab900TableHeaderContent>Orders</h4>`.',
    symbols: [
      'Lab900TableHeaderContentDirective',
      'Lab900TableTopContentDirective',
      'Lab900TableLeftFooterDirective',
      'Lab900TableEmptyDirective',
      'Lab900TableDisabledDirective',
      'Lab900TableRowDetailDirective',
      'Lab900TableRowDetailContext',
    ],
  },
  {
    title: 'Cell renderers',
    description: 'Change how a cell looks. Set them per column in the TableCell.',
    usage: { classKey: 'cellRenderer', optionsKey: 'cellRenderOptions' },
    symbols: [
      'DefaultCellRendererComponent',
      'CellWithIconRendererComponent',
      'CellWithAnchorRendererComponent',
      'CheckboxCellRendererComponent',
      'CellWithClearingRendererComponent',
    ],
  },
  {
    title: 'Cell editors',
    description: 'Make a cell editable inline. The table emits cellValueChanged when the value changes.',
    usage: { classKey: 'cellEditor', optionsKey: 'cellEditorOptions' },
    symbols: ['CellInputEditorComponent', 'CellSelectEditorComponent', 'CellDateEditorComponent'],
  },
  {
    title: 'Header renderers',
    description: 'Change how a column header looks. Set them per column in the TableCell.',
    usage: { classKey: 'headerRenderer', optionsKey: 'headerRenderOptions' },
    symbols: ['DefaultColumnHeaderRendererComponent', 'ColumnHeaderWithIconRendererComponent'],
  },
  {
    title: 'Custom renderers and editors',
    description: 'Extend one of these to write your own. The table sets the inputs; you only render them.',
    symbols: ['CellRendererAbstract', 'CellEditorAbstract', 'ColumnHeaderRendererAbstract', 'CellEditorBaseOptions'],
  },
];
