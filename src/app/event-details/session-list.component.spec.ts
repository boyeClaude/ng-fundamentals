import { Component } from '@angular/core';
import { SessionListComponent } from '.';
import { ISession } from '../shared/event.model';
import { AuthService } from '../user/login/auth.service';
import { VoterService } from './voterService';

describe('SessionListComponent', () => {
  // let authService: AuthService, voterService: VoterService;
  let component: SessionListComponent;
  let authService: any, voterService: any;

  beforeEach(() => {
    component = new SessionListComponent(authService, voterService);
  });

  describe('ngOnChanges', () => {
    it('it should fitler the sessions correctly', () => {
      component.sessions = <ISession[]>[
        { name: 'session 1', level: 'intermediate' },
        { name: 'session 2', level: 'intermediate' },
        { name: 'session 3', level: 'beginner' },
      ];

      component.filterBy = 'intermediate';
      component.sortBy = 'name';
      component.visibleSessions = [];

      component.ngOnChanges();

      expect(component.visibleSessions.length).toBe(2);
    });
  });
});
