import Book from "../Models/Book.js"
import { author } from "../Models/Author.js"
import AplicationError from "../errors/AplicationError.js"
import NotFound from "../errors/NotFound.js"

class BookController {

   static async  getAll (req, res){
      try{
         let { limit = 2, page = 1, orderBy = "title", order = "asc"} = req.query
         
         limit = parseInt(limit)
         page = parseInt(page)
         order = order.toUpperCase()
         if(limit < 0 || page < 0 || isNaN(limit) || isNaN(page) ){
            throw new NotFound("Apenas números igual ou maior que 0 são permitidos na paginação")
         }

         const DBBooks = await Book.find()
            .sort({[orderBy]: order == "ASC" ? 1 : -1})
            .skip((page - 1) * limit)
            .limit(limit)
            .populate("author")
            .exec()
         
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
   
   static async byFilter(req, res){
      const { publisher, title, authorName } = req.query

      try{

         const filters = {}
         if(publisher){
            filters.publisher = publisher
         }
         if(title){
            filters.title = { 
               $regex: title, 
               $options: "i" 
            }
         }
         if(authorName){
            const authorDb = await author.findOne({ name: authorName})
            if(authorDb){
               filters.author = authorDb._id
            }
         }

         const booksByFilter = await Book.find(filters).populate("authors")
         
         if(!booksByFilter){
            throw new NotFound("Livro não encontrado")
         }

         res.status(200).json(booksByFilter)
      }catch(error){
         throw new AplicationError(error.message)
      }
   }
}

export default BookController