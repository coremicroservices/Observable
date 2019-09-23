import { Component, OnInit } from '@angular/core';
import { ObservablesvcService } from '../observablesvc.service';

@Component({
  selector: 'app-receiver3',
  templateUrl: './receiver3.component.html',
  styleUrls: ['./receiver3.component.css']
})
export class Receiver3Component implements OnInit {

  msgRecieved: number;

  constructor(private observablesvcService: ObservablesvcService) { }

  ngOnInit() {
    this.observablesvcService.inputMessage.subscribe(c => {
      this.msgRecieved = c;
    });
  }
}
