import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.page.html',
  styleUrls: ['./buttons.page.scss'],
})
export class ButtonsPage implements OnInit {

  constructor(public navCtrl: NavController) { }
  private user={username:'', pswrd:'', contractor:'', messname:''}; //idk whr to use these yet

  ngOnInit() {
  }

  viewButtons(){
    this.navCtrl.navigateRoot(['buttons']);
  }
  
  createMenu(){
      this.navCtrl.navigateRoot(['fill-order']);
  }

  viewOrders(){
    this.navCtrl.navigateForward(['orders']);
  }

  viewMenu(){
    this.navCtrl.navigateForward(['past-menu']);
  }
  viewMonthlySummary(){
    this.navCtrl.navigateForward(['summary']);
  }

  logout(){
      this.navCtrl.navigateRoot(['home']);
  }
}
