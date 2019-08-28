import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RestService } from '../../services/rest.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {

  constructor(public navCtrl: NavController, private restService: RestService) { }

  ngOnInit() {}

  viewButtons(){
    this.navCtrl.navigateBack(['buttons']);
  }

  createMenu(){
    this.navCtrl.navigateRoot(['fill-order']);
  }

  viewOrders(){
    this.navCtrl.navigateRoot(['orders']);
  }

  viewVerify(){
    this.navCtrl.navigateRoot(['verify-students']);
  }

  viewMonthlySummary(){
    this.navCtrl.navigateRoot(['summary']);
  }
  
  viewOrderHistory(){
    this.navCtrl.navigateRoot(['order-history']);
  }

  viewManageItems(){
    this.navCtrl.navigateForward(['manage-items']);
  }

  logout(){
    this.navCtrl.navigateRoot(['home']);
    this.restService.setLoggedInFalse(); // place in rest service, import guard in service NOTE: Logout will be buggy till then
  }

}
