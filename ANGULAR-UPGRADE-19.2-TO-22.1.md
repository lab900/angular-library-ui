# Angular upgrade 19.2 -> 22.1

Branch: `chore/angular-22`. Date: 2026-08-11 -> 2026-08-12.

End state: Angular 22.1.1, Material/CDK 22.1.1, TypeScript 6.0.3, Node 24.15.0.
This document shows the result against the Angular 19.2 state. It does not show the
intermediate hops.

## 1. Migrations done

### 1.1 Package changes

- Angular, Material and CDK 19.2 -> 22.1.1. CLI and `@angular/build` -> 22.1.3,
  `ng-packagr` -> 22.1.1.
- `typescript` 5.5.4 -> 6.0.3, because v22 requires it. `angular-eslint` -> 22.1.0 and
  `@typescript-eslint/*` -> 8.67.0, because 8.43.0 blocks TypeScript 6.
- `jest` -> 30.4.2, `@types/jest` -> 30, `jest-preset-angular` -> 17. The Jest toolchain moved as
  one unit, forced by `@angular-builders/jest@22.0.1`. `jest-environment-jsdom@^30.4.1` is added,
  because `jest-preset-angular@17` no longer installs it.
- `ngx-markdown` -> 22.0.0. `marked@^18.0.9` is added as an explicit dependency, because
  `ngx-markdown@22` declares it as a required peer.
- `@angular/animations` is **removed**. It is deprecated in v22, with removal planned in v23. The
  project declares no animation trigger.
- `@angular/platform-browser-dynamic` moved to `devDependencies`. It is deprecated too, but it is
  still a required peer of `@angular-builders/jest`. No source file imports it.
- `package-lock.json` is regenerated, because a failed `ng update` left a stale lock.

Version and metadata: the workspace and the library both moved from `19.2.8` to `22.0.0`.
The library peer ranges for `@angular/common`, `@angular/core` and `@angular/material` moved
from `>=19.0.0` to `>=22.0.0`. The `"licens"` key in `lib/package.json` is now `"license"`.

### 1.2 Configuration changes

- `tsconfig.json`: `moduleResolution` is `bundler`. `fullTemplateTypeCheck` is removed, because
  v22 removed the option. `baseUrl` is removed, because TypeScript 6 reports `TS5101`. The
  `paths` entry is now `"./lib/src/public-api.ts"`. The explicit `lib` arrays are gone.
- **`strictTemplates` is on everywhere.** The migrations wrote `strictTemplates: false` into
  `tsconfig.app.json`, `tsconfig.spec.json` and `lib/tsconfig.lib.json`. All three opt-outs are
  removed. No tsconfig overrides the v22 default any more.
- `extendedDiagnostics` blocks removed from `tsconfig.app.json`, `tsconfig.spec.json`,
  `lib/tsconfig.lib.json` and `lib/tsconfig.lib.prod.json`.
- `angular.json`, test target: options are now `{"tsConfig": "tsconfig.spec.json", "zoneless": false}`.
  The builder schema dropped `polyfills` and `inlineStyleLanguage`. `zoneless: false` is needed,
  because this project still uses zone.js.
- `angular.json`, scripts: the `marked` global script is removed. `ngx-markdown@22` imports
  `marked` as an ES module.

### 1.3 Code changes

- `src/main.ts`: added `provideZoneChangeDetection()`, changed to `provideHttpClient(withXhr())`,
  removed `provideAnimations()`.
- **Change detection**: v22 makes `OnPush` the default. The library ships no
  `ChangeDetectionStrategy.Eager` component any more. 7 showcase components keep `Eager` behind an
  `// eslint-disable-next-line`.
- **Safe navigation**: all `$safeNavigationMigration()` wrappers are removed. `?.` returns
  `undefined`, as v22 intends. The 4 call sites are adjusted for the new type. Example:
  `merger.component.html` uses `[disabled]="!!config?.disabled"`.
- **Strict templates**: template type errors are fixed in 17 source files, not suppressed.
  14 of them are library files. Two patterns cover most of the work: `?.` is dropped where a
  required signal input cannot be nullish (`icon()?.name` -> `icon().name`), and input types are
  widened to match the real values (`table-cell-select.component.ts`).
- `merger.component.ts` uses `inject()` for `MatIconRegistry` and `DomSanitizer`.
- `nav-list.component.ts`: the `lodash` barrel import is replaced by a local counter.
  `lodash/cloneDeep` in `cell-editor.abstract.ts` stays; it is a deep import and gives no warning.
- `lib/src/lib/testing/testing.providers.ts`: `TESTING_PROVIDERS` is now `[provideTranslateService()]`.
- `showcase-ui.constants.ts`: the `lib/package.json` import is now a relative path.

## 2. Bugs fixed

1. **Inline overlays broke the table select cell editor.** A cell with
   `CellSelectEditorComponent` never closed its panel. Since CDK v21 a connected overlay renders
   inline, in the native top layer, inside the element that opened it. The click on a `mat-option`
   bubbled up to the `td`, and `TableCellEventsDirective.onClick` started edit mode again.
   Fix: `TableCellEventsDirective` uses one guard, `isDisabledCellEvent()`, for `click` and for
   `ArrowUp`/`ArrowDown`. It ignores an event when the target sits inside `.disable-td-event` or
   `.cdk-overlay-pane`, or when the target is no longer a part of the cell.
2. **`Lab900TableTabsComponent` generics blocked every rebuild.** `ng serve` served a stale
   bundle, because each rebuild failed with `TS2322` on `[tableTabs]`. A clean build passed, so
   the error stayed unnoticed. Fix: `Lab900TableTabsComponent<TabId = string, T extends object = object>`.
   Both parameters have a default and the component is not in `public-api.ts`.
3. **Two core migrations contradicted each other.** One added `extendedDiagnostics`, the other set
   `strictTemplates: false`. Angular rejects that pair with `NG4003`. Fix: the
   `extendedDiagnostics` blocks are removed.
4. **`lodash` ESM build warning.** `Module 'lodash' ... is not ESM`. Fix: the barrel import is gone.
5. **Stale `marked` global script.** It was a leftover from old `ngx-markdown` versions. Fix: the
   script is removed from `angular.json`. The `scripts` bundle dropped to 28.36 kB.
6. **`"licens"` typo** in `lib/package.json`. The published package now declares its licence.

## 3. Important and possibly breaking

For a consumer of `@lab900/ui`:

1. **New peer ranges.** `@angular/common`, `@angular/core` and `@angular/material` need
   `>=22.0.0`. An application on Angular 19, 20 or 21 cannot use this release.
2. **`OnPush` is the default.** `AlertDialogComponent`, `ConfirmationDialogComponent` and
   `Lab900MergerItemComponent` had no explicit strategy, so they now run with `OnPush`.
   `Lab900MergerComponent` moved to `OnPush` in `22.0.5` with a full refactor. See the CHANGELOG
   for the breaking changes of that refactor.
3. **`?.` returns `undefined`, not `null`,** in the library templates. This changes what a binding
   passes to a consumer's own component.
4. **The published library builds with `strictTemplates`.** This is new for the `dist` build path.
5. **CDK overlays render in the browser's native top layer.** Elements that sat above Material
   overlays through `z-index` can now render beneath them. `OVERLAY_DEFAULT_CONFIG` with
   `{usePopover: false}` restores the old stacking. The library does not set it: a library must not
   force that on its consumers.
6. **Router `paramsInheritanceStrategy` now defaults to `"always"`.** Child routes inherit params,
   data and resolved values from every parent. Set `"emptyOnly"` in `provideRouter` for the old
   behaviour.
7. **`@angular/animations` is not installed any more.** `provideAnimations()` and
   `provideNoopAnimations()` are gone from the bootstrap and from `TESTING_PROVIDERS`.
8. No public class, input, output or model is renamed or removed. `table-cell-select` and
   `TESTING_PROVIDERS` are not exported from `public-api.ts`.

## 4. Follow-ups

- [ ] Check the `z-index` stacking against the new top-layer overlays. The library sets `z-index`
      in `table.component.scss`, `table-tabs.component.scss`, `nav-item.component.scss`,
      `page-header.component.scss` and `app.component.scss`.
- [ ] Do the same click-through check for every other overlay inside a table cell:
      `mat-datepicker` in `CellDateEditorComponent`, and `mat-menu` in a cell action.
- [ ] Do a functional check of the routes, because `paramsInheritanceStrategy` is now `"always"`.
      The showcase reads route data in `showcase-page`, `markdown-page` and `showcase-home`.
- [ ] Move the 7 remaining showcase components from `Eager` to `OnPush`, or keep the
      `eslint-disable` on purpose.
- [ ] Remove the two deprecated packages `@angular/platform-browser-dynamic` and
      `@angular-devkit/build-angular`. Both are peers of `@angular-builders/jest@22.0.1`. They can
      only go if `ng test` runs `jest` directly on `jest-preset-angular@17`.
- [ ] Handle the `PORT` environment variable. `ng serve` now gives it priority over `--port`, and
      `npm start` passes `--port 4900`. A CI runner that exports `PORT` binds elsewhere.
- [x] Fix the `include` of `tsconfig.spec.json`. It listed only `src/**/*.spec.ts`, but the spec
      files are in `lib/`. `lib/**/*.spec.ts` is now in the `include`, and
      `tsc -p tsconfig.spec.json --noEmit` passes. The stale `paths` block of that file is also
      gone: it sat outside `compilerOptions`, so TypeScript ignored it, and it pointed at
      `dist/@lab900/ui`.
- [ ] Move the deprecated `isolatedModules` option to `tsconfig.spec.json`. `ts-jest` warns about
      it. The option comes from the `jest-preset-angular` preset.

## 5. Verification

| Check                      | Command                                 | Result                  |
| -------------------------- | --------------------------------------- | ----------------------- |
| Type check, app            | `tsc -p tsconfig.app.json --noEmit`     | pass                    |
| Type check, library        | `tsc -p lib/tsconfig.lib.json --noEmit` | pass                    |
| Build, library             | `npm run build:ui`                      | pass                    |
| Build, library, production | `npm run build:ui:prod`                 | pass                    |
| Build, application         | `npm run build`                         | pass                    |
| Tests                      | `npm test`                              | pass — 1 suite, 6 tests |
| Lint                       | `npm run lint`                          | pass — 0 errors         |

Smoke test on `ng serve`: the showcase app loads with no console errors, the nav list expands its
children, and the table column menu opens.
