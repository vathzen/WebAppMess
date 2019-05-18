import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { RestService } from '../services/rest.service';
import { Response,Menu } from '../services/classes';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-fill-order',
  templateUrl: './fill-order.page.html',
  styleUrls: ['./fill-order.page.scss'],
})

export class FillOrderPage implements OnInit {
  date=null;
  text_date=null;
  authStatus = new Response();
  public menu=[
    {mealname:'Breakfast', item1:null, item1_cost:null, item2:null, item2_cost:null},
    {mealname:'Lunch', item1:null, item1_cost:null, item2:null, item2_cost:null},
    {mealname:'Dinner', item1:null, item1_cost:null, item2:null, item2_cost:null}
  ];

  constructor(public navCtrl: NavController, private loadCtrl: LoadingController,private toastController: ToastController,private restService: RestService) {
  }

  ngOnInit() {
    this.date = new Date(); //Get date from server
    this.text_date = this.date.toString();
    this.updatePage();
  }

  goBack(){
    this.navCtrl.navigateBack(['buttons']);
  }

  viewButtons(){
    this.navCtrl.navigateRoot(['buttons']);
  }

  updatePage(){
      var menu = ['Dosa',30,null,null,null,null,null,null,'Noodles',50,'Fried Rice',50];//assuming we get this
      var i=0;
      this.menu.forEach(entry => {
        entry.item1=menu[i];
        entry.item1_cost=menu[i+1];
        entry.item2=menu[i+2];
        entry.item2_cost=menu[i+3];
        i+=4;
      });
  }

  async updateMenu(){
    //update menu to db
    var menu=[];
    this.menu.forEach(entry => {
      menu.push(entry.item1,entry.item1_cost,entry.item2,entry.item2_cost);
    });
    var menuObj = new Menu(menu);
    const loading = await this.loadCtrl.create({
      message: 'Please wait'
    });
    const toastSuc = await this.toastController.create({
        message: 'Your settings have been saved.',
        duration: 2000
    });
    const toastFai = await this.toastController.create({
        message: 'Please Try again later.',
        duration: 2000
    });
    await loading.present();
    this.restService.putMenu(menuObj).subscribe(
        (response) => {
            this.authStatus = response;
            if(this.authStatus.Status == "OK"){
                console.log("Updated!");
                loading.dismiss();
                toastSuc.present();
                this.updatePage();
                //we need to show some sort of acknowledgement that menu has been saved!
            }else{
                console.log("Not updated!");
                loading.dismiss();
                toastFai.present();
                //similiarly here
            }
        },
        err => {
            console.log(err);
        }
    )
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
