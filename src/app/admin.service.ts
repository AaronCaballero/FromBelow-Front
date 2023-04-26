import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { respUser } from './respUser';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  creaClasificacion(ligaId:number){
      return this.http.post<String>("http://localhost:8080/creaClasificacion",{ligaId:ligaId},
                {withCredentials: true})
  }

  creaPartidas(ligaId:number){
    return this.http.post<String>("http://localhost:8080/creaPartidas",{ligaId:ligaId},
              {withCredentials: true})
  }

  getUsers(){
    return this.http.post<respUser>("http://localhost:8080/getUsers", {withCredentials: true})
  }

  addUserToLiga(userId:number,ligaId:number){
    return this.http.post<String>("Http://localhost:8080/addUserToLiga",{userId:userId,ligaId:ligaId},
            {withCredentials: true})
  }

  creaUsuario(nombre:String,username:String,pass:String){
    return this.http.post<String>("Http://localhost:8080/signUp",
      {
        username:username,
        pass:pass,
        nombre:nombre,
        role:{
            id:2,
            tipo:""
        }
      },{withCredentials: true})
    }

}
