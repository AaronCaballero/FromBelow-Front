import { Component } from '@angular/core';
import { respUser } from '../respUser';
import { AdminService } from '../admin.service';
import { LigaService } from '../liga.service';
import { respLiga } from '../respLiga';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent {

  users:respUser[] = []
  ligas:respLiga[] = []

  constructor(private adminService:AdminService,private ligaService:LigaService){}

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
    this.adminService.addUserToLiga(userId,ligaId)
    .subscribe(data => console.log('d'))
  }

  cambiarPass(username:String,pass:String){
    this.adminService.cambiarPass(username,pass).subscribe(data =>{
      console.log(data)
    })
  }

}
