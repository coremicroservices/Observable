import { Component, OnInit } from '@angular/core';
import { ObservablesvcService } from '../observablesvc.service';

@Component({
  selector: 'app-receiver2',
  templateUrl: './receiver2.component.html',
  styleUrls: ['./receiver2.component.css']
})
export class Receiver2Component implements OnInit {

  msgRecieved: number;

  constructor(private observablesvcService: ObservablesvcService) {

  }

  ngOnInit() {
    this.observablesvcService.inputMessage.subscribe(c => {
      this.msgRecieved = c;
    });
  }

}
