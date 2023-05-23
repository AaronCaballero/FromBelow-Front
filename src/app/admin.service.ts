import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { respUser } from './respUser';
import { respHttp } from './respHttp';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  creaClasificacion(ligaId:number){
      return this.http.post<respHttp>("/api/crearClasificacion",{ligaId:ligaId},
                {withCredentials: true})
  }

  creaPartidas(ligaId:number){
    return this.http.post<respHttp>("/api/crearPartidas",{ligaId:ligaId},
              {withCredentials: true})
  }

  getUsers(){
    return this.http.post<respUser[]>("/api/getUsers",{}, {withCredentials: true})
  }

  addUserToLiga(userId:number,ligaId:number){
    return this.http.post<respHttp>("/api/userToLiga",{userId:userId,ligaId:ligaId},
            {withCredentials: true})
  }

  cambiarPass(username:String,password:String){
    return this.http.post<respHttp>("/api/cambiarPass",{username:username,password:password},
            {withCredentials: true})
  }

  creaUsuario(nombre:String,username:String,pass:String){
    return this.http.post<String>("/api/signUp",
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

    public getExcel(id:number):any{
      let params = new HttpParams().set("id",id);
      const requestOptions: Object = {
        responseType: 'blob',
        params:params,
        withCredential:true
      }
      return this.http.get("/api/excel",requestOptions)
    }

}
