import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EventService } from '../shared/event.service';

@Component({
  selector: 'app-events-list',
  templateUrl: 'events-list.component.html',
})
export class EventsListComponent implements OnInit {
  events: any;
  constructor(
    private eventService: EventService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.events = this.eventService.getEvent();
  }

  handleEventClicked(data: any) {
    console.log('received', data);
  }

  handleThumbnailClicked(eventName: string) {
    this.toastr.success(eventName);
  }
}
