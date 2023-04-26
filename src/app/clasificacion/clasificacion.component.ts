import { Component } from '@angular/core';
import { LigaService } from '../liga.service';
import { respClasificacion } from '../respClasificacion';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clasificacion',
  templateUrl: './clasificacion.component.html',
  styleUrls: ['./clasificacion.component.css']
})
export class ClasificacionComponent {

  clasificaciones:respClasificacion[] =[]
  dataSource = this.clasificaciones;

  constructor(private ligaService:LigaService, private route:ActivatedRoute){}

  ngOnInit(){
    this.route.queryParams.subscribe(params=>{
     this.ligaService.getClasificacion(params['liga']).subscribe(data=>{
       this.clasificaciones = data
       this.dataSource = this.clasificaciones;
       console.log(this.clasificaciones)
     })
   })
  }

  displayedColumns: string[] = ['nombre', "rondas_ganadas", 'rondas_perdidas',
   'partidas_ganadas','partidas_empatadas','partidas_perdidas','puntos','partidas_jugadas','winrate'];


}
