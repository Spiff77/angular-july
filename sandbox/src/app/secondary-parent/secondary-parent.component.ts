import { Component } from '@angular/core';
import {User} from '../model/user.model';

@Component({
  selector: 'app-secondary-parent',
  templateUrl: './secondary-parent.component.html',
  styleUrls: ['./secondary-parent.component.scss']
})
export class SecondaryParentComponent {

  user1: User = {
    age: 30,
    name: 'Chantal goya'
  }

  user2: User = {
    age: 35,
    name: 'Carlos'
  }

}
