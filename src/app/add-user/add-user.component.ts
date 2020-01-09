import { Component, OnInit } from '@angular/core';
import { UserServiceService } from "./../user-service.service";
import {Entreprise} from "../entreprise";
import {User} from "../user";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
entreprises : any[];
roles : any[];
  user: User = new User();
  constructor(public userService : UserServiceService) { }

  ngOnInit() {
    this.userService.getEntreprises().subscribe(data => {
      this.entreprises=Array.of(data);
      this.entreprises=this.entreprises[0]['_embedded']['entreprises'];
      console.log(this.entreprises);
    });
    this.userService.getRoles().subscribe(data => {
      this.roles=Array.of(data);
      this.roles=this.roles[0]['_embedded']['roles'];
      console.log(this.roles);
    });
  }
  adduser(form){
    let data = form.value;
    this.user.firstName=data.firstname;
    this.user.lastName=data.lastname;
    this.user.email=data.email;
    this.user.password=data.password;
    this.user.entreprise=Number("http://localhost:8081/entreprises/"+data.entreprise);
    this.user.role="http://localhost:8081/roles/"+data.role;
    this.userService.createUser(this.user);
    location.reload();
  }

}
