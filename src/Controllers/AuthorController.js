import { author } from "../Models/Author.js"
import AplicationError from "../errors/AplicationError.js"
import NotFound from "../errors/NotFound.js"

class AuthorController {

   static async  getAll (req, res){
      try{

         const DBAuthors = await author.find()
         
         res.status(200).json(DBAuthors)
      }catch(error){
         throw new AplicationError(error.message)
      }
   }

   static async  create (req, res){
      try{
         const { name, nationality } = req.body

         await author.create({
            name,
            nationality,
         })
         
         res.status(200).json("Successfully registered author.")
      }catch(error){
         throw new AplicationError(error.message)
      }
   }

   static async getOne (req, res){
      try{

         let { id } = req.params
         const DBAuthor = await author.findById(id)
         
         if(!DBAuthor){
            throw new NotFound("Author Not Found")
         }
         res.status(200).json(DBAuthor)
      }catch(error){
         throw new AplicationError(error.message)
      }
   }

   static async update (req , res){
      
      const { id } = req.params
      const { name, nationality } = req.body
      
      try{
         const DBAuthor = await author.findByIdAndUpdate(id,{
            name,
            nationality
         })
         
         if(!DBAuthor){
            throw new NotFound("Author Not Found")
         }
         
         res.status(200).json("updated")
      }catch(error){
         throw new AplicationError(error.message)
      }
   }

   static async delete (req, res){
      const { id } = req.params
      try{

         
         await author.findByIdAndDelete(id)

         res.status(200).json("Deleted")
      }catch(error){
         throw new AplicationError(error.message)
      }
   }


   
}

export default AuthorController