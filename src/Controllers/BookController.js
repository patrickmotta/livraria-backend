import Book from "../Models/Book.js"
import { author } from "../Models/Author.js"
import AplicationError from "../errors/AplicationError.js"
import NotFound from "../errors/NotFound.js"

class BookController {

   static async  getAll (req, res){
      try{

         const DBBooks = await Book.find()
         
         res.status(200).json(DBBooks)
      }catch(error){
         throw new AplicationError(error.message)
      }
   }

   static async  create (req, res){
      try{
         const { title, description, price, authorId } = req.body
         const DBAuthor = await author.findById(authorId)

         if(!DBAuthor){
            throw new NotFound("author Not Found")
         }

         await Book.create({
            title,
            description,
            price,
            author:{
               ...DBAuthor._doc
            }
         })
         
         res.status(200).json("Successfully registered book.")
      }catch(error){
         throw new AplicationError(error.message)
      }
   }

   static async getOne (req, res){
      try{
         let { id } = req.params
         const book = await Book.findById(id)
         
         if(!book){
            res.status(403).json("Book Not Found")
         }

         res.status(200).json(book)
      }catch(error){
         throw new AplicationError(error.message)
      }
   }

   static async update (req , res){
      try{

         let { id } = req.params
         const { title, description, price } = req.body
         
         const book = await Book.findByIdAndUpdate(id,{
            title,
            description,
            price
         })
         
         if(!book){
            throw new NotFound("Livro não encontrado")
         }
         
         res.status(200).json("updated")
      }catch(error){
         throw new AplicationError(error.message)
      }
   }

   static async delete (req, res){
      const { id } = req.params
       
      try{
         await Book.findByIdAndDelete(id)

         res.status(200).json("Deleted")
      }catch(error){
         throw new AplicationError(error.message)
      }
   }
   
   static async byPublisher(req, res){
      const { publisher } = req.query

      try{
         const booksByPublisher = await Book.find({ publisher: publisher })

         if(!booksByPublisher){
            throw new NotFound("Livro não encontrado")
         }

         res.status(200).json(booksByPublisher)
      }catch(error){
         throw new AplicationError(error.message)
      }
   }
}

export default BookController