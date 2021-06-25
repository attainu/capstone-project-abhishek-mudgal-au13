import { Router } from "express";
import auth from "../utils/auth";
import User from "../models/schema/user";
import bcrypt from "bcryptjs";
import { body, validationResult } from "express-validator";

const route = Router();

route.patch(
  "/update-user",
  auth,
  [body("email", "Please enter a valid email").isEmail()],

  async (req, res) => {
    try {

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          data: {},
          errors: errors.array(),
          msg: "Unable to create user!",
        });
      }


      if (req.body.firstName) {
        await User.update(
          { _id: req.user.id },
          { firstName: req.body.firstName }
        );
      }

      if (req.body.email) {
        await User.update({ _id: req.user.id }, { email: req.body.email });
      }

      let user = await User.findById(req.user.id);

      return res.status(200).json({
        data: {
          email: req.body.email,
          firstName: req.body.firstName,
        },
        errors: [],
        msg: "User details updated successfully",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).send("Internal Server Error!!");
    }
  }
);

export { route as user }
