import { Component, OnInit } from '@angular/core';
import { ObservablesvcService } from '../observablesvc.service';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css']
})
export class SenderComponent implements OnInit {
  message: any = '';
  data: number = 0;
  constructor(public observablesvcService: ObservablesvcService) { }

  ngOnInit() {
    this.observablesvcService.inputMessage.subscribe(c => {
      this.data = c;
    });
  }

  SendMessage() {
    this.observablesvcService.sendMessage(this.message);

  }
}
