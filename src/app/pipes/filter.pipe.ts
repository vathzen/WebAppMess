import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(array: any[], searchtext: string, type:string): any {

    if(type=='regnum'){
        return array.filter(entry=>
          entry.regnum.indexOf(searchtext)==0);
      }
    else if(type=='items'){
        return array.filter(entry=>
          entry.itemname.toLowerCase().indexOf(searchtext.toLowerCase())==0);
      }
    } 

}
