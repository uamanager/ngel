module.exports = {
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest',
  },
  resolver: '@nrwl/jest/plugins/resolver',
  moduleFileExtensions: ['ts', 'js', 'html'],
  collectCoverage: true,
  coveragePathIgnorePatterns: ['/node_modules/', '/tests/', '/test/'],
  coverageReporters: ['text', 'html', 'text-summary', 'clover'],
  reporters: ['default', 'jest-junit'],
  verbose: true,
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.spec.json',
      stringifyContentPathRegex: '\\.html$',
      astTransformers: [
        require.resolve('jest-preset-angular/InlineHtmlStripStylesTransformer'),
      ],
    },
  },
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
};
