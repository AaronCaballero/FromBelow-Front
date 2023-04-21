import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;

  username = new FormControl("",[Validators.required])
  password = new FormControl("",[Validators.required])

  constructor(private loginService:LoginService){}

  ngOnInit(){
    this.username.value
  }

  onSubmit(){
    let user = this.username.value
    let pass = this.password.value
    console.log(this.username.value)
    this.loginService.login(user,pass).subscribe(data =>console.log(data))
  }

  getErrorMessage(){
    return 'Obligatorio'
  }

  signout(){
    this.loginService.signout().subscribe(data => console.log(data))
  }

  admin(){
    this.loginService.admin().subscribe(data => console.log(data))
  }
}
