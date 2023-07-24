const jwt = require("jsonwebtoken");

exports.generateToken = async (req, res) => {
  try {
    const token = jwt.sign(
      { email: req.body.email, name: req.body.name },
      process.env.JWT_SECRET,
      {
        expiresIn: "3h", // expires in three hours
      }
    );
    console.log(token);
    res.json(token);
  } catch (error) {
    console.log(error);
    res.status(401).json({
      error: error,
    });
  }
};

