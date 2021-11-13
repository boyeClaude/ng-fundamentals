import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  currentUser!: IUser;

  constructor() {}

  loginUser(username: string, password: string) {
    this.currentUser = {
      id: 1,
      firstName: 'Frederic',
      lastName: 'Boye',
      username: 'theBoye',
    };
  }

  isAuthenticated() {
    return !!this.currentUser;
  }
}
