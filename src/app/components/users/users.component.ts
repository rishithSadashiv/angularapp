import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:User[];
  showExtended:boolean = false;
  loaded:boolean = false;
  enableAdd:boolean = true;

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
          registered: new Date('01/11/2020 00:49:40 ')
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
          registered: new Date('01/10/2020 10:49:40 ')
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
          registered: new Date('08/08/2020 09:07:00')
        }
      ];
      this.loaded = true;
    

  }

  addUser(user:User){
    console.log(this.users.push(user))
  }

  fireEvent(e){
    // console.log('Button Clicked...');
    // console.log(e);
    console.log(e.type);
  }

}
