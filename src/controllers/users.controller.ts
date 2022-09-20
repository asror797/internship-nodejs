import { Request, Response } from "express";
import { dataSource } from './../config/ormconfig';
import { Users } from './../entities/users.entity'


export default {
   GET:async(req:Request, res:Response) => {
      try {
         const users = await dataSource.getRepository(Users).find()
         res.json(users)
      } catch (error) {
         console.log(error)
         res.sendStatus(500)
      }
   }
}