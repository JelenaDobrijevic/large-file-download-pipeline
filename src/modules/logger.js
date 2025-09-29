module.exports.createLogger = ({ level = 'info' } = {}) => {
  const tag = (lvl) => `[${lvl.toUpperCase()}]`;
  const log = (lvl, ...args) => console.log(tag(lvl), ...args);
  return {
    level,
    info: (...a) => log('info', ...a),
    error: (...a) => console.error(tag('error'), ...a),
    trace: (...a) => log('trace', ...a)
  };
};
