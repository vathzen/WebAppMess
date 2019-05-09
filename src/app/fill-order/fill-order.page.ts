import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-fill-order',
  templateUrl: './fill-order.page.html',
  styleUrls: ['./fill-order.page.scss'],
})
export class FillOrderPage implements OnInit {
  date=null;
  text_date=null;
  public menu=[
    {mealname:'Breakfast', item1:null, item1_cost:null, item2:null, item2_cost:null},
    {mealname:'Lunch', item1:null, item1_cost:null, item2:null, item2_cost:null},
    {mealname:'Dinner', item1:null, item1_cost:null, item2:null, item2_cost:null}
  ];

  constructor(public navCtrl: NavController, private loadCtrl: LoadingController) {
  }

  ngOnInit() {
    this.date = new Date(); //Get date from server
    this.text_date = this.date.toString();
  }

  goBack(){
    this.navCtrl.navigateBack(['buttons']);
  }

  viewButtons(){
    this.navCtrl.navigateRoot(['buttons']);
  }

  async updateMenu(){
    //update menu to db
    var menu=[];
    this.menu.forEach(entry => {
      menu.push(entry.item1,entry.item1_cost,entry.item2,entry.item2_cost);
    });
    console.log(menu); //Use var menu to send
    
    const loading = await this.loadCtrl.create({
      message: 'Please wait'
    });
    await loading.present();
      if(true){
        loading.dismiss();
        //show failure alert
      }
    else{
      loading.dismiss();
      //show success alert
     }
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
