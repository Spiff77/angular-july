import {Component, OnInit} from '@angular/core';
import {User} from './model/user.model';
import {BehaviorSubject, filter, interval, map, Observable, Subject} from 'rxjs';
import {logMessages} from '@angular-devkit/build-angular/src/tools/esbuild/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  person = {
    firstname: 'Thomas',
    lastname: 'Lhomme',
    age: 37,
    address: {
      street: "Bolt street",
      city: 'Liverpool'
    }
  }
  employed = false
  displayStatus = true
  textcolor = 'white'
  bgcolor = 'black'

  user: User = {
    name: 'sdfdsz', age: 40
  }

  ngOnInit(): void {

  }

  makeMeYoungPlease() {
    this.person.age--
  }

}
