module.exports.createClient = async ({ connection }) => {
  // mock klijent: connect/query/end postoje, ali ništa stvarno ne rade
  return {
    connect: async () => {},
    query: async (sql) => ({ rows: [], rowCount: 0, sql }),
    end: async () => {}
  };
};
