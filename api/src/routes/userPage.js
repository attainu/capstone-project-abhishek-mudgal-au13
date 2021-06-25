import express from "express";
import UserPage from "../models/schema/userPage";
import uaParser from "ua-parser-js";
import auth from '../utils/auth';

const route = express.Router();

route.get("/user/:userName", async (req, res) => {
  try {
    let userPage = await UserPage.findOne(
      { _id: req.params.userName },
      { creator: 0, __v: 0, OSType: 0, browserType: 0, deviceType: 0 }
    );

    console.log(userPage);

    if (!userPage) {
      return res.status(404).json({
        data: {},
        errors: [
          {
            location: "params",
            value: req.params.userName,
            msg: "No page found!",
          },
        ],
        msg: "No Page Found For The User",
      });
    }

    const userAgent = uaParser(req.headers["user-agent"]);

    let deviceType = "other";
    let browserName = userAgent.browser.name.toLowerCase();
    let osName = userAgent.os.name.toLowerCase();
    if (userAgent.device.type != undefined) {
      deviceType = userAgent.device.type.toLowerCase();
    }

    if (
      browserName != "firefox" &&
      browserName != "chrome" &&
      browserName != "edge" &&
      browserName != "ie" &&
      browserName != "safari" &&
      browserName != "opera"
    ) {
      browserName = "other";
    }

    if (
      osName != "linux" &&
      osName != "windows" &&
      osName != "mac" &&
      osName != "chrome" &&
      osName != "android" &&
      osName != "ios"
    ) {
      osName = "other";
    }

    if (
      deviceType != "mobile" &&
      deviceType != "desktop" &&
      deviceType != "tablet"
    ) {
      deviceType = "other";
    }

    let browserkey = `browserType.${browserName}`;
    let oskey = `OSType.${osName}`;
    let devicekey = `deviceType.${deviceType}`;

    const telemetery = await UserPage.findOneAndUpdate(
      { link: req.params.link },
      { $inc: { clicks: 1, [browserkey]: 1, [oskey]: 1, [devicekey]: 1 } }
    );

    telemetery;

    return res.status(200).json({
      data: userPage,
      errors: [],
      msg: "User Page Fetched Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error!");
  }
});

route.get('/get-data', auth, async (req, res)=>{
    console.log('hello');
    try {
        
        let data = await UserPage.findOne({creator: req.user.id})

        console.log(data);
        return res.status(200).json({
            data: data,
            errors: [],
            msg: 'Telemetery data fetched successfully!'
        })
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error!')
    }
})

export { route as userPage };
