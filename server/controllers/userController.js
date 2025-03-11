const ApiError = require("../error/ApiError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User, Basket } = require("../models/models");

const generateJwt = (id, email, role) => {
  return jwt.sign(
    {
      id,
      email,
      role,
    },
    process.env.SECRET_KEY,
    {
      expiresIn: "24h",
    }
  );
};

class UserController {
  async registration(req, res, next) {
    const { email, pwd, role } = req.body;

    if (!email || !pwd) {
      return next(ApiError.badRequest("No email or password"));
    }
    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
      return next(ApiError.badRequest("Email is already used"));
    }

    const hashPwd = await bcrypt.hash(pwd, 5);
    const user = await User.create({ email, role, pwd: hashPwd });
    const basket = await Basket.create({ userId: user.id });
    const token = generateJwt(user.id, user.email, user.role);

    return res.json({ token });
  }

  async login(req, res, next) {
    const { email, pwd } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return next(ApiError.badRequest("No such email"));
    }
    let comparePwd = bcrypt.compareSync(pwd, user.pwd);
    if (!comparePwd) {
      return next(ApiError.badRequest("Wrong password"));
    }
    const token = generateJwt(user.id, user.email, user.role);
    return res.json(token);
  }

  async auth(req, res, next) {
    const token = generateJwt(req.user.id, req.user.email, req.user.role)
    return res.json({token})
  }
}

module.exports = new UserController();
