module.exports = {
  jest: function (config) {
    config = {
      ...config,
      moduleNameMapper: {
        '^~/(.*)': '<rootDir>/src/$1',
      },
      collectCoverageFrom: [
        ...config.collectCoverageFrom,
        '!src/index.js',
        '!src/services/api.js',
      ],
      coverageDirectory: 'src/__tests__/coverage',
      testPathIgnorePatterns: ['/node_modules/', '/coverage/'],
      coveragePathIgnorePatterns: ['/node_modules/', '/coverage/'],
      setupFilesAfterEnv: [
        ...config.setupFilesAfterEnv,
        'jest-localstorage-mock',
      ],
    };

    return config;
  },
};
