import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LoginService } from './login.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

   logged = false;
   role:String = ""

  constructor(private title: Title, private loginService:LoginService, private router:Router) {}

  ngOnInit(){
    this.title.setTitle("From Below App");

    this.loginService.getUserRole().subscribe(data =>{
      if(data['message'] != undefined){
        this.role = data['message']
        this.logged = true
      }
        
         
    })
  }


  signout(){
    this.loginService.signout().subscribe( async data => {
      console.log(data)
      if(data.success)
        console.log("fora")
        //this.router.navigate(["/"]).then(()=>{window.location.reload()})
    })
  }

  probas(){
    console.log("va ya o k ")
  }


  
}
