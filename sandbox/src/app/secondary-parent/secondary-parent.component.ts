import { Component } from '@angular/core';
import {User} from '../model/user.model';

@Component({
  selector: 'app-secondary-parent',
  templateUrl: './secondary-parent.component.html',
  styleUrls: ['./secondary-parent.component.scss']
})
export class SecondaryParentComponent {

  users: User[] = [{
    age: 30,
    name: 'Chantal goya'
  },
  {
      age: 23,
      name: 'Carlos'
    }
  ]

  ageReceived = 0;

 receiveValueFromChild(value: number){
   this.ageReceived = value
 }



}
