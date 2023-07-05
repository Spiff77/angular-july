import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users =  [{
      age: 30,
      name: 'Chantal goya'
    },
    {
      age: 23,
      name: 'Carlos'
    }]

  constructor() { }
}
