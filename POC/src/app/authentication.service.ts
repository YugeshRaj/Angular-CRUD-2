import { Injectable } from '@angular/core';

import { Router } from '@angular/router';



@Injectable({

  providedIn: 'root',

})

export class AuthenticationService {

  constructor(private router: Router) {}

  login(username: string, password: string) {

    if (username == 'angular' && password == '123') {

      return 200;

    } else {

      return 403;

    }

  }

  logout() {}

  signup() {}

}

