import { Request, Response } from "express";


export default {
   GET:async(req:Request, res:Response) => {
      try {
         console.log(req.url)
         res.json('ok')
      } catch (error) {
         console.log(error)
         res.sendStatus(500)
      }
   }
}