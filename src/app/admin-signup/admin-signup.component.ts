import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.css']
})
export class AdminSignupComponent {
  
  username = new FormControl("",[Validators.required])
  password = new FormControl("",[Validators.required])
  nombre = new FormControl("",[Validators.required])

  constructor(private loginService:LoginService,private snackBar:MatSnackBar){}

  getErrorMessage(){
    return 'Obligatorio'
  }

  onSubmit(){
    let username = this.username.value
    let pass = this.password.value
    let nombre = this.nombre.value

    this.loginService.signUp(username,nombre,pass).subscribe(data =>{
      if(data.success)
        this.snackBar.open(data['message'].toString(), "X");
        else
          alert(data.message)
    })
  }


}
