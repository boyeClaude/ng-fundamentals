/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/shared/event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: 'create-event.component.html',
  styles: [
    `
      em {
        float: right;
        color: #e05c65;
        padding-left: 10px;
      }
      .error {
        background-color: #e3c3c5;
      }
    `,
  ],
})
export class CreateEventComponent {
  isDirty = true;
  newEvent!: any;
  constructor(private router: Router, private eventService: EventService) {}


  saveEvent(formValues: any) {
    this.eventService.saveEvent(formValues);
    this.isDirty = false;
    this.router.navigate(['/events']);
  }

  cancel() {
    this.router.navigate(['/events']);
  }
}
