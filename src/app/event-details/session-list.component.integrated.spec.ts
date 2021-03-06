/* eslint-disable @typescript-eslint/no-explicit-any */
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SessionListComponent } from '.';
import { DurationPipe } from '../shared/duration.pipe';
import { AuthService } from '../user/login/auth.service';
import { VoterService } from './voterService';

describe('SessionListComponent', () => {
  let mockAuthService: any,
    mockVoterService: any,
    fixture: ComponentFixture<SessionListComponent>,
    component: SessionListComponent,
    element: HTMLElement,
    debugEl: DebugElement;

  beforeEach(() => {
    (mockAuthService = {
      isAuthenticated: () => true,
      currentUser: { Username: 'joe' },
    }),
      (mockVoterService = { userHasVoted: () => true });
    TestBed.configureTestingModule({
      declarations: [SessionListComponent, DurationPipe],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: VoterService, useValue: mockVoterService },
      ],
    });

    fixture = TestBed.createComponent(SessionListComponent);
    component = fixture.componentInstance;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    debugEl = fixture.debugElement;
    element = fixture.nativeElement;
  });

  describe('initial display', () => {
    it('should have the correct title', () => {
      component.sessions = [
        {
          name: 'Session 1',
          id: 3,
          presenter: 'joe',
          duration: 1,
          level: 'beginner',
          abstract: 'abstract',
          voters: ['Doe', 'Steve'],
        },
      ];

      (component.filterBy = 'all'),
        (component.sortBy = 'name'),
        component.ngOnChanges();

      fixture.detectChanges();

      expect(element.querySelector('[well-title]')?.textContent).toContain(
        'Session 1'
      );
    });
  });
});
