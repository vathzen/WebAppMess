import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-manage-items',
  templateUrl: './manage-items.page.html',
  styleUrls: ['./manage-items.page.scss'],
})
export class ManageItemsPage implements OnInit {

  items=null;
  ids=[];
  changes={deletions:[],additions:[],updations:[]};

  constructor(public alertController: AlertController) { }

  ngOnInit() {
    this.items = [{id:1, name:'Veg Salad', cost:20},
                  {id:2, name:'Gobi 65', cost:40},{id:3, name:'Mushroom 65', cost:40},{id:4, name:'Babycorn 65', cost:47},
                  {id:5, name:'Mushroom Masala', cost:50},{id:6, name:'Chilly Paneer', cost:50},{id:7, name:'Paneer 65', cost:60},
                  {id:8, name:'Noodles', cost:50},{id:9, name:'Veg Fried Rice', cost:50},{id:10, name:'Paneer Fried Rice', cost:60},
                  {id:11, name:'Gobi Fried Rice', cost:50},{id:12, name:'French Fries', cost:40},{id:13, name:'Kuzhi Paniyaram', cost:30},
                  {id:14, name:'Pani Poori', cost:25},{id:15, name:'Fruit Juice', cost:24},{id:16, name:'Gulab Jamoon', cost:20},
                  {id:17, name:'Rasa Gulla', cost:20},{id:18, name:'Rasa Malai', cost:20},{id:19, name:'Sweet', cost:20}
                ];
    this.items.forEach(element => {
      this.ids.push(element.id);
    });
    this.ids.sort(function(a:number, b:number){return a-b});
  }

  delete(item: any){
    let deleted = false;
    this.items.splice(this.items.indexOf(item),1);
    let index = this.changes.additions.findIndex(function(element){
      return element.id==item.id
    });
    if(index>-1){
      this.changes.additions.splice(index,1);
    }
    else{
      this.changes.deletions.push(item.id);
      deleted=true;
    }
    if(!deleted){
      index = this.changes.updations.findIndex(function(element){
        return element.id==item.id
      });
      index>-1?this.changes.updations.splice(index,1):this.changes.deletions.push(item.id);
    }
  }

  reset(){
    this.items = [{id:1, name:'Veg Salad', cost:20},
                  {id:2, name:'Gobi 65', cost:40},{id:3, name:'Mushroom 65', cost:40},{id:4, name:'Babycorn 65', cost:47},
                  {id:5, name:'Mushroom Masala', cost:50},{id:6, name:'Chilly Paneer', cost:50},{id:7, name:'Paneer 65', cost:60},
                  {id:8, name:'Noodles', cost:50},{id:9, name:'Veg Fried Rice', cost:50},{id:10, name:'Paneer Fried Rice', cost:60},
                  {id:11, name:'Gobi Fried Rice', cost:50},{id:12, name:'French Fries', cost:40},{id:13, name:'Kuzhi Paniyaram', cost:30},
                  {id:14, name:'Pani Poori', cost:25},{id:15, name:'Fruit Juice', cost:24},{id:16, name:'Gulab Jamoon', cost:20},
                  {id:17, name:'Rasa Gulla', cost:20},{id:18, name:'Rasa Malai', cost:20},{id:19, name:'Sweet', cost:20}
                ];
    //get from server, local not working
  }

  async showForm(item=null,index:number=null){
    const alert = await this.alertController.create({
      header: item?'Edit Item':'Add Item',
      inputs: [
        {
          name: 'item',
          type: 'text',
          placeholder: 'Enter itemname',
          value:item?item.name:null
        },
        {
          name: 'cost',
          type: 'number',
          placeholder: 'Enter cost',
          value:item?item.cost:null
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        }, {
          text: item?'Edit':'Add',
          handler: (data) => {
            if(item){
              if(data.item&&data.cost){
                let i = this.changes.additions.findIndex(function(element){
                  return element.id==item.id
                });
                if(i>-1){
                  this.changes.additions[i].name=data.item;
                  this.changes.additions[i].cost=data.cost;
                }
                else{
                  i = this.changes.updations.findIndex(function(element){
                    return element.id==item.id
                  });
                  if(i>-1){
                    this.changes.updations[i].name=data.item;
                    this.changes.updations[i].cost=data.cost;
                  }
                  else{
                    this.changes.updations.push({id:item.id, name:data.item, cost:data.cost});
                  }
                }
                this.items[index].name=data.item;
                this.items[index].cost=data.cost;
              }
              else{
                this.showForm(item);
              }
            }
            else{
              if(data.item&&data.cost){
                var flag=false;
                this.items.forEach(element => {
                  if(element.name==data.item){
                    flag=true;
                  }
                });
                if(flag){
                  this.showAlert();
                }
                else{
                  let i:number=null;
                  for (i = 0; i < this.ids.length; i++) {
                    if((this.ids[i]+1)!=this.ids[i+1]){
                      break;
                    }
                  }
                  this.changes.additions.push({id:this.ids[i]+1, name:data.item, cost:data.cost})
                  this.items.push({id:this.ids[i]+1, name:data.item, cost:data.cost});
                }
              }
            }
          }
        }
      ]
    });

    await alert.present();
  }

  async showAlert(){
    const alert = await this.alertController.create({
      header: 'Error!',
      message: 'Item already exists!'
    });
    await alert.present();
  }

  updateMenu(){
    //upload this.items
  }

}
