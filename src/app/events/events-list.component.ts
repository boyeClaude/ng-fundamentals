/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IEvent } from '../shared/event.model';
import { EventService } from '../shared/event.service';

@Component({
  selector: 'app-events-list',
  templateUrl: 'events-list.component.html',
})
export class EventsListComponent implements OnInit {
  events!: IEvent[] | any;
  constructor(
    private eventService: EventService,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }

  handleEventClicked(data: any) {
    console.log('received', data);
  }

  handleThumbnailClicked(eventName: string) {
    this.toastr.success(eventName);
  }
}
