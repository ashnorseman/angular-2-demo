/**
 * Login page
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { AuthenticationService } from '../../services/authentication.service';


@Component({
  selector: 'ph-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: any = {};

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Login');
    this.authenticationService.logout();
  }

  login() {

    this.authenticationService
      .login(this.user.username, this.user.password)
      .subscribe(() => {
          this.router.navigate(['/home']);
        }, (error) => {
          alert(error);
        });
  }
}
