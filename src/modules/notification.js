module.exports.notify = async ({ client, message, data, payload }) => {
  console.log('NOTIFY:', message, '| file:', data?.name, '| user:', payload?.User || 'demo');
  return { success: true, message, file: data?.name, to: payload?.User || 'demo' };
};
