import { Router } from "express";
import AuthorController from '../Controllers/AuthorController.js'

const router = Router()

router.get("/all",
   AuthorController.getAll
)

router.post("/create",
   AuthorController.create
)

router.get("/one/:id",
   AuthorController.getOne
)


router.put("/update/:id",
   AuthorController.update
)

router.delete("/delete/:id",
   AuthorController.delete
)

export default router