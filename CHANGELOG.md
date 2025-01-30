# Changelog
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
