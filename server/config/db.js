const mongoose = require("mongoose") 
mongoose.set('strictQuery', true);
const dotenv = require('dotenv');
dotenv.config({ path: '../.env' });
const { MONGOURL } = process.env;

mongoose
	.connect(MONGOURL, (error) => {
        if (error) console.log(error);
        else console.log("Connected to DB.");
      })
	
		
module.exports = mongoose.connection;
