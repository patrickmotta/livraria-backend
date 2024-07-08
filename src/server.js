import express from "express"
import "express-async-errors"
import Routes from "./Routes/index.js"
import MongoDBConnect from "./Database/config/MongoDBConnect.js"
import ErrorHandler from "./middlewares/ErrorHandler.js"
import RouteNotFound from "./middlewares/RouteNotFound.js"


await MongoDBConnect()

const PORT = 5000
const server = express()

server.use(express.json())
server.use(Routes)
server.use(RouteNotFound)
server.use(ErrorHandler)

server.listen(PORT, () =>{
   console.log(`Server listen on PORT ${PORT}.`)
})