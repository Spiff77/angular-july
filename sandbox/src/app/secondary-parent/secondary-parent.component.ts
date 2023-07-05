import {Component, OnInit} from '@angular/core';
import {User} from '../model/user.model';
import {UserService} from '../user.service';

@Component({
  selector: 'app-secondary-parent',
  templateUrl: './secondary-parent.component.html',
  styleUrls: ['./secondary-parent.component.scss']
})
export class SecondaryParentComponent implements OnInit {

  users: User[] = []

  constructor(public us: UserService) {
  }

  ngOnInit(): void {
    this.users = this.us.users
  }

  ageReceived = 0;

 receiveValueFromChild(value: number){
   this.ageReceived = value
 }




}
