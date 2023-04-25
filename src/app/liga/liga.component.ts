import { Component } from '@angular/core';
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

  constructor(private route: ActivatedRoute,private ligaService:LigaService){}

  ngOnInit(){
    this.route.queryParams.subscribe(params=>{
      let liga_id = params['id']
      this.ligaService.getPartidasDelJugador(liga_id).subscribe(data=>{
        console.log(data[0])
        this.partidas = data
      })
    })
  }


}
