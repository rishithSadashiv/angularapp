import { Component, OnInit, ViewChild } from '@angular/core';
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
    email:''
  };
  users:User[];
  showExtended:boolean = true;
  loaded:boolean = false;
  enableAdd:boolean = false;
  showUserForm:boolean = false;
  @ViewChild('userForm') form:any;

  constructor() { }

  ngOnInit(): void {

      this.users = [
        {
          firstName:'Jane',
          lastName:'Doe',
          email:'jane@hotmail.com',
          //lorempixel is a website which generates images (200,200 is dimension of the image, people is the category of the image)
          isActive:true,
          registered: new Date('01/11/2020 00:49:40 '),
          hide: true
        },
        {
          firstName:'Na',
          lastName:'Mo',
          email:'namo@gmail.com',
          isActive:false,
          registered: new Date('01/10/2020 10:49:40 '),
          hide: true

        },
        {
          firstName:'Ra',
          lastName:'Ga',
          email:'raga@twitter.com',
          isActive:true,
          registered: new Date('08/08/2020 09:07:00'),
          hide: true
        }
      ];
      this.loaded = true;
  }

  onSubmit({value, valid}: {value:User, valid:boolean}){
    if(!valid){
      console.log('Form is not valid');
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;
      this.users.unshift(value);
      this.form.reset();
    }
  }
}
