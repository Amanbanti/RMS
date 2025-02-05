import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

// User Middleware
export const protect = async (req, res, next) => {
  let token = req.cookies.jwt;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      
      req.user = {
        id: decoded.userId,
        isAdmin: decoded.isAdmin, // Access isAdmin from token
      };

      next();
    } catch (error) {
      res.status(401).json({ message: "Not authorized, token failed!" });
    }
  } else {
    res.status(401).json({ message: "Not authorized, no token!" });
  }
};


// Admin Middleware
export const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(403).json({ message: "Not authorized as admin!" });
  }
};
