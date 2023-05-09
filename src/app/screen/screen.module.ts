import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerentComponent } from './perent/perent.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PerentComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[PerentComponent]
})
export class ScreenModule { }
