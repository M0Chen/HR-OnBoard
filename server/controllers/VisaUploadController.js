const { uploadToS3 } = require("../services/uploadService");

exports.post_file = async (req, res) => {
  try {
    const file = req.file;
    const data = await uploadToS3(file);
    res.json(data);
  } catch (error) {
    return res.status(401).json({
      error: error,
    });
  }
}
