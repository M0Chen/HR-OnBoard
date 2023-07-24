const mongoose = require("mongoose")

const schema = mongoose.Schema({
    content: { type: String },
    creator: { type: String },
    timestamp: { type: String, required: true},
})

module.exports = mongoose.model("Comment", schema)