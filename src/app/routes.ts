import { Routes } from '@angular/router';
import { Error404Component } from './errors/404.component';
import { CreateSessionComponent } from './event-details';
import { EventDetailsComponent } from './event-details/event-details.component';
import { CreateEventComponent } from './events/create/create-event.component';
import { EventsListComponent } from './events/events-list.component';
import { EventListResolverService } from './shared/event-list-resolver.service';
import { EventRouteActivactorService } from './shared/event-route-activactor.service';

export const appRoutes: Routes = [
  {
    path: 'event/new',
    component: CreateEventComponent,
    canDeactivate: ['canDesactivateCreateEvent'],
  },
  {
    path: 'events',
    component: EventsListComponent,
    resolve: {
      events: EventListResolverService,
    },
  },
  {
    path: 'events/:id',
    component: EventDetailsComponent,
    canActivate: [EventRouteActivactorService],
  },
  { path: 'events/session/new', component: CreateSessionComponent },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },

  {
    path: 'user',
    loadChildren: () =>
      import('./user/user.module').then((m) => m.ProfileModule),
  },
];
