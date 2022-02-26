const userDatabaseService = require('../../services/users');

module.exports = async () => {
  const allUsers = await userDatabaseService.getAllUsers();
  return allUsers;
};
