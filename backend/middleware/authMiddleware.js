import jwt from "jsonwebtoken";
import User from "../model/userModel.js";

// User Middleware
export const protect = async (req, res, next) => {
  let token;

  // Read the JWT token from the cookie
  token = req.cookies.jwt;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Fetch user by primary key (id) in Sequelize
      req.user = await User.findByPk(decoded.userId, {
        attributes: { exclude: ["password"] }, // Exclude password from the result
      });

      if (!req.user) {
        res.status(401);
        throw new Error("Not authorized, user not found!");
      }

      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error("Not authorized, token failed!");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized, no token!");
  }
};

// Admin Middleware
export const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(403); // Forbidden
    throw new Error("Not authorized as admin!");
  }
};
