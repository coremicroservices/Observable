import { Component, OnInit, Input } from '@angular/core';
import { ObservablesvcService } from '../observablesvc.service';

@Component({
  selector: 'app-receiver1',
  templateUrl: './receiver1.component.html',
  styleUrls: ['./receiver1.component.css']
})
export class Receiver1Component implements OnInit {

  msgRecieved: number;


  constructor(private observablesvcService: ObservablesvcService) {

  }

  ngOnInit() {
    this.observablesvcService.inputMessage.subscribe(c => {
      this.msgRecieved = c;
    });
  }

  getValue() {
    this.observablesvcService.inputMessage.subscribe(c => {
      this.msgRecieved = c;
    });

  }
}

