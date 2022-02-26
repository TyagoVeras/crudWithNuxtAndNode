const userUsesCase = require('../../../use-cases/users');

module.exports.createUser = async (req, res) => {
  const user = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    isAdmin: req.body.isAdmin,
  };

  const userCreated = await userUsesCase.createUser(user);
  res.status(201).send(userCreated);
};

module.exports.updateUser = async (req, res) => {
  const user = {
    id: req.params.id,
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    isAdmin: req.body.isAdmin,
  };

  const userUpdated = await userUsesCase.updateUser(user, req.params.id);
  res.status(200).send(userUpdated);
};

module.exports.deleteUser = async (req, res) => {
  const user = await userUsesCase.deleteUser(req.params.id);
  res.status(200).send(user);
};
