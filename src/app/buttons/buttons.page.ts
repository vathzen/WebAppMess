import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.page.html',
  styleUrls: ['./buttons.page.scss'],
})
export class ButtonsPage implements OnInit {

  constructor(private storage: Storage, public navCtrl: NavController, private restService: RestService) { }
  private user={username:'', pswrd:'', contractor:'', messname:''}; //idk whr to use these yet
  growflag:boolean=true;

  ngOnInit() {
    setTimeout(() => {
      this.growflag=false      
    }, 300);
    this.storage.get('messname').then((val)=>{this.user.messname=val});
    this.restService.getStatus().subscribe(
      (val) => {
          console.log(val);
          var serverDate = val.Text;
          this.storage.set('dateStr',serverDate.split(' '));
      },
      (err) => {
          console.log(err);
      }
    )
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
    this.restService.setLoggedInFalse(); // place in rest service, import guard in service NOTE: Logout will be buggy till then
  }
}
