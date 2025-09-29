const Logger = require('../modules/logger');
const REGISTRY = require('../core/process-registry');
const KEY = REGISTRY.LOGGER;
const process = async (context) => {
    const env = context.get(REGISTRY.ENV);
    const logger = Logger.createLogger({
        level: env.CONSOLE_LOG_LEVEL
    });
    global.logger = logger;
    logger.info('Logger init : DONE');
    return Promise.resolve(context.apply(KEY, logger));
};

module.exports.process = process;