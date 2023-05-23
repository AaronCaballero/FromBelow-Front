import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { respHttp } from './respHttp';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  role: any;

  constructor(private http:HttpClient) { }

  setRole(role:String){
    this.role = role
  }

  login(user:any,pass:any){
      return this.http.post<respHttp>("/api/authenticate",{username:user,password:pass},
                {withCredentials: true})
  }

  signUp(username:String|null,nombre:String|null,pass:String|null){
    return this.http.post<respHttp>("/api/signUp",
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

  signout(){
    return this.http.post<respHttp>("/api/signout",{},{withCredentials: true})
  }

  getUserRole(){
    return this.http.get<respHttp>("/api/getRole",{withCredentials: true})
  }

  cambiarPassUser(password:String){
    return this.http.post<respHttp>("/api/cambiarPassUser",{password:password},
            {withCredentials: true})
  }
}
