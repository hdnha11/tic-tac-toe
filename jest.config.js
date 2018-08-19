module.exports = {
  testURL: 'http://localhost',
  collectCoverageFrom: [
    'components/**/*.{js,jsx}',
    'containers/**/*.{js,jsx}',
    'utils/**/*.{js,jsx}'
  ],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80
    }
  },
  moduleNameMapper: {
    '.*\\.(css|less|styl|scss|sass)$': '<rootDir>/testing/css-module-mock.js',
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/testing/image-mock.js'
  },
  setupFiles: ['<rootDir>/testing/jest-setup.js'],
  testRegex: 'tests/.*\\.test\\.jsx?$',
  snapshotSerializers: ['enzyme-to-json/serializer']
};
