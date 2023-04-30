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
    start: new FormControl<Date>(new Date()),
    end: new FormControl<Date>(new Date()),
  });

  activa:any
  activa2:any
  formato:any
  edicion:any

  constructor(private adminService:AdminService,private ligaService:LigaService,private snackBar:MatSnackBar){
  }

  ligas:respLiga[] = []

  ngOnInit(){
    this.ligaService.getAllLigas().subscribe(data=>{
      this.ligas = data
    })
  }

  
  crearClasPart(ligaId:String){
    let idLiga = Number(ligaId)
    if(prompt("Introduce 'crear' para confirmar") == "crear")
    {
      this.adminService.creaClasificacion(idLiga).subscribe( data=> {
        if(data.success)
        this.snackBar.open(data.message.toString(),"X")
      else
        alert("error creando clasificacion")
      })
      this.adminService.creaPartidas(idLiga).subscribe( data=> {
        if(data.success)
        this.snackBar.open(data.message.toString(),"X")
      else
        alert("error creando partidas")
      })
    }
  }

  crearLiga(){

    if(confirm("seguro?"))
      this.ligaService.crearLiga(this.edicion,this.formato,this.activa,
        this.range.get('start')!.value,this.range.get('end')!.value).subscribe(data =>{
          if(data.success)
            this.snackBar.open(data.message.toString(),"X")
          else
            alert("error creando liga")
        })
  }

  DesActLiga(ligaId:String){
    let idLiga = Number(ligaId)
    if(confirm("seguro?"))
      this.ligaService.desAscLiga(idLiga,this.activa2).subscribe(data =>{
          if(data.success)
            this.snackBar.open(data.message.toString(),"X")
          else
            alert("error activando/desactivando liga")
        })
  }

}
