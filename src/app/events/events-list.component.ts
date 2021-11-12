import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.eventService.getEvents().subscribe((events) => (this.events = events));
    this.events = this.route.snapshot.data['events'];
  }

  handleEventClicked(data: any) {
    console.log('received', data);
  }

  handleThumbnailClicked(eventName: string) {
    this.toastr.success(eventName);
  }
}
