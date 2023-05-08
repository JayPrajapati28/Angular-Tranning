import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public isChecked1=false;
  public isChecked2=false;
  public isChecked3=false;
  public label1 = 'Jay';
  public label2='Karn';
  public label3 ='Prince';

  public selected=""

  public ngModelObject ={
    'Name': '',
    'age':0,
    'gender':'',
    'gmail': '',
  }
  public isAge =false
  public info=[
    {name:"Jay",age:22,gender:"Male"},
    {name:"Dhagash",age:20,gender:"Male"},
    {name:"Drasti",age:25,gender:"Female"},
    {name:"Prince",age:19,gender:"Male"}
  ] 
  public selectedVale='All'
  public data = this.info
  filterVale():any{
  //  console.log(this.isMale);
  console.log(this.selectedVale);
    if(this.selectedVale=='All'){
      //console.log(this.info);
    this.data = this.info
    }
    else if(this.selectedVale=='Male'){
      //console.log(this.info.filter(item=>item.gender=='Male'))
      this.data = this.info.filter(item=>item.gender=='Male');
    }
    else if(this.selectedVale=='Female'){
      //console.log(this.info.filter(item=>item.gender=='Female'));
      this.data = this.info.filter(item=>item.gender=='Female');
    }
  }
}
