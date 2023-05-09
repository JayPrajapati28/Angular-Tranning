import { Component} from '@angular/core';

@Component({
  selector: 'app-perent',
  templateUrl: './perent.component.html',
  styleUrls: ['./perent.component.css']
})
export class PerentComponent {
  currentItem = 'From Perent ';
  // items = ['item1', 'item2', 'item3', 'item4'];
//  public name ='';

//   addItem(newItem: string) {
//     this.name=newItem;
//   }
  public value:string=""
  updateData(item:string){
    console.log(item);
    this.value=item
  }
  getVal(item:any){
    console.log(item);
    
  }


}
