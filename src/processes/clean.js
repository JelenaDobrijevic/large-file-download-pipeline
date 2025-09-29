const REGISTRY = require('../core/process-registry');

const process = async (context) => {
    const logger = global.logger;
    logger.info('Cleaning : START');
    const client = context.get(REGISTRY.DATABASE);
    await client.end();
    logger.info('Cleaning : END');
    return Promise.resolve(context);
};

module.exports.process = process;