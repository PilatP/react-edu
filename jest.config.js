// eslint-disable-next-line no-undef
module.exports = {
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/__tests__/utils/'],
  collectCoverage: false,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/stories.tsx',
    '!src/**/styles.ts',
    '!src/pages/**/*.ts(x)?',
    '!src/styles/**',
    '!src/types/**',
    '!**/*.d.ts',
    '!src/index.tsx',
    '!src/main.tsx',
    '!src/themes/*.ts(x)?',
  ],
  coverageThreshold: {
    global: {
      statements: -140,
      branches: 60,
      functions: 60,
      lines: 80,
    },
  },
  setupFilesAfterEnv: ['<rootDir>/setup.ts'],
  modulePaths: ['<rootDir>/src/'],
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/__mocks__/svg.ts',
    '\\.(css|less)$': '<rootDir>/__mocks__/css.ts',
    '\\.(png)$': '<rootDir>/__mocks__/png.ts',
    '^@src/(.*)': ['<rootDir>/src/$1'],
    '^@themes$': ['<rootDir>/src/themes/index'],
    '^@test-utils/(.*)': ['<rootDir>/src/__tests__/utils/$1'],
    '^@ui/(.*)': ['<rootDir>/src/components/$1'],
  },
};
