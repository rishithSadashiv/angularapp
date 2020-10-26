import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
  //template: '<h2>Jon Doe</h2>'
  // styles:[`
  //   h2{
  //     color:blue
  //   }
  // `]
})

export class UserComponent{
  //properties
  firstName:string;
  lastName:string;
  age:number;
  address;
  foo:any;
  hasKids:boolean;
  numberArray:number[];
  stringArray:string[];
  mixedArray:any[];
  myTuple: [string,number,boolean];
  unusable:void;
  u:undefined;
  a:null;

  //methods
  constructor(){
    //console.log('Hello User...')
    // this.sayHello();
    // console.log(this.age);
    // this.hasBirthday();
    // console.log(this.age)
    this.firstName='Jon';
    this.lastName='Doe';
    this.age=25;
    this.address = {
      street: '20th cross',
      city:'Bengaluru',
      state:'Karnataka'
    };
    this.foo = true;
    this.hasKids = true;
    this.numberArray = [1,2,3];
    this.stringArray = ['hello','world'];
    this.mixedArray = [true, undefined, 'hello'];
    this.myTuple = ['hello', 1, true];
    this.unusable= undefined;
    this.u = undefined;
    this.a = null;

    console.log(this.addNumbers(5, 20));
  }
  
  sayHello(){
    console.log(`Hello ${this.firstName}`)
    console.log('Hello ' + this.lastName)
  }

  hasBirthday(){
    this.age += 1
  }

  showAge(){
    return this.age;
  }

  addNumbers(num1:number, num2:number):number{
    return num1 + num2;
  }
}