import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/** components */
import { NavbbarComponent } from './nav/navbar.component';
import { AppComponent } from './app.component';
import { appRoutes } from './routes';
import {
  EventThumbnailComponent,
  EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent,
} from './events/index';

/** third parties libraries */
import { ToastrModule } from 'ngx-toastr';
import { RouterModule } from '@angular/router';
import { Error404Component } from './errors/404.component';
import checkDirtyState from './utils/check-dirty-state';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    {
      provide: 'canDesactivateCreateEvent',
      useValue: checkDirtyState,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

// use can create it in another file and imported here
/*export default function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm(
      'you have not saved the event, do you want to cancel?'
    );
  }
  return true;
}*/
