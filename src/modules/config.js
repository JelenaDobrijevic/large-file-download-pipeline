module.exports.load = async ({ payload }) => {
  // default config + ono što eventualno dođe iz payload.Config
  return {
    client_database: {
      host: 'localhost',
      port: 5432,
      user: 'demo',
      password: 'demo',
      database: 'demo'
    },
    output_dir: './.output',
    ...(payload && payload.Config ? payload.Config : {})
  };
};
