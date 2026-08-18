module.exports = {
  // The preset supplies the Angular transform, `tsconfig.spec.json` and the
  // jsdom environment. `setup-jest.ts` supplies the test environment itself.
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  roots: ['<rootDir>/src', '<rootDir>/lib'],
  moduleNameMapper: {
    // Resolve the package name to the library sources, so tests need no lib build.
    '^@lab900/ui$': '<rootDir>/lib/src/public-api.ts',
    '\\.(jpg|jpeg|png)$': '<rootDir>/jest.file-mock.js',
  },
};
