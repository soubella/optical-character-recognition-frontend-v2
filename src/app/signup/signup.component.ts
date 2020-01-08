import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';
import { UserServiceService } from "./../user-service.service";
import { User } from '../user';
import { Entreprise } from '../entreprise';
@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

    isHidden: boolean = true;
    user: User = new User();
    entreprise: Entreprise = new Entreprise();
    constructor(private userService: UserServiceService) {
     }
    
    ngOnInit() {}
    register(form) {
        let data = form.value;
        this.user.firstName=data.firstName;
        this.user.lastName=data.lastName;
        this.user.email=data.email;
        this.user.password=data.password;
        this.user.role="http://localhost:8081/roles/1";

        this.entreprise.name=data.company;
        this.entreprise.plan="http://localhost:8081/roles/"+data.plan;

        this.userService.createEntreprise(this.entreprise,this.user);
        this.isHidden=false;
        form.reset();
    }
}
