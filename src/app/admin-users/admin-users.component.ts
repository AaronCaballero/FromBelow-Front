import { Component } from '@angular/core';
import { respUser } from '../respUser';
import { AdminService } from '../admin.service';
import { LigaService } from '../liga.service';
import { respLiga } from '../respLiga';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent {

  users:respUser[] = []
  ligas:respLiga[] = []

  constructor(private adminService:AdminService,private ligaService:LigaService,private snackBar:MatSnackBar){}

  ngOnInit(){
    this.adminService.getUsers().subscribe(data=>{
      this.users = data
    })
    this.ligaService.getLigasActivas().subscribe(data=>{
      this.ligas = data
      console.log(this.ligas)
    })
  }

  anadirALiga(ligaId:number,userId:number){
    this.adminService.addUserToLiga(userId,ligaId).subscribe(data => {
      if(data.success){
        this.snackBar.open(data.message.toString(),"X")
        this.adminService.getUsers().subscribe(data=>{
          this.users = data
        })
      }
        else
        alert("error añadiendo a liga")
    })
  }

  cambiarPass(username:String,pass:String){
    this.adminService.cambiarPass(username,pass).subscribe(data =>{
      if(data.success)
        this.snackBar.open("contraseña cambiada","X")
        else
        alert("error cambiando pass")
    })
  }

}
