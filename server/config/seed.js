const path = require("path");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const HR = require('../models/HR')
const dotenv = require('dotenv');
dotenv.config({ path: '../.env' });
async function run() {
  try {
    await mongoose.connect(
      "mongodb+srv://Russ:poiu0987@cluster0.bmwvl6w.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Connected to DB.");

    // Resetting
    await Promise.all([HR.collection.drop()]);
 



    //hardcoded HRs
    const GingerPswd = await bcrypt.hash('Ginger', Number(process.env.SALT));
    const FredPswd = await bcrypt.hash('Fred', Number(process.env.SALT));
    const VickyPswd = await bcrypt.hash('Vicky', Number(process.env.SALT));
    const HRs = [
      { firstName: "Ginger", lastName: 'Jiang', email: 'GJ@beaconfire.com', password: GingerPswd},
      { firstName: "Fred", lastName: 'Fan', email: 'FF@beaconfire.com', password: FredPswd},
      { firstName: "Vicky", lastName: 'Vi', email: 'VV@beaconfire.com', password: VickyPswd},
    ];
    const insertHRs = await HR.insertMany(HRs);
    console.log(HRs)





    
  } catch (err) {
    console.log(err);
  } finally {
    await mongoose.connection.close();
  }
}

run().catch(console.dir);
