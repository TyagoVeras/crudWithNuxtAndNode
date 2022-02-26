const userDatabaseService = require('../../services/users');

module.exports = async (user, userId) => {
  if (userId !== user.id) {
    throw new Error('User id does not match');
  }

  const userUpdated = await userDatabaseService.updateUser(user);
  return userUpdated;
};
