import { Component,OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthGuard } from '../auth.guard';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{
    username = "";
    password = null;

    constructor(private navCtrl: NavController, private auth: AuthGuard) {}

    ionViewWillEnter(){
        if(this.auth.loggedIn){
            console.log(this.auth.loggedIn)
            this.navCtrl.navigateForward(['buttons'])
        }
    }

    login(){
        if(this.username == "admin" && this.password == "admin"){
            this.auth.setLoggedIn(true); // place in rest service, import guard in service
            this.navCtrl.navigateForward(['buttons']);
        }
        else{
            console.error("Wrong Username Password");
        }
    }
}
