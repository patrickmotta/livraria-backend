import Book from "../Models/Book.js"
import { author } from "../Models/Author.js"

class BookController {

   static async  getAll (req, res){

      const DBBooks = await Book.find()

      res.status(200).json(DBBooks)
   }

   static async  create (req, res){
      const { title, description, price, authorId } = req.body
      try{
         const DBAuthor = await author.findById(authorId)

         if(!DBAuthor){
            res.status(403).json("author Not Found")
         }

         const newBook = await Book.create({
            title,
            description,
            price,
            author:{
               ...DBAuthor._doc
            }
         })
         
         res.status(200).json("Successfully registered book.")
      }catch(error){
         res.status(500).json({message: `${error.message}`})
      }
   }

   static async getOne (req, res){
   
      let { id } = req.params
      const book = await Book.findById(id)
      
      if(!book){
         res.status(403).json("Book Not Found")
      }
      res.status(200).json(book)
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
            res.status(403).json("Book Not Found")
         }
         
         res.status(200).json("updated")
      }catch(error){
         res.status(500).json({message: `${error.message}`})
      }
   }

   static async delete (req, res){
      const { id } = req.params
       
      try{
         await Book.findByIdAndDelete(id)

         res.status(200).json("Deleted")
      }catch(error){
         res.status(500).json({message: `${error.message}`})
      }
   }
   
   static async byPublisher(req, res){
      const { publisher } = req.query

      try{
         const booksByPublisher = await Book.find({ publisher: publisher })

         res.status(200).json(booksByPublisher)
      }catch(error){
         res.status(500).json({message: `${error.message}`})
      }
   }
}

export default BookController