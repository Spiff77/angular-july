import {Component, OnInit} from '@angular/core';
import {User} from './model/user.model';
import {BehaviorSubject, delay, filter, from, interval, map, Observable, of, Subject} from 'rxjs';
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
    let name = 'toto'

    let names = ['a', 'b', 'c']

    from(names).subscribe(v => console.log(v))
  }

  makeMeYoungPlease() {
    this.person.age--
  }

}
