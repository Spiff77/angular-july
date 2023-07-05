import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from '../model/user.model';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

  @Input()
  user!: User

  @Output()
  outVar = new EventEmitter<number>()

  userAge = 0

  f(){
     this.userAge = this.user.age;
  }

  sendToParent(){
    this.outVar.emit(this.user.age)
  }

}
