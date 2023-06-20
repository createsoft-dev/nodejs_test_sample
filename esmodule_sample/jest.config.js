export default {
  moduleFileExtensions: ['js'],
  testMatch: ['<rootDir>/**/*.test.js'],
  // testMatch: ['<rootDir>/tests/**/*.test.js'],
  transform: {
    '^.+\\.js$': 'esbuild-jest',
  },
};