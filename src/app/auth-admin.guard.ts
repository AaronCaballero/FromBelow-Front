import { inject } from "@angular/core"
import { LoginService } from "./login.service"
import { Router } from "@angular/router"

export const authAdminGuard=()=>{
    const loginService = inject(LoginService)
    const router = inject(Router)

    return new Promise((resolve,reject) =>{
        loginService.getUserRole().subscribe(data =>{
            if(data['message'] != undefined && data['message'] == 'admin'){
                resolve(true)
            }else{
                router.navigateByUrl("/")
                resolve(false)
            }
        })
    }) 
}