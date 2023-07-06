import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private _notification$: Subject<void> = new Subject<void>()

  constructor() { }

  sendMessage(){
    this._notification$.next();
  }

  get notification$(): Subject<void> {
    return this._notification$;
  }

}
