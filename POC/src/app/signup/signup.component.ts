import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { HttpService } from '../http.service';



@Component({

  selector: 'app-signup',

  templateUrl: './signup.component.html',

  styleUrls: ['./signup.component.scss'],

})

export class SignupComponent implements OnInit {

  email = '';

  username = '';

  password = '';

  errormsg = '';



  user: any = [];

  constructor(private router: Router, private httpService: HttpService) {}
  ngOnInit(): void {}



  signup() {

    if (this.email.trim().length === 0) {

      this.errormsg = "Email Can't be Empty";

    } else if (this.username.trim().length === 0) {

      this.errormsg = "UserName Can't be Empty";

    } else if (this.password.trim().length === 0) {

      this.errormsg = "PAssword Can't be Empty";

    } else {
      let user = {

        Name: this.username,

        EmailId: this.email,

        Password: this.password,

      };
      this.httpService.addPost(user).subscribe(
        (response) => { },
        (error) => {  });
      alert('SignIn Successful');



      this.router.navigate(['login']);

      

      alert(user.Name);

      

    

    }

  }

}