import mongoose from "mongoose";

const dotenv = require('dotenv');
dotenv.config({ path: './env' });

// create a mongo db connections
const dbConnet = async()=> {
    try {
        var mondb = await mongoose.connect(process.env.MONGO_URL!)
        console.log(mondb)
        console.log("CONNECTED TO MONGODB SUCCESS...")
        
    } catch (error){
        var mondb = await mongoose.connect(process.env.MONGO_URL!)
        console.log("CONNECTED TO MONGODB FAILED...", mondb)
        
        process.exit(1)
    }
    
};
export default dbConnet