import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotifService {
  private _notification$: Subject<string> = new Subject<string>()

  constructor() { }

  sendMessage(message: string){
    this._notification$.next(message);
  }

  get notification$(): Subject<string> {
    return this._notification$;
  }

}
