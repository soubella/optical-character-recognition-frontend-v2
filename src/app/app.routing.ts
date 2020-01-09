import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import {UsersComponent} from './users/users.component';
import {FilesComponent} from './files/files.component';
import {AddFileComponent} from './add-file/add-file.component';
import {FileInfoComponent} from './file-info/file-info.component';
import { AddUserComponent } from './add-user/add-user.component';

const routes: Routes =[
    { path: 'home',             component: HomeComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'register',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'login',          component: LoginComponent },
    { path: 'users',          component: UsersComponent },
    { path: 'files',          component: FilesComponent },
    { path: 'add-file',          component: AddFileComponent },
    { path: 'file-info',          component: FileInfoComponent },
    { path: 'add-user',          component: AddUserComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
