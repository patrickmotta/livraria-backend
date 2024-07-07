import { author } from "../Models/Author.js"

class AuthorController {

   static async  getAll (req, res){

      const DBAuthors = await author.find()

      res.status(200).json(DBAuthors)
   }

   static async  create (req, res){
      const { name, nationality } = req.body
      try{

         await author.create({
            name,
            nationality,
         })
         
         res.status(200).json("Successfully registered author.")
      }catch(error){
         res.status(500).json({message: `${error.message}`})
      }
   }

   static async getOne (req, res){
   
      let { id } = req.params
      const DBAuthor = await author.findById(id)
      
      if(!DBAuthor){
         res.status(403).json("Author Not Found")
      }
      res.status(200).json(DBAuthor)
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
            res.status(403).json("Author Not Found")
         }
         
         res.status(200).json("updated")
      }catch(error){
         res.status(500).json({message: `${error.message}`})
      }
   }

   static async delete (req, res){
      const { id } = req.params
      try{

         
         await author.findByIdAndDelete(id)

         res.status(200).json("Deleted")
      }catch(error){
         res.status(500).json({message: `${error.message}`})
      }
   }


   
}

export default AuthorController