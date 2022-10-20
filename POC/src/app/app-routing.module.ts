import { Component, NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';

import { HomeComponent } from './home/home.component';

import { SignupComponent } from './signup/signup.component';

import { UserdataComponent } from './userdata/userdata.component';

const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },

  { path: 'home', component: HomeComponent },

  { path: 'signup', component: SignupComponent },

  { path: 'userdata', component: UserdataComponent },

  { path: '**', component: LoginComponent },

];



@NgModule({

  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],

})

export class AppRoutingModule {}