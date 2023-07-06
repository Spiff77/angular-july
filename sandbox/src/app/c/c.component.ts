import {Component, OnInit} from '@angular/core';
import {NotifService} from '../notif.service';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.scss']
})
export class CComponent  implements OnInit{
  constructor(private nf: NotifService) {
  }

  ngOnInit(): void {
    this.nf.notification$.subscribe( v => console.log('C component receive value: ', v))
  }

}
