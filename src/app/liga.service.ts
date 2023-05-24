import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { respLiga } from './respLiga';
import { respPartida } from './respPartida';
import { respHttp } from './respHttp';
import { respClasificacion } from './respClasificacion';

@Injectable({
  providedIn: 'root'
})
export class LigaService {

  constructor(private http:HttpClient) { }

  public getLigasActivas(){
    return this.http.get<respLiga[]>("/api/getLigas",{withCredentials: true})
  }

  public getAllLigas(){
    return this.http.get<respLiga[]>("/api/getAllLigas",{withCredentials: true})
  }

  public getLigaById(id:number){
    let params = new HttpParams().set("id",id);
    return this.http.get<respLiga>("/api/getLiga",{params:params,withCredentials: true})
  }

  public getPartidasDelJugador(liga_id:number){
    let params = new HttpParams().set("liga",liga_id);
    return this.http.get<respPartida[]>("/api/getPartidas",{params:params,withCredentials: true})
  }

  public getPartidasJugadorObjetivo(liga_id:number,player:number){
    let params = new HttpParams().set("liga",liga_id).set("player",player);
    return this.http.get<respPartida[]>("/api/getPartidasObjetivo",{params:params,withCredentials: true})
  }

  public getLigasUser(){
    return this.http.get<respLiga[]>("/api/getLigasUser",{withCredentials: true})
  }

  public crearLiga(edicion:String,formato:String,activa:boolean,fechaIni:Date|null,fechaFin:Date|null){
    return this.http.post<respHttp>("/api/crearLiga",
    {
      edicion:edicion,
      formato:formato,
      fecha_ini:fechaIni,
      fecha_fin:fechaFin,
      activa:activa
    },{withCredentials: true})
  }

  public desAscLiga(ligaId:number,activa:boolean){
    return this.http.post<respHttp>("/api/actuLiga",{ligaId:ligaId,activa:activa},
    {withCredentials: true})
  }

  public setResultadoPartida(id:number,resultP1:number,resultP2:number,player1Id:number,player2Id:number,ligaId:number){
    return this.http.post<respHttp>("/api/actualizaPartida",
    {
      partida_id:id,
      liga_id:ligaId,
      player1_id:player1Id,
      player2_id:player2Id,
      result_player1:resultP1,
      result_player2:resultP2
    },
    {withCredentials: true})
  }

  public resetPartida(id:number,ligaId:number){
    return this.http.post<respHttp>("/api/resetearPartida",
    {
      partida_id:id,
      liga_id:ligaId,
      player1_id:0,
      player2_id:0,
      result_player1:0,
      result_player2:0
    },
    {withCredentials: true})
  }

  public getClasificacion(liga_id:number){
    let params = new HttpParams().set("liga",liga_id);
    return this.http.get<respClasificacion[]>("/api/getClasificacion",{params:params,withCredentials: true})
  }

}
