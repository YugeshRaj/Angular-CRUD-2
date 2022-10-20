import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { AuthenticationService } from '../authentication.service';



@Component({

  selector: 'app-login',

  templateUrl: './login.component.html',

  styleUrls: ['./login.component.scss'],

})

export class LoginComponent implements OnInit {

  username = '';

  password = '';

  errormsg = '';

  constructor(private auth: AuthenticationService, private router: Router) {}
  ngOnInit(): void {}

  GoToSignup() {

    this.router.navigate(['signup']);

  }

  login() {

    if (this.username.trim().length === 0) {

      this.errormsg = "UserName Can't be Empty";

    } else if (this.password.trim().length === 0) {

      this.errormsg = "PAssword Can't be Empty";

    } else {

      this.errormsg = '';

      let res = this.auth.login(this.username, this.password);

      if (res == 200) {

        this.router.navigate(['home']);

      } else {

        this.errormsg = 'Invalid Credentials';

      }

    }

  }

}