const database = require('../modules/database');
const REGISTRY = require('../core/process-registry');
const KEY = REGISTRY.DATABASE;
const CLIENT_DATABASE_CONFIG_KEY = 'client_database';
const process = async (context) => {
    logger.info('Database init : START');
    const config = context.get(REGISTRY.CONFIG);
    const connection = config[CLIENT_DATABASE_CONFIG_KEY];
    logger.trace('Database connection params: %s', JSON.stringify(connection));
    const client = await database.createClient({connection});
    await client.connect();
    logger.info('Database init : END');
    return Promise.resolve(context.apply(KEY, client));
};

module.exports.process = process;