import {Component, HostListener, OnInit} from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-main-parent',
  templateUrl: './main-parent.component.html',
  styleUrls: ['./main-parent.component.scss']
})
export class MainParentComponent implements OnInit{
  theuser = {
   age: 20, name: 'Freddy'
  }

  constructor(private us: UserService) {}

  ngOnInit(): void {
    this.theuser = this.us.findAll()[0]
  }

  @HostListener('click')
  changeName(){
    this.us.findAll()[0].name = 'Titi'
  }

}
