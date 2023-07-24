const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const refType = Schema.Types.ObjectId;

const schema = mongoose.Schema({
    address: { type:String, required: true },
    roommates: [{ type: refType, ref: "Info" }],
	reports: [{ type: refType, ref: "Report" }],
    landlord: { type: refType, ref: "Landlord" },
    facility: { type: refType, ref: "Facility" },
})

module.exports = mongoose.model("Housing", schema)
