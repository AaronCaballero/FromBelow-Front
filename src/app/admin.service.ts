import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { respUser } from './respUser';
import { respHttp } from './respHttp';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  creaClasificacion(ligaId:number){
      return this.http.post<respHttp>("http://localhost:8080/crearClasificacion",{ligaId:ligaId},
                {withCredentials: true})
  }

  creaPartidas(ligaId:number){
    return this.http.post<respHttp>("http://localhost:8080/crearPartidas",{ligaId:ligaId},
              {withCredentials: true})
  }

  getUsers(){
    return this.http.post<respUser[]>("http://localhost:8080/getUsers",{}, {withCredentials: true})
  }

  addUserToLiga(userId:number,ligaId:number){
    return this.http.post<respHttp>("Http://localhost:8080/userToLiga",{userId:userId,ligaId:ligaId},
            {withCredentials: true})
  }

  cambiarPass(username:String,password:String){
    return this.http.post<respHttp>("Http://localhost:8080/cambiarPass",{username:username,password:password},
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
