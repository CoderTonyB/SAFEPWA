import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  error = new BehaviorSubject('');
  isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    public afAuth: AngularFireAuth,
    public router: Router,
    private ngZone: NgZone
  ) {
    if (localStorage.getItem('credentials')) {
      this.isLoggedIn.next(true);
    } else {
      this.isLoggedIn.next(false);
    }
  }

  getCredentials(): auth.UserCredential {
    return JSON.parse(localStorage.getItem('credentials'));
  }

  userPicture() {
    return localStorage.getItem('userPicture');
  }

  public login() {
    this.afAuth.auth
      .signInWithPopup(new auth.FacebookAuthProvider())
      .then(cred => {
        localStorage.setItem('credentials', JSON.stringify(cred));
        this.error.next('');
        this.isLoggedIn.next(true);
        this.ngZone.run(() => this.router.navigateByUrl('/loglist'));
        console.dir(cred);
      })
      .catch(reason => {
        this.error.next(reason.message);
        localStorage.removeItem('credentials');
        this.ngZone.run(() => this.router.navigateByUrl('/'));
        this.isLoggedIn.next(false);
      });
  }
  logout() {
    this.afAuth.auth.signOut();
    this.isLoggedIn.next(false);
    this.ngZone.run(() => this.router.navigateByUrl('/'));
    localStorage.removeItem('credentials');
  }
}
