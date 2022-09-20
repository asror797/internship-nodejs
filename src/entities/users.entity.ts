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
      default:true,
      nullable:false
   })
   isFree:boolean

   @Column({
      type:"timestamp without time zone",
      default:""
   })
   createdAt:string

   @Column({
      type:"timestamp with time zone",
      onUpdate:"now()"
   })
   updateAt:string
}