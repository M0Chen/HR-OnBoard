const multer = require("multer");

const VisaUploadRouter = require("express").Router();
const VisaUploadController = require("../controllers/VisaUploadController");

const upload = multer();

VisaUploadRouter.route("")
  .post(upload.single("file"), VisaUploadController.post_file);

module.exports = VisaUploadRouter;