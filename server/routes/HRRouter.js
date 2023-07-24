const HRRouter = require("express").Router();
const HRHiringController = require("../controllers/HRHiringController");
const HRSignInController = require("../controllers/HRSignInController")
HRRouter.route("/generateToken")
  .post(HRHiringController.generateToken)

HRRouter.route("/signIn")
  .post(HRSignInController.signIn)

module.exports = HRRouter;