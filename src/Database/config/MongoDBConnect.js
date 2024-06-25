import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

async function MongoDBConnect(){
   try{
      mongoose.connect(`mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/`)
      return mongoose.connection
   }catch(error){
      console.log("DB Error", error)
   }
}

export default MongoDBConnect;