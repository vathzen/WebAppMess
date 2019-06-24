import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-past-menu',
  templateUrl: './past-menu.page.html',
  styleUrls: ['./past-menu.page.scss'],
})
export class PastMenuPage implements OnInit {

  constructor(public navCtrl:NavController) { }
  picker_date=null;
  maxdate=null;
  public menu=[
    {mealname:'Breakfast', icon:'sunny',item1:null, item1_cost:null, item2:null, item2_cost:null},
    {mealname:'Lunch', icon:'partly-sunny',item1:null, item1_cost:null, item2:null, item2_cost:null},
    {mealname:'Dinner', icon:'moon', item1:null, item1_count:null, item2:null, item2_count:null}
  ];

  ngOnInit() {
    this.picker_date= new Date(); //today's date from server
    this.maxdate=this.picker_date;
    this.updatePage();
  }

  updatePage(){
    //use picker_date as context
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

  viewButtons(){
    this.navCtrl.navigateBack(['buttons']);
  }

}
