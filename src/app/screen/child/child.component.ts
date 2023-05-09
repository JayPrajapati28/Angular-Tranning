import { Component ,EventEmitter,Input, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() item = '';
  // @Output() newItemEvent = new EventEmitter<string>();
  // addNewItem(value: string) {
  //   this.newItemEvent.emit(value);
  // }
  // @Output() newItem = new EventEmitter<string>();
  // public a:string =''
  // add(){
  //   this.newItem.emit(this.a)
  // }
  @Output() updateDataEvent = new EventEmitter<string>();

  
  
  
}
