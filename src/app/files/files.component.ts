import { Component, OnInit } from '@angular/core';
import { UserServiceService } from "./../user-service.service";
import { MyFile } from '../my-file';
import { Router } from '@angular/router';
@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {

  constructor(private userService: UserServiceService,private router: Router) { }
  files:MyFile[];
  ngOnInit() {
    this.userService.getFilesList().subscribe(data => {
      this.files=data;
      console.log(this.files)
    });
  }

  fileInfo(id){
    this.router.navigate(['file-info'],{ state: { id: id } });
  }

}
