import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-navbar',
  templateUrl: './dashboard-navbar.component.html',
  styleUrls: ['./dashboard-navbar.component.css']
})
export class DashboardNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logout(){
    console.log("logout...");
    sessionStorage.clear();
    location.reload();
  }
}