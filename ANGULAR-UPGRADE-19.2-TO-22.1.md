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

- [ ] **20.0.0_ng_update** — `ng update @angular/core@20 @angular/cli@20`
- [ ] **update @angular/material** — `ng update @angular/material@20`
- [ ] **20.0.0_rename_afterRender_to_afterEveryRender** — Rename the `afterRender` lifecycle hook to `afterEveryRender`
- [ ] **20.0.0_replace_TestBed_flushEffects_with_tick** — Replace uses of `TestBed.flushEffects()` with `TestBed.tick()`.
- [ ] **20.0.0_update_provideCheckNoChangesConfig** — Rename `provideExperimentalCheckNoChangesForDebug` to `provideCheckNoChangesConfig`.
- [ ] **20.0.0_refactor_ng_reflect_attributes_usage** — Avoid reliance on `ng-reflect-*` attributes.
- [ ] **20.0.0_adjust_RedirectFn_return_type_handling** — `RedirectFn` can also return `Observable`/`Promise`.
- [ ] **20.0.0_rename_resource_request_to_param** — Rename the `request` property in resources to `params`.
- [ ] **20.0.0_rename_rxResource_loader_to_stream** — Rename `request`/`loader` in RxResource to `params`/`stream`.
- [ ] **20.0.0_replace_ResourceStatus_by_corresponding_strings** — `ResourceStatus` is no longer an enum.
- [ ] **20.0.0_rename_provideExperimentalZonelessChangeDetection** — Rename to `provideZonelessChangeDetection`.
- [ ] **20.0.0_update_template_expressions_using_in_property** — `in` in templates is now the JS operator.
- [ ] **20.0.0_update_router_method_array_parameters_to_readonly** — Router command arrays are `readonly T[]`.
- [ ] **20.0.0_update_animation_tests_for_guaranteed_flushing** — Animations flush with change detection.
- [ ] **20.0.0_handle_uncaught_listener_errors_in_tests** — Uncaught listener errors are rethrown in tests.
- [ ] **20.0.0_update_route_guards_array_types** — `any` removed from Route guard arrays.
- [ ] **20.0.0_update_nodejs_version** — Node.js >= 20.11.1 (current 24.15.0, OK).
- [ ] **20.0.0_replace_TestBed_get_with_TestBed_inject** — Replace `TestBed.get()` with `TestBed.inject()`.
- [ ] **20.0.0_remove_InjectFlags_usage** — Remove `InjectFlags` enum and its usage.
- [ ] **20.0.0_update_injector_get_calls_to_use_ProviderToken** — `injector.get()` needs `ProviderToken<T>`.
- [ ] **20.0.0_update_typescript_version** — TypeScript >= 5.8.
- [ ] **20.0.0_set_moduleResolution_to_bundler** — Set `moduleResolution: 'bundler'`.
- [ ] **20.0.0_review_AsyncPipe_error_handling_in_tests** — AsyncPipe errors go to `ErrorHandler`.
- [ ] **20.0.0_refactor_PendingTasks_run_usage** — Use `PendingTasks.add` if the return value matters.
- [ ] **20.0.0_update_template_expressions_using_void_property** — `void` in templates is now the JS operator.
- [ ] **20.0.0_review_date_pipe_formatter_Y_usage** — `DatePipe` `Y` without `w` is suspicious.
- [ ] **20.0.0_template_parentheses_respected** — Parentheses are always respected: `(foo?.bar).baz` throws.
- [ ] **20.0.0_router_generate_error_redirectTo_and_canMatch_incompatible_together** — `redirectTo` + `canMatch` errors.

### Hop 2 — 20.3 -> 21.2

- [ ] **21.0.0_ng_update** — `ng update @angular/core@21 @angular/cli@21`
- [ ] **update @angular/material** — `ng update @angular/material@21`
- [ ] **21.0.0-cdk-overlay-top-layer-stacking** — CDK overlays use the native top layer; `OVERLAY_DEFAULT_CONFIG` `{usePopover: false}` restores the old behaviour.
- [ ] **21.0.0-update-signal-input-access-in-custom-elements** — Direct property access for signal inputs on custom elements.
- [ ] **21.0.0-zone-scheduler-behavior-change** — Internal scheduler is always enabled.
- [ ] **21.0.0-provide-zone-change-detection-required** — Add `provideZoneChangeDetection()` to root providers.
- [ ] **21.0.0-remove-interpolation-option** — Remove the `interpolation` property from `@Component`.
- [ ] **21.0.0-remove-moduleid-property** — Remove the `moduleId` property from `@Component`.
- [ ] **21.0.0-ng-component-outlet-content-type-change** — `ngComponentOutletContent` is `Node[][]`.
- [ ] **21.0.0-stricter-host-binding-type-checking** — Host binding type checking is on by default.
- [ ] **21.0.0-typescript-5.9-required** — TypeScript >= 5.9.
- [ ] **21.0.0-remove-application-config-from-platform-browser** — Import `ApplicationConfig` from `@angular/core`.
- [ ] **21.0.0-remove-ignore-changes-outside-zone-option** — Remove `ignoreChangesOutsideZone`.
- [ ] **21.0.0-testbed-rethrows-errors-with-provideZoneChangeDetection** — TestBed rethrows errors.
- [ ] **21.0.0-router-navigation-timing-changed** — Navigation takes extra microtasks.
- [ ] **21.0.0-test-bed-provides-fake-platform-location** — New fake `PlatformLocation` in TestBed.
- [ ] **21.0.0-remove-upgrade-adapter** — `UpgradeAdapter` removed.
- [ ] **21.0.0-form-array-directive-conflict** — New standalone `formArray` directive can conflict.
- [ ] **21.0.0-ngmodulefactory-removed** — `NgModuleFactory` removed.
- [ ] **21.0.0-emit-declaration-only-not-supported** — `emitDeclarationOnly` is not supported.
- [ ] **21.0.0-lastsuccessfulnavigation-is-a-signal** — `router.lastSuccessfulNavigation()` is a signal.
- [ ] **21.0.0-configure-commonengine-allowed-hosts** — Set `allowedHosts` for SSR `CommonEngine`.

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

## Follow-ups
