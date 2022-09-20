import { Entity , PrimaryGeneratedColumn , Column } from "typeorm";


@Entity({
   name:"books"
})
export class Books {
   @PrimaryGeneratedColumn("uuid")
   id:string

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
      length:64,
      nullable:false
   })
   createdAt:string
}

