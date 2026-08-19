# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm i                      # install
npm start                  # dev server for the showcase app on port 4900 (set in angular.json)
npm test                   # Jest
npm run test:silent        # same, no console output (used by the pipeline)
npm run lint               # ESLint on both projects
npm run prettier           # format the whole repo
npm run build:ui           # build the library to dist/@lab900/ui
npm run build:ui:prod      # same build as the pipeline
npm run build              # build the showcase app
```

Run one test file or one test:

```bash
npm test -- --testPathPatterns=table-cell
npm test -- --testNamePattern="should create"
```

Jest runs directly and not through an Angular builder, so every flag is a plain Jest flag.
There is no `ng test` target, and `angular.json` has no `test` target.

## Workspace layout

One Angular workspace holds two projects:

- `ui` (`lib/`): the published library `@lab900/ui`. Built with ng-packagr.
- `lab900-ui` (`src/`): the showcase app. Deployed to GitHub Pages.

The showcase compiles the library **from source**, not from `dist`:

- `@lab900/ui` maps to `lib/src/public-api.ts` through `paths` in `tsconfig.json`.
- Jest maps the same name through `moduleNameMapper` in `jest.config.js`.
- `src/styles.scss` uses `lib/_theming.scss` with `@use '../lib/theming'`.

So a library change reloads the app immediately. Build the library only to inspect the
published package.

## Library architecture

Each feature is a folder under `lib/src/lib/<feature>/` with `components/`, `directives/`,
`models/`, and where needed `services/` and `abstracts/`. Every public symbol must be
exported from `lib/src/public-api.ts`, or consumers cannot reach it. The table has its own
barrel, `lib/src/lib/table/table-api.ts`, which `public-api.ts` re-exports.

All components are standalone and signal-based: `input()`, `input.required()`, `model()`,
`output()`, `computed()`, `viewChild()`, `contentChild()`. `ChangeDetectionStrategy.OnPush`
is the Angular 22 default; the library adds no `Eager` component.

**Config-driven components.** Components take a config object instead of many inputs.
`ActionButton`, `TableCell` and `NavItem` are the main ones. Config fields use the
`ReactiveOption<PAYLOAD, RETURN>` types from `lib/src/lib/utils/utils.ts`: a field accepts a
plain value, a function of the row data, or a signal. Read such a field with
`computeReactiveBooleanOption`, `computeReactiveStringOption` or `computeReactiveOption`, and
never by hand. `readPropValue` does the same for the older `propValue` type.

**Table.** `Lab900TableComponent` provides `Lab900TableService` in its own `providers`, so
each table instance gets one signal store (tabs, sorting, inline edit state,
`disableEditing`). Child components inject it. The table is
`ViewEncapsulation.None`, because cell content comes from consumer templates.

Cell rendering and editing are pluggable through three abstracts:

- `CellRendererAbstract` (`cell-renderers/cell-renderer.abstract.ts`) — read-only cell view,
  plus tooltip and overflow handling. Set it per column with `cellRenderer`.
- `CellEditorAbstract` (`cell-editors/cell-editor.abstract.ts`) — inline editor, set with
  `cellEditor` and `cellEditorOptions`.
- `ColumnHeaderRendererAbstract` (`column-header-renderers/`) — header view.

A new renderer or editor extends the abstract, gets an `.options` interface next to it, and
is added to `table-api.ts`.

**Action buttons.** `Lab900ActionDirective` resolves one `ActionButton` config into signals
(`label`, `disabled`, `hidden`, icons, tooltip, sub actions). `Lab900ActionButtonComponent`
and `Lab900ActionButtonToggleComponent` extend it. Reuse the directive instead of reading
the config again.

**Translation.** Library templates use `TranslatePipe`. `@ngx-translate/core` is a peer
dependency, so a consumer app must provide `TranslateService`. Labels are translation keys.

## Showcase app

`src/main.ts` bootstraps `AppComponent` and loads `showcase-ui.routes.ts`. Routes are built
with two helper classes in `src/app/modules/shared/models/`: `ShowcaseRoute` (path, title,
examples) and `ShowcaseExample` (component, title). `ShowcaseRoute` always renders
`ShowcasePageComponent`, which shows the guide tab and the examples tab.

`ExampleViewerComponent` shows the rendered example and its source. It derives the source
path from the host element name: `examples/<name>/<name>.component.<ext>`. `angular.json`
copies `src/app/modules/showcase-ui/examples/**/*-example.component.*` to `/examples` as
assets, so the raw file is fetched at runtime.

To add an example:

1. Create `src/app/modules/showcase-ui/examples/<x>-example/<x>-example.component.ts` with
   selector `lab900-<x>-example`. The folder name must match the selector without the
   `lab900-` prefix, or the source viewer fetches a missing file.
2. Register it in `showcase-ui.routes.ts` with `ShowcaseRoute` / `ShowcaseExample`.
3. Add the nav entry in `showcase-ui.nav-items.ts`.
4. Add labels to `src/assets/i18n/en.json` and `nl.json`.

Examples import from `@lab900/ui`, never through a relative path into `lib/`.

## Testing

Jest with `jest-preset-angular`, run directly. `jest.config.js` is the whole configuration: no
builder injects hidden keys. The preset supplies the Angular transform, `tsconfig.spec.json` and
the jsdom environment.

`setup-jest.ts` owns the test environment. It calls `setupZoneTestEnv()`, because the library
uses zone.js. It defines `window.matchMedia`, which jsdom lacks and Material's `MediaMatcher`
needs. It calls `ngMocks.autoSpy('jest')`, so every `ng-mocks` mock method is already a spy. The
file is in the `include` of `tsconfig.spec.json`, so `tsc` checks it.

Use `TESTING_PROVIDERS` or `TABLE_TESTING_PROVIDERS` from
`lib/src/lib/testing/testing.providers.ts` in `TestBed`. Set signal inputs with
`fixture.componentRef.setInput(...)`. Test roots are `src/` and `lib/`.

## Conventions and constraints

- Component selectors: element, `kebab-case`, prefix `lab900`. Directive selectors:
  attribute, `camelCase`, prefix `lab900`. ESLint enforces both.
- ESLint enforces member ordering: static field, instance field, constructor, static method,
  instance method. Prettier runs through ESLint, so a format error is a lint error.
- `strictTemplates` is on in every tsconfig. Do not add an opt-out. Fix the template or the
  input type instead.
- `lib/tsconfig.lib.json` sets `compilationMode: "partial"`. Keep it. Without it ng-packagr
  22 builds in `full` mode, and applications on a later Angular major cannot use the package.
- Use deep lodash imports (`lodash/cloneDeep`). The barrel import gives an ESM build warning.
- Angular schematics for the library need `--project ui`, otherwise files land in the app.

## Release

The library version and the workspace version move together. The major version matches the
Angular major. Bump the version in `lib/`, tag the commit, and push the tag; Cloud Build then
runs lint, tests and the production build, and calls `npm stage publish`. Publishing is
staged: a maintainer must approve the stage with 2FA (`npm stage list @lab900/ui`,
`npm stage approve <stage-id>`). `cloudbuild-alpha.yaml` does the same under the `alpha` tag.
Record every user-visible change in `CHANGELOG.md`, breaking changes included.

`ANGULAR-UPGRADE-19.2-TO-22.1.md` records the Angular 22 migration, the bugs it fixed, the
consumer-visible breaking changes, and open follow-ups.
