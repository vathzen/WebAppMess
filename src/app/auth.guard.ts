import { Injectable } from '@angular/core';
import { Router, CanActivate} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  loggedIn: boolean;

  constructor(private router: Router) { }

  setLoggedIn(value:boolean){
    this.loggedIn=value;
  }

  canActivate(): boolean{
    console.log(this.loggedIn)
        if (!this.loggedIn) {
            this.router.navigate(['home']);
            return false;
        }
        return true; 
    }
}
