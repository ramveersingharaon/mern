import { User } from "../model/userModel.js";
import jwt from "jsonwebtoken";

export const test = (req, res) => {
  try {
    res.send("hello world");
  } catch (error) {
    res.status(400).json({
      message: error.message,
      success: false,
    });
  }
};

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = new User({ name, email, password });
    await user.save();
    res.status(200).json({
      message: "User Register Successfully",
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      success: false,
    });
  }
};

export const login = async (req, res) => {
  const { email,password } = req.body;
  try {
    const user = await User.findOne({ email: email,password:password });
    if (user) {
      const token = jwt.sign({ _id: user._id }, "ramveer");

      res
        .cookie("token", token, {
          httpOnly: true,
          expires: new Date(Date.now() + 1000 * 60),
        })
        .status(200)
        .json({
          message: "User Login successfully",
          success: true,
        });
    }else{
        res.status(400).json({
            message: "Invalid Login Detail",
            success: false,
          });
    }
  } catch (error) {
    res.status(400).json({
      message: error.message,
      success: false,
    });
  }
};
