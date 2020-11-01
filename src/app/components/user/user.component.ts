import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User'

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

export class UserComponent implements OnInit{
  //properties
  user: User;

  //methods
  constructor(){
  }

  ngOnInit(){
    this.user = {
      firstName:'Jon',
      lastName:'Doe',
      email:'jon@gmail.com'
    }   
  }
  
}