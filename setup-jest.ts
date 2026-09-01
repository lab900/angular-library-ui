import { setupZoneTestEnv } from 'jest-preset-angular/setup-env/zone';
import { ngMocks } from 'ng-mocks';

// The library runs with zone.js, so use the zone test environment and not the
// zoneless one. `TestBed.initTestEnvironment` runs here.
setupZoneTestEnv();

// jsdom has no `matchMedia`. Angular Material's `MediaMatcher` needs it.
// Use a plain function and not `jest.fn()`, so the mock survives `resetMocks`.
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  }),
});

// All methods in mock declarations and providers
// will be automatically spied on their creation.
// https://ng-mocks.sudo.eu/extra/auto-spy
ngMocks.autoSpy('jest');
