const userPersistController = require('../controllers/users/persist.controller');
const userRetriveController = require('../controllers/users/retrive.controller');

module.exports.init = (instance, basePath) => {
  // Persist
  instance.post(`${basePath}/users`, userPersistController.createUser);
  instance.put(`${basePath}/users/:id`, userPersistController.updateUser);
  instance.delete(`${basePath}/users/:id`, userPersistController.deleteUser);

  // Retrive
  instance.get(`${basePath}/users`, userRetriveController.getAllUsers);
  instance.get(`${basePath}/users/:id`, userRetriveController.getUser);
};
