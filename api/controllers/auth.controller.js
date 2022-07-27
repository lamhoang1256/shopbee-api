const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const { responseSuccess, createError } = require("../utils/response");
const jwt = require("jsonwebtoken");
let refreshTokens = [];

const authControllers = {
  generateAccessToken: (user) => {
    return jwt.sign(
      {
        id: user.id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_ACCESS_KEY,
      { expiresIn: "30s" }
    );
  },

  generateRefreshToken: (user) => {
    return jwt.sign(
      {
        id: user.id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_REFRESH_KEY,
      { expiresIn: "365d" }
    );
  },

  signUp: async (req, res, next) => {
    try {
      const userInDB = await User.findOne({ email: req.body.email }).exec();
      if (!userInDB) {
        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
          fullname: req.body.fullname,
          avatar: req.body.avatar,
          phone: req.body.phone,
          email: req.body.email,
          address: req.body.address,
          city: req.body.city,
          password: hashed,
          isAdmin: req.body.isAdmin,
        });
        const savedUser = await newUser.save();
        const response = {
          message: "Đăng ký thành công",
          data: savedUser,
        };
        responseSuccess(res, response);
      } else {
        next(createError(422, "Email đã tồn tại!"));
      }
    } catch (error) {
      console.log("error: ", error);
      next(error);
    }
  },

  signIn: async (req, res, next) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) res.status(404).json("Wrong email");
      const validPassword = await bcrypt.compare(req.body.password, user.password);
      if (!validPassword) res.status(404).json("Wrong password");
      if (user && validPassword) {
        const accessToken = authControllers.generateAccessToken(user);
        const refreshToken = authControllers.generateRefreshToken(user);
        const { password, ...others } = user._doc;
        const response = {
          message: "Đăng nhập thành công!",
          data: { ...others, accessToken, refreshToken },
        };
        responseSuccess(res, response);
      }
    } catch (error) {
      next(error);
    }
  },

  requestRefreshToken: async (req, res, next) => {
    const refreshToken = req.body.refreshToken;
    if (!refreshToken) return res.status(401).json("You're not authenticated");
    jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY, (err, user) => {
      if (err) {
        next(err);
      }
      refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
      const newAccessToken = authControllers.generateAccessToken(user);
      const newRefreshToken = authControllers.generateRefreshToken(user);
      refreshTokens.push(newRefreshToken);
      const response = {
        message: "Tạo mới access token thành công!",
        data: {
          accessToken: newAccessToken,
          refreshToken: newRefreshToken,
        },
      };
      responseSuccess(res, response);
    });
  },
};

module.exports = authControllers;
