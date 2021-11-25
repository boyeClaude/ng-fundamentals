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
  CreateSessionComponent,
  SessionListComponent,
} from './events/index';

/** third parties libraries */
import { ToastrModule } from 'ngx-toastr';
import { RouterModule } from '@angular/router';
import { Error404Component } from './errors/404.component';
import checkDirtyState from './utils/check-dirty-state';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollapsibleComponent } from './common/collapsible-well.component';
import { DurationPipe } from './shared/duration.pipe';
import { SimpleModalComponent } from './common/simple-modal.component';
import { UpvoteComponent } from './event-details/upvote.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleComponent,
    DurationPipe,
    SimpleModalComponent,
    UpvoteComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
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
