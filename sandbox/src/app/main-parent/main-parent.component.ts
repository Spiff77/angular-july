import { Component } from '@angular/core';

@Component({
  selector: 'app-main-parent',
  templateUrl: './main-parent.component.html',
  styleUrls: ['./main-parent.component.scss']
})
export class MainParentComponent {
  thename = {
   age: 20, name: 'Freddy'
  }
}
