# Changelog

## 22.0.5

Upgrade to Angular 22, see [angular upgrade document](ANGULAR-UPGRADE-19.2-TO-22.1.md) for all changes done

- updated the [cloudbuild.yaml](cloudbuild.yaml) file to use `npm stage publish` instead of `npm publish`
- the showcase app and the unit tests now compile the library sources instead of `dist/@lab900/ui`.
  A library build is no longer needed for local development, see the
  [README](README.md#run-the-project-locally). This changes nothing in the published package.
- set `compilationMode` to `partial` in [lib/tsconfig.lib.json](lib/tsconfig.lib.json), because ng-packagr 22 uses
  `full` mode when the option is absent. This enables applications ov v23+ to still use this v22 lib, by compilin this
  lib with it's own angular version.
- Fix: the published package no longer imports `lodash`. `cell-editor.abstract.ts` used
  `lodash/cloneDeep`, but `lib/package.json` declares only `tslib`. A consumer therefore resolved
  `lodash` by accident, through a transitive dependency, and got a
  `Module 'lodash/cloneDeep' ... is not ESM` build warning. The new `deepClone` util replaces it.
  `deepClone` is exported from `@lab900/ui`. It keeps the prototype of a class instance, copies a
  function by reference and follows a circular reference, so it handles values that
  `structuredClone` rejects. The `allowedCommonJsDependencies` option in
  [angular.json](angular.json) is removed with it; the app build needs no CommonJS allowance now.
- `lib/package.json` now declares every package that the published code imports. `@angular/cdk`,
  `@angular/platform-browser`, `@angular/router` and `rxjs` were used but not declared. They are
  added to `peerDependencies`. An application that already runs Angular 22 needs no action.
- Merger component refactor:
  - `Lab900MergerComponent` now runs with `ChangeDetectionStrategy.OnPush`.
  - The component is now fully signal-based.

#### Breaking Changes

- `result` is a signal: use `merger.result()`.
- `leftObject` and `rightObject` are required inputs. An input that is never bound throws NG0950.
- `selected` is a model signal, no longer a plain property.
- `loading` is a plain input, no longer a model. The `loadingChange` event is gone.
- `schema` is an input with a `schemaChange` output, no longer a model. `[schema]` and `[(schema)]` keep
  working, but the event is now asynchronous.
- `toggleActive(config, index)` is now `toggleActive(index)`.
- `setInitialValues()` and `compare()` are no longer public.
- a combined list always starts with the master side. The old toggle path put the left side first.
- a write to `selected` from the parent clears the merge choices, exactly like the radio buttons do.

## 19.2.8

- Fix: CellWithAnchorRendererComponent empty cell display

## 19.2.7

- Fix: table with input "multiSort=false" will now be able to toggle between 'asc', 'desc', and 'no sorting', instead of just 'asc' and 'desc'.

## 19.2.6

- Feat: add support dynamic tooltip on action button

## 19.2.5

- Fix: import issue from hashed packages

## 19.2.4

- Chore: update vulnerable package, still one left (angular-cli-ghpages, waiting on an update)

## 19.2.3

- Fix: hover issue for action buttons with multi-level sub menus
- Fix: re-render warnings because of wrong trackers on navigation for loops.

## 19.2.2

### Filter header only toggle columns

- Fixed an issue where the header filter toggle would not properly show the state of the cells that are hidden/shown.

## 19.2.1

### Show header filter fixes

- Fixed an issue where the header filter would not show up when `visibleCells` and `hiddenCells` contains items and add new param `showHeaderFilter` to explicitly show/hide the header filter.

## 19.2.0

#### Breaking Changes

- ActionButton's sub-actions now support reactive options.
  Meaning the number of sub-actions can change dynamically based on the row-data of a table. (e.g. every row having a
  different number of files to download). This can be breaking if you were dynamically adding sub-actions to the
  array after initialization.

## 19.1.5

- this version is deprecated, and the version tag was removed, since it contains some breaking changes in comparison to
  19.1.4

## 19.1.4

- Fix: table cell select not resetting to view after editing

## 19.1.0

### Action Menu/Button/Toggle Improvements

- All action types now have **reactive options**.
- Action menus will close on click by default, unless explicitly set to stay open using the new `keepMenuOpen` option.
- The selection indicator in the `Lab900ActionButtonToggleComponent` can now be disabled using the
  new `hideSelectionIndicator` option.

#### Breaking Changes

- **Reactive options no longer support observables.** They now use **signals**, so you'll need to provide a signal or a
  function that returns a signal.
- The **action callback** now receives a single argument: `ActionButtonEvent`, which contains both the original event
  and a reference to the component.

### Table footer improvements

- Footer cells can now handle signals, making async data possible without workarounds
- Footer cells can display a loading spinner while async data is loading
- Roadmap: would be nice to also have footer renderers.

#### Breaking Changes

- All deprecated `TableCell` properties have been removed as the logic behind them was already removed.

## 19.0.3

- Fixed issues with table footers not showing up

## 19.0.1

- Angular 19 update
- All module imports have been removed
- Some smaller improvements
- No breaking changes

## 18.1.5

- add tooltips to action menu items (sub-actions)

## 18.1.4

- adjusting id's to buttons for testing purposes

## 18.1.3

- adding id's to buttons for testing purposes

## 18.1.2

- deferred table cells for better performance

## 18.0.12

- fix: nav-item with children where throwing NG0953 errors

## 18.0.11

- fix: console errors with footer column defs when data is emptied async

## 18.0.10

- fix: sorting arrows in table not updating correctly

## 18.0.9

- fix: table tooltip translations

## 18.0.7/18.0.8

- fix: issues with structuredClone

## 18.0.6

- fix: table cell value states

## 18.0.5

- fix hideSelectableRow

## 18.0.4

- fix issues with navigation table cells with some rows not having editable cells

## 18.0.3

- Upgrade to Angular 18
- More components are using Signals

### Breaking changes

- Some Signal updates might break your application.
- Lab900DataListComponent: removed - was not used anymore
- Lab900SharingComponent: removed - was not used anymore

## 17.0.6

- fix issues with navigation table cells with some rows not having editable cells

## 17.0.2

- Fix required type in Lab900ButtonComponent

## 17.0.1

- Fix click event on Lab900ActionButtonComponent

## 17.0.0

Upgrade to Angular 17

### Breaking changes

#### The last modules have been removed:

- `Lab900MergerModule` is removed. Import the standalone component `Lab900MergerComponent` instead.
- `DialogModule` is removed. Import any of the standalone
  components `ConfirmationDialogComponent`, `AlertDialogComponent` instead.
- `Lab900ButtonModule` is removed. Import any of the standalone
  componenst `Lab900ButtonComponent`, `Lab900ActionButtonToggleComponent`, `Lab900ActionButtonMenuComponent`, `Lab900ActionButtonComponent`
  instead.
- `Lab900DataListModule` is removed. Import the standalone component `Lab900DataListComponent` instead.

## older version

Sorry no changelog available :(
