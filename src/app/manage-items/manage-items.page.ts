import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-manage-items',
  templateUrl: './manage-items.page.html',
  styleUrls: ['./manage-items.page.scss'],
})
export class ManageItemsPage implements OnInit {

  items=null;
  maxid:number=0;
  public file:File = null;
  public imagePath;
  imageURL: any;
  public imageMessage:string;
  changes=null;

  constructor(public alertController: AlertController) { }

  ngOnInit() {
    this.getData()
  }

  getData(){     //get std items from server
    var data = 'Veg Salad:20:false,Dosa:40:false,Mushroom 65:40:false,Babycorn 65:47:false,Paneer 65:47:true,Noodles:40:false,Fruit Juice:30:false';
    var i=1;
    this.items=[];
    data.split(',').forEach(set => {
      var setSplit = set.split(':');
      if(setSplit[2]=='false'){
        this.items.push({id: i, name:setSplit[0], cost:+setSplit[1]});
      }
      ++i;
    });
    this.maxid=i-1;
    this.changes={deletions:[],additions:[],updations:[]};
  }

  delete(item: any){
    this.items.splice(this.items.indexOf(item),1);
    let index = this.changes.additions.findIndex(function(element){
      return element.name==item.name
    });
    if(index>-1){
      this.changes.additions.splice(index,1);
    }
    else{
      let index = this.changes.updations.findIndex(function(element){
        return element.id==item.id
      });
      if(index>-1){
        this.changes.updations.splice(index,1);
        this.changes.deletions.push(item.id);
      }
      else{
        this.changes.deletions.push(item.id)
      }
    }
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
              if(data.item&&data.cost){ //edit
                let i = this.changes.additions.findIndex(function(element){
                  return element.name==item.name
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
            else{ //add
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
                  this.changes.additions.push({name:data.item, cost:data.cost});
                  this.items.push({id:null, name:data.item, cost:data.cost});
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
      message: 'Item already exists!',
      buttons: ['Ok']
    });
    await alert.present();
  }

  updateMenu(){
    let i=1;
    this.changes.additions.forEach(element => {
      if(!element.id){
        element.id=this.maxid+i;
        ++i;
      }
    });
  }

  preview(event) {

    const selectedFile = event.target.files[0];
    
    var mimeType = selectedFile.type;
    if (mimeType.match(/image\/*/) == null) {
      this.imageMessage = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = event.target.files;
    reader.readAsDataURL(selectedFile); 
    reader.onload = (_event) => { 
      this.imageURL = reader.result;
      this.imageMessage=null;
      //upload selectedFile to server

      //this.imageMessage='Uploading...';                 //Show when upload in progress
      //this.imageMesssage='Upload Successful!';          //Show if upload successful
      //this.imageMesssage='Upload Failed!';              //Show if upload failed
    }
  }

}
