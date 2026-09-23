import { ShowcaseApiSection } from '../shared/models/showcase-api.model';

// The API tab of each page. The names must be exported from `@lab900/ui`; run `npm run docs:api` after a change.
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
