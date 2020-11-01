import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user:User={
    firstName:'',
    lastName:'',
    age:null,
    address:{
      street:'',
      city:'',
      state:''
    }
  };
  users:User[];
  showExtended:boolean = true;
  loaded:boolean = false;
  enableAdd:boolean = false;
  showUserForm:boolean = false;

  constructor() { }

  ngOnInit(): void {

      this.users = [
        {
          firstName:'Jane',
          lastName:'Doe',
          age:25,
          address:{
            street:'10th cross',
            city:'Bengaluru',
            state:'Karnataka'
          },
          //lorempixel is a website which generates images (200,200 is dimension of the image, people is the category of the image)
          isActive:true,
          registered: new Date('01/11/2020 00:49:40 '),
          hide: true
        },
        {
          firstName:'Na',
          lastName:'Mo',
          age:55,
          address:{
            street:'8th cross',
            city:'Mysuru',
            state:'Karnataka'
          },
          isActive:false,
          registered: new Date('01/10/2020 10:49:40 '),
          hide: true

        },
        {
          firstName:'Ra',
          lastName:'Ga',
          age:45,
          address:{
            street:'7th cross',
            city:'Tumakuru',
            state:'Karnataka'
          },
          isActive:true,
          registered: new Date('08/08/2020 09:07:00'),
          hide: true
        }
      ];
      this.loaded = true;
  }

  addUser(){
    // console.log(this.users.push(this.user))
    // unshift is same as push but it adds the new element to the front of the array
    this.user.isActive = true;
    this.user.registered = new Date();
    this.users.unshift(this.user);
    this.user = {
      firstName:'',
      lastName:'',
      age:null,
      address:{
        street:'',
        city:'',
        state:''
      }
    }
    
  }

  // toggleHide(user:User){
  //   user.hide = !user.hide;
  // }

  onSubmit(e){
    console.log(123);
    e.preventDefault();
  }

  fireEvent(e){
    console.log(e.target.value);
    console.log(e.type);
  }

}
