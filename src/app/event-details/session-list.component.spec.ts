/* eslint-disable @typescript-eslint/no-explicit-any */
import { SessionListComponent } from '.';
import { ISession } from '../shared/event.model';


describe('SessionListComponent', () => {
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
