const router = require('express').Router();
const UserController = require('../controllers/user.controller');

module.exports = (app) => {
  // Create new user
  router.post('/', UserController.createUser);

  // get all users
  router.get('/', UserController.getUsers);

  // get user based on ssn
  router.get('/:ssn', UserController.getUser);

  // delete all users
  router.delete('/', UserController.deleteUsers);

  // delete user based on ssn
  router.delete('/:ssn', UserController.deleteUser);

  // update user based on ssn
  router.put('/:ssn', UserController.updateUser);

  // patch user based on ssn
  router.patch('/:ssn', UserController.patchUser);

  app.use('/users', router);
};
