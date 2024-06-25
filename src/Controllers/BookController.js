
const books = []
let idBooks = 0;

const BookController = {
   getBook: async (id) =>{
      id = Number(id)
      const book = books.find(bk => bk.id == id)

      return book;
   },

   getAll: async (req, res) =>{
     
      res.status(200).json(books)
   },
   create: async (req, res) =>{
      const { title, description, price } = req.body
      
      books.push({
         id: idBooks,
         title,
         description,
         price
      })


      idBooks++;

      res.status(200).json("Successfully registered book.")
   },
   getOne: async (req, res) =>{
      let { id } = req.params
      id = Number(id)
      const book = await BookController.getBook(id);
      
      if(!book){
         res.status(403).json("Book Not Found")
      }
      res.status(200).json(book)
   },
   update: async (req , res) =>{

      let { id } = req.params
      id = Number(id)
      const { title, description, price } = req.body

      const book = await BookController.getBook(id);

      if(!book){
         res.status(403).json("Book Not Found")
      }

      const updateBook = {
         id: id,
         title,
         description,
         price
      }

      books[book.id] = updateBook

      res.status(200).json("updated")
   },
   delete: async (req, res) =>{
      let { id } = req.params
      id = Number(id)

      const book = await BookController.getBook(id)

      if(!book){
         res.status(403).json("Book Not Found")
      }


      books.splice(id, 1)

      res.status(200).json("Deleted")
   }
   
}

export default BookController