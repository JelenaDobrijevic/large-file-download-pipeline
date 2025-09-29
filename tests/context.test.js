const Context = require('../src/core/context');
const REGISTRY = require('../src/core/process-registry');

test('Context apply and get works', () => {
  const ctx = new Context();
  ctx.apply(REGISTRY.LOGGER, { log: () => 'ok' });
  expect(ctx.get(REGISTRY.LOGGER)).toHaveProperty('log');
});
