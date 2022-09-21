import { Entity , PrimaryGeneratedColumn , Column } from "typeorm";


@Entity({
   name:"books"
})
export class Books {
   @PrimaryGeneratedColumn("increment")
   id:number

   @Column({
      type:"int",
      nullable:false
   })
   userID:number

   @Column({
      type:"varchar",
      length:128,
      nullable:false
   })
   title:string

   @Column({
      type:"varchar",
      length:128,
      nullable:false
   })
   author:string

   @Column({
      type:"varchar",
      length:16,
      nullable:false
   })
   createdAt:string
}

