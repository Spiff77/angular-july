import {Component, HostListener} from '@angular/core';
import {NotifService} from '../notif.service';

@Component({
  selector: 'app-y',
  templateUrl: './y.component.html',
  styleUrls: ['./y.component.scss']
})
export class YComponent {
  constructor(private nf: NotifService) {
  }

  @HostListener('click')
  sendData(){
    this.nf.sendMessage('i am Y')
  }
}
