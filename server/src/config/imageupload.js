import multer from "multer";

const storage = multer.diskStorage({
  filename: function (req, file, callback) {
    callback(null, Date.now() + file.originalname);
  },
});

const filter = function (req, file, cb) {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif|webp)$/i)) {
    return cb({ message: "Unsupported file format" }, false);
  }
  cb(null, true);
};

export const upload = multer({ storage: storage, imageFilter: filter });
