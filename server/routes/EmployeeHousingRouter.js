const EmployeeHousingRouter = require("express").Router();
const EmployeeHousingController = require("../controllers/EmployeeHousingController");

EmployeeHousingRouter.route("")
  .get(EmployeeHousingController.get_housing_details)

EmployeeHousingRouter.route("/report")
  .post(EmployeeHousingController.post_report);

EmployeeHousingRouter.route("/comment")
  .get(EmployeeHousingController.get_comment)
  .post(EmployeeHousingController.post_comment)
  .put(EmployeeHousingController.put_comment);

module.exports = EmployeeHousingRouter;