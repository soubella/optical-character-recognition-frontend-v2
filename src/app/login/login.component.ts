import { Component, OnInit } from '@angular/core';
import { UserServiceService } from "./../user-service.service";
import { User } from '../user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  constructor(private userService: UserServiceService) { }

  ngOnInit() {
  }

 async login(form){
    let data = form.value;
    this.user.email=data.email;
    this.user.password=data.password;
    this.userService.login(this.user);
    location.replace('home');
  }
}
