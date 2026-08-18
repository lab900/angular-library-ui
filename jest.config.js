module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  roots: ['<rootDir>/src', '<rootDir>/lib'],
  // Resolve the package name to the library sources, so tests need no lib build.
  moduleNameMapper: {
    '^@lab900/ui$': '<rootDir>/lib/src/public-api.ts',
  },
};
