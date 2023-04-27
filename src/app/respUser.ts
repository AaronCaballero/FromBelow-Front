import { respLiga } from "./respLiga"

interface role{
  id:number
  tipo:number
}

export interface respUser{
    id:number
    nombre:String
    pass:String
    username:String
    role:role
    liga:respLiga[]

  }