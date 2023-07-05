import {Component, OnInit} from '@angular/core';
import {User} from '../model/user.model';
import {UserService} from '../user.service';
import {HttpClient} from '@angular/common/http';
import {HttpUserService} from '../http-user.service';

@Component({
  selector: 'app-secondary-parent',
  templateUrl: './secondary-parent.component.html',
  styleUrls: ['./secondary-parent.component.scss']
})
export class SecondaryParentComponent implements OnInit {

  users: User[] = []

  constructor(public us: HttpUserService) {
  }

  ngOnInit(): void {
    this.us.findAll().subscribe(users => this.users = users)
  }

  ageReceived = 0;

 receiveValueFromChild(value: number){
   this.ageReceived = value
 }




}
