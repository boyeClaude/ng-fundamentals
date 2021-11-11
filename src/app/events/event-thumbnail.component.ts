import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  template: `
    <div class="well hoverwell thumbnail">
      <h2>{{ event.name }}</h2>
      <div>Date: {{ event.date }}</div>
      <div>Time: {{ event.time }}</div>
      <div>Price: $ {{ event.price }}</div>
      <div>
        <span>Location: {{ event.location.address }}</span>
        <span></span>
        <span>{{ event.location.city }}, {{ event.location.country }}</span>
      </div>
      <button class="btn btn-primary" (click)="handleClick()">Click me</button>
    </div>
  `,
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
}
