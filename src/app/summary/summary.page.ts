import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FilterPipe } from '../pipes/filter.pipe';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.page.html',
  styleUrls: ['./summary.page.scss'],
  providers:[FilterPipe]
})
export class SummaryPage implements OnInit {

  constructor(public navCtrl: NavController, private filter:FilterPipe, private storage: Storage) { }
  from_picker_date=null;
  to_picker_date=null;
  public items=[
    {sno:1, itemname:'Rice', gross:20},
    {sno:2, itemname:'Dosa', gross:30},
    {sno:3, itemname:'Noodles', gross:20},
    {sno:4, itemname:'Soup', gross:30},
    {sno:5, itemname:'Sandwich', gross:20},
    {sno:6, itemname:'Milk', gross:30},
    {sno:7, itemname:'Idly', gross:20},
    {sno:8, itemname:'Vada', gross:30},
    {sno:9, itemname:'Pongal', gross:20},
  ];
  public students=[
    {sno:1, regnum:'120004213', gross:2000},
    {sno:2, regnum:'120004214', gross:3000},
    {sno:3, regnum:'120004215', gross:2000},
    {sno:4, regnum:'120004216', gross:3000},
    {sno:5, regnum:'120004217', gross:2000},
    {sno:6, regnum:'120004218', gross:3000},
    {sno:7, regnum:'120004219', gross:2000},
    {sno:8, regnum:'110004217', gross:2000},
    {sno:9, regnum:'100004218', gross:3000},
    {sno:10, regnum:'100002219', gross:2000},
  ];
  searchnumber:string=null;
  searchitem:string=null;
  copyOfStudents=null;
  studentwise_total:number= null;
  copyOfItems=null;
  itemwise_total:number= null;

  ngOnInit() {
    this.to_picker_date=new Date();
    this.from_picker_date=new Date();
    this.from_picker_date.setDate(1);
    this.updatePage();
  }

  updatePage(){
    if(this.from_picker_date&&this.to_picker_date){
        //do updation
      this.copyOfStudents=this.students;
      this.copyOfItems=this.items;
      this.calcStudentWiseTotal();
      this.calcItemWiseTotal();
    }
    else{
      this.students=this.copyOfStudents=this.items=this.copyOfItems=null;
    }
  }

  filterRegnum(){
    if(this.students){
      this.students=this.filter.transform(this.copyOfStudents,this.searchnumber,'regnum');
      this.calcStudentWiseTotal();
    }
  }

  calcStudentWiseTotal(){
    this.studentwise_total=0;
    this.students.forEach(element => {
      this.studentwise_total+=element.gross;
    });
  }

  filterItems(){
    if(this.students){
      this.items=this.filter.transform(this.copyOfItems,this.searchitem,'items');
      this.calcItemWiseTotal();
    }
  }

  calcItemWiseTotal(){
    this.itemwise_total=0;
    this.items.forEach(element => {
      this.itemwise_total+=element.gross;
    });
  }

  launchSearch(regnum:string){
    this.storage.set('regnum',regnum);
    this.navCtrl.navigateForward(['order-history']);
  }

}
