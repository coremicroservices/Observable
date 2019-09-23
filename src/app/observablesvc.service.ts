import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';




@Injectable({
  providedIn: 'root'
})
export class ObservablesvcService {

  input;
  inputMessage: BehaviorSubject<any>;


  constructor() {
    this.inputMessage = new BehaviorSubject(this.input);
  }
  sendMessage(input) {
    this.inputMessage.next(input);
  }
}
