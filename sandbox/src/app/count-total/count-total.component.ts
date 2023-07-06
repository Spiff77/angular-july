import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subscription, takeWhile} from 'rxjs';
import {logMessages} from '@angular-devkit/build-angular/src/tools/esbuild/utils';

@Component({
  selector: 'app-count-total',
  templateUrl: './count-total.component.html',
  styleUrls: ['./count-total.component.scss']
})
export class CountTotalComponent implements OnInit, OnDestroy{
  total = 0
  continueObservable = true

  receiveValue(val: number){
    this.total += val
  }

  ngOnInit(): void {
    interval(1000).pipe(takeWhile(() => this.continueObservable)).subscribe(v => console.log(v))
    interval(1000).pipe(takeWhile(() => this.continueObservable)).subscribe(v => console.log(v))
    interval(1000).pipe(takeWhile(() => this.continueObservable)).subscribe(v => console.log(v))
    interval(1000).pipe(takeWhile(() => this.continueObservable)).subscribe(v => console.log(v))
  }

  ngOnDestroy(): void {
    this.continueObservable = false;
  }
}
