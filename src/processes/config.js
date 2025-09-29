const config = require('../modules/config');
const REGISTRY = require('../core/process-registry');
const KEY = REGISTRY.CONFIG;
const process = async (context) => {
    const logger = global.logger;
    logger.info('Configuration init : START');
    const payload = context.get(REGISTRY.PAYLOAD)
    const data = await config.load({payload});
    logger.info('Configuration init : END');
    return Promise.resolve(context.apply(KEY, data));
};

module.exports.process = process;