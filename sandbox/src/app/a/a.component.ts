import {Component, OnInit} from '@angular/core';
import {NotifService} from '../notif.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss']
})
export class AComponent implements OnInit{
  constructor(private nf: NotifService) {
  }

  ngOnInit(): void {
    this.nf.notification$.subscribe( v => console.log('A component receive value: ', v))
  }

}
