const file = require('../modules/file');
const REGISTRY = require('../core/process-registry');
const KEY = REGISTRY.FILE;
const process = async (context) => {
    const logger = global.logger;
    logger.info('File write : START');
    const client = context.get(REGISTRY.DATABASE);
    const payload = context.get(REGISTRY.PAYLOAD);
    const { Query, Fields, Bucket } = payload;
    const data = await file.create({
        client,
        query: Query,
        fields: Fields,
        folder_name: payload.Folder || '_tmp',
        file_name: payload.Key,
        bucket: Bucket,
        config: context.get(REGISTRY.CONFIG)
    });
    logger.info('File write : END');
    return Promise.resolve(context.apply(KEY, data));
};

module.exports.process = process;