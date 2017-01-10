import {Injectable} from '@angular/core';
import {myConfig}   from "./auth.config"
let Auth0Lock: any;

@Injectable()

export class AuthService{
    lock = new Auth0Lock(myConfig.clientID, myConfig.domain);
    login(){
        this.lock.show((error: string, profile:Object, id_token: string) => {
            if(error){
                console.log(error);
                localStorage.setItem("profile", JSON.stringify(profile));
                localStorage.setItem("id_token", id_token);
            }
        });
    }
    logout(){
        localStorage.removeItem("profile");
        localStorage.removeItem("id_token");
    } 
}