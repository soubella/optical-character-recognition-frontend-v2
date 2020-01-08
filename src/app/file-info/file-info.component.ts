import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import {Router } from '@angular/router';
import { MetaData } from '../meta-data';

@Component({
  selector: 'app-file-info',
  templateUrl: './file-info.component.html',
  styleUrls: ['./file-info.component.css']
})
export class FileInfoComponent implements OnInit {

  metadatas:MetaData[];

  constructor(private userService: UserServiceService,private router: Router) { 
    let id=this.router.getCurrentNavigation().extras.state.id;
    this.userService.getFileInfo(id).subscribe(data => {
      let json=JSON.parse(JSON.stringify(data));
      this.metadatas=json._embedded.metaDatas;
      console.log(this.metadatas);
    });
  }

  ngOnInit() {

  }

}
