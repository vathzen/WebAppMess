import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {

  constructor(public navCtrl: NavController) { }
  picker_date=null;
  text_date=null;
  private user={username:'', pswrd:'', contractor:'', messname:''}; //idk whr to use these yet
  //EVERYTHING IS WRT THIS USER, USE CONTEXT OF this.user.username for db queries
  public orders=[
    {mealname:'Breakfast', item1:null, item1_count:null, item2:null, item2_count:null, span:0},
    {mealname:'Lunch', item1:null, item1_count:null, item2:null, item2_count:null, span:0},
    {mealname:'Dinner', item1:null, item1_count:null, item2:null, item2_count:null, span:0}
  ];
  nullIndices = [];
  public codes=[]; //list of elements {regnum:'reg_num-here',code_array:code_array_here}

  ngOnInit(){
    //this.picker_date=this.text_date=today's date from server
    this.text_date = new Date().toString();
    this.picker_date= new Date();
    this.updateTotal();
    this.updateTable();
  }

  dateChanged(){
    this.text_date=this.picker_date.toString();
    this.updateTotal();
    this.updateTable();
  }

  updateTotal(){
    var orders = ['Dosa',30,null,null,null,null,null,null,'Noodles',50,'Fried Rice',50];
    var orders_count = [33,null,null,null,55,66];

    var i=0;
    this.nullIndices.splice(0,this.nullIndices.length);
    this.orders.forEach(item => {//each iteration for each meal FOR GIVEN DATE
      if(orders[i]!=null){
        item.item1=orders[i].toString();
        item.item1_count=Number(orders_count[i/2]);
        item.span++;
      }
      else{
        this.nullIndices.push(i/2);
      }
      if(orders[i+2]!=null){
        item.item2=orders[i+2].toString();
        item.item2_count=Number(orders_count[(i+2)/2]);
        item.span++;
      }
      else{
        this.nullIndices.push((i+2)/2);
      }
      i+=4;
    });
  }

  updateTable(){//get new menu dictionary
    //Heading over, body starts
    this.codes.splice(0,this.codes.length); //delete prev day codes
    //get from db and push as {regnum:'regnum from db', code_array:[code1,code2,..code6] from db}
    //loop from here for every reg num
    var tempcode = ["code1",null,null,null,"code2",null];
    var x = 0;
    this.nullIndices.forEach(element => {
      tempcode.splice(element-x,1);
      x++;
    });
    this.codes.push({regnum:'120005000',code_array:tempcode})
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
