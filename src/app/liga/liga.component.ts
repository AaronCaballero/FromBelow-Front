import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LigaService } from '../liga.service';
import { respPartida } from '../respPartida';
import { respLiga } from '../respLiga';



@Component({
  selector: 'app-liga',
  templateUrl: './liga.component.html',
  styleUrls: ['./liga.component.css']
})
export class LigaComponent {

  liga_id:any

  liga: respLiga = {} as respLiga

  constructor(private route: ActivatedRoute,private ligaService:LigaService){}

  ngOnInit(){
           //await new Promise(f => setTimeout(f, 1000000));
    this.route.queryParams.subscribe(params=>{
       this.liga_id = params['id']
       this.ligaService.getLigaById(this.liga_id).subscribe( data=>{
          this.liga = data
       })
    })
  }

  click(){

  }


}
