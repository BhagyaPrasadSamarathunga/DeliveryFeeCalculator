module.exports = {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    moduleNameMapper: {
      "/\.(css|sass|scss)$/": '<rootDir>/test/jest/__mocks__/styleMock.js',
      '^~/(.*)$': '<rootDir>/$1',
    }
  };