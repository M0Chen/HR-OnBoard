const Info = require("../models/Info");

exports.get_all_profiles = async (req, res) => {
  try {
    const employeeInfo = await Info.find();
    res.json(employeeInfo);
  } catch (error) {
    return res.status(401).json({
      error: error,
    });
  }
}

exports.get_individual_profile = async (req, res) => {
  try {
    let profileId = req.query.profile_id;
    const individualInfo = await Info.find({ _id: profileId });
    res.json(individualInfo);
  } catch (error) {
    return res.status(401).json({
      error: error,
    });
  }
}

exports.search_by_name = async (req, res) => {
  try {
    const userName = req.query.name;
    let employeeInfo = [];
    if (userName) {
      employeeInfo = await Info.find({
        $or:[
          {"firstName": { "$regex": userName, "$options": "i" }},
          {"lastName": { "$regex": userName, "$options": "i" }} 
        ]
      })
    }
    res.json(employeeInfo);
  } catch (error) {
    return res.status(401).json({
      error: error,
    });
  }
}




