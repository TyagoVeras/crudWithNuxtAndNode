const userDatabaseService = require('../../services/users');

module.exports = async (id) => {
  const user = await userDatabaseService.getUserById(id);
  return user;
};
