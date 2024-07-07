import mongoose from "mongoose"

const authorSchema = new mongoose.Schema({
   id: { type: mongoose.Types.ObjectId },
   name:{ type: String, require: true },
   nationality: { type: String }
},
{
   versionKey: false
})

const author = mongoose.model("authors", authorSchema)

export {author, authorSchema}