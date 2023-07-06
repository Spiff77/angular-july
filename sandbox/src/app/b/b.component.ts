import {Component, OnInit} from '@angular/core';
import {NotifService} from '../notif.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss']
})
export class BComponent implements OnInit{
  constructor(private nf: NotifService) {
  }

  ngOnInit(): void {
    this.nf.notification$.subscribe( v => console.log('B component receive value: ', v))
  }

}
