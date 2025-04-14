const _ = require('lodash');
const userService = require('../services/user_service.js');

const registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (_.isEmpty(email) || _.isEmpty(password)) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    const existingUser = await userService.findUserByEmail(email);
    if (existingUser) {
      return res.status(409).json({ message: 'User already exists' });
    }

    const user = await userService.createUser({ email, password });

    return res.status(201).json(_.pick(user, ['_id', 'email']));
  } catch (err) {
    console.error('Error in registerUser:', err.message);
    return res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  registerUser
};
