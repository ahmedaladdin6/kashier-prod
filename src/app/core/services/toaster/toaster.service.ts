import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  public message$ = new BehaviorSubject('')
  constructor() { }
  showMessage(message: string) {
    this.message$.next(message);
  }

  closeMessage() {
    this.message$.next('');

  }

}
