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
  currentClasses = {};
  currentStyles = {};

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
          image: 'http://lorempixel.com/200/200/people/9',
          isActive:true,
          balance:100,
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
          image: 'http://lorempixel.com/200/200/people/2',
          isActive:false,
          balance:200,
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
          image: 'http://lorempixel.com/200/200/people/1',
          isActive:true,
          balance:6,
          registered: new Date('08/08/2020 09:07:00')
        }
      ];
      this.loaded = true;
    
    
    // this.addUser({
    //   firstName:'Am',
    //   lastName:'Sh'
    // });

    this.setCurrentClasses();
    this.setCurrentStyles();
  }

  addUser(user:User){
    console.log(this.users.push(user))
  }

  setCurrentClasses(){
    this.currentClasses = {
      'btn-success': this.enableAdd,
      'big-text': this.showExtended
    }
  }

  setCurrentStyles(){
    this.currentStyles = {
      'padding-top' : this.showExtended ? '0' : '40px',
      'font-size' : this.showExtended ? '' : '40px'
      
    }
  }

}
