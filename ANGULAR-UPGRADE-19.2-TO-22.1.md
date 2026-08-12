# Angular upgrade 19.2 -> 22.1

Date: 2026-08-11 -> 2026-08-12
Level: Advanced (l=3) — Angular Material enabled
Branch: chore/angular-22

## Final state

Angular 22.1.1, TypeScript 6.0.3, Node 24.15.0. All checks pass.
`strictTemplates` is enabled everywhere: no tsconfig overrides the v22 default.
The deprecated `@angular/animations` package is not installed any more.

| Check | Command | Result |
| --- | --- | --- |
| Type check, app | `tsc -p tsconfig.app.json --noEmit` | pass |
| Type check, library | `tsc -p lib/tsconfig.lib.json --noEmit` | pass |
| Build, library | `npm run build:ui` | pass |
| Build, library, production | `npm run build:ui:prod` | pass |
| Build, application | `npm run build` | pass |
| Tests | `npm test` | pass — 1 suite, 6 tests |
| Lint | `npm run lint` | pass — 0 errors |

The table was checked again on the merged branch tip (`ae624eb`) on 2026-08-12. Every row
still passes.

The three hops are recorded under "Changes made". The work that closed the remaining open
items afterwards is under "Fixes after the upgrade".

### Final dependency state

What `package.json` declares now, against what it declared on `main`. Only the entries that
changed are listed. "Installed" is the version in `package-lock.json`.

| Package | Before | Now | Installed |
| --- | --- | --- | --- |
| @angular/animations | ^19.2.1 (dep) | **removed** | — |
| @angular/cdk | ^19.2.2 | ^22.1.1 | 22.1.1 |
| @angular/common | ^19.2.1 | ^22.1.1 | 22.1.1 |
| @angular/compiler | ^19.2.1 | ^22.1.1 | 22.1.1 |
| @angular/core | ^19.2.1 | ^22.1.1 | 22.1.1 |
| @angular/forms | ^19.2.1 | ^22.1.1 | 22.1.1 |
| @angular/material | ^19.2.2 | ^22.1.1 | 22.1.1 |
| @angular/platform-browser | ^19.2.1 | ^22.1.1 | 22.1.1 |
| @angular/platform-browser-dynamic | ^19.2.1 (dep) | ^22.1.1 (**devDep**) | 22.1.1 |
| @angular/router | ^19.2.1 | ^22.1.1 | 22.1.1 |
| marked | not declared | ^18.0.9 (dep) | 18.0.9 |
| ngx-markdown | ^19.1.0 | ^22.0.0 | 22.0.0 |
| @angular-builders/jest | ^19.0.0 | ^22.0.1 | 22.0.1 |
| @angular/build | ^19.2.1 | ^22.1.3 | 22.1.3 |
| @angular/cli | ^19.2.1 | ^22.1.3 | 22.1.3 |
| @angular/compiler-cli | ^19.2.1 | ^22.1.1 | 22.1.1 |
| @types/jest | ^29.5.14 | ^30.0.0 | 30.0.0 |
| @typescript-eslint/eslint-plugin | ^8.26.0 | ^8.67.0 | 8.67.0 |
| @typescript-eslint/parser | ^8.26.0 | ^8.67.0 | 8.67.0 |
| angular-eslint | 19.2.1 | 22.1.0 | 22.1.0 |
| eslint | ^9.8.0 | ^9.28.0 | 9.39.5 |
| jest | ^29.7.0 | ^30.4.2 | 30.4.2 |
| jest-environment-jsdom | not declared | ^30.4.1 (devDep) | 30.4.1 |
| jest-preset-angular | ^14.5.3 | ^17.0.0 | 17.0.0 |
| ng-mocks | ^14.13.3 | ^14.17.0 | 14.17.0 |
| ng-packagr | ^19.2.0 | ^22.1.1 | 22.1.1 |
| typescript | ~5.5.4 | ~6.0.3 | 6.0.3 |

Not declared, but installed as peers or transitive dependencies and worth knowing:
`@angular-devkit/build-angular` 22.1.3, `jsdom` 30.0.1, `prettier` 3.9.6.

The workspace version and the library version both moved from `19.2.8` to `22.0.0`. The
library peer ranges moved from `>=19.0.0` to `>=22.0.0`, and the `"licens"` key became
`"license"`.

## Commit map

Every commit on `chore/angular-22`, newest first, and the section that records it. Two
side branches were merged back into `chore/angular-22`, so the history is not linear.

| Commit | Date | Subject | Recorded in |
| --- | --- | --- | --- |
| `ae624eb` | 08-12 | update docs | "optional migration `use-application-builder`" (docs only) |
| `084967b` | 08-11 | Merge PR #76 `chore/angular-22-package-cleanup` | merge commit |
| `eea04ca` | 08-11 | Merge PR #77 `worktree-fix-lodash-esm-warning` | merge commit |
| `bb7cf83` | 08-11 | Merge `chore/angular-22` into the cleanup branch | merge commit |
| `89b6fd9` | 08-11 | docs: record the lodash ESM fix | "drop the `lodash` barrel import" (docs only) |
| `1de74fb` | 08-11 | fix strict templates in lib | "strictTemplates for the library and the specs" |
| `8a85cad` | 08-11 | drop `@angular/animations` | "deprecated packages — `@angular/animations` dropped" |
| `7417b3a` | 08-11 | drop lodash barrel import in nav-list | "drop the `lodash` barrel import" |
| `b88e04f` | 08-11 | carry working-tree edits | same change as `1de74fb`, on the cleanup branch |
| `5fa3ac9` | 08-11 | fix marked package | "`fix marked package`" |
| `b62c2f2` | 08-11 | fix safeNavigationMigration wrappers | "`fix safeNavigationMigration wrappers`" |
| `607ce98` | 08-11 | fix strictTemplates | "`fix strictTemplates`" |
| `8e54554` | 08-11 | fix linting | "`fix linting`" |
| `af2b417` | 08-11 | finish Angular v22 upgrade | "After the last hop" |
| `6b94560` | 08-11 | update Angular to v22 | "Hop 3 — 21.2 -> 22.1" |
| `6b96010` | 08-11 | update Angular to v21 | "Hop 2 — 20.3 -> 21.2" |
| `4616f70` | 08-11 | update Angular to v20 | "Hop 1 — 19.2 -> 20.3" |
| `6fd5d7b` | 08-11 | add the upgrade plan | "Hop plan" and "Compatibility check" |

`b88e04f` and `1de74fb` carry the identical diff. The same change was committed on the
cleanup branch and on `chore/angular-22`, then the two branches were merged. This is a
duplicate in the history, not two separate changes.

## Hop plan

| Hop | From | To | Angular release |
| --- | --- | --- | --- |
| 1 | 19.2 | 20.3 | 20.3.27 |
| 2 | 20.3 | 21.2 | 21.2.19 |
| 3 | 21.2 | 22.1 | 22.1.1 |

## Compatibility check

Installed @angular/core at start: 19.2.14
Range matching: exact (semver package)
Verdict: GO — 19 bumps, 0 deferred, 0 unverified.

### Toolchain

| Item | Required | Current | Status |
| --- | --- | --- | --- |
| node | ^22.22.3 \|\| ^24.15.0 \|\| >=26.0.0 | 24.15.0 | OK |
| typescript | >=6.0 <6.1 | 5.5.4 | BUMP |
| rxjs | ^6.5.3 \|\| ^7.4.0 | 7.8.2 | OK |
| zone.js | ~0.15.0 \|\| ~0.16.0 | 0.15.1 | OK |

### Package matrix

| Package | Declared | Installed | v20 | v21 | v22 | Status |
| --- | --- | --- | --- | --- | --- | --- |
| @angular-builders/jest | ^19.0.0 | 19.0.1 | 20.0.0 | 21.0.4 | 22.0.1 | BUMP |
| @angular/animations | ^19.2.1 | 19.2.14 | 20.3.27 | 21.2.19 | 22.1.1 | BUMP |
| @angular/build | ^19.2.1 | 19.2.15 | 20.3.33 | 21.2.20 | 22.1.3 | BUMP |
| @angular/cdk | ^19.2.2 | 19.2.19 | 20.2.14 | 21.2.14 | 22.1.1 | BUMP |
| @angular/cli | ^19.2.1 | 19.2.15 | 20.3.33 | 21.2.20 | 22.1.3 | BUMP |
| @angular/common | ^19.2.1 | 19.2.14 | 20.3.27 | 21.2.19 | 22.1.1 | BUMP |
| @angular/compiler | ^19.2.1 | 19.2.14 | 20.3.27 | 21.2.19 | 22.1.1 | BUMP |
| @angular/compiler-cli | ^19.2.1 | 19.2.14 | 20.3.27 | 21.2.19 | 22.1.1 | BUMP |
| @angular/core | ^19.2.1 | 19.2.14 | 20.3.27 | 21.2.19 | 22.1.1 | BUMP |
| @angular/forms | ^19.2.1 | 19.2.14 | 20.3.27 | 21.2.19 | 22.1.1 | BUMP |
| @angular/material | ^19.2.2 | 19.2.19 | 20.2.14 | 21.2.14 | 22.1.1 | BUMP |
| @angular/platform-browser | ^19.2.1 | 19.2.14 | 20.3.27 | 21.2.19 | 22.1.1 | BUMP |
| @angular/platform-browser-dynamic | ^19.2.1 | 19.2.14 | 20.3.27 | 21.2.19 | 22.1.1 | BUMP |
| @angular/router | ^19.2.1 | 19.2.14 | 20.3.27 | 21.2.19 | 22.1.1 | BUMP |
| @eslint/js | ^9.8.0 | 9.35.0 | n/a | n/a | n/a | OK |
| @ngx-translate/core | ^16.0.4 | 16.0.4 | 16.0.4 | 16.0.4 | 16.0.4 | OK |
| @types/eslint__js | ^8.42.3 | 8.42.3 | n/a | n/a | n/a | OK |
| @types/jest | ^29.5.14 | 29.5.14 | n/a | n/a | n/a | OK |
| @types/lodash | ^4.17.7 | 4.17.20 | n/a | n/a | n/a | OK |
| @types/node | ^20.11.1 | 20.19.13 | n/a | n/a | n/a | OK |
| @typescript-eslint/eslint-plugin | ^8.26.0 | 8.43.0 | n/a | n/a | n/a | OK |
| @typescript-eslint/parser | ^8.26.0 | 8.43.0 | n/a | n/a | n/a | OK |
| angular-cli-ghpages | ^2.0.3 | 2.0.3 | n/a | n/a | n/a | OK |
| angular-eslint | 19.2.1 | 19.2.1 | 20.7.0 | 21.4.0 | 22.1.0 | BUMP |
| eslint | ^9.8.0 | 9.35.0 | n/a | n/a | n/a | OK |
| eslint-config-prettier | ^9.1.0 | 9.1.2 | n/a | n/a | n/a | OK |
| eslint-plugin-prettier | ^5.2.1 | 5.5.4 | n/a | n/a | n/a | OK |
| jest | ^29.7.0 | 29.7.0 | n/a | n/a | n/a | OK |
| jest-preset-angular | ^14.5.3 | 14.6.1 | 17.0.0 | 17.0.0 | 17.0.0 | BUMP |
| lodash | ^4.17.21 | 4.17.21 | n/a | n/a | n/a | OK |
| ng-mocks | ^14.13.3 | 14.13.5 | 14.17.0 | 14.17.0 | 14.17.0 | BUMP |
| ng-packagr | ^19.2.0 | 19.2.2 | 20.3.2 | 21.2.7 | 22.1.1 | BUMP |
| ngx-markdown | ^19.1.0 | 19.1.1 | 20.1.0 | 21.3.0 | 22.0.0 | BUMP |
| prettier | ^3.3.3 | 3.6.2 | n/a | n/a | n/a | OK |
| prettier-eslint | ^16.3.0 | 16.4.2 | n/a | n/a | n/a | OK |
| prismjs | ^1.29.0 | 1.30.0 | n/a | n/a | n/a | OK |
| rxjs | ~7.8.2 | 7.8.2 | n/a | n/a | n/a | OK |
| tslib | ^2.0.0 | 2.8.1 | n/a | n/a | n/a | OK |
| typescript | ~5.5.4 | 5.5.4 | n/a | n/a | n/a | OK |
| zone.js | ~0.15.0 | 0.15.1 | n/a | n/a | n/a | OK |

### Version bumps (19)

- @angular-builders/jest: 19.0.1 -> 22.0.1
- @angular/animations: 19.2.14 -> 22.1.1
- @angular/build: 19.2.15 -> 22.1.3
- @angular/cdk: 19.2.19 -> 22.1.1
- @angular/cli: 19.2.15 -> 22.1.3
- @angular/common: 19.2.14 -> 22.1.1
- @angular/compiler: 19.2.14 -> 22.1.1
- @angular/compiler-cli: 19.2.14 -> 22.1.1
- @angular/core: 19.2.14 -> 22.1.1
- @angular/forms: 19.2.14 -> 22.1.1
- @angular/material: 19.2.19 -> 22.1.1
- @angular/platform-browser: 19.2.14 -> 22.1.1
- @angular/platform-browser-dynamic: 19.2.14 -> 22.1.1
- @angular/router: 19.2.14 -> 22.1.1
- angular-eslint: 19.2.1 -> 22.1.0
- jest-preset-angular: 14.6.1 -> 17.0.0
- ng-mocks: 14.13.5 -> 14.17.0
- ng-packagr: 19.2.2 -> 22.1.1
- ngx-markdown: 19.1.1 -> 22.0.0

This is the plan from the compatibility check, not the result. Two entries came out
differently: `@angular/animations` was **removed** instead of bumped, and
`@angular/platform-browser-dynamic` moved to `devDependencies`. The upgrade also touched
packages the check did not list: `jest`, `@types/jest`, `marked`, `eslint`,
`@typescript-eslint/*`, `typescript`, and the new `jest-environment-jsdom`. See
"Final dependency state" for the result.

## Deferred packages

none

## Unverified packages

none

## Checklist

### Hop 1 — 19.2 -> 20.3

- [x] **20.0.0_ng_update** — done, Angular 20.3.27 installed.
- [x] **update @angular/material** — done, Material/CDK 20.2.14.
- [x] **20.0.0_rename_afterRender_to_afterEveryRender** — N/A, `afterRender` not used.
- [x] **20.0.0_replace_TestBed_flushEffects_with_tick** — N/A, not used.
- [x] **20.0.0_update_provideCheckNoChangesConfig** — N/A, not used.
- [x] **20.0.0_refactor_ng_reflect_attributes_usage** — N/A, no `ng-reflect-*` usage.
- [x] **20.0.0_adjust_RedirectFn_return_type_handling** — N/A, `RedirectFn` not used.
- [x] **20.0.0_rename_resource_request_to_param** — N/A, no `resource()` usage.
- [x] **20.0.0_rename_rxResource_loader_to_stream** — N/A, no `rxResource` usage.
- [x] **20.0.0_replace_ResourceStatus_by_corresponding_strings** — N/A, not used.
- [x] **20.0.0_rename_provideExperimentalZonelessChangeDetection** — N/A, not used.
- [x] **20.0.0_update_template_expressions_using_in_property** — N/A, no `in` property in templates.
- [x] **20.0.0_update_router_method_array_parameters_to_readonly** — N/A, no `createUrlTree`/`navigate` command arrays.
- [x] **20.0.0_update_animation_tests_for_guaranteed_flushing** — N/A, only 1 spec file, no animation assertions.
- [x] **20.0.0_handle_uncaught_listener_errors_in_tests** — no change needed, tests pass.
- [x] **20.0.0_update_route_guards_array_types** — N/A, no route guards.
- [x] **20.0.0_update_nodejs_version** — Node 24.15.0, OK.
- [x] **20.0.0_replace_TestBed_get_with_TestBed_inject** — migration ran, no changes needed.
- [x] **20.0.0_remove_InjectFlags_usage** — migration ran, no changes needed.
- [x] **20.0.0_update_injector_get_calls_to_use_ProviderToken** — N/A, not used.
- [x] **20.0.0_update_typescript_version** — TypeScript 5.9.3 installed by `ng update`.
- [x] **20.0.0_set_moduleResolution_to_bundler** — applied by migration to `tsconfig.json`.
- [x] **20.0.0_review_AsyncPipe_error_handling_in_tests** — N/A, no AsyncPipe assertions in the single spec.
- [x] **20.0.0_refactor_PendingTasks_run_usage** — N/A, `PendingTasks` not used.
- [x] **20.0.0_update_template_expressions_using_void_property** — N/A, no `void` in templates.
- [x] **20.0.0_review_date_pipe_formatter_Y_usage** — N/A, no `date:` pipe format strings.
- [x] **20.0.0_template_parentheses_respected** — N/A, no parenthesised safe navigation.
- [x] **20.0.0_router_generate_error_redirectTo_and_canMatch_incompatible_together** — N/A, no `canMatch` routes.

### Hop 2 — 20.3 -> 21.2

- [x] **21.0.0_ng_update** — done, Angular 21.2.19 installed.
- [x] **update @angular/material** — done, Material/CDK 21.2.14.
- [x] **21.0.0-cdk-overlay-top-layer-stacking** — no code change. The library uses `MatDialog`
      and has `z-index` rules in SCSS, so this needs a visual check. See Follow-ups.
- [x] **21.0.0-update-signal-input-access-in-custom-elements** — N/A, no `@angular/elements`.
- [x] **21.0.0-zone-scheduler-behavior-change** — N/A, zone.js polyfill is in use.
- [x] **21.0.0-provide-zone-change-detection-required** — migration added `provideZoneChangeDetection()` to `src/main.ts`.
- [x] **21.0.0-remove-interpolation-option** — N/A, not used.
- [x] **21.0.0-remove-moduleid-property** — N/A, not used.
- [x] **21.0.0-ng-component-outlet-content-type-change** — N/A, `ngComponentOutletContent` not used.
- [x] **21.0.0-stricter-host-binding-type-checking** — no new errors; both builds clean.
- [x] **21.0.0-typescript-5.9-required** — TypeScript 5.9.3.
- [x] **21.0.0-remove-application-config-from-platform-browser** — migration ran, no changes needed.
- [x] **21.0.0-remove-ignore-changes-outside-zone-option** — N/A, not used.
- [x] **21.0.0-testbed-rethrows-errors-with-provideZoneChangeDetection** — no change needed, tests pass.
- [x] **21.0.0-router-navigation-timing-changed** — N/A, the single spec makes no navigation assertions.
- [x] **21.0.0-test-bed-provides-fake-platform-location** — no change needed, tests pass.
- [x] **21.0.0-remove-upgrade-adapter** — N/A, not used.
- [x] **21.0.0-form-array-directive-conflict** — N/A, no `FormArray` directive or `formArray` input.
- [x] **21.0.0-ngmodulefactory-removed** — N/A, not used.
- [x] **21.0.0-emit-declaration-only-not-supported** — N/A, not set.
- [x] **21.0.0-lastsuccessfulnavigation-is-a-signal** — migration ran, no changes needed.
- [x] **21.0.0-configure-commonengine-allowed-hosts** — N/A, no SSR in this workspace.

### Hop 3 — 21.2 -> 22.1

- [x] **22.0.0_ng_update** — done, Angular 22.1.1 installed. See the note on the aborted first attempt.
- [x] **update @angular/material** — done, Material/CDK 22.1.1.
- [x] **22.0.0-update-nodejs-version** — Node 24.15.0, OK.
- [x] **22.0.0-update-typescript-version** — TypeScript 6.0.3.
- [x] **22.0.0-data-attributes-input-output-binding** — N/A, no `data-*` bindings in templates.
- [x] **22.0.0-duplicate-input-output-bindings** — no errors; both builds clean.
- [x] **22.0.0-safe-navigation-nullability-narrowing** — the migration suppressed both diagnostics,
      then a second migration set `strictTemplates: false`, which made the config invalid.
      Resolved by removing the `extendedDiagnostics` blocks. See Changes made.
- [x] **22.0.0-safe-navigation-returns-undefined** — migration wrapped 4 files in
      `$safeNavigationMigration()` to keep the old `null` result. The wrappers were removed
      afterwards; the project now accepts `undefined`. See "Fixes after the upgrade".
- [x] **22.0.0-resource-stream-synchronous-resolution** — N/A, no `resource`/`rxResource`.
- [x] **22.0.0-remove-in-expressions** — N/A, no `in` variables.
- [x] **22.0.0-animation-callback-event-signature-change** — N/A, no animation callbacks.
- [x] **22.0.0-http-xhr-backend-explicit-opt-in** — migration changed `src/main.ts` to
      `provideHttpClient(withXhr())`.
- [x] **22.0.0-deprecate-report-progress-option** — N/A, `reportProgress` not used.
- [x] **22.0.0-deprecate-server-xhr** — N/A, no `@angular/platform-server`.
- [x] **22.0.0-provide-routes-removed** — N/A, `provideRouter()` already used.
- [x] **22.0.0-upgrade-angular-js-global-migration** — N/A, no AngularJS interop.
- [x] **22.0.0-remove-component-factory-resolver** — N/A, not used.
- [x] **22.0.0-remove-create-ng-module-ref** — N/A, not used.
- [x] **22.0.0-compile-time-duplicate-selectors** — no errors; both builds clean.
- [x] **22.0.0-component-onpush-default** — migration added
      `changeDetection: ChangeDetectionStrategy.Eager` to 13 components that had no explicit
      strategy, keeping the pre-v22 default. Afterwards 4 of them moved to the new `OnPush`
      default and 9 kept `Eager` on purpose. See "Fixes after the upgrade".
- [x] **22.0.0-remove-check-no-changes** — N/A, not used.
- [x] **22.0.0-leave-animations-scope-change** — N/A, no animation triggers in this project.
- [x] **22.0.0-params-inheritance-strategy-default** — no code change. See Follow-ups.
- [x] **22.0.0-can-match-current-snapshot-required** — N/A, no `canMatch`.
- [x] **22.0.0-hammer-js-removed** — N/A, Hammer.js not used.
- [x] **22.0.0-app-ref-bootstrap-typing** — N/A, `appRef.bootstrap()` not called.
- [x] **22.0.0-platform-browser-styles-removal** — no code change; nothing outside Angular
      depends on component styles here.
- [x] **22.0.0-title-strategy-return-type** — N/A, no custom `TitleStrategy`.
- [x] **22.0.0-incremental-hydration-default** — N/A, no SSR.
- [x] **22.0.0-full-template-type-check-removed** — removed `fullTemplateTypeCheck: true` from
      `tsconfig.json`.
- [x] **22.0.0-strict-templates-default** — the migration set `strictTemplates: false` in the
      three project tsconfigs, keeping the old behaviour. All three opt-outs were removed
      afterwards, so the application, the library and the specs all run with the v22 default
      `true`. See "Fixes after the upgrade".
- [x] **22.0.0-webpack-builders-deprecated** — the app already uses `@angular/build`.
      `@angular-devkit/build-angular` is still pulled in as a peer of `@angular-builders/jest`.
      See Follow-ups.
- [x] **22.0.0-ssr-commonengine-deprecated** — N/A, no SSR.
- [x] **22.0.0-istanbul-lib-instrument-optional** — N/A, this project uses Jest, not Karma.
- [x] **22.0.0-dev-server-port-env-priority** — no change. `npm start` passes `--port 4900`;
      a `PORT` env var now overrides it. See Follow-ups.
- [x] **22.0.0-architect-cli-removed** — N/A, not used.
- [x] **22.0.0-experimental-test-builders-removed** — N/A, this project uses
      `@angular-builders/jest:run`, not the removed devkit builders.

## Changes made

### Hop 1 — 19.2 -> 20.3 (Angular 20.3.27) — `4616f70`

- `ng update` moved Angular, Material/CDK, `@angular/build`, `@angular/cli`,
  `@angular-builders/jest@20`, `angular-eslint@20.7.0`, `ng-packagr@20.3.2`,
  `ngx-markdown@20.1.0`, `ng-mocks@14.17.0`. TypeScript went to 5.9.3,
  `@angular-devkit/build-angular` to 20.3.33 (auto peer), eslint/typescript-eslint bumped
  by the angular-eslint migration.
- `@angular/platform-browser-dynamic` had to be pinned explicitly at `20.3.27` in the
  `ng update` call. Without it `ng update` resolved `20.0.7` and aborted on incompatible
  peers. The package is not imported by this project, but `@angular-builders/jest`
  declares it as a peer, so it stays.
- `jest-preset-angular` was deliberately **not** bumped to 17.0.0. `@angular-builders/jest@20`
  pins `jest-preset-angular@14.6.0` as a direct dependency, and 14.6.1 supports
  `@angular/core >=15 <21`. Version 17 requires `jest ^30`, which this hop does not need.
- `marked` added as an explicit dependency at `^16.4.2`. `ngx-markdown@20` declares `marked`
  as a peer instead of a dependency, and `angular.json` loads it as a global script.
  `marked@15` failed the type check (`Type 'MarkedOptions' is not generic`).
- `angular.json`: global script path `node_modules/marked/marked.min.js` ->
  `node_modules/marked/lib/marked.umd.js`. `marked@16` no longer ships a root
  `marked.min.js`.
- `tsconfig.json`: `moduleResolution` set to `bundler` by the CLI migration.
- `angular.json`: the CLI migration added `type`/`typeSeparator` schematic defaults.
- Verify: `tsc -p tsconfig.app.json` clean, `tsc -p lib/tsconfig.lib.json` clean,
  `ng build ui` OK, `ng build` OK.

### Hop 2 — 20.3 -> 21.2 (Angular 21.2.19) — `6b96010`

- `ng update` moved Angular, Material/CDK, `@angular/build`, `@angular/cli`,
  `@angular/platform-browser-dynamic@21.2.19`, `@angular-builders/jest@21.0.4`,
  `angular-eslint@21.4.0`, `ng-packagr@21.2.7`, `ngx-markdown@21.3.0`.
  `@angular-devkit/build-angular` followed to 21.2.20.
- Jest toolchain moved as one unit, forced by `@angular-builders/jest@21`, which peers
  `jest ^30.0.0` and depends on `jest-preset-angular ^16.0.0`:
  `jest` 29.7.0 -> 30.4.2, `jest-preset-angular` 14.6.1 -> 16.2.0,
  `@types/jest` 29.5.14 -> 30.0.0. `jsdom` followed to 30.0.1 (the preset peers `>=26`).
  `jest-preset-angular@16.2.0` supports `@angular/core >=19 <23`, so it also covers hop 3.
- `marked` 16.4.2 -> 18.0.9. `ngx-markdown@21` peers `marked ^17.0.0 || ^18.0.0`.
  `^18` also satisfies `ngx-markdown@22`, so this covers hop 3 too.
  The other new `ngx-markdown` peers (katex, mermaid, prismjs, clipboard, emoji-toolkit)
  are optional and were not installed.
- `src/main.ts`: the migration added `provideZoneChangeDetection()` to the bootstrap
  providers, which is the v21 requirement.
- `tsconfig.json` and `lib/tsconfig.lib.json`: the CLI migration dropped the explicit `lib`
  arrays, which now come from `target`.
- Verify: `tsc -p tsconfig.app.json` clean, `tsc -p lib/tsconfig.lib.json` clean,
  `ng build ui` OK, `ng build` OK.

### Hop 3 — 21.2 -> 22.1 (Angular 22.1.1) — `6b94560`

- The first `ng update` call aborted: `@typescript-eslint/eslint-plugin` and
  `@typescript-eslint/parser` at 8.43.0 peer `typescript >=4.8.4 <6.0.0`, which blocks
  TypeScript 6. There is no `typescript-eslint` 9, and `angular-eslint@22.1.0` peers
  `typescript-eslint ^8.0.0`, so the fix was 8.67.0, whose peer range is
  `>=4.8.4 <6.1.0`. Both packages were added to the same `ng update` call.
- The retried call then failed with `could not determine executable to run`. `ng update` had
  already written every v22 version into `package.json` and cleaned `node_modules`, but the
  install did not finish, so the local `ng` binary was gone. `npm install` then failed with
  ERESOLVE against the stale `package-lock.json`. Recovered by deleting `node_modules` and
  `package-lock.json` and running `npm install`, which produced a clean v22 tree.
  `package-lock.json` is therefore fully regenerated in this hop.
- Because that call never reached the migration phase, the migrations were run explicitly:
  `ng update <pkg> --migrate-only --from=21 --to=22 --allow-dirty` for `@angular/core`,
  `@angular/cli`, `@angular/cdk`, `@angular/material` and `angular-eslint`.
  `--allow-dirty` was needed because `package.json` and `package-lock.json` were already
  modified at that point. No stash and no reset was used.
- Bumps: Angular 22.1.1, CLI/build 22.1.3, Material/CDK 22.1.1, `ng-packagr@22.1.1`,
  `ngx-markdown@22.0.0`, `@angular-builders/jest@22.0.1`, `angular-eslint@22.1.0`,
  `jest-preset-angular@17.0.0` (required by `@angular-builders/jest@22`),
  `typescript` 5.9.3 -> 6.0.3, `@typescript-eslint/*` 8.43.0 -> 8.67.0.
- Migration `changeDetection`: 13 components received
  `changeDetection: ChangeDetectionStrategy.Eager`, because v22 makes `OnPush` the default
  and this keeps the previous behaviour.
- Migration `withXhr`: `src/main.ts` now uses `provideHttpClient(withXhr())`.
- Migration `$safeNavigationMigration`: 4 files wrapped, so `?.` keeps returning `null`
  instead of `undefined`:
  `lib/.../nav-item-button.component.html`, `lib/.../merger.component.html`,
  `lib/.../cell-input-editor.component.ts`, `src/.../showcase-page.component.html`.
- **Fixed a broken migration result.** Two core migrations contradicted each other: one added
  an `extendedDiagnostics` block suppressing `nullishCoalescingNotNullable` and
  `optionalChainNotNullable`, the other added `strictTemplates: false`. Angular rejects that
  pair with `NG4003: Angular compiler option "extendedDiagnostics" is configured, however
  "strictTemplates" is disabled`. The `extendedDiagnostics` blocks were removed from
  `tsconfig.app.json`, `tsconfig.spec.json`, `lib/tsconfig.lib.json` and
  `lib/tsconfig.lib.prod.json`. They had no effect with `strictTemplates` off.
- `tsconfig.json`: removed `fullTemplateTypeCheck: true`, which v22 removed as an option.
- `tsconfig.json`: removed `baseUrl: "./"`. TypeScript 6 reports it as deprecated
  (`TS5101`). Two consequences were handled:
  - the `paths` entry became `"./lib/src/public-api.ts"`, because non-relative `paths`
    values need a leading `./` without `baseUrl` (`TS5090`);
  - `src/app/modules/showcase-ui/showcase-ui.constants.ts` imported
    `'lib/package.json'`, which only resolved through `baseUrl`. It is now
    `'../../../../lib/package.json'`.
- Verify: `tsc -p tsconfig.app.json` clean, `tsc -p lib/tsconfig.lib.json` clean,
  `ng build ui` OK, `ng build` OK.

### After the last hop — `af2b417`

- **Tests.** `npm test` failed twice before passing:
  1. `Unrecognized CLI Parameters: ["polyfills", "inlineStyleLanguage"]`. The
     `@angular-builders/jest@22` builder schema dropped both options and added `zoneless`
     (default `true`). `angular.json` `test.options` is now
     `{"tsConfig": "tsconfig.spec.json", "zoneless": false}`. `zoneless: false` is required,
     because this project still uses zone.js.
  2. `Test environment jest-environment-jsdom cannot be found`. `jest-preset-angular@17`
     no longer pulls it in. Added `jest-environment-jsdom@^30.4.1` to devDependencies.
  Result: 1 suite, 6 tests, all passing.
- **Lint.** `npm run lint` reported 18 errors. The 3 `prettier/prettier` errors were fixed
  with `prettier --write` on `lib/src/lib/table/cell-editors/cell-editor.abstract.ts` and
  `lib/src/lib/utils/utils.ts`. They appeared because the regenerated lock moved `prettier`
  from 3.6.2 to 3.9.6 inside the existing `^3.3.3` range. The other 15 errors were left
  open at this point and are resolved in "Fixes after the upgrade".
- **Library peer ranges** in `lib/package.json`: `@angular/common`, `@angular/core` and
  `@angular/material` moved from `>=19.0.0` to `>=22.0.0`, keeping the `>=` operator.
  `@ngx-translate/core` stayed at `>=16.0.0`, because its major did not move.
- **Version fields.** Both `package.json` and `lib/package.json` were at `19.2.8`, which
  matches the Angular major installed before the upgrade. Both are now `22.0.0`.
- Final rebuild after those edits: `ng build ui` OK, `ng build` OK. The built
  `dist/@lab900/ui/package.json` carries version `22.0.0` and the new peer ranges.

## Fixes after the upgrade

These commits close the open items that the hops left behind. They are listed in commit
order. After them, type check, both builds, tests **and lint** are all green.

### `fix linting` (8e54554) — lint is green

The 15 remaining lint errors are resolved. `npm run lint` now exits 0.

- `@angular-eslint/prefer-on-push-component-change-detection` (13 errors). The 13
  components split in two groups:
  - **4 moved to the new `OnPush` default**, by deleting the `Eager` line the migration
    added: `alert-dialog.component.ts`, `confirmation-dialog.component.ts`,
    `merger-item.component.ts` and `merger-example.component.ts`. Three of these are
    library components, so the published library now ships only one `Eager` component.
  - **9 kept `Eager`** with an `// eslint-disable-next-line` above it:
    `merger.component.ts` in the library, plus `app.component.ts` and 7 showcase example
    components. `merger.component.ts` carries the reason in the code:
    `changing to OnPush breaks the reset behavior, requires a proper refactor`.
- `@angular-eslint/prefer-inject` (2 errors). `merger.component.ts` moved from constructor
  parameter injection to `inject()`: `MatIconRegistry` and `DomSanitizer` are now readonly
  instance fields declared above the constructor, which also satisfies the project's
  `@typescript-eslint/member-ordering` rule. The `@Input() leftObject` and
  `@Input() rightObject` fields lost their `readonly` modifier in the same change.
- `lib/package.json`: the `"licens"` key is corrected to `"license"`, so the published
  package now declares its licence properly.

### `fix strictTemplates` (607ce98) — strict templates on for the application

This commit deleted the migration's opt-out from `tsconfig.app.json`, so the application
started compiling with the v22 default `strictTemplates: true`. At this point
`lib/tsconfig.lib.json` and `tsconfig.spec.json` still opted out; they were done next, see
"strictTemplates for the library and the specs" below.

The resulting template type errors were fixed in 17 source files, not suppressed. 14 of
them are library files, because the application compiles the library from source. Two
patterns carried most of the work:

- **Dropping `?.` where the value cannot be nullish.** Signal inputs that are `required`
  were read with optional chaining, which strict templates now flags. Examples:
  `icon()?.name` -> `icon().name` in `icon.component.ts`, and `item()?.children?.length`
  -> `item().children?.length` in `nav-item.component.html`.
- **Widening input types to match what is really passed.** In
  `table-cell-select.component.ts`, `selection` and `options` became
  `input.required<... | undefined>()`, `sticky` now uses `this.options()?.position`, and
  `isChecked` returns `!!this.selection()?.isSelected(value)` so the return type is a real
  `boolean`.

### `fix safeNavigationMigration wrappers` (b62c2f2) — shim removed

All `$safeNavigationMigration()` wrappers are gone, so `?.` returns `undefined` as v22
intends. Each call site was adjusted for the new type instead of being wrapped:

- `merger.component.html`: `[disabled]="!!config?.disabled"`.
- `cell-input-editor.component.ts`: `[max]="editOptions()?.maxLength"`.
- `showcase-page.component.html`: the three wrapped bindings are plain `?.` expressions
  again, and `[exampleTitle]` now uses `example.title ?? ''`.

### `fix marked package` (5fa3ac9) — global script removed

**Removed the `marked` global script** from `angular.json` `scripts`
(`node_modules/marked/lib/marked.umd.js`). It was a leftover from old `ngx-markdown`
versions, which needed a global `marked`. `ngx-markdown@22` imports `marked` as an ES
module (`import { Renderer, marked } from 'marked'`), so the bundler resolves it from
`node_modules`. No source file uses `window.marked`.

The `marked` package itself **stays** in `dependencies`: it is a required (non-optional)
peer of `ngx-markdown@22` (`^17.0.0 || ^18.0.0`), and the showcase app uses
`provideMarkdown()` and `MarkdownComponent`.

Verify: `ng build` OK. `marked` is now in the `main` bundle and no longer in the
`scripts` bundle, which dropped to 28.36 kB.

### strictTemplates for the library and the specs (1de74fb, also b88e04f)

The last two opt-outs are gone: `strictTemplates: false` was removed from
`lib/tsconfig.lib.json` and from `tsconfig.spec.json`. **No tsconfig in the workspace
overrides `strictTemplates` any more, so every project now compiles with the v22 default
`true`.** This matters most for the library, which is the published artifact.

No template fixes were needed. The application build already type-checked the library
sources under strict templates, because `tsconfig.json` maps `@lab900/ui` to
`./lib/src/public-api.ts` and the app compiles from source, not from `dist`. The 14
library templates touched by `fix strictTemplates` (607ce98) were fixed for that reason.
Enabling the option in `lib/tsconfig.lib.json` extends the same checking to the published
build path, which `ng build ui` and `ng build ui --configuration production` use.

Verified that the setting is really in effect, rather than silently ignored next to
`skipTemplateCodegen`: reintroducing `icon()?.name` in `icon.component.ts` made the library
build report `NG8107` (`the '?.' operator can be replaced with the '.' operator`). That
diagnostic only runs when `strictTemplates` is enabled. The probe was reverted.

Verify: `tsc -p tsconfig.app.json` clean, `tsc -p lib/tsconfig.lib.json` clean,
`ng build ui` OK, `ng build ui --configuration production` OK, `ng build` OK,
`npm test` 6/6, `npm run lint` 0 errors. No `NG8xxx` warnings in either library build.

### drop the `lodash` barrel import (7417b3a, PR #77) — build warning gone

**Removed the `lodash` barrel import** from
`lib/src/lib/nav-list/components/nav-list/nav-list.component.ts`. It caused the build
warning `Module 'lodash' used by ... is not ESM`. The `lodash` package is CommonJS, so
importing the barrel pulls the whole CommonJS module into the bundle.
`uniqueId` was the only symbol used. It is replaced by a local module counter:

```ts
let uniqueIdCounter = 0;
const uniqueId = (): string => `${++uniqueIdCounter}`;
```

This keeps the same behaviour as `lodash.uniqueId()`: an incrementing string id. The id is
used only for `@for ... track` in the nav-list and nav-item templates.

`lodash/cloneDeep` in `lib/src/lib/table/cell-editors/cell-editor.abstract.ts` **stays**.
It is a deep import, it is already listed in `allowedCommonJsDependencies` in
`angular.json`, and it gives no warning. `structuredClone` cannot replace it, because the
cloned cell data can hold functions and Moment objects.

The `lodash` package stays in `dependencies` for that deep import, and `@types/lodash`
stays in `devDependencies`.

Verify: `ng build ui` OK, `ng build` OK and warning-free, `npm run lint` clean,
`npm test` 6 tests passing.

This work was done on the branch `worktree-fix-lodash-esm-warning` and merged through
PR #77 (`eea04ca`). The doc entry came with it in `89b6fd9`.

### deprecated packages — `@angular/animations` dropped (8a85cad, PR #76)

`@angular/animations` is deprecated in v22: it was deprecated in 20.2 with intent to remove
in v23, and `animate.enter` / `animate.leave` replace it. The package is no longer installed.

- `package.json`: `@angular/animations` removed from `dependencies`.
- `src/main.ts`: `provideAnimations()` and its import are gone from the bootstrap providers.
- `lib/src/lib/testing/testing.providers.ts`: `provideNoopAnimations()` and its import are
  gone. `TESTING_PROVIDERS` is now `[provideTranslateService()]`. Angular v22 keeps
  animations off in `TestBed` unless the test sets `animationsEnabled: true`, so the noop
  provider had nothing left to switch off.

Why this is safe:

- The project declares no animation triggers and binds no synthetic `[@trigger]` properties.
  The check `22.0.0-leave-animations-scope-change` already recorded this.
- `@angular/material` and `@angular/cdk` 22.1.1 no longer declare `@angular/animations` as a
  peer. Material animates with CSS.
- `@angular/platform-browser` 22.1.1 declares `@angular/animations` as an **optional** peer,
  so the install stays clean without it.

`@angular/platform-browser-dynamic` moved from `dependencies` to `devDependencies`. It is
deprecated as well, but it cannot go yet: `@angular-builders/jest@22.0.1` declares it as a
required peer. No source file imports it, so it is not a runtime dependency of the
application or of the published library. `devDependencies` states that.

`@angular-devkit/build-angular` (webpack, deprecated in v22) also stays. npm installs it
automatically as a peer of `@angular-builders/jest@22.0.1`; this project does not declare it.
The builder imports neither package — both are peer declarations only. To remove both
deprecated packages, `@angular-builders/jest` must go, and `ng test` must run `jest` directly
on `jest-preset-angular@17`. That preset peers only `@angular/core`, `@angular/compiler-cli`,
`@angular/platform-browser`, `jest`, `jsdom` and `typescript`. This change was **not** made.

`npm install` regenerated `package-lock.json`. The lock also picked up the workspace version,
which still said `19.2.8` while `package.json` said `22.0.0`.

Verify: `tsc -p tsconfig.app.json` clean, `tsc -p lib/tsconfig.lib.json` clean,
`ng build ui` OK, `ng build ui --configuration production` OK, `ng build` OK,
`npm test` 6/6, `npm run lint` 0 errors. `node_modules/@angular/animations` is gone.
Smoke test on `ng serve`: the showcase app loads with no console errors, the nav list
expands its children, and the table column menu opens.

This work was done on the branch `chore/angular-22-package-cleanup` and merged through
PR #76 (`084967b`). That branch also carries `b88e04f`, the duplicate of the
strictTemplates commit `1de74fb`.

### optional migration `use-application-builder` — run, no changes (ae624eb, 2026-08-12)

`ng update @angular/cli --name use-application-builder` was run to confirm that the workspace
is already on the new build system. Output: `Migration completed (No changes made).`
`git status` stayed clean afterwards, so the migration touched no file.

That result is the expected one. The migration converts an application project only when its
`build` target uses `@angular-devkit/build-angular:browser` or `:browser-esbuild`; it skips a
project that already uses the `application` builder. This workspace was already converted in
full:

- `build` uses `@angular/build:application`, `serve` uses `@angular/build:dev-server`,
  `extract-i18n` uses `@angular/build:extract-i18n` and the library `build` uses
  `@angular/build:ng-packagr`. The migration renames builder ids to the `@angular/build`
  package only when it still finds a webpack builder, and there is none.
- The build options already use the new names: `browser` instead of `main`, `polyfills` as an
  array, `outputPath` as an object (`{"base": "dist/angular-library-ui"}`). None of the options
  the migration deletes is present (`vendorChunk`, `commonChunk`, `buildOptimizer`,
  `resourcesOutputPath`, `ngswConfigPath`).
- `tsconfig.json` already has `esModuleInterop: true` and `moduleResolution: "bundler"`, and it
  has neither `downlevelIteration` nor `allowSyntheticDefaultImports`.
- There are no SSR targets and no `build:ssr`, `dev:ssr`, `serve:ssr` or `prerender` scripts, so
  the SSR half of the migration had nothing to do.
- `@angular/build` is already `^22.1.3` in `devDependencies`, which is the exact version the
  migration writes.

This migration **cannot** close the `@angular-devkit/build-angular` follow-up. It only removes
that package from `package.json`, and this project never declared it there. npm installs it as a
peer of `@angular-builders/jest@22.0.1`.

### inline overlays broke the table select cell editor (2026-08-12)

**Symptom.** In the table, a cell with `CellSelectEditorComponent` never closed its panel. The
user picked an option, the value was saved, but the panel opened again at once. A click on the
backdrop had the same result. This is the concrete regression behind the "visual check needed
after v21" follow-up below.

**Cause.** Since CDK v21/v22 a connected overlay renders **inline**, in the browser's native top
layer, inside the element that opened it. The DOM is now:

```
td.lab900-td > lab900-table-cell-inner > … > mat-select > div.cdk-overlay-popover[popover]
  > div.cdk-overlay-pane > div.mat-mdc-select-panel > mat-option
```

Before v21 the panel lived in `.cdk-overlay-container` on the `body`, so a click on an option
never reached the cell. Now the click bubbles up to the `td`, where
`TableCellEventsDirective.onClick` calls `editMode()` again. That sets
`inlineEditingCellKey` back to the cell, Angular re-creates the editor component, and the
`effect` in `CellSelectEditorComponent` opens the panel on the new `MatSelect`. The loop repeats
on every attempt to close.

The existing guard did not catch it. `[class.disable-td-event]="matSelect.panelOpen"` sits on
the `mat-select` element, but the guard only read `event.target.classList`, and the target is the
`mat-option`. Two things also happen before the click gets to the `td`:

- zone.js drains the microtask queue after each listener, so `openedChange` already emitted
  `false` and the editor already closed itself.
- Therefore the whole overlay is detached by then. The `mat-option` is no longer a child of the
  cell, and its ancestor chain stops at `div.mat-mdc-select-panel`.

**Fix.** `TableCellEventsDirective` now uses one guard, `isDisabledCellEvent()`, for both `click`
and `ArrowUp`/`ArrowDown`. It ignores an event when the target sits inside
`.disable-td-event` or `.cdk-overlay-pane` (`closest()`, so the full ancestor chain counts), or
when the target is not a part of the cell anymore. The second test covers the detached overlay.
This keeps the pre-v21 behaviour for every inline overlay in a cell, not only for the select.

No `OVERLAY_DEFAULT_CONFIG` provider was added. A library must not force `usePopover: false` on
the applications that consume it.

### `Lab900TableTabsComponent` generics blocked every rebuild (2026-08-12)

**Symptom.** `ng serve` built once and then served a stale bundle. Every rebuild failed with
`TS2322: Type 'Lab900TableTab<TabId, T>[]' is not assignable to type
'Lab900TableTab<TabId, object>[]'` on `[tableTabs]` in `table.component.html`. A clean build
passed, which is why the error stayed unnoticed: only the incremental template type-check
reported it.

**Cause.** `Lab900TableTab<TabId, T>` takes the tab id **and** the row type.
`Lab900TableTabsComponent<T = string>` used its single parameter for the tab id and left the row
type at its `object` default, so `tableCells` and its `cellClass` callback became
contravariant against the row type that `Lab900TableComponent` passes in.

**Fix.** `Lab900TableTabsComponent<TabId = string, T extends object = object>`. Both parameters
have a default and the component is not in `public-api.ts`, so this is not a breaking change.

## Impact on the published library

What a consumer of `@lab900/ui` sees after this branch:

- **New peer ranges.** `@angular/common`, `@angular/core` and `@angular/material` need
  `>=22.0.0`. The package version is `22.0.0`. An app on Angular 19, 20 or 21 cannot use
  this release.
- **Three exported components now run with the v22 `OnPush` default**:
  `AlertDialogComponent`, `ConfirmationDialogComponent` and `Lab900MergerItemComponent`.
  They had no explicit strategy before, so they used to run with the old default.
  `Lab900MergerComponent` is the only exported component that keeps
  `ChangeDetectionStrategy.Eager`.
- **`?.` in the library templates now returns `undefined`, not `null`.** This is the v22
  default. It is not visible through the public API, but it changes what a template binding
  passes to a consumer's own component.
- No public class, input, output or model was renamed or removed. The typing changes from
  `fix strictTemplates` (607ce98) are in `table-cell-select.component.ts` and
  `icon.component.ts`; `table-cell-select` is not exported from `public-api.ts`.
- `TESTING_PROVIDERS` lost `provideNoopAnimations()`, but it is **not** exported from
  `public-api.ts`. It is used only by the library's own spec, so no consumer is affected.

## Follow-ups

- **9 components still use `ChangeDetectionStrategy.Eager`** behind an
  `// eslint-disable-next-line`. Eight are the showcase app and its examples, which are low
  risk. The one that matters is `lib/src/lib/merger/components/merger/merger.component.ts`:
  its own comment says `OnPush` breaks the reset behaviour and a proper refactor is needed.
- **Router `paramsInheritanceStrategy` now defaults to `"always"`.** The showcase app reads
  route data through `ActivatedRoute` in `showcase-page`, `markdown-page` and
  `showcase-home`, and has nested routes. Child routes now inherit params, data and resolved
  values from every parent. Set `paramsInheritanceStrategy: "emptyOnly"` in `provideRouter`
  to restore the old behaviour. Worth a functional check.
- **Visual check needed after v21**: CDK overlays now render in the browser's native top
  layer. This library uses `MatDialog` and sets `z-index` in several SCSS files
  (`table.component.scss`, `table-tabs.component.scss`, `nav-item.component.scss`,
  `page-header.component.scss`, `app.component.scss`). Elements that used to sit above
  Material overlays via `z-index` can now render beneath them. Providing
  `OVERLAY_DEFAULT_CONFIG` from `@angular/cdk/overlay` with `{usePopover: false}` restores
  the old stacking. No code change was made, because the new behaviour is the intended
  default. One functional regression from this change is found and fixed; see "inline overlays
  broke the table select cell editor". The `z-index` stacking itself is still unchecked, and
  every other overlay inside a table cell (`mat-datepicker` in `CellDateEditorComponent`,
  `mat-menu` in a cell action) deserves the same click-through check.
- The Angular application build (`ng build`) aborts with SIGABRT inside the command
  sandbox. Outside the sandbox it succeeds. This is a sandbox restriction, not an upgrade
  problem. Application builds in this run were done with the sandbox off.
  `ng update` needs the sandbox off as well: inside it the command hangs with no output,
  because it cannot reach the npm registry.
- `tsc -p tsconfig.spec.json` reports TS18003 (no inputs). Its `include` lists only
  `src/**/*.spec.ts`, but the only spec file is `lib/src/lib/table/components/table-cell/table-cell.component.spec.ts`.
  Pre-existing config drift, not caused by the upgrade.
- `npm test` prints a `ts-jest` warning: the `isolatedModules` option is deprecated and
  should move to `tsconfig.spec.json`. It comes from the `jest-preset-angular` preset, not
  from this project's config.
- `ng serve` now gives a `PORT` environment variable priority over `--port`. `npm start`
  passes `--port 4900`, so on a machine or CI runner that exports `PORT`, the dev server
  silently binds elsewhere.
- ~~`@angular/animations` is still a declared dependency, and `main.ts` uses
  `provideAnimations()` from `@angular/platform-browser/animations`.~~ Fixed under
  "deprecated packages — `@angular/animations` dropped".
- **Two deprecated packages stay installed**: `@angular/platform-browser-dynamic` and
  `@angular-devkit/build-angular` (webpack). Both are peers of `@angular-builders/jest@22.0.1`
  and neither is imported by this project or by the builder itself. The application already
  builds with `@angular/build`. They can only go with `@angular-builders/jest`; see the same
  section for the route to that.
- **Optional CLI migrations.** `use-application-builder` was run on 2026-08-12 and made no
  changes; see "optional migration `use-application-builder`" above. `migrate-karma-to-vitest`
  stays N/A, because this project uses Jest, not Karma. `router-current-navigation` is in none
  of the installed v22 migration collections (`@angular/cli`, `@angular/core`, `@angular/cdk`),
  so there is nothing to run.
- ~~`lib/package.json` has a typo in its key: `"licens"` instead of `"license"`.~~
  Fixed in `fix linting` (8e54554).
