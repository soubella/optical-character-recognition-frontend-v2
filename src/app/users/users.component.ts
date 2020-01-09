import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { User } from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userService:UserServiceService) { }
  users:User[];
  ngOnInit() {
    this.userService.getUsersList().subscribe(data => {
     // let json=JSON.parse(JSON.stringify(data));
    //  this.users=json._embedded.users;
      this.users=data;
      console.log(this.users)
    });
  }
  deleteUser(id)
  {;

    this.userService.deleteUser(id);
    location.reload();
  }

}
