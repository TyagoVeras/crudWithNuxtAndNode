const users = require('./_users');

module.exports.init = (instance, basePath = '/apiCrud') => {
  users.init(instance, basePath);
};
