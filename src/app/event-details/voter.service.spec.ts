import { VoterService } from './voterService';
import { ISession } from '../shared/event.model';

describe('VoterService', () => {
  let voterService: VoterService;
  let session: ISession;

  /** to have a fresh copy of the instance */
  beforeEach(() => {
    voterService = new VoterService();

    session = {
      id: 5,
      presenter: 'joe',
      duration: 3,
      level: 'beginner',
      abstract: 'string',
      voters: ['joe', 'john'],
      name: 'joe',
    };
  });

  describe('deleteVoter', () => {
    it('should filter remove the voter of the list of voters', () => {
      const sessionOne = Object.assign({}, session);

      voterService.deleteVoter(sessionOne, sessionOne.name);

      expect(sessionOne.voters.length).toBe(1);
    });
  });

  describe('addVoter', () => {
    it('should add voter to the list of voter', () => {
      const voterName = 'Doe';

      const sessionTwo = Object.assign({}, session);

      voterService.addVoter(sessionTwo, voterName);

      expect(sessionTwo.voters.length).toBe(3);
    });
  });
});
