const mongoose = require("mongoose")

const infoSchema = mongoose.Schema({
    firstName: {type:String, required: true},
    middleName: {type:String},
    lastName: {type:String, required: true},
	address: {type:String, required: true},
    phoneNum: {type:Number, required: true},
    carMake:{type:String},
    carModel:{type:String},
    carColor:{type:String},
    ssn:{type:Number,required: true},
    dateOfBirth:{type:String,required: true},
    carColor:{type:String},
    visa:{type:String, required: true},
    optStart:{type:Date},
    optEnd:{type:Date},
    driveNum:{type:String},
    driveExp:{type:Date},
    referFirstName:{type:String},
    referMiddleName:{type:String},
    referLastName:{type:String},
    referPhone:{type:String},
    referEmail:{type:String},
    referRelation:{type:String},
    emerFirstName:{type:String, required: true},
    emerMiddleName:{type:String, required: true},
    emerLastName:{type:String, required: true},
    emerPhone:{type:String, required: true},
    emerEmail:{type:String, required: true},
    emerRelation:{type:String, required: true},
    
    

})

module.exports = mongoose.model("Info", infoSchema)