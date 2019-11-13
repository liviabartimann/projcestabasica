//controle das sessões
const User = require("../models/User");

module.exports = {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: "User not found. " });
    }

    if (!(await user.compareHash(password))) {
      return res.status(400).json({ error: "Invalid Password." });
    }

    return res.json({ user, token: User.generateTokn(user) });
  }
};

//yarn add jsonwebtoken
// yarn add bcryptjs
