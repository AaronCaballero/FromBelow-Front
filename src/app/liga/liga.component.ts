import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LigaService } from '../liga.service';
import { respPartida } from '../respPartida';



@Component({
  selector: 'app-liga',
  templateUrl: './liga.component.html',
  styleUrls: ['./liga.component.css']
})
export class LigaComponent {

  partidas:respPartida[] = []

  liga_id:any

  constructor(private route: ActivatedRoute,private ligaService:LigaService){}

  ngOnInit(){
    this.route.queryParams.subscribe(params=>{
       this.liga_id = params['id']
      this.ligaService.getPartidasDelJugador(this.liga_id).subscribe(data=>{
        this.partidas = data
      })
    })
  }

  click(id:number,SelUno:number,SelDos:number,PlayUno:number,PlayDos:number){

    if(confirm("Estas seguro?")){
      this.ligaService.setResultadoPartida(id,SelUno,SelDos,PlayUno,PlayDos,this.liga_id).subscribe(data=>{
        console.log(data)
      })
    }

  }


}
