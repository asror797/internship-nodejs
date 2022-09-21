import { Router } from "express"
import booksController from "../controllers/books.controller";
import usersController from "../controllers/users.controller"


const router = Router()


router
      .get('/books',booksController.GET)
      .get('/users',usersController.GET)
      .post('/user',usersController.POST)


export default router;
