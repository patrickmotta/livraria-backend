import { Router } from "express";
import BookRoutes from './Book.routes.js'

const router = Router();

router.use('/book',
   BookRoutes
)


export default router