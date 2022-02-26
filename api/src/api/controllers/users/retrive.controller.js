const userUsesCase = require('../../../use-cases/users');

module.exports.getAllUsers = async (req, res) => {
  const allUsers = await userUsesCase.allUsers();
  res.status(200).send(allUsers);
};

module.exports.getUser = async (req, res) => {
  const user = await userUsesCase.getUser(req.params.id);
  res.status(200).send(user);
};
