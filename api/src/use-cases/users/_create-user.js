const userDatabaseService = require('../../services/users');

module.exports = async (user) => {
  const userCreated = await userDatabaseService.insertUser(user);
  return userCreated;
};
