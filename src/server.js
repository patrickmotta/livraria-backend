import express from "express"
import Routes from "./Routes/index.js"
import MongoDBConnect from "./Database/config/MongoDBConnect.js"


const mongodb = await MongoDBConnect()

const PORT = 5000
const server = express()

server.use(express.json())
server.use(Routes)

server.listen(PORT, () =>{
   console.log(`Server listen on PORT ${PORT}.`)
})