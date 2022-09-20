import { Entity , PrimaryGeneratedColumn , Column } from "typeorm"

@Entity({
   name:"users"
})
export class Users {
   @PrimaryGeneratedColumn("increment")
   id:number

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
   age:number

   @Column({
      type:"boolean",
      default:true
   })
   isFree:boolean

   @Column({
      type:"varchar",
      length:16,
      nullable:false
   })
   createdAt:string

   @Column({
      type:"varchar",
      length:32,
      nullable:false,
      onUpdate:"CURRENT_TIMESTAMP(0)"
   })
   updateAt:string
}