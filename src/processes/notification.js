const notification = require('../modules/notification');
const REGISTRY = require('../core/process-registry');
const KEY = REGISTRY.NOTIFICATION;
const process = async (context) => {
    const logger = global.logger;
    logger.info('Notification sending : START');
    const client = context.get(REGISTRY.DATABASE);
    const file = context.get(REGISTRY.FILE);
    const payload = context.get(REGISTRY.PAYLOAD);
    const data = await notification.notify({
        client,
        message: `${file.name} ready for download`,
        data: file,
        payload
    });
    logger.info('Notification sending : END');
    return Promise.resolve(context.apply(KEY, data));
};

module.exports.process = process;