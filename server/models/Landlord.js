const mongoose = require("mongoose");

const schema = mongoose.Schema({
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true },
    phoneNum: { type: Number, required: true },
    email: { type: String, required: true },
})

module.exports = mongoose.model("Landlord", schema)