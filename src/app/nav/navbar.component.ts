import { Component } from '@angular/core';
import { ISession } from '../shared/event.model';
import { EventService } from '../shared/event.service';
import { AuthService } from '../user/login/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbbarComponent {
  searchTerm = '';
  foundSessions!: ISession[];
  constructor(
    public authService: AuthService,
    private eventService: EventService
  ) {}


  searchSession(searchTerm: string) {
    this.eventService.searchSessions(searchTerm).subscribe((sessions) => {
      this.foundSessions = sessions;
      console.log(this.foundSessions);
    });
  }
}
