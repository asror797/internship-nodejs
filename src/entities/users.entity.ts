import { Entity , PrimaryGeneratedColumn , Column, CreateDateColumn, UpdateDateColumn } from "typeorm"

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
      default:true,
      nullable:false
   })
   isFree:boolean

   @CreateDateColumn({
      type:"date"
   })
   createdAt:string

   @UpdateDateColumn({
      type:"date"
   })
   updatedAt:string
}