const express = require('express');
var bodyParser = require('body-parser')
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const path = require('path');

var app = express()
const cors = require("cors");
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

require("dotenv").config({ path: path.join(__dirname, './.env') });

// parse application/json
app.use(bodyParser.json())

const EmployeeHousingRouter = require('./routes/EmployeeHousingRouter');
const EmployeeProfileRouter = require('./routes/EmployeeProfileRouter');
const HRRouter = require('./routes/HRRouter')
const VisaUploadRouter = require('./routes/VisaUploadRouter');
app.use("/employee_housing", EmployeeHousingRouter);
app.use("/employee_profile", EmployeeProfileRouter);
app.use("/visa_management", VisaUploadRouter);
app.use('/hr', HRRouter);

app.set("view engine", "ejs")



app.get("/", (req, res) => {

    res.render('index')
})


const connection = require("./config/db");

// Connect to MongoDB database

connection.once('open', () => {
    app.listen(3097, () => {
        console.log("Server has started!")
    })
})
