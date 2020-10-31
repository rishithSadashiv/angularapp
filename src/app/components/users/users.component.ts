import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:User[];

  constructor() { }

  ngOnInit(): void {
    this.users = [
      {
        firstName:'Jon',
        lastName:'Doe',
        age:25,
        address:{
          street:'10th cross',
          city:'Bengaluru',
          state:'Karnataka'
        }
      },
      {
        firstName:'Na',
        lastName:'Mo',
        age:55,
        address:{
          street:'8th cross',
          city:'Mysuru',
          state:'Karnataka'
        }
      },
      {
        firstName:'Ra',
        lastName:'Ga',
        age:45,
        address:{
          street:'7th cross',
          city:'Tumakuru',
          state:'Karnataka'
        }
      }
    ];

    this.addUser(
      {
      firstName:'Am',
      lastName:'Sh',
      age:50,
      address:{
        street:'6th cross',
        city:'Mangaluru',
        state:'Karnataka'
        }
      }
    );

  }

  addUser(user:User){
    console.log(this.users.push(user))
  }

}
