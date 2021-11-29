import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
})
export class SecondComponent implements OnInit, OnDestroy {
  name!: string;
  constructor(private messageService: MessageService) {}
  ngOnInit(): void {
    this.messageService.subject.subscribe((data) => {
      console.log('next subscribed value: ' + data);
      this.name = data;
    });
  }
  ngOnDestroy(): void {}
}
