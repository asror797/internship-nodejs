import { Entity , PrimaryGeneratedColumn , Column } from "typeorm"

@Entity()
export class Users {
   @PrimaryGeneratedColumn("uuid")
   id:string

   @Column({
      type:"varchar",
      length:64,
      nullable:false
   })
   firstname:string

   @Column({
      type:"varchar",
      length:64,
      nullable:false
   })
   lastname:string

   @Column({
      type:"int",
      nullable:false
   })
   age:string


   @Column()
   isFree:boolean


   @Column()
   createdAt:string

   @Column()
   updateAtL:string
}