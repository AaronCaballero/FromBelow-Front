import { Component } from '@angular/core';
import { respPartida } from '../respPartida';
import { ActivatedRoute } from '@angular/router';
import { LigaService } from '../liga.service';

@Component({
  selector: 'app-partidas',
  templateUrl: './partidas.component.html',
  styleUrls: ['./partidas.component.css']
})
export class PartidasComponent {

  isLoading:boolean = true;

  partidas:respPartida[] = []

  liga_id:any

  constructor(private route: ActivatedRoute,private ligaService:LigaService){}

  ngOnInit(){
           //await new Promise(f => setTimeout(f, 1000000));
    this.route.queryParams.subscribe(params=>{
       this.liga_id = params['liga']
      this.ligaService.getPartidasDelJugador(this.liga_id).subscribe(data=>{
        this.partidas = data
        this.isLoading = false
      })
    })
  }

  click(id:number,SelUno:number,SelDos:number,PlayUno:number,PlayDos:number){

    if(confirm("Estas seguro?")){
      this.ligaService.setResultadoPartida(id,SelUno,SelDos,PlayUno,PlayDos,this.liga_id).subscribe(data=>{
        console.log(data)
        this.ligaService.getPartidasDelJugador(this.liga_id).subscribe(data=>{
          this.partidas = data
        })
      })
    }

  }

}
