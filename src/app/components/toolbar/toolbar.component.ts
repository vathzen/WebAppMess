import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {

  constructor(public navCtrl: NavController,) { }

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

  viewMenu(){
    this.navCtrl.navigateRoot(['past-menu']);
  }

  viewMonthlySummary(){
    this.navCtrl.navigateRoot(['summary']);
  }
  
  viewOrderHistory(){
    this.navCtrl.navigateRoot(['order-history']);
  }

  logout(){
    this.navCtrl.navigateRoot(['home']);
  }

}
