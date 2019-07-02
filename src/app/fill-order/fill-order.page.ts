import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
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
  items=null;
  dropdownOptions: any = {
    cssClass:'dropdown'
  };
  authStatus = new Response();
  public menu=[
    {mealname:'Breakfast', icon:'sunny', item1:null, item1_cost:null, item2:null, item2_cost:null},
    {mealname:'Lunch', icon:'partly-sunny', item1:null, item1_cost:null, item2:null, item2_cost:null},
    {mealname:'Dinner', icon:'moon', item1:null, item1_cost:null, item2:null, item2_cost:null}
  ];

  constructor(private loadCtrl: LoadingController,private toastController: ToastController,private restService: RestService, public navCtrl: NavController) {
  }

  ngOnInit() {
    this.date = new Date(); //Get date from server
    this.text_date = this.date.toString();
    this.items = [{name:'Veg Fried Rice', cost:30},{name:'Gobi Fried Rice', cost:30},{name:'Paneer Fried Rice', cost:30},
                  {name:'Veg Noodles', cost:30},{name:'Gobi Noodles', cost:30},{name:'Paneer Noodles', cost:30},
                  {name:'Chilly Paneer', cost:30},{name:'Chilly Gobi', cost:30},{name:'Chilly Aloo', cost:30},
                  {name:'Chilly Baby Corn', cost:30},{name:'Veg Manchurian Ball', cost:30},{name:'Gobi Manchurian', cost:30},
                  {name:'Malai Kofta', cost:30},{name:'Kadai Paneer', cost:30},{name:'Dum Aloo', cost:30},{name:'Gobi 65', cost:30},
                  {name:'Paneer 65', cost:30},{name:'French Fries', cost:30},{name:'Mata Paneer', cost:30},{name:'Puttu With Curry', cost:30},
                  {name:'Idiyappam With Kurma', cost:30},{name:'Masala Dosa', cost:30},{name:'Aloo Paratha With Curd', cost:30},
                  {name:'Veg Sandwich', cost:30},{name:'Plain Dosa', cost:30},{name:'Uthappam', cost:30},{name:'Onion Uthappam', cost:30},
                  {name:'Bread Butter Jam', cost:30},{name:'Corn Flaskes With Milk', cost:30}];
                  //std menu items from server
    this.updatePage();
  }

  selectChange(entry:any,num:number){
    this.menu.forEach(element => {
      if(entry.mealname==element.mealname){
        if(num==1){
          if(entry.item1=='--None--'){
            element.item1=null;
            element.item1_cost=null;
          }
          else{
            this.items.forEach((item: { name: any; cost: any; }) => {
              if(item.name==entry.item1){
                element.item1_cost=item.cost;
              }
            });
          }
        }
        else{
          if(entry.item2=='--None--'){
            element.item2=null;
            element.item2_cost=null;
          }
          else{
            this.items.forEach((item: { name: any; cost: any; }) => {
              if(item.name==entry.item2){
                element.item2_cost=item.cost;
              }
            });
          }
        }
      }
    });
  }

  updatePage(){
      var menu = ['Veg Fried Rice',30,null,null,null,null,null,null,'Veg Noodles',50,'Gobi Noodles',50];//assuming we get this
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
      if(entry.item1 == null){
          entry.item1 = "null";
      }
      if(entry.item2 == null){
          entry.item2 = "null";
      }
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

  viewButtons(){
    this.navCtrl.navigateBack(['buttons']);
  }
}
