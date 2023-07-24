const mongoose = require("mongoose");

const schema = mongoose.Schema({
    optReceipt: { type: String },
    optEAD: { type: String },
	i983: { type: String },
    i20: { type: String },
})

module.exports = mongoose.model("VisaStatus", schema)
