const Context = require('./core/context');
const REGISTRY = require('./core/process-registry');

const steps = [
  require('./processes/logger').process,
  require('./processes/config').process,
  require('./processes/database').process,
  require('./processes/file').process,
  require('./processes/notification').process,
  require('./processes/clean').process
];

(async () => {
  const ctx = new Context();

  // primer payload-a koji pokreće pipeline
  ctx.apply(REGISTRY.PAYLOAD, {
    Query: 'SELECT * FROM users',
    Fields: ['id', 'name'],
    Key: 'report.csv',
    Bucket: 'demo-bucket',
    Folder: 'exports',
    User: 'demo-user@example.com'
    // Config: { output_dir: "./.output" } // (opciono) custom override
  });

  // nivo logovanja
  ctx.apply(REGISTRY.ENV, { CONSOLE_LOG_LEVEL: 'info' });

  for (const step of steps) {
    await step(ctx);
  }

  console.log('Pipeline finished ✅');
})();
