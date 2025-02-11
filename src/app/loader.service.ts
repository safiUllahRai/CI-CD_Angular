import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ProgressState } from './loader/loader.component';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loaderSubject = new Subject<ProgressState>();
  loaderState = this.loaderSubject.asObservable();

  constructor() { }

  show() {
    this.loaderSubject.next(<ProgressState>{ show: true });
  }
  hide() {
    this.loaderSubject.next(<ProgressState>{ show: false });
  }
}
