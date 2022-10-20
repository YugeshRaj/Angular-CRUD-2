import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { AuthenticationService } from '../authentication.service';
import { HttpService } from '../http.service';

@Component({

  selector: 'app-header',

  templateUrl: './header.component.html',

  styleUrls: ['./header.component.scss'],

})

export class HeaderComponent implements OnInit {
  user:any
  constructor(private router: Router, private auth: AuthenticationService,private httpService:HttpService) {}



  ngOnInit(): void {}



  GoToHome() {

    this.router.navigate(['home']);

  }

  Users() {

    this.router.navigate(['userdata']);
    
  }

  Logout() {

    this.router.navigate(['login']);

  }

}