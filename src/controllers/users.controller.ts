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
   },
   POST:async(req:Request, res:Response) => {
      try {
         const { firstname , lastname , age } = req.body

         const user = await dataSource
                                 .createQueryBuilder()
                                 .insert()
                                 .into(Users)
                                 .values({
                                    firstname:firstname,
                                    lastname:lastname,
                                    age:age
                                 })
                                 .returning('*')
                                 .execute()
         res.json(user)
                                 

      } catch (error) {
         console.log(error)
         res.sendStatus(500)
      }
   }
}