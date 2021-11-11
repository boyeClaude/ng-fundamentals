import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-list',
  templateUrl: 'events-list.component.html',
})
export class EventsListComponent implements OnInit {
  event = {
    id: 1,
    name: 'Angular Connect',
    date: '22/02/1995',
    time: '10:00 am',
    price: 50.25,
    imageUrl: 'assets/images/angularconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England',
    },
  };
  constructor() {}

  ngOnInit() {}

  handleEventClicked(data: any) {
    console.log('received', data);
  }
}
