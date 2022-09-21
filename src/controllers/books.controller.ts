import { Request, Response } from "express";
import { dataSource } from "../config/ormconfig";
import { Books } from "../entities/books.entity";


export default {
   GET:async(req:Request , res: Response) => {
      try {
         const books = await dataSource.getRepository(Books).find()
         res.json(books)
      } catch (error) {
         console.log('error')
         res.sendStatus(500)
      }
   }
}