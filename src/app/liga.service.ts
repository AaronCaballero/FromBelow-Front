import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { respLiga } from './respLiga';
import { respPartida } from './respPartida';
import { respHttp } from './respHttp';

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

  public setResultadoPartida(id:number,resultP1:number,resultP2:number,player1Id:number,player2Id:number,ligaId:number){
    return this.http.post<respHttp>("http://localhost:8080/actualizaPartida",
    {partida_id:id,
      liga_id:ligaId,
      player1_id:player1Id,
      player2_id:player2Id,
      result_player1:resultP1,
      result_player2:resultP2},
    {withCredentials: true})
  }

}
