import { Injectable } from '@angular/core';
import { User } from '../models/User'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users:User[];
  constructor() { 
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
  }

  getUsers():User[]{
    console.log('Fetching users from service...')
    return this.users;
  }

  addUser(user:User){
    this.users.unshift(user);
  }
}
