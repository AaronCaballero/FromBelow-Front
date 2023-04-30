import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  constructor(private loginService:LoginService,private router:Router,private snackBar:MatSnackBar){}

  ngOnInit(){
  }

  onSubmit(){
    let user = this.username.value
    let pass = this.password.value
    this.loginService.login(user,pass).subscribe(data =>{
      if(data.success)
        this.router.navigate(["/"]).then(()=>{window.location.reload()})
        else      
        this.snackBar.open(data['message'].toString(), "X");

    })
  }

  getErrorMessage(){
    return 'Obligatorio'
  }

}
