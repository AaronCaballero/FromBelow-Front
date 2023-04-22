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

  constructor(private title: Title, private loginService:LoginService, private router:Router) {}

  ngOnInit(){
    this.title.setTitle("From Below App");

    this.loginService.getUserRole().subscribe(data =>{
      if(data['message'] != undefined)
        this.logged = true
    })
  }


  signout(){
    this.loginService.signout().subscribe( data => this.router.navigateByUrl("/"))
  }

  
}
