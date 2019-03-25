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
  from_text_date=null;
  to_picker_date=null;
  to_text_date=null;

  ngOnInit() {
    //this.to_picker_date=this.to_text_date=today's date from server
    this.updatePage();
  }
  dateChanged(){
    this.from_text_date=this.from_picker_date.toString();
    this.to_text_date=this.to_picker_date.toString();
    this.updatePage();
  }
  updatePage(){
    
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
