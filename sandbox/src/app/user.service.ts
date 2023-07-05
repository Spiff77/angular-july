import { Injectable } from '@angular/core';
import {User} from './model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 private users =  [{
      age: 30,
      name: 'Chantal goya'
    },
    {
      age: 23,
      name: 'Carlos'
    }]

  constructor() { }

  findAll(): User[] {
   return this.users
  }
}
