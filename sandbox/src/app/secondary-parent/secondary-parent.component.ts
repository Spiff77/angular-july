import { Component } from '@angular/core';
import {User} from '../model/user.model';

@Component({
  selector: 'app-secondary-parent',
  templateUrl: './secondary-parent.component.html',
  styleUrls: ['./secondary-parent.component.scss']
})
export class SecondaryParentComponent {

  users: User[] = [
  ]

  ageReceived = 0;

 receiveValueFromChild(value: number){
   this.ageReceived = value
 }



}
