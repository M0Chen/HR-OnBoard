const Report = require("../models/Report");
const Comment = require("../models/Comment");

exports.get_housing_details = async (req, res) => {
  try {
    const reports = await Report.find();
    res.json(reports);
  } catch (error) {
    return res.status(401).json({
      error: error,
    });
  }
}

exports.post_report = async (req, res) => {
  try {
    const report = new Report({
      ...req.body,
      timestamp: new Date().toISOString()
    });
    await report.save();
    const reports = await Report.find({});
    res.json(reports);
    // res.redirect("/");
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      error: error,
    });
  }
}

exports.get_comment = async (req, res) => {
  try {
    const reportId = req.query.report_id;
    const report = await Report.findOne({ _id: reportId });
    const commentIds = report.comment;
    const comments = await Comment.find({ '_id': { $in: commentIds } });
    res.json(comments);
  } catch (error) {
    console.log(error);
    res.status(401).json({
      error: error,
    });
  }
}

exports.post_comment = async (req, res) => {
  try {
    const reportId = req.query.report_id;
    const report = await Report.findOne({ _id: reportId });
    const comment = new Comment({
      ...req.body,
      timestamp: new Date().toISOString()
    });
    await comment.save();
    await Report.findByIdAndUpdate(reportId, { 
      comment : [...report.comment, comment] 
    });
    const comments = await Comment.find();
    res.json(comments);
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      error: error,
    });
  }
}

exports.put_comment = async (req, res) => {
  try {
    const commentId = req.query.comment_id;
    await Comment.findByIdAndUpdate(commentId, { 
      content: req.body.content,
      timestamp: new Date().toISOString()
    });
    const comments = await Comment.find();
    res.json(comments);
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      error: error,
    });
  }
}