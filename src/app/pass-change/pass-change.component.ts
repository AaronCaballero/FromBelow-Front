import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-pass-change',
  templateUrl: './pass-change.component.html',
  styleUrls: ['./pass-change.component.css']
})
export class PassChangeComponent {

  constructor(private loginService:LoginService,private snackBar:MatSnackBar){}

  password = new FormControl("",[Validators.required])
  password2 = new FormControl("",[Validators.required])

  hide = true
  isDisabled = true

  onSubmit(){
    let pass2 = this.password2.value
    let pass = this.password.value
    if(pass != pass2)
      alert("Las contraseñas no coinciden")
    else{
      this.loginService.cambiarPassUser(pass!).subscribe(data=>{
        if(data.success)
          this.snackBar.open(data.message.toString(),"X")
        else
          alert("error cambiando la contraseña")
      })
      }

  }

  getErrorMessage(){
    return 'Obligatorio'
  }
}
