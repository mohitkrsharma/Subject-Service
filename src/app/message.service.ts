import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  public subject = new Subject<string>();

  passValue(data: string) {
    //passing the data as the next observable
    this.subject.next(data);
  }
}
