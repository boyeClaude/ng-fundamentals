import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  template: `
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
      <h2>{{ event.name }}</h2>
      <div>Date: {{ event?.date }}</div>
      <div [ngClass]="getTimeStartClass()" [ngSwitch]="event?.time">
        Time: {{ event?.time }}
        <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
        <span *ngSwitchDefault>(Normal Start)</span>
      </div>

      <div>Price: $ {{ event?.price }}</div>
      <div *ngIf="event?.location">
        <span>Location: {{ event?.location?.address }}</span>
        <span class="pad-left"></span>
        <span>{{ event?.location.city }}, {{ event?.location?.country }}</span>
      </div>
    </div>
  `,

  styleUrls: ['./event-thumbnail.component.css'],
})
export class EventThumbnailComponent implements OnInit {
  @Input('event') event: any;
  @Output() onHandleClick: any = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  handleClick() {
    this.onHandleClick.emit(this.event.name);
  }

  logFoo() {
    console.log('foo');
  }

  getTimeStartClass() {
    const isEarlyStart = this.event && this.event.time === '8:00 am';
    return { green: isEarlyStart, bold: isEarlyStart };
  }
}
