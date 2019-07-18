import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthGuard } from '../auth.guard';
@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.page.html',
  styleUrls: ['./buttons.page.scss'],
})
export class ButtonsPage implements OnInit {

  constructor(public navCtrl: NavController, private auth: AuthGuard) { }
  private user={username:'', pswrd:'', contractor:'', messname:''}; //idk whr to use these yet
  growflag:boolean=true

  ngOnInit() {
    setTimeout(() => {
      this.growflag=false      
    }, 300);
  }

  viewButtons(){
    this.navCtrl.navigateRoot(['buttons']);
  }
  
  createMenu(){
    this.navCtrl.navigateForward(['fill-order']);
  }

  viewOrders(){
    this.navCtrl.navigateForward(['orders']);
  }

  viewOrderHistory(){
    this.navCtrl.navigateForward(['order-history']);
  }

  viewVerify(){
    this.navCtrl.navigateForward(['verify-students']);
  }
  
  viewMonthlySummary(){
    this.navCtrl.navigateForward(['summary']);
  }

  viewManageItems(){
    this.navCtrl.navigateForward(['manage-items']);
  }

  logout(){
    this.navCtrl.navigateRoot(['home']);
    this.auth.setLoggedIn(false); // place in rest service, import guard in service
  }
}
