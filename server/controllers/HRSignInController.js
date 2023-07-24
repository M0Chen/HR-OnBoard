const bcrypt = require("bcryptjs");

const HR = require('../models/HR')
const dotenv = require('dotenv');
dotenv.config({ path: '../.env' });

exports.signIn = async (req, res) => {
    try {
      //get data from database
      const user = await HR.findOne({ email: req.body.email}).exec();
      if(!user){
        return res.status(404).send("NOT FOUND.")
      }
      const comparedCorrect = await bcrypt.compare(req.body.password, user.password);

      if (!comparedCorrect){
        return res.status(403).send("Incorrect Password") 
      }
        
      res.send({name:user.firstName + " " + user.lastName, email:user.email});
     

    } catch (e) {
      console.error(e);
      return res.status(404).send({error: e})
    }
  };

