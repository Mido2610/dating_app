// Set default timeout for tests to 10 seconds for integration tests
jest.setTimeout(10000);

// Global setup for testing environment
process.env.NODE_ENV = 'test'; 