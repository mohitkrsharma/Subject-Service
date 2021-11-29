import { Component, OnInit } from '@angular/core';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Method Calling - Services';
  myTextVal!: string;

  constructor(private messageService: MessageService) {}
  ngOnInit(): void {}

  sendTextValue() {
    this.messageService.passValue(this.myTextVal);
  }
}
