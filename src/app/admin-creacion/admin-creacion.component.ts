import { Component } from '@angular/core';
import { AdminService } from '../admin.service';
import { LigaService } from '../liga.service';
import { respLiga } from '../respLiga';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-creacion',
  templateUrl: './admin-creacion.component.html',
  styleUrls: ['./admin-creacion.component.css']
})
export class AdminCreacionComponent {

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  constructor(private adminService:AdminService,private ligaService:LigaService,private snackBar:MatSnackBar){
  }

  ligas:respLiga[] = []

  ngOnInit(){
    this.ligaService.getLigasActivas().subscribe(data=>{
      this.ligas = data
    })
  }

  
  crearClasPart(ligaId:String){
    let idLiga = Number(ligaId)
    if(prompt("Introduce 'crear' para confirmar") == "crear")
    {
      this.adminService.creaClasificacion(idLiga).subscribe( data=> {
        console.log(data)
      })
      this.adminService.creaPartidas(idLiga).subscribe( data=> {
        console.log(data)
      })
    }
  }

  crearLiga(){

  }

}
