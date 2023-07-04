import { Component } from '@angular/core';
import {User} from './model/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

 person = {
   firstname: 'Thomas',
   lastname: 'Lhomme',
   age:37,
   address:{
     street: "Bolt street",
     city: 'Liverpool'
   }
 }
 employed = false
 displayStatus = true
 textcolor= 'white'
 bgcolor= 'black'

  user: User = {
   name: 'sdfdsz'
  }

 makeMeYoungPlease(){
  this.person.age--
 }

}

