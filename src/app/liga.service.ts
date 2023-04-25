import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { respLiga } from './respLiga';
import { respPartida } from './respPartida';

@Injectable({
  providedIn: 'root'
})
export class LigaService {

  constructor(private http:HttpClient) { }

  public getLigasActivas(){
    return this.http.get<respLiga[]>("http://localhost:8080/getLigas",{withCredentials: true})
  }

  public getPartidasDelJugador(liga_id:number){
    let params = new HttpParams().set("liga",liga_id);
    return this.http.get<respPartida[]>("http://localhost:8080/getPartidas",{params:params,withCredentials: true})
  }
}
