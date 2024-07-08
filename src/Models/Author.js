import mongoose from "mongoose"

const authorSchema = new mongoose.Schema({
   id: { type: mongoose.Types.ObjectId },
   name:{ 
      type: String, 
      require: [true, "O nome do autor e obrigatório."] 
   },
   nationality: { type: String, require: true }
},
{
   versionKey: false
})

const author = mongoose.model("authors", authorSchema)

export {author, authorSchema}