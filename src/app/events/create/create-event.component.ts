import { Component, OnInit } from '@angular/core';
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
export class CreateEventComponent implements OnInit {
  isDirty: boolean = true;
  newEvent!: any;
  constructor(private router: Router, private eventService: EventService) {}

  ngOnInit() {}

  saveEvent(formValues: any) {
    // console.log(formValues);
    this.eventService.saveEvent(formValues);
    this.isDirty = false;
    this.router.navigate(['/events']);
  }

  cancel() {
    this.router.navigate(['/events']);
  }
}
