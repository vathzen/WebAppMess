import { Component,OnInit } from '@angular/core';
import { NavController,ToastController } from '@ionic/angular';
import { AuthGuard } from '../auth.guard';
import { RestService } from '../services/rest.service';
import { Response } from '../services/classes';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{
    username = "";
    password = null;
    authStatus = new Response();

    constructor(private navCtrl: NavController, private auth: AuthGuard, private restService: RestService,public toastController: ToastController) {}

    ionViewWillEnter(){
        if(this.auth.loggedIn){
            console.log(this.auth.loggedIn)
            this.navCtrl.navigateForward(['buttons'])
        }
    }

    async login(){
        const wrong = await this.toastController.create({
            message: 'Wrong Username or Password',
            duration: 2000
        });
        this.restService.userAuth(this.username,this.password).subscribe(
            (response) => {
                this.authStatus = response;
                if(this.authStatus.Status == "true"){
                    //this.authStatus.Text is Hostel name. Use this to display in buttons page
                    this.auth.setLoggedIn(true); // place in rest service, import guard in service
                    this.navCtrl.navigateForward(['buttons']);
                }
                else{
                    console.error("Wrong Username Password");
                    wrong.present();
                }
            },
            (err) => {
                console.log(err)
            }
        );
    }
}
