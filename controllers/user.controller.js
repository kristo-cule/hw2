const UserService = require('../services/user.services');

exports.createUser = async function (req, res) {
  try {
    const user = await UserService.createUser(req, res);
    return res.status(200).json({ status: 200, data: user, message: 'User successfully created' });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.getUsers = async function (req, res) {
  try {
    const users = await UserService.getUsers();
    return res.status(200).json({ status: 200, data: users, message: 'Users successfully retrieved' });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.getUser = async function (req, res) {
  try {
    const ssn = req.params;
    const user = await UserService.getUser(ssn);
    return res.status(200).json({ status: 200, data: user, message: 'User successfully retrieved' });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.deleteUsers = async function (req, res) {
  try {
    const users = await UserService.deleteUsers();
    // console.log(users);
    return res.status(200).json({ status: 200, deletedCount: users.deletedCount, message: 'Users successfully deleted' });
  } catch (e) {
    // console.log(req);
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.deleteUser = async function (req, res) {
  try {
    const ssn = req.params;
    const user = await UserService.deleteUser(ssn);
    return res.status(200).json({ status: 200, deletedCount: user.deletedCount, message: 'User successfully deleted' });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.updateUser = async function (req, res) {
  try {
    const ssn = req.params;
    const user = await UserService.updateUser(ssn, req, res);
    return res.status(200).json({ status: 200, data: user, message: 'User successfully updated' });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.patchUser = async function (req, res) {
  try {
    const ssn = req.params;
    const user = await UserService.patchUser(ssn, req, res);
    return res.status(200).json({ status: 200, data: user, message: 'User successfully patched' });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};
