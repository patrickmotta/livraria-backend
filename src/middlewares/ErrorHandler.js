import mongoose from "mongoose"
import AplicationError from "../errors/AplicationError.js"

// eslint-disable-next-line no-unused-vars
export default function ErrorHandler(error, req, res, next) {
   if (error instanceof mongoose.Error.CastError) {
      res.status(400).json({ message: "Um ou mais dados fornecidos estão incorretos." })
      return
   }

   if (error instanceof mongoose.Error.ValidationError) {
      const messagensError = Object.values(error.errors)
         .map(err => err.message)
         .join("; ")
      res.status(400).json({ message: "erro na validação dos dados: ", messagensError })
      return
   }

   if (error instanceof AplicationError) {
      console.log(error)
      res.status(error.status || 500).json({
         message: error.message,
         error: error.error
      })
      return
   }

   res.status(500).json({ message: "erro interno do servidor...." })
}
