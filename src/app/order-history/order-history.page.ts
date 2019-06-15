import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.page.html',
  styleUrls: ['./order-history.page.scss'],
})
export class OrderHistoryPage implements OnInit {

  public searchnumber:string=null;
  public numbersearched:string=null;
  public full_data=[];
  public months=[];
  public totalAmt=null;

  constructor(public navCtrl:NavController,private storage: Storage) { }

  ngOnInit() {
    this.storage.get('regnum').then(val =>{
      this.searchnumber=val;
      if(this.searchnumber){
        this.onGo();
      }
    });
  }

  onGo(){ //search for this.searchnumber
    this.numbersearched=this.searchnumber;
    let temp_months=[];
    this.months.splice(0,this.months.length);
    this.full_data.splice(0,this.full_data.length);

    let data = [{ //assuming we get this
      "date" : "01-04-2019",
      "bf1" : "Idly-20-43",
      "bf2" : "null-0-0",
      "lun1" : "Poori-35-77",
      "lun2" : "Lasagna-45-13",
      "din1" : "null-0-0",
      "din2" : "null-0-0",
    },
      {
      "date" : "02-04-2019",
      "bf1" : "Dosa-20-43",
      "bf2" : "null-0-0",
      "lun1" : "Poori-35-77",
      "lun2" : "Lasagna-45-13",
      "din1" : "null-0-0",
      "din2" : "null-0-0",
    },
    {
      "date" : "03-05-2019",
      "bf1" : "Vada-20-43",
      "bf2" : "null-0-0",
      "lun1" : "Poori-35-77",
      "lun2" : "Lasagna-45-13",
      "din1" : "null-0-0",
      "din2" : "null-0-0",
    },{
      "date" : "04-05-2019",
      "bf1" : "Vada-20-43",
      "bf2" : "null-0-0",
      "lun1" : "Poori-35-77",
      "lun2" : "Lasagna-45-13",
      "din1" : "null-0-0",
      "din2" : "null-0-0",
    },]

    data.forEach(element => {
      let tempStringArray=null;
      let temp_data=[];

      tempStringArray=element.bf1.split('-');
      if(tempStringArray[0]!='null'){
        temp_data.push({itemname:tempStringArray[0],quantity:+tempStringArray[1],price:+tempStringArray[2]});
      }
      tempStringArray=element.bf2.split('-');
      if(tempStringArray[0]!='null'){
        temp_data.push({itemname:tempStringArray[0],quantity:+tempStringArray[1],price:+tempStringArray[2]});
      }
      tempStringArray=element.lun1.split('-');
      if(tempStringArray[0]!='null'){
        temp_data.push({itemname:tempStringArray[0],quantity:+tempStringArray[1],price:+tempStringArray[2]});
      }
      tempStringArray=element.lun2.split('-');
      if(tempStringArray[0]!='null'){
        temp_data.push({itemname:tempStringArray[0],quantity:+tempStringArray[1],price:+tempStringArray[2]});
      }
      tempStringArray=element.din1.split('-');
      if(tempStringArray[0]!='null'){
        temp_data.push({itemname:tempStringArray[0],quantity:+tempStringArray[1],price:+tempStringArray[2]});
      }
      tempStringArray=element.din2.split('-');
      if(tempStringArray[0]!='null'){
        temp_data.push({itemname:tempStringArray[0],quantity:+tempStringArray[1],price:+tempStringArray[2]});
      }
      if(temp_data.length){
        var dateParts = element.date.split("-");
        var textParts = new Date(+dateParts[2], +dateParts[1] - 1, +dateParts[0]).toString().split(' ');
        temp_months.push(textParts[1]+' '+textParts[3]);
        this.full_data.push({date:element.date,items:temp_data,selected:true});
      }
    });
    this.calcTotalAmt();
    this.months.push({month:'All',selected:true})
    new Set(temp_months).forEach(element => {
      this.months.push({month:element,selected:false})
    });
  }

  calcTotalAmt(){
    this.totalAmt=0;
    this.full_data.forEach(element => {
      if(element.selected){
        element.items.forEach(ele => {
          this.totalAmt=this.totalAmt+ele.quantity*ele.price;
        });
      }
    });
  }

  filterMonth(ele:any){
    this.months.forEach(element => {
      if(ele.month==element.month){
        element.selected=true;
      }
      else{
        element.selected=false;
      }
    });
    
    if(ele.month=='All'){
      this.full_data.forEach(element => {
          element.selected=true;
      });
    }
    else{
      this.full_data.forEach(element => {
        if(+element.date.split("-")[1]==new Date(ele.month).getMonth()+1){
          element.selected=true;
        }
        else{
          element.selected=false;
        }
      });
    }
    this.calcTotalAmt();
  }

  ionViewWillLeave(){
    this.storage.set('regnum',null);
  }

}
