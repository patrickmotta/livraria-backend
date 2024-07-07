import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

async function MongoDBConnect() {
   try {
      console.log("Attempting to connect to MongoDB...")
      await mongoose.connect(`mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/${process.env.MONGODB_DATABASE}`, {
         authSource: "admin", 
         dbName: process.env.MONGODB_DATABASE 
      })

      console.log("Connection attempt finished")


      mongoose.connection.on("connected", () => {
         console.log("MongoDB connected")
      })

      mongoose.connection.on("error", (err) => {
         console.error(`Erro na conexão com o MongoDB: ${err}`)
      })

      return mongoose.connection
   } catch (error) {
      console.log("DB Error", error)
      throw error
   }
}

export default MongoDBConnect
