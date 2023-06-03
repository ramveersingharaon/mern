import jwt from "jsonwebtoken";
import { User } from "../model/userModel.js";

export const auth = (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      res.status(400).json({
        message: "You are not Authtenticated please Login",
        success: false,
      });
    }
    jwt.verify(token, "ramveer", async function (err, decode) {
      if (err) {
        res.status(400).json({
          message: "Your token is not valid",
          success: false,
        });
      }

      const user = await User.findById(decode._id);
      req.user = user;
      next();
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      success: false,
    });
  }
};
