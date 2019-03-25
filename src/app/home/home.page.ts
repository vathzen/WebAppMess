import { Component,OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{
    username = "";
    password = "";

    constructor( private authService: AuthServiceService, private navCtrl: NavController) {}

    login(){
        if(this.username == "admin" && this.password == "admin"){
            this.navCtrl.navigateRoot(['buttons']);
        }else{
            console.error("Wrong Username Password");
        }
    }
}
