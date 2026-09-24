# @lab900/ui: instructions for AI agents

This file tells a coding agent how to use `@lab900/ui` in an Angular application. It ships inside
the npm package at `node_modules/@lab900/ui/AGENTS.md`. Point your agent to it from the `AGENTS.md`
or `CLAUDE.md` of your project:

```md
UI components come from `@lab900/ui`. Read `node_modules/@lab900/ui/AGENTS.md` before you use them.
```

The type definitions in `node_modules/@lab900/ui/types/lab900-ui.d.ts` are the source of truth for every
signature. Live examples with their source: https://lab900.github.io/angular-library-ui/

## Rules

1. Import every symbol from `@lab900/ui`. Never import from a deep path such as
   `@lab900/ui/lib/...`: those paths are not part of the public API.
2. Every component and directive is standalone. Add it to the `imports` of the component that uses
   it. There is no `NgModule` to import.
3. Components take a **config object** instead of many inputs. Build the config in the component
   class, type it with the exported interface (`ActionButton<T>`, `TableCell<T>`, `NavItemGroup`),
   and bind it. Keep configs that hold functions or signals in the class, not in the template.
4. Labels, titles and tooltips are **translation keys**. The library runs them through the
   `translate` pipe of `@ngx-translate/core`. A plain text that has no key shows as is.
5. Signal inputs: bind them in a template, or use `fixture.componentRef.setInput()` in a test.
   Never assign to them.
6. The table does not change your data. It emits events (`sortChange`, `cellValueChanged`,
   `tableRowOrderChange`, ...) and you update `data` yourself.

## Setup

### Versions

The major version of `@lab900/ui` matches the Angular major. Version 22 needs Angular 22 or later.
Peer dependencies: `@angular/core`, `common`, `router`, `platform-browser`, `cdk`, `material`
(>= 22), `@ngx-translate/core` (>= 18) and `rxjs` (>= 7.4).

```bash
npm install @lab900/ui @angular/material @angular/cdk @ngx-translate/core
```

### Providers

```ts
import { provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideNativeDateAdapter } from '@angular/material/core';
import { provideTranslateService } from '@ngx-translate/core';

bootstrapApplication(AppComponent, {
  providers: [
    provideZoneChangeDetection(), // the library uses zone.js
    provideRouter(routes), // nav list, bread crumbs and page header use the router
    provideTranslateService({ lang: 'en', fallbackLang: 'en' }), // required: every label goes through TranslatePipe
    provideNativeDateAdapter(), // only for CellDateEditorComponent, or use another Material DateAdapter
  ],
});
```

Without a `TranslateService` every library component fails with `NullInjectorError`.

### Styles

```scss
@use '@angular/material' as mat;
@use '@lab900/ui/theming' as lab900;

$theme: mat.m2-define-light-theme(
  (
    color: (
      primary: mat.m2-define-palette(mat.$m2-indigo-palette),
      accent: mat.m2-define-palette(mat.$m2-pink-palette),
    ),
  )
);

@include lab900.lab900-ui($theme);
```

The mixin reads colors with `mat.m2-get-color-config`, so it needs a Material 2 theme or color
config (`m2-define-light-theme` / `m2-define-dark-theme`), not a Material 3 `mat.theme()` map.

Icons use `mat-icon` with ligatures. Load the Material Icons font in `index.html`. For an
`svgIcon: true` option, register the svg in `MatIconRegistry` first.

## Component index

| Need                              | Use                                                                    | Main config type                      |
| --------------------------------- | ---------------------------------------------------------------------- | ------------------------------------- |
| Data table                        | `Lab900TableComponent` (`lab900-table`)                                | `TableCell<T>[]`                      |
| Button with menu, toggle, tooltip | `Lab900ActionButtonComponent` (`lab900-action-button`)                 | `ActionButton<T>`                     |
| Simple button                     | `Lab900ButtonComponent` (`lab900-button`)                              | inputs                                |
| Side navigation                   | `Lab900NavListComponent` (`lab900-nav-list`)                           | `NavItemGroup[]`                      |
| Page title, tabs, actions, crumbs | `Lab900PageHeaderComponent` (`lab900-page-header`)                     | `PageHeaderNavItem[]`, `BreadCrumb[]` |
| Bread crumbs only                 | `BreadCrumbsComponent` (`lab900-bread-crumbs`)                         | `BreadCrumb[]`                        |
| Inline message                    | `AlertComponent` (`lab900-alert`)                                      | `Alert` enum                          |
| Confirm before an action          | `ConfirmationDialogDirective` (`[lab900ConfirmationDialog]`)           | inputs                                |
| Alert or confirm dialog from code | `AlertDialogComponent`, `ConfirmationDialogComponent` with `MatDialog` | `AlertDialog`, `ConfirmationDialog`   |
| Compare and merge two objects     | `Lab900MergerComponent` (`lab900-merger`)                              | `MergeConfig<T>[]`                    |
| Throttle a click                  | `PreventDoubleClickDirective` (`[lab900PreventDoubleClick]`)           | inputs                                |

## Reactive options

Many config fields have the type `ReactiveOption<PAYLOAD, RETURN>` (`ReactiveBooleanOption`,
`ReactiveStringOption`). Such a field accepts three forms:

```ts
const plain: ActionButton<User> = { label: 'edit', disabled: true };
const fromData: ActionButton<User> = { label: 'edit', disabled: user => user.locked }; // the row, or the `data` input
const fromSignal: ActionButton<User> = { label: 'edit', disabled: this.saving }; // updates when the signal changes
```

The function may also return a signal. Use a signal for state that changes over time: the component
reads it in a `computed`, so the view updates without a new config object.

The older `propValue<T, R>` type (used by `TableCell.label`, `TableCellTooltip`, `BreadCrumb`) accepts
a plain value or a function, not a signal.

## Action buttons

```ts
import { ActionButton, Lab900ActionButtonComponent } from '@lab900/ui';

@Component({
  imports: [Lab900ActionButtonComponent],
  template: `<lab900-action-button [action]="save" />`,
})
export class EditComponent {
  private readonly saving = signal(false);

  protected readonly save: ActionButton = {
    label: 'actions.save',
    type: 'flat', // 'raised' | 'stroked' | 'flat' | 'icon' | 'fab' | 'mini-fab' | 'toggle'
    color: 'primary',
    prefixIcon: 'save',
    disabled: this.saving,
    tooltip: { value: 'actions.save-tooltip', position: 'below' },
    action: ({ event, data, actionRef }) => this.onSave(),
  };
}
```

- Without a `type` the button is a text button. `icon`, `fab` and `mini-fab` show only an icon and
  use `label` as the icon name.
- A tooltip is `above` the button by default.
- `subActions` turns the button into a menu, and `action` is then not called. Sub actions nest. Set `keepMenuOpen: true` on a sub
  action to keep the menu open, and call `actionRef.close()` when the work is done.
- `type: 'toggle'` renders a button toggle group. Each sub action is one option; `selected` marks
  the active one.
- Pass `[data]="row"` to give the function forms of the options and `action` a payload. The generic
  `ActionButton<T>` types that payload.
- `align: 'left' | 'right'` places the action in `lab900-page-header`.
- `Lab900ActionDirective` (`[lab900Action]`, `exportAs: 'lab900Action'`) resolves an `ActionButton`
  into signals (`label()`, `disabled()`, `hidden()`, ...) for a custom button template.

## Table

```ts
import { Lab900Sort, Lab900TableComponent, TableCell, TableRowAction } from '@lab900/ui';

interface User {
  id: number;
  name: string;
  address: { city: string };
  active: boolean;
}

@Component({
  imports: [Lab900TableComponent],
  template: `
    <lab900-table
      [tableCells]="tableCells"
      [data]="users()"
      [trackByTableFn]="trackById"
      [loading]="loading()"
      [sort]="sort()"
      (sortChange)="onSort($event)"
      [tableActionsBack]="rowActions"
      [onRowClick]="openUser" />
  `,
})
export class UsersComponent {
  private readonly router = inject(Router);
  protected readonly users = signal<User[]>([]);
  protected readonly loading = signal(false);
  protected readonly sort = signal<Lab900Sort[]>([{ id: 'name', direction: 'asc' }]);

  protected readonly tableCells: TableCell<User>[] = [
    { key: 'id', label: 'users.id', width: '80px', sortable: true },
    { key: 'name', label: 'users.name', sortable: true, cellMaxWidth: '240px' },
    { key: 'address.city', label: 'users.city' }, // a dotted key reads a nested value
    { key: 'active', label: 'users.active', cellFormatter: user => (user.active ? 'yes' : 'no') },
  ];

  protected readonly rowActions: TableRowAction<User>[] = [
    { label: 'delete', type: 'icon', action: ({ data }) => this.delete(data) },
  ];

  protected readonly trackById = (_index: number, user: User): number => user.id;
  protected readonly openUser = (user: User): void => this.router.navigate(['users', user.id]);

  protected onSort(sort: Lab900Sort[]): void {
    this.sort.set(sort);
    // sort the data yourself, or fetch it sorted from the api
  }
}
```

Required inputs: `tableCells` and `trackByTableFn`. The table sorts nothing itself: a click on a
`sortable` header emits `sortChange` with the new `Lab900Sort[]` (`id` is `sortKey ?? key`). Set
`multiSort` to allow more than one sort column.

### `TableCell<T>`

| Field                                            | Meaning                                                                                 |
| ------------------------------------------------ | --------------------------------------------------------------------------------------- |
| `key`                                            | Property to show. `a.b` reads a nested value. Must be unique.                           |
| `label`                                          | Header translation key, or a function of the cell.                                      |
| `cellFormatter(row, cell)`                       | Returns the text to show instead of the raw value.                                      |
| `hide`, `alwaysVisible`, `columnOrder`           | Visibility and order. `alwaysVisible` columns cannot be hidden by users.                |
| `sortable`, `sortKey`                            | Header click emits `sortChange`.                                                        |
| `sticky`, `width`, `cellMaxWidth`                | Layout. A `width` on any column gives the table a fixed layout.                         |
| `cellClass`, `cellHeaderClass`                   | Extra css classes, plain or a function.                                                 |
| `click(row, cell, event)`                        | Click handler for this cell.                                                            |
| `cellTooltip`                                    | `{ text, onlyOnOverflow, tooltipOptions }`. Overflowing text shows a tooltip by itself. |
| `cellHeaderTooltip`, `cellHeaderTooltipPosition` | Tooltip on the header.                                                                  |
| `cellRenderer`, `cellRenderOptions`              | Custom read-only view (see below).                                                      |
| `cellEditor`, `cellEditorOptions`                | Inline editor (see below).                                                              |
| `headerRenderer`, `headerRenderOptions`          | Custom header view.                                                                     |
| `footer`, `footerLoading`, `footerCellClass`     | Footer text: a string, a signal, or a function of all rows.                             |

### Table inputs and outputs

- Content: `data` (model), `loading` (model), `disabled` (model), `tableClass`, `rowClass`,
  `rowColor`, `stickyHeader`, `maxColumnWidth`, `fixedWidth`, `neverHideTable`, `preFooterTitle`.
- Actions: `tableHeaderActions` and `tableFooterActions` (`ActionButton[]`); `tableActionsFront`
  and `tableActionsBack` (`TableRowAction<T>[]`, an `ActionButton<T>` that gets the row as `data`).
  A row action with `draggable: true` turns on drag and drop; handle `tableRowOrderChange`
  (`CdkDragDrop<T[]>`) and reorder `data` yourself.
- Columns: `toggleColumns` shows a menu to hide columns, `toggleAndMoveColumns` also allows
  reordering. `tableCells` is a model, so bind `[(tableCells)]` or listen to `tableCellsChange`
  to keep the user's choice. `tableCellsFiltered` is deprecated.
- Sorting: `sort`, `multiSort`, `disableSort`, output `sortChange`.
- Selection: `selectableRows: SelectableRows<T>` (`enabled`, `singleSelect`, `selectedItems`,
  `maxSelectableRows`, `hideSelectableRow`, `compareFn`, `position`, `sticky`,
  `showSelectAllCheckbox`). Outputs `selectionChanged` (the `SelectionModel<T>`) and
  `rowSelectToggle`.
- Row click: `onRowClick: (row, index, event) => void`. It is an input, not an output.
- Tabs: `tableTabs: Lab900TableTab[]` and `activeTabId` (model). A tab with `tableCells` shows other
  columns.
- Editing: `disabledEditing`, output `cellValueChanged`.
- Expanding: `expandableRows`, `expandedRows` (model), output `rowExpandToggle`.

### Content templates

Import the directive together with `Lab900TableComponent`:

```html
<lab900-table ...>
  <div *lab900TableTopContent>Above the table</div>
  <div *lab900TableHeaderContent>Left of the header actions</div>
  <div *lab900TableEmpty>No results</div>
  <div *lab900TableDisabled>Shown while the table is disabled</div>
  <div *lab900TableLeftFooter>Left of the footer actions</div>
</lab900-table>
```

### Expandable rows

Add a `lab900TableRowDetail` template. A click on a row then shows that template below the row.

```html
<lab900-table
  [tableCells]="tableCells"
  [data]="orders"
  [trackByTableFn]="trackById"
  [expandableRows]="expandableRows"
  [(expandedRows)]="expandedRows">
  <ng-template lab900TableRowDetail [lab900TableRowDetailOf]="orders" let-order let-collapse="collapse">
    <app-order-lines [order]="order" (closed)="collapse()" />
  </ng-template>
</lab900-table>
```

```ts
protected readonly expandedRows = signal<Order[]>([]);
protected readonly expandableRows: ExpandableRows<Order> = {
  multiple: false, // expanding a row collapses the other one
  isExpandable: order => order.lines.length > 0,
};
```

`lab900TableRowDetailOf` only types the context. Use `compareFn` when the data is fetched again as
new objects. From code, call `toggleRowExpansion`, `expandRow`, `collapseRow`, `collapseAllRows` and
`isRowExpanded` on the table instance (`viewChild.required(Lab900TableComponent<Order>)`).

### Inline editing

```ts
protected readonly tableCells: TableCell<User>[] = [
  {
    key: 'name',
    label: 'users.name',
    cellEditor: CellInputEditorComponent,
    cellEditorOptions: { type: 'text', placeholder: 'users.name-placeholder' } satisfies CellInputEditorOptions,
  },
  {
    key: 'role',
    label: 'users.role',
    cellEditor: CellSelectEditorComponent,
    cellEditorOptions: {
      options: ['admin', 'user'],
      optionLabelFn: role => `roles.${role}`,
    } satisfies CellSelectEditorOptions<string, User>,
  },
  { key: 'birthday', label: 'users.birthday', cellEditor: CellDateEditorComponent },
];
```

```ts
protected onCellValueChanged({ value, cell, row }: CellValueChangeEvent<User>): void {
  this.users.update(users => users.map(u => (u.id === row.id ? { ...u, [cell.key]: value } : u)));
}
```

The editor opens when the cell gets a click or focus, and saves on Enter or blur. Tab and the arrow
keys move to the next editable cell. It emits only when the value changed. A column with a `click`
handler does not open its editor on click. Turn editing off per row with `cellEditorOptions.disabled(row)`, or for the whole table with
`[disabledEditing]="true"`. Handle one column with `cellEditorOptions.valueChanged` instead of the
table output.

### Built-in renderers

| Renderer                                         | Options interface                     |
| ------------------------------------------------ | ------------------------------------- |
| `DefaultCellRendererComponent`                   | none (the default)                    |
| `CellWithIconRendererComponent`                  | `CellWithIconRendererOptions`         |
| `CellWithAnchorRendererComponent`                | `CellWithAnchorRendererOptions`       |
| `CheckboxCellRendererComponent`                  | `CheckboxCellRendererOptions`         |
| `CellWithClearingRendererComponent`              | `CellWithClearingRendererOptions`     |
| `ColumnHeaderWithIconRendererComponent` (header) | `ColumnHeaderWithIconRendererOptions` |

### Custom renderer or editor

Extend the abstract, keep the `lab900-cell-value` class on the element that holds the value (the
overflow tooltip measures it), and pass the class as `cellRenderer`:

```ts
@Component({
  selector: 'app-status-cell',
  template: `<span class="lab900-cell-value status-{{ cellValue() }}">{{ cellValue() | translate }}</span>`,
  imports: [TranslatePipe],
})
export class StatusCellComponent extends CellRendererAbstract<StatusCellOptions, User> {}
```

`CellRendererAbstract` gives you `columnConfig()`, `data()` (the row), `cellValue()`,
`renderOptions()`, `tooltip()` and `disabled()`.

An editor extends `CellEditorAbstract<Options, T, V>`. Read `cellValue()` and `editOptions()`,
give the input the class `lab900-cell-input` (it gets focus when the editor opens), and call
`closeAndSave(value)` to save or `close()` to cancel.

A header renderer extends `ColumnHeaderRendererAbstract<Options, T>` and reads `columnConfig()`.

## Nav list

```ts
protected readonly nav: NavItemGroup[] = [
  {
    label: 'nav.admin',
    items: [
      { label: 'nav.users', icon: { name: 'group' }, route: '/users' },
      { label: 'nav.docs', href: { url: 'https://example.com', target: '_blank' } },
      {
        label: 'nav.settings',
        hide: () => !this.auth.isAdmin(),
        children: [{ label: 'nav.general', route: '/settings/general' }],
      },
    ],
  },
];
```

```html
<lab900-nav-list [navItemGroups]="nav" [showLevelArrows]="true" />
```

Do not set `uniqueId`: the list generates it. An item without a `route`, an `href` or visible
children is not shown, and neither is a group without visible items. Use `navigationFinished` to close a drawer after
navigation, and `routeMatchOptions` to control the active state.

## Page header

```html
<lab900-page-header
  [pageTitle]="'users.title'"
  [breadCrumbs]="breadCrumbs"
  [navItems]="tabs"
  [actions]="actions"
  [data]="user()"
  [tabPanel]="tabPanel" />
<mat-tab-nav-panel #tabPanel>
  <router-outlet />
</mat-tab-nav-panel>
```

Import `MatTabsModule` for `mat-tab-nav-panel`. The tabs only show when `tabPanel` is set. A tab
`route` is relative to the current route. `navItems` (`PageHeaderNavItem[]`) and `breadCrumbs`
(`BreadCrumb[]`) accept functions of `data`, for example `title: user => user.name`.

## Dialogs, alerts, merger

```html
<button mat-button lab900ConfirmationDialog message="users.delete-confirm" (confirmed)="delete()">
  {{ 'delete' | translate }}
</button>

<lab900-alert [type]="Alert.Warn">{{ 'users.unsaved' | translate }}</lab900-alert>
```

`Alert` is an enum (`Info`, `Warn`, `Error`, `Success`); expose it on the class to use it in the
template. The alert and confirmation dialogs open with `MatDialog` and a `data` of type
`AlertDialog` or `ConfirmationDialog`; the confirmation dialog closes with `true` when confirmed.

`lab900-merger` needs `leftObject` and `rightObject` (`MergeObject<T>`: `{ title, data }`) and
`schema` (`MergeConfig<T>[]`). Bind `[(selectedSide)]` to choose the master side, and read the merged
object with `merger.result()` (a signal). A `MergeConfig.component` is a component that
implements `MergerItemComponent<T>` and receives `data`.

## Testing a consumer component

```ts
await TestBed.configureTestingModule({
  imports: [UsersComponent],
  providers: [provideTranslateService(), provideRouter([])],
}).compileComponents();

const fixture = TestBed.createComponent(UsersComponent);
fixture.componentRef.setInput('user', mockUser);
fixture.detectChanges();
```

jsdom lacks `window.matchMedia`, which Material's `MediaMatcher` needs for the nav list. Define it in
your test setup file.

## Common mistakes

| Mistake                                                        | Fix                                                            |
| -------------------------------------------------------------- | -------------------------------------------------------------- |
| `NullInjectorError: TranslateService`                          | Add `provideTranslateService()` to the app and test providers. |
| No `trackByTableFn` on `lab900-table`                          | It is required. Return a stable id.                            |
| Sort click does nothing                                        | Handle `sortChange` and sort `data` yourself.                  |
| Edited value disappears                                        | Handle `cellValueChanged` and write the value into `data`.     |
| Mutating a config object to change a button                    | Use a signal or a function in the reactive option.             |
| `(rowClick)` on the table                                      | There is no such output. Use the `[onRowClick]` input.         |
| `CellDateEditorComponent` throws `No provider for DateAdapter` | Add `provideNativeDateAdapter()` or another adapter.           |
| Deep import from `@lab900/ui/lib/...`                          | Import from `@lab900/ui`.                                      |
