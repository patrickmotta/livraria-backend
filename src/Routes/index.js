import { Router } from "express"
import BookRoutes from "./Book.routes.js"
import AuthorRoutes from "../Routes/Author.routes.js"
const router = Router()

router.use("/book",
   BookRoutes
)

router.use("/author",
   AuthorRoutes
)


export default router