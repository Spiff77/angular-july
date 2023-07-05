import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {count} from 'rxjs';

@Component({
  selector: 'app-count-elem',
  templateUrl: './count-elem.component.html',
  styleUrls: ['./count-elem.component.scss']
})
export class CountElemComponent implements OnInit {

  count = 0;

  @Output()
  out = new EventEmitter<number>()

  constructor() {}

  ngOnInit(): void {
    console.log("Hello")
  }

  changeValue(value: number) {
    console.log('Emit to parent: ', value)
    this.out.emit(value)
    this.count += value
  }
}
