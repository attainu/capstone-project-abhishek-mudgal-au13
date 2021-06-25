import express from "express";
import { body, validationResult } from "express-validator";
import User from "../models/schema/user";
import auth from "../utils/auth";
import UserPage from "../models/schema/userPage";
import upload from "../utils/fileUpload";

const route = express.Router();

route.post(
  "/create-page",
  auth,
  // upload.single("profileImage"),
  async (req, res) => {

    console.log(req.body);

    try {
      const user = await User.findById(req.user.id);

      if (user) {
        let creator = user.userName;
        let userPage = await UserPage.findOne({ _id: creator });

        if (!userPage) {
          userPage = new UserPage({
            _id: user.userName,
            creator: req.user.id,
            profileImage: req.body.img,
            theme: req.body.changeBg.data,
            socials: req.body.linksArray,
          });
          await userPage.save();

          return res.status(200).json({
            data: userPage,
            errors: [],
            msg: "User Page created successfully!",
          });
        } else {
          await UserPage.update(
            {
              _id: user.userName,
            },
            {
              profileImage: req.body.img,
              theme: req.body.changeBg.data,
              socials: req.body.linksArray,
            }
          );

          return res.status(200).json({
            data: UserPage,
            errors: [],
            msg: "User Page Updated successfully!",
          });
        }
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error!");
    }
  }
);

route.get("/create-page", async (req, res) => {
  try {
    let userPage = UserPage.findOne({ creator: req.user.id });
    if (!userPage) {
      return req.status(404).json({
        data: {},
        error: [],
        msg: "No data found for the user",
      });
    }

    return res.status(200).json({
      data: userPage,
      error: [],
      msg: "No data found for the user",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error!");
  }
});

export { route as createPage };
