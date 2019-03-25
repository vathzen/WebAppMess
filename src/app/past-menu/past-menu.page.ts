import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DatePicker } from '@ionic-native/date-picker/ngx';

@Component({
  selector: 'app-past-menu',
  templateUrl: './past-menu.page.html',
  styleUrls: ['./past-menu.page.scss'],
})
export class PastMenuPage implements OnInit {

  constructor(public navCtrl:NavController) { }
  picker_date=null;
  text_date=null;
  public menu=[
    {mealname:'Breakfast', item1:'', item1_cost:null, item2:'', item2_cost:null},
    {mealname:'Lunch', item1:'', item1_cost:null, item2:'', item2_cost:null},
    {mealname:'Dinner', item1:'', item1_count:null, item2:'', item2_count:null}
  ];

  ngOnInit() {
    //this.picker_date=this.text_date=today's date from server
    this.updatePage();
  }

  dateChanged(){
    this.text_date=this.picker_date.toString();
    this.updatePage();
  }

  updatePage(){
    this.menu.forEach(entry => {//get from db even if null
      entry.item1="Item!";
      entry.item1_cost=20;
      entry.item2="Item!";
      entry.item2_cost=20;
    });
  }

  viewButtons(){
    this.navCtrl.navigateRoot(['buttons']);
  }

  goBack(){
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

  logout(){
    this.navCtrl.navigateRoot(['home']);
  }

}
