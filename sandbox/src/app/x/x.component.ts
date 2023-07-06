import {Component, HostListener} from '@angular/core';
import {NotifService} from '../notif.service';

@Component({
  selector: 'app-x',
  templateUrl: './x.component.html',
  styleUrls: ['./x.component.scss']
})
export class XComponent {

  constructor(private nf: NotifService) {
  }

  @HostListener('click')
  sendData(){
    this.nf.sendMessage('i am X')
  }

}
