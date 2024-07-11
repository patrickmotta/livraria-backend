import { Router } from "express"
import BookController from "../Controllers/BookController.js"

const router = Router()

router.get("/all",
   BookController.getAll
)

router.post("/create",
   BookController.create
)

router.get("/one/:id",
   BookController.getOne
)


router.put("/update/:id",
   BookController.update
)

router.delete("/delete/:id",
   BookController.delete
)


router.get("/byFilter",
   BookController.byFilter
)
export default router