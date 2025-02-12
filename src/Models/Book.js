import mongoose from "mongoose"
import { authorSchema } from "./Author.js"

const bookSchema = new mongoose.Schema({
   id: { type: mongoose.Schema.Types.ObjectId },
   title: { type: String, require: true },
   description: { type: String, require: true },
   pages: { type: Number },
   publisher: { type: String },
   price: { type: Number, require: true },
   author: authorSchema

},
{
   versionKey: false
})

const book = mongoose.model("books", bookSchema)

export default book