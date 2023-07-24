const mongoose = require("mongoose");

const schema = mongoose.Schema({
    fileName: { type: String },
    userId: { type: String },
})

module.exports = mongoose.model("UserDocument", schema)
