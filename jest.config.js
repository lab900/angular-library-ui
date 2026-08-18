module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  roots: ['<rootDir>/src', '<rootDir>/lib'],
  // Resolve the package name to the library sources, so tests need no lib build.
  moduleNameMapper: {
    '^@lab900/ui$': '<rootDir>/lib/src/public-api.ts',
  },
  transform: {
    // @angular-builders/jest passes the ts-jest option `isolatedModules: true`, which
    // ts-jest deprecates. This value switches that option off. `isolatedModules` is a
    // compiler option in tsconfig.spec.json instead, so the compilation stays the same.
    '^.+\\.(ts|js|mjs|html|svg)$': ['jest-preset-angular', { isolatedModules: false }],
  },
};
