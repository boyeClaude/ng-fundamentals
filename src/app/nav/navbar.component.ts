import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/login/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbbarComponent implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit() {}
}
