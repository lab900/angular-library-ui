# Angular upgrade 19.2 -> 22.1

Date: 2026-08-11
Level: Advanced (l=3) — Angular Material enabled
Branch: chore/angular-22

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

- [ ] **22.0.0_ng_update** — `ng update @angular/core@22 @angular/cli@22`
- [ ] **update @angular/material** — `ng update @angular/material@22`
- [ ] **22.0.0-update-nodejs-version** — Node.js >= 22.22.3 or >= 24.15.0 (current 24.15.0, OK).
- [ ] **22.0.0-update-typescript-version** — TypeScript >= 6.0.
- [ ] **22.0.0-data-attributes-input-output-binding** — `data-*` attributes no longer bind to inputs/outputs.
- [ ] **22.0.0-duplicate-input-output-bindings** — Duplicate input/output bindings now error.
- [ ] **22.0.0-safe-navigation-nullability-narrowing** — `?.` and `??` narrow nullable types in templates.
- [ ] **22.0.0-safe-navigation-returns-undefined** — `?.` returns `undefined`, not `null`.
- [ ] **22.0.0-resource-stream-synchronous-resolution** — `stream` resolves synchronously.
- [ ] **22.0.0-remove-in-expressions** — `in` variables in templates throw.
- [ ] **22.0.0-animation-callback-event-signature-change** — `AnimationCallbackEvent.animationComplete` changed.
- [ ] **22.0.0-http-xhr-backend-explicit-opt-in** — Use `provideHttpClient(withXhr())` for upload progress.
- [ ] **22.0.0-deprecate-report-progress-option** — `reportProgress` is deprecated.
- [ ] **22.0.0-deprecate-server-xhr** — XHR in `@angular/platform-server` is deprecated.
- [ ] **22.0.0-provide-routes-removed** — `provideRoutes()` removed.
- [ ] **22.0.0-upgrade-angular-js-global-migration** — Use `getAngularJSGlobal()`/`setAngularJSGlobal()`.
- [ ] **22.0.0-remove-component-factory-resolver** — `ComponentFactoryResolver`/`ComponentFactory` removed.
- [ ] **22.0.0-remove-create-ng-module-ref** — `createNgModuleRef` removed; use `createNgModule()`.
- [ ] **22.0.0-compile-time-duplicate-selectors** — Multiple matching selectors error at compile time.
- [ ] **22.0.0-component-onpush-default** — Components default to `OnPush`.
- [ ] **22.0.0-remove-check-no-changes** — `ChangeDetectorRef.checkNoChanges()` removed.
- [ ] **22.0.0-leave-animations-scope-change** — Leave animations scope changed.
- [ ] **22.0.0-params-inheritance-strategy-default** — `paramsInheritanceStrategy` defaults to `"always"`.
- [ ] **22.0.0-can-match-current-snapshot-required** — `currentSnapshot` in `CanMatchFn` is required.
- [ ] **22.0.0-hammer-js-removed** — Hammer.js integration removed.
- [ ] **22.0.0-app-ref-bootstrap-typing** — `appRef.bootstrap()` second argument is typed.
- [ ] **22.0.0-platform-browser-styles-removal** — Unused styles are removed with their host.
- [ ] **22.0.0-title-strategy-return-type** — `TitleStrategy.getResolvedTitleForRoute` is typed stricter.
- [ ] **22.0.0-incremental-hydration-default** — Incremental hydration is the SSR default.
- [ ] **22.0.0-full-template-type-check-removed** — `fullTemplateTypeCheck` removed.
- [ ] **22.0.0-strict-templates-default** — `strictTemplates` defaults to `true`.
- [ ] **22.0.0-webpack-builders-deprecated** — Webpack builders deprecated.
- [ ] **22.0.0-ssr-commonengine-deprecated** — `CommonEngine` deprecated.
- [ ] **22.0.0-istanbul-lib-instrument-optional** — `istanbul-lib-instrument` is an optional peer.
- [ ] **22.0.0-dev-server-port-env-priority** — `PORT` env var wins over `angular.json`.
- [ ] **22.0.0-architect-cli-removed** — `@angular-devkit/architect-cli` removed.
- [ ] **22.0.0-experimental-test-builders-removed** — Experimental jest/web-test-runner builders removed.

## Changes made

### Hop 1 — 19.2 -> 20.3 (Angular 20.3.27)

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

### Hop 2 — 20.3 -> 21.2 (Angular 21.2.19)

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

## Follow-ups

- **Visual check needed after v21**: CDK overlays now render in the browser's native top
  layer. This library uses `MatDialog` and sets `z-index` in several SCSS files
  (`table.component.scss`, `table-tabs.component.scss`, `nav-item.component.scss`,
  `page-header.component.scss`, `app.component.scss`). Elements that used to sit above
  Material overlays via `z-index` can now render beneath them. Providing
  `OVERLAY_DEFAULT_CONFIG` from `@angular/cdk/overlay` with `{usePopover: false}` restores
  the old stacking. No code change was made, because the new behaviour is the intended
  default.
- The Angular application build (`ng build`) aborts with SIGABRT inside the command
  sandbox. Outside the sandbox it succeeds. This is a sandbox restriction, not an upgrade
  problem. Application builds in this run were done with the sandbox off.
- `tsc -p tsconfig.spec.json` reports TS18003 (no inputs). Its `include` lists only
  `src/**/*.spec.ts`, but the only spec file is `lib/src/lib/table/components/table-cell/table-cell.component.spec.ts`.
  Pre-existing config drift, not caused by the upgrade.
- Build warning: `Module 'lodash' used by lib/src/lib/nav-list/.../nav-list.component.ts is not ESM`.
  Pre-existing.
- `marked` is loaded as a global script in `angular.json`, but no source file uses
  `window.marked`. The entry looks vestigial and could probably be dropped. Left in place
  to keep the upgrade behaviour-neutral.
