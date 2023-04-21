import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login(user:any,pass:any){
      return this.http.post<String>("Http://localhost:8080/authenticate",{username:user,password:pass},
                {withCredentials: true})
  }

  signout(){
    return this.http.post<String>("http://localhost:8080/signout","",{withCredentials: true})
  }

  admin(){
    return this.http.get<String>("http://localhost:8080/admin",{withCredentials: true})
  }
}
