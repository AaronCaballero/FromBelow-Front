import { Component } from '@angular/core';
import { respPartida } from '../respPartida';
import { ActivatedRoute } from '@angular/router';
import { LigaService } from '../liga.service';

@Component({
  selector: 'app-admin-partidas',
  templateUrl: './admin-partidas.component.html',
  styleUrls: ['./admin-partidas.component.css']
})
export class AdminPartidasComponent {
  partidas:respPartida[] = []
  liga_id:any
  playerId:any

  constructor(private route: ActivatedRoute,private ligaService:LigaService){}

  ngOnInit(){
    //await new Promise(f => setTimeout(f, 1000000));
    this.route.queryParams.subscribe(params=>{
      this.liga_id = params['liga']
      this.playerId = params['player']
      this.ligaService.getPartidasJugadorObjetivo(this.liga_id,this.playerId).subscribe(data=>{
        this.partidas = data
      })
    })
  }

  click(partidaId:number){
    this.ligaService.resetPartida(partidaId,this.liga_id).subscribe(data =>{
      alert(data.message)
    })
  }


}
