import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-fill-order',
  templateUrl: './fill-order.page.html',
  styleUrls: ['./fill-order.page.scss'],
})
export class FillOrderPage implements OnInit {
  date=null;
  public menu=[
    {mealname:'Breakfast', item1:'', item1_cost:null, item2:'', item2_cost:null},
    {mealname:'Lunch', item1:'', item1_cost:null, item2:'', item2_cost:null},
    {mealname:'Dinner', item1:'', item1_count:null, item2:'', item2_count:null}
  ];
  constructor(public navCtrl: NavController) {
  }
  ngOnInit() {
    //this.date=get date obj
  }

  goBack(){
    this.navCtrl.navigateBack(['buttons']);
  }

  viewButtons(){
    this.navCtrl.navigateRoot(['buttons']);
  }

  updateMenu(){
    //update menu to db
    console.log(this.menu);
    this.navCtrl.navigateRoot(['buttons']);
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

  logout(){
    this.navCtrl.navigateRoot(['home']);
  }
}
