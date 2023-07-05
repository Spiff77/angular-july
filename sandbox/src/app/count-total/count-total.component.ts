import { Component } from '@angular/core';

@Component({
  selector: 'app-count-total',
  templateUrl: './count-total.component.html',
  styleUrls: ['./count-total.component.scss']
})
export class CountTotalComponent {
  total = 0

  receiveValue(val: number){
    this.total += val
  }
}
