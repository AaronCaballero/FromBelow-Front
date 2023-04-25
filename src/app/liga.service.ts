import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { respLiga } from './respLiga';

@Injectable({
  providedIn: 'root'
})
export class LigaService {

  constructor(private http:HttpClient) { }

  public getLigasActivas(){
    return this.http.get<respLiga[]>("http://localhost:8080/getLigas",{withCredentials: true})
  }
}
