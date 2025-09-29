const REGISTRY = require('./process-registry');

class Context {

    validateKey(key) {
        const values = Object.values(REGISTRY);
        if (values.indexOf(key) === -1) {
            throw new Error(`Process key '${key}' is not registered in the process registry`);
        }
    }

    apply(key, data) {
        this.validateKey(key);
        return Object.assign(this, { [key]: data })
    }

    get(key) {
        this.validateKey(key);
        return this[key];
    }

    stringify(key) {
        this.validateKey(key);
        return JSON.stringify(this[key] || {});
    }
}

module.exports = Context;