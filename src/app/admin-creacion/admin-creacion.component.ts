import { Component } from '@angular/core';
import { AdminService } from '../admin.service';
import { LigaService } from '../liga.service';
import { respLiga } from '../respLiga';

@Component({
  selector: 'app-admin-creacion',
  templateUrl: './admin-creacion.component.html',
  styleUrls: ['./admin-creacion.component.css']
})
export class AdminCreacionComponent {

  constructor(private adminService:AdminService,private ligaService:LigaService){
  }

  ligas:respLiga[] = []

  ngOnInit(){
    this.ligaService.getLigasActivas().subscribe(data=>{
      this.ligas = data
      console.log(this.ligas)
    })
  }

  
  crearClasPart(ligaId:String){
    let idLiga = Number(ligaId)
    if(confirm("Ejecutar una sola vez cuando esten añadidos todos los participantes. Estas seguro?"))
    {
      this.adminService.creaClasificacion(idLiga).subscribe( data=> {
        console.log(data)
      })
      this.adminService.creaPartidas(idLiga).subscribe( data=> {
        console.log(data)
      })
    }
  }

}
