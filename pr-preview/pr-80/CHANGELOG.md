# Changelog

All notable changes to `@lab900/ui` are documented in this file. The format is based on
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/). The major version follows the Angular major version.
Breaking changes are marked **BREAKING**.

## [Unreleased]

## [22.1.1] - 2026-09-29

### Added

- `ariaLabel` (translation key) on `ActionButton` and `lab900-button`. Icon, fab and mini-fab buttons without it
  fall back to the tooltip, then the icon name.
- `AGENTS.md` for AI coding agents, shipped at `node_modules/@lab900/ui/AGENTS.md` and shown on the showcase AI
  agents page.
- Showcase serves `llms.txt` and `llms-full.txt` (agent guide + full API reference) at its root.

### Changed

- **BREAKING:** a nav item with children renders `<button class="nav-item-btn expandable">` instead of `<a>`.
  Update CSS that targets `a.nav-item-btn.expandable`.

### Fixed

- Accessibility:
  - icons in buttons, nav items and sort headers are `aria-hidden`.
  - sortable headers are focusable, sort on Enter/Space and set `aria-sort`.
  - nav list links are focusable again; the active link sets `aria-current="page"`.
  - nav items with children set `aria-expanded`; their overlay also opens on keyboard focus.
  - alert and confirmation dialogs no longer override `tabindex`; the confirm button gets initial focus via
    `cdkFocusInitial`.

## [22.1.0] - 2026-09-23

### Added

- Expandable table rows: add a `lab900TableRowDetail` template to `lab900-table`; clicking a row shows it below.
  - `expandableRows` input (`ExpandableRows`): `enabled`, `multiple` (default `true`), `isExpandable`, `compareFn`.
  - `expandedRows` model and `rowExpandToggle` output.
  - methods `toggleRowExpansion`, `expandRow`, `collapseRow`, `collapseAllRows`, `isRowExpanded`.
  - switching tabs collapses all rows; dragging a row collapses it.

### Changed

- `lab900PreventDoubleClick`: `throttledClick` now emits synchronously inside the click event.
- Performance, without API changes:
  - table: one shared `ResizeObserver` for overflow tooltips; cells no longer scan all rows on init; focusing a
    cell only runs change detection when it becomes editable; column headers are no longer deferred; expanded rows
    use a set lookup when no `compareFn` is set.
  - action buttons: `lab900PreventDoubleClick` throttles with a timestamp; sub action menus render items only while
    open; `lab900-button` uses class bindings instead of `ngClass`.
  - nav list: keeps item ids on recompute instead of recreating the tree; nav items check `allowOverlayMenuUntil`
    once per change.
  - the `translate` pipe only runs for tooltips that have text.

### Fixed

- Arrow key navigation in the table after rows are sorted, added or removed.
- `keepMenuOpen` on action buttons (`stopPropagation()` ran too late).
- Nav list no longer mutates the passed `NavItemGroup`/`NavItem` objects, so an item hidden by `hide` reappears
  when `hide` returns `false`.
- Nav items with `childrenInOverlay` follow window resizes.
- `hide` on a sub action of a toggle action button now hides that option.

## [22.0.9] - 2026-09-01

Upgrade to Angular 22. See [ANGULAR-UPGRADE-19.2-TO-22.1.md](ANGULAR-UPGRADE-19.2-TO-22.1.md) for details.

### Changed

- **BREAKING:** `Lab900MergerComponent` is fully signal-based and `OnPush`:
  - `result` is a signal: use `merger.result()`.
  - `leftObject` and `rightObject` are required inputs (unbound throws NG0950).
  - `selected` is a model signal; writing it from the parent clears the merge choices, like the radio buttons do.
  - `loading` is a plain input instead of a model.
  - `schema` is an input with a `schemaChange` output. `[schema]` and `[(schema)]` still work, but the event is
    now asynchronous.
  - `toggleActive(config, index)` is now `toggleActive(index)`.
  - combined lists always start with the master side.
- [cloudbuild.yaml](cloudbuild.yaml) uses `npm stage publish`.
- The showcase compiles the library from source; no library build is needed for local development (see the
  [README](README.md#run-the-project-locally)).

### Removed

- **BREAKING:** `Lab900MergerComponent`: the `loadingChange` output, and the public `setInitialValues()` and
  `compare()` methods.

### Security

- Updated npm packages and pipelines.

## [19.2.8] - 2026-08-06

### Fixed

- `CellWithAnchorRendererComponent` empty cell display.

## [19.2.7] - 2026-02-25

### Fixed

- With `multiSort=false`, sorting cycles through asc, desc and none.

## [19.2.6] - 2025-10-13

### Added

- Dynamic tooltip on action buttons.

## [19.2.5] - 2025-09-10

### Fixed

- Import issue from hashed packages.

## [19.2.4] - 2025-09-09

### Security

- Updated vulnerable packages (`angular-cli-ghpages` still pending).

## [19.2.3] - 2025-09-01

### Fixed

- Hover on action buttons with multi-level sub menus.
- Re-render warnings from wrong `track` expressions in navigation loops.

## [19.2.2] - 2025-08-28

### Fixed

- Header filter toggle shows the correct hidden/shown state of cells.

## [19.2.1] - 2025-08-28

### Added

- `showHeaderFilter` to explicitly show or hide the header filter.

### Fixed

- Header filter not showing when `visibleCells` and `hiddenCells` both contain items.

## [19.2.0] - 2025-08-04

### Changed

- **BREAKING:** `ActionButton` sub actions support reactive options, so their number can change per row. This
  breaks code that adds sub actions to the array after initialization.

## [19.1.5] - 2025-08-01 [YANKED]

Contains breaking changes compared to 19.1.4. Use 19.2.0 instead.

## [19.1.4] - 2025-06-11

### Fixed

- Table cell select not returning to view mode after editing.

## [19.1.0] - 2025-04-30

### Added

- Reactive options for all action types.
- `keepMenuOpen` to keep an action menu open on click.
- `hideSelectionIndicator` on `Lab900ActionButtonToggleComponent`.
- Footer cells accept signals and show a loading spinner while async data loads.

### Changed

- **BREAKING:** reactive options use signals instead of observables: pass a signal or a function returning one.
- **BREAKING:** action callbacks receive a single `ActionButtonEvent` argument (original event + component
  reference).
- Action menus close on click by default.

### Removed

- **BREAKING:** all deprecated `TableCell` properties.

## [19.0.3] - 2025-03-24

### Fixed

- Table footers not showing.

## [19.0.1] - 2025-03-11

### Changed

- Upgrade to Angular 19; all module imports removed. No breaking changes.

## [18.1.5] - 2025-01-30

### Added

- Tooltips on action menu items (sub actions).

## [18.1.4] - 2024-11-27

### Changed

- Adjusted button ids for testing.

## [18.1.3] - 2024-11-26

### Added

- Ids on buttons for testing.

## [18.1.2] - 2024-10-17

### Changed

- Deferred table cells for better performance.

## [18.0.12] - 2024-10-14

### Fixed

- NG0953 errors on nav items with children.

## [18.0.11] - 2024-10-09

### Fixed

- Console errors from footer column defs when data is emptied async.

## [18.0.10] - 2024-09-13

### Fixed

- Table sort arrows not updating.

## [18.0.9] - 2024-09-03

### Fixed

- Table tooltip translations.

## [18.0.8] - 2024-08-29

### Fixed

- Issues with `structuredClone` (also in 18.0.7).

## [18.0.6] - 2024-08-23

### Fixed

- Table cell value states.

## [18.0.5] - 2024-08-21

### Fixed

- `hideSelectableRow`.

## [18.0.4] - 2024-08-20

### Fixed

- Navigation table cells when some rows have no editable cells.

## [18.0.3] - 2024-07-30

### Changed

- Upgrade to Angular 18.
- **BREAKING:** more components use signals, which may affect your application.

### Removed

- **BREAKING:** `Lab900DataListComponent` and `Lab900SharingComponent` (unused).

## [17.0.6] - 2024-08-20

### Fixed

- Navigation table cells when some rows have no editable cells.

## [17.0.2] - 2024-05-23

### Fixed

- Required type in `Lab900ButtonComponent`.

## [17.0.1] - 2024-05-22

### Fixed

- Click event on `Lab900ActionButtonComponent`.

## [17.0.0] - 2024-04-19

### Changed

- Upgrade to Angular 17.

### Removed

- **BREAKING:** the last modules. Import the standalone components instead:

  | Removed                | Use instead                                                                                                                    |
  | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
  | `Lab900MergerModule`   | `Lab900MergerComponent`                                                                                                        |
  | `DialogModule`         | `ConfirmationDialogComponent`, `AlertDialogComponent`                                                                          |
  | `Lab900ButtonModule`   | `Lab900ButtonComponent`, `Lab900ActionButtonToggleComponent`, `Lab900ActionButtonMenuComponent`, `Lab900ActionButtonComponent` |
  | `Lab900DataListModule` | `Lab900DataListComponent`                                                                                                      |

## Older versions

No changelog available.

[Unreleased]: https://github.com/lab900/angular-library-ui/compare/22.1.1...HEAD
[22.1.1]: https://github.com/lab900/angular-library-ui/compare/22.1.0...22.1.1
[22.1.0]: https://github.com/lab900/angular-library-ui/compare/22.0.9...22.1.0
[22.0.9]: https://github.com/lab900/angular-library-ui/compare/19.2.8...22.0.9
[19.2.8]: https://github.com/lab900/angular-library-ui/compare/19.2.7...19.2.8
[19.2.7]: https://github.com/lab900/angular-library-ui/compare/19.2.6...19.2.7
[19.2.6]: https://github.com/lab900/angular-library-ui/compare/19.2.5...19.2.6
[19.2.5]: https://github.com/lab900/angular-library-ui/compare/19.2.4...19.2.5
[19.2.4]: https://github.com/lab900/angular-library-ui/compare/19.2.3...19.2.4
[19.2.3]: https://github.com/lab900/angular-library-ui/compare/19.2.2...19.2.3
[19.2.2]: https://github.com/lab900/angular-library-ui/compare/19.2.1...19.2.2
[19.2.1]: https://github.com/lab900/angular-library-ui/compare/19.2.0...19.2.1
[19.2.0]: https://github.com/lab900/angular-library-ui/compare/19.1.4...19.2.0
[19.1.5]: https://www.npmjs.com/package/@lab900/ui/v/19.1.5
[19.1.4]: https://github.com/lab900/angular-library-ui/compare/19.1.3...19.1.4
[19.1.0]: https://github.com/lab900/angular-library-ui/compare/19.0.3...19.1.0
[19.0.3]: https://github.com/lab900/angular-library-ui/compare/19.0.2...19.0.3
[19.0.1]: https://github.com/lab900/angular-library-ui/compare/19.0.0...19.0.1
[18.1.5]: https://www.npmjs.com/package/@lab900/ui/v/18.1.5
[18.1.4]: https://www.npmjs.com/package/@lab900/ui/v/18.1.4
[18.1.3]: https://github.com/lab900/angular-library-ui/compare/18.1.2...18.1.3
[18.1.2]: https://github.com/lab900/angular-library-ui/compare/18.1.1...18.1.2
[18.0.12]: https://github.com/lab900/angular-library-ui/compare/18.0.11...18.0.12
[18.0.11]: https://github.com/lab900/angular-library-ui/compare/18.0.10...18.0.11
[18.0.10]: https://github.com/lab900/angular-library-ui/compare/18.0.9...18.0.10
[18.0.9]: https://github.com/lab900/angular-library-ui/compare/18.0.8...18.0.9
[18.0.8]: https://github.com/lab900/angular-library-ui/compare/18.0.6...18.0.8
[18.0.6]: https://github.com/lab900/angular-library-ui/compare/18.0.5...18.0.6
[18.0.5]: https://github.com/lab900/angular-library-ui/compare/18.0.4...18.0.5
[18.0.4]: https://github.com/lab900/angular-library-ui/compare/18.0.3...18.0.4
[18.0.3]: https://github.com/lab900/angular-library-ui/compare/18.0.2...18.0.3
[17.0.6]: https://github.com/lab900/angular-library-ui/compare/17.0.4...17.0.6
[17.0.2]: https://www.npmjs.com/package/@lab900/ui/v/17.0.2
[17.0.1]: https://www.npmjs.com/package/@lab900/ui/v/17.0.1
[17.0.0]: https://github.com/lab900/angular-library-ui/compare/16.0.0...17.0.0
