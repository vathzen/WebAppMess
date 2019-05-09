import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.page.html',
  styleUrls: ['./summary.page.scss'],
})
export class SummaryPage implements OnInit {

  constructor(public navCtrl: NavController) { }
  from_picker_date=null;
  to_picker_date=null;
  public items=[
    {sno:1, itemname:'item1', gross:20},
    {sno:2, itemname:'item2', gross:30},
  ];
  public students=[
    {sno:1, regnum:'120004213', gross:2000},
    {sno:2, regnum:'120004214', gross:3000},
  ];
  itemwise_total= 50;
  studentwise_total= 5000;

  ngOnInit() {
    //this.to_picker_date=this.to_text_date=today's date from server
    this.updatePage();
  }

  updatePage(){
    if(this.from_picker_date&&this.to_picker_date){
      //do updation
    }
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
