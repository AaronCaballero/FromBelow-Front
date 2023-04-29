import { Component } from '@angular/core';
import { LigaService } from '../liga.service';
import { respLiga } from '../respLiga';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  ligas: respLiga[] = [];

  constructor(private ligaService:LigaService){}

  ngOnInit(){
    this.ligaService.getLigasUser().subscribe(data =>{
      this.ligas = data
    })
  }

}
