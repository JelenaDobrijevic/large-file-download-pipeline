const CHECK_INTERVAL = 1000;
const SAFETY_GAP = 20000;
const REGISTRY = require('../core/process-registry');
const process = async (context) => {
    const payload = context.get(REGISTRY.PAYLOAD);
    const ctx = context.get(REGISTRY.CTX);
    if (!ctx.getRemainingTimeInMillis) return;
    setInterval(async () => {
        const remainingMillis = ctx.getRemainingTimeInMillis();
        if (remainingMillis <= SAFETY_GAP) {
            const message = 'Safe exit';
            logger.error(`${message} (${remainingMillis} ms): %s`, JSON.stringify(payload));
            ctx.succeed()
        }
    }, CHECK_INTERVAL)
};

module.exports.process = process;
