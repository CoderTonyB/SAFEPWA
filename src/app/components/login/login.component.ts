import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private userService: UserService) {}

  error;

  ngOnInit() {
    this.userService.error.subscribe(error => (this.error = error));
  }

  login() {
    this.userService.login();
  }

  logout() {
    this.userService.logout();
  }
}
