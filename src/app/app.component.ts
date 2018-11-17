import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import {
  Router,
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationError
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  photoURL = '';

  constructor(public userService: UserService, private router: Router) {}

  ngOnInit() {
    const credentials = this.userService.getCredentials();

    if (credentials) {
      this.photoURL = credentials.user.photoURL;
    } else {
      this.router.navigateByUrl('');
    }
  }

  logout() {
    this.userService.logout();
  }

  checkLogin() {}
}
