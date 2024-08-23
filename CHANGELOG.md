# Changelog

## 18.0.9

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
