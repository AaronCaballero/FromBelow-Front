import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true
  isDisabled = true

  username = new FormControl("",[Validators.required])
  password = new FormControl("",[Validators.required])

  constructor(private loginService:LoginService,private router:Router){}

  ngOnInit(){
    this.username.value
  }

  onSubmit(){
    let user = this.username.value
    let pass = this.password.value
    console.log(this.username.value)
    this.loginService.login(user,pass).subscribe(data =>this.router.navigate(["/"]).then(()=>{window.location.reload()}))
  }

  getErrorMessage(){
    return 'Obligatorio'
  }

}
