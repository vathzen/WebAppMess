import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-manage-items',
  templateUrl: './manage-items.page.html',
  styleUrls: ['./manage-items.page.scss'],
})
export class ManageItemsPage implements OnInit {

  items=null;

  constructor(public alertController: AlertController) { }

  ngOnInit() {
    this.items = [{name:'Veg Fried Rice', cost:30},{name:'Gobi Fried Rice', cost:30},{name:'Paneer Fried Rice', cost:30},
                  {name:'Veg Noodles', cost:30},{name:'Gobi Noodles', cost:30},{name:'Paneer Noodles', cost:30},
                  {name:'Chilly Paneer', cost:30},{name:'Chilly Gobi', cost:30},{name:'Chilly Aloo', cost:30},
                  {name:'Chilly Baby Corn', cost:30},{name:'Veg Manchurian Ball', cost:30},{name:'Gobi Manchurian', cost:30},
                  {name:'Malai Kofta', cost:30},{name:'Kadai Paneer', cost:30},{name:'Dum Aloo', cost:30},{name:'Gobi 65', cost:30},
                  {name:'Paneer 65', cost:30},{name:'French Fries', cost:30},{name:'Mata Paneer', cost:30},{name:'Puttu With Curry', cost:30},
                  {name:'Idiyappam With Kurma', cost:30},{name:'Masala Dosa', cost:30},{name:'Aloo Paratha With Curd', cost:30},
                  {name:'Veg Sandwich', cost:30},{name:'Plain Dosa', cost:30},{name:'Uthappam', cost:30},{name:'Onion Uthappam', cost:30},
                  {name:'Bread Butter Jam', cost:30},{name:'Corn Flaskes With Milk', cost:30}];
  }

  delete(item: any){
      this.items.splice(this.items.indexOf(item),1);
  }

  reset(){
    this.items = [{name:'Veg Fried Rice', cost:30},{name:'Gobi Fried Rice', cost:30},{name:'Paneer Fried Rice', cost:30},
                  {name:'Veg Noodles', cost:30},{name:'Gobi Noodles', cost:30},{name:'Paneer Noodles', cost:30},
                  {name:'Chilly Paneer', cost:30},{name:'Chilly Gobi', cost:30},{name:'Chilly Aloo', cost:30},
                  {name:'Chilly Baby Corn', cost:30},{name:'Veg Manchurian Ball', cost:30},{name:'Gobi Manchurian', cost:30},
                  {name:'Malai Kofta', cost:30},{name:'Kadai Paneer', cost:30},{name:'Dum Aloo', cost:30},{name:'Gobi 65', cost:30},
                  {name:'Paneer 65', cost:30},{name:'French Fries', cost:30},{name:'Mata Paneer', cost:30},{name:'Puttu With Curry', cost:30},
                  {name:'Idiyappam With Kurma', cost:30},{name:'Masala Dosa', cost:30},{name:'Aloo Paratha With Curd', cost:30},
                  {name:'Veg Sandwich', cost:30},{name:'Plain Dosa', cost:30},{name:'Uthappam', cost:30},{name:'Onion Uthappam', cost:30},
                  {name:'Bread Butter Jam', cost:30},{name:'Corn Flaskes With Milk', cost:30}];
    //get from server, local not working
  }

  async addItem(){
    const alert = await this.alertController.create({
      header: 'Add Item',
      inputs: [
        {
          name: 'item',
          type: 'text',
          placeholder: 'Enter itemname',
        },
        {
          name: 'cost',
          type: 'number',
          placeholder: 'Enter cost',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        }, {
          text: 'Add',
          handler: (data) => {
            if(data.item&&data.cost){
              this.items.push({name:data.item, cost:data.cost})
            }
          }
        }
      ]
    });

    await alert.present();
  }

  updateMenu(){
    //upload this.items
  }

}
