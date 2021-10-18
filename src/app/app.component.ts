import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Calculator';

  num1!: number;
  num2!: number;
  result!: number;
  fact!: number;
  result2!:number;
  num4!:number;
  result3!:string;

  add(){
    this.result=this.num1+this.num2;
  }
  subtract(){
    this.result=this.num1-this.num2;
  }
  multiply(){
    this.result=this.num1*this.num2;
  }
  divide(){
    this.result=this.num1/this.num2;
  }
  factorial()
  {
    this.result2=1;
    var i=1;
    while(i<=this.fact){
        this.result2=this.result2*i;
        i++;
    }
  }
  primeornot(){
    var i:any;
    this.result3="yes";
    for (i = 2; i <= this.num4 / 2; ++i) {

      if (this.num4 % i == 0) {
        this.result3="no";
        break;
      }
  }

  }
}


