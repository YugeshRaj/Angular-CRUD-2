import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http.service';

// import { UserdetailsService } from '../services/userdetails.service';



@Component({

  selector: 'app-userdata',

  templateUrl: './userdata.component.html',

  styleUrls: ['./userdata.component.scss'],

})

export class UserdataComponent implements OnInit {
  id:any;
  user: any=[];
  show=false;
  email='';
  username='';
  password='';
  placeholdern:any;
  placeholdere:any;
  placeholderp:any;
  constructor(

    // private data: UserdetailsService,

    private httpService: HttpService

  ) {}



  ngOnInit(): void {

    this.getUsers();
    
  }

  delete(id:any){
    this.httpService.delete(id).subscribe(
      (response) => { this.getUsers()},
      (error) => {  });
  }
showw(id:any,index:any){
  this.show=true;
  this.id=id;
  console.log(this.user);
  this.placeholdern=this.user[index].name;
  this.placeholdere=this.user[index].emailId;
  this.placeholderp=this.user[index].password;

}
 
  update(){
    this.show=false;
    this.user = {

      Id: this.id,
      Name: this.username,

      EmailId: this.email,

      Password: this.password,

    };
    console.log(this.user);
    console.log(this.id);

    this.httpService.update(this.id,this.user).subscribe(
      (response) => { this.getUsers()},
      (error) => {  });
  }
  getUsers() {
    this.httpService.getPosts().subscribe(
      (response) => { this.user = response; },
      (error) => { console.log(error); });
    // this.httpService.getPosts().subscribe(

    //   (response) => {

    //     this.user = response;

    //   },



    //   (error) => {

    //     console.log(error);

    //   }

    // );

    // this.httpService.getPosts().subscribe(

    //   (user: any) => {

    //   console.log(user)

    //     this.user = {

    //       Name: user.username,

    //       Email: user.email,

    //       Passwordate: user.password,

    //     }

    //   }

    // );

   

  }

}