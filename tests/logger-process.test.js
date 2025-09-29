jest.mock('../src/modules/logger', () => ({
  createLogger: ({ level }) => ({ level, info: jest.fn(), error: jest.fn(), trace: jest.fn?.() })
}));

const REGISTRY = require('../src/core/process-registry');
const { process: loggerProcess } = require('../src/processes/logger');

test('logger process initializes and stores logger', async () => {
  const context = {
    get: (key) => (key === REGISTRY.ENV ? { CONSOLE_LOG_LEVEL: 'info' } : undefined),
    apply: (key, val) => ({ [key]: val })
  };

  const result = await loggerProcess(context);
  expect(result).toHaveProperty(REGISTRY.LOGGER);
  expect(result[REGISTRY.LOGGER]).toHaveProperty('info');
});
