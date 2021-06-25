import multer from "multer";
import path from "path";

const diskStorage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, path.join(__dirname, "../uploads"));
  },
  filename: function name(req, file, callback) {
    const fileName =
      Math.random().toString(20).substr(2, 6) +
      Date.now() +
      path.extname(file.originalname);
    req.fileName = fileName;
    callback(null, fileName);
  },
});
const upload = multer({
  storage: diskStorage,
  limits: { fileSize: 5000 },
  fileFilter: (req, file, callback) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      callback(null, true);
    } else {
      callback(null, false);
      return callback(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
});

export default upload
