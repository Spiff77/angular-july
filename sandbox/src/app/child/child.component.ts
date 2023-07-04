import {Component, Input} from '@angular/core';
import {User} from '../model/user.model';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

  @Input()
  user: User = {
    age: -1,
    name: 'UNKNOW'
  };

  userAge = 0

  f(){
     this.userAge = this.user.age;
  }

  getUserProperties() : void{
    console.log(Object.keys(this.user))
  }

}
