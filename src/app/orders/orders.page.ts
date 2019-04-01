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
    {mealname:'Breakfast', item1:'Veg Sandwich', item1_count:56, item2:'', item2_count:null},
    {mealname:'Lunch', item1:'Noodles', item1_count:16, item2:'Dosa', item2_count:23},
    {mealname:'Dinner', item1:'Paneer Fried Rice', item1_count:22, item2:'', item2_count:null}
  ];
  public colspan=[];
  public colhead=[];
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
    this.orders.forEach(item => {//each iteration for each meal FOR GIVEN DATE
      item.item1='New meal1!';//get item 1 from db
      item.item1_count=50;//get item 1 count from db
      item.item2='New meal2!';//get item 2 from db (EVEN IF NULL)
      item.item2_count=40;//get item 2 count from db (EVEN IF NULL)
    });
  }

  updateTable(){//get new menu dictionary
    //clear old, append to new colhead and colspan
    this.colhead.splice(0,this.colhead.length);
    this.colspan.splice(0,this.colspan.length);
    this.orders.forEach(entry => {
      var colspan = 0;
      if(entry.item1!=''){
        colspan+=1;
        this.colhead.push(entry.item1);
      }
      if(entry.item2!=''){
        colspan+=1;
        this.colhead.push(entry.item2);
      }
      this.colspan.push(colspan);
    });
    //Heading over, body starts
    this.codes.splice(0,this.codes.length); //delete prev day codes
    //get from db and push as {regnum:'regnum from db', code_array:[code1,code2,..code6] from db}
    //loop from here for every reg num
    var tempcode = ["code1",null,null,null,"code2",null];
    var del_index: number,comp = 0;
    for (let i = 0; i < this.colspan.length; i++) {
      del_index=((2*i)+1)-comp;
      if(this.colspan[i]==1){
        comp+=1;
        tempcode.splice(del_index,1);
      }
    }
    this.codes.push({regnum:'120005000',code_array:tempcode}) //loop to here for every reg num
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
