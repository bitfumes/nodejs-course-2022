const User = require("../models/User");
const bcrypt = require("bcrypt");
const saltRounds = 10;

exports.signup = async (req, res) => {
  const password = await bcrypt.hash(req.body.password, saltRounds);
  const data = { ...req.body, password };
  const user = await User.create(data);
  res.json({ user });
};
