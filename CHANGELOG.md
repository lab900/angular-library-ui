# Changelog

## 19.2.0
#### Breaking Changes
- ActionButton's sub-actions now support reactive options.
Meaning the number of sub-actions can change dynamically based on the row-data of a table. (e.g. every row having a 
  different number of files to download). This can be breaking if you were dynamically adding sub-actions to the 
  array after initialization.

## 19.1.5
- this version is deprecated, and the version tag was removed, since it contains some breaking changes in comparison to 
  19.1.4

## 19.1.0

### Action Menu/Button/Toggle Improvements

- All action types now have **reactive options**.
- Action menus will close on click by default, unless explicitly set to stay open using the new `keepMenuOpen` option.
- The selection indicator in the `Lab900ActionButtonToggleComponent` can now be disabled using the new `hideSelectionIndicator` option.

#### Breaking Changes

- **Reactive options no longer support observables.** They now use **signals**, so you'll need to provide a signal or a function that returns a signal.
- The **action callback** now receives a single argument: `ActionButtonEvent`, which contains both the original event and a reference to the component.

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
- `DialogModule` is removed. Import any of the standalone components `ConfirmationDialogComponent`, `AlertDialogComponent` instead.
- `Lab900ButtonModule` is removed. Import any of the standalone componenst `Lab900ButtonComponent`, `Lab900ActionButtonToggleComponent`, `Lab900ActionButtonMenuComponent`, `Lab900ActionButtonComponent` instead.
- `Lab900DataListModule` is removed. Import the standalone component `Lab900DataListComponent` instead.

## older version

Sorry no changelog available :(
