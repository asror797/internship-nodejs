import { Request, Response } from "express";
import { dataSource } from './../config/ormconfig';
import { Users } from './../entities/users.entity'
// import moment from "moment";


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

         const user = await dataSource
            .createQueryBuilder()
            .insert()
            .into(Users)
            .values(req.body)
            .returning('*')
            .execute()
         res.json(user)
                                 

      } catch (error) {
         console.log(error)
         res.sendStatus(500)
      }
   },
   EDIT:async(req:Request, res:Response) => {
      try {
         const updateUser = await dataSource
            .createQueryBuilder()
            .update(req.body)
            .where({
               id:req.body.id
            })
            .returning('*')
            .execute()
            
         res.json(updateUser)

      } catch (error) {
         console.log(error)
         res.sendStatus(500)
      }
   },
   DELETE:async(req:Request,res:Response) => {
      try {
         console.log(req.body)
         res.send('ok')
      } catch (error) {
         console.log(error)
         res.sendStatus(500)
      }
   }
}