/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';

import { EventService } from './event.service';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class EventListResolverService implements Resolve<any> {
  constructor(private eventService: EventService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.eventService.getEvents().pipe(map((events) => events));
  }
}
