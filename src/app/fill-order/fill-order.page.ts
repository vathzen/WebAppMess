import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { RestService } from '../services/rest.service';
import { Response,Menu } from '../services/classes';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-fill-order',
  templateUrl: './fill-order.page.html',
  styleUrls: ['./fill-order.page.scss'],
})

export class FillOrderPage implements OnInit {
  items=null;
  iditems=null;
  displayFlag=null;
  dateStr=null; //get server date assuming we get 2019-07-20
  date = null;
  maxdate = null;
  picker_date=null;
  dropdownOptions: any = {
    cssClass:'dropdown'
  };
  authStatus = new Response();
  public menu=[
    {mealname:'Breakfast', icon:'sunny', item_array:[]},
    {mealname:'Lunch', icon:'partly-sunny', item_array:[]},
    {mealname:'Snacks', icon:'pizza', item_array:[]},
    {mealname:'Dinner', icon:'moon', item_array:[]}
  ];

  constructor(private storage: Storage, private loadCtrl: LoadingController,private toastController: ToastController,private restService: RestService, public navCtrl: NavController) {
  }

  ngOnInit() {
    this.storage.get('dateStr').then(val =>{
      this.dateStr=val[0];
      this.date = new Date(this.dateStr + ' 00:00:00');
      this.maxdate = new Date(this.date);
      this.maxdate.setDate(this.date.getDate()+7);
      this.picker_date=this.date;
      this.updatePage();
    });
    //std menu items from server
    this.iditems = {"1":{name:'Veg Salad', cost:20},
                  "2": {name:'Dosa', cost:40},"3":{ name:'Mushroom 65', cost:40}, "4": { name:'Babycorn 65', cost:47},
    };
    this.items=[];
    Object.keys(this.iditems).forEach(element => {
      this.items.push({id: element, name:this.iditems[element].name, cost:this.iditems[element].cost});
    });
  }

  selectChange(mealname:string, i:number){
    this.menu.forEach(element => {
      if(mealname==element.mealname){
          this.items.forEach((item: { name: any; cost: any; id: any; }) => {
            if(item.name==element.item_array[i].name){
              element.item_array[i].cost=item.cost;
              element.item_array[i].id=item.id;
            }
          });
      }
    });
  }

  delete(mealname:string, i:number){
    this.menu.forEach(element => {
      if(mealname==element.mealname){
        element.item_array.splice(i,1);
      }
    });
  }

  addSlot(mealname:string){
    this.menu.forEach(element => {
      if(element.mealname==mealname){
        element.item_array.push({id:null, name:null, cost:null})
      }
    });
  }

  updatePage(){
    this.displayFlag = this.picker_date >= this.date;
    var data = { //data rcv from server
      "bf":["1","2","3","4"],
      "lun":["1"],
      "snx":["1","2"],
      "din":["1"]
    }
      var i=-1;
      Object.keys(data).forEach(key => {
        i++;
        data[key].forEach(element => {
          this.menu[i].item_array.push({id: element, name:this.iditems[element].name,cost:this.iditems[element].cost});
        });
      });
  }

  async updateMenu(){
    var data = {
      "bf":[],
      "lun":[],
      "snx":[],
      "din":[]
    }
    //update menu to db
    var i=-1;
    Object.keys(data).forEach(key => {
      i++;
      this.menu[i].item_array.forEach(item => {
        data[key].push(item.id)
      });
    });
    
    console.log(data) //this is menu data
    //var menuObj = new Menu(data); 
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
    /*this.restService.putMenu(menuObj).subscribe( //Commenting out until classes.ts are changed properly
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
    )*/
  }

  viewButtons(){
    this.navCtrl.navigateBack(['buttons']);
  }
}
