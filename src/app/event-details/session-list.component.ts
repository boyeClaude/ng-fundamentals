import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ISession } from '../shared/event.model';
import { AuthService } from '../user/login/auth.service';
import { VoterService } from './voterService';

@Component({
  selector: 'session-list',
  templateUrl: 'session-list.component.html',
})
export class SessionListComponent implements OnInit, OnChanges {
  @Input('sessions') sessions!: ISession[] | undefined;
  @Input() filterBy!: string;
  visibleSessions: ISession[] | undefined = [];
  @Input() sortBy!: string;

  constructor(
    public authService: AuthService,
    private voterService: VoterService
  ) {}

  ngOnInit() {}

  ngOnChanges(): void {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
      this.sortBy === 'name'
        ? this.visibleSessions?.sort(sortByNameAsc)
        : this.visibleSessions?.sort(sortByVotesDesc);
    }
  }

  filterSessions(filter: string) {
    if (filter === 'all') {
      this.visibleSessions = this.sessions?.slice(0);
    } else {
      this.visibleSessions = this.sessions?.filter(
        (session) => session.level.toLocaleLowerCase() === filter
      );
    }
  }

  toggleVote(session: ISession) {
    if (this.userHasVoted(session)) {
      this.voterService.deleteVoter(
        session,
        this.authService.currentUser.username
      );
    } else {
      this.voterService.addVoter(
        session,
        this.authService.currentUser.username
      );
    }

    if (this.sortBy === 'votes') {
      this.visibleSessions?.sort(sortByVotesDesc);
    }
  }

  userHasVoted(session: ISession) {
    return this.voterService.userHasVoted(
      session,
      this.authService.currentUser.username
    );
  }
}

function sortByNameAsc(s1: ISession, s2: ISession) {
  if (s1.name > s2.name) return 1;
  else if (s1.name === s2.name) return 0;
  else return -1;
}

function sortByVotesDesc(s1: ISession, s2: ISession) {
  return s1.voters.length - s2.voters.length;
}
