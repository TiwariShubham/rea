module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
        '\\.css$': '<rootDir>/src/mock/styleMock.js',
    },
};
