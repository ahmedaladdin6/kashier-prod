import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {


  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();
  constructor() { }

  showHide(value: boolean) {
    this.loadingSubject.next(value);

  }

  unsubscribe() {
    this.loadingSubject.unsubscribe()
  }

}
