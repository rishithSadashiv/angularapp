import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:User[];
  showExtended:boolean = true;
  loaded:boolean = false;
  enableAdd:boolean = true;

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
          },
          //lorempixel is a website which generates images (400,400 is dimension of the image, people is the category of the image)
          image: 'http://lorempixel.com/400/400/people/3'
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
          image: 'http://lorempixel.com/400/400/people/2'
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
          image: 'http://lorempixel.com/400/400/people/1'
        }
      ];
      this.loaded = true;
    
    
    // this.addUser({
    //   firstName:'Am',
    //   lastName:'Sh'
    // });

  }

  addUser(user:User){
    console.log(this.users.push(user))
  }

}
