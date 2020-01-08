import { Component, OnInit } from '@angular/core';
import { UserServiceService } from "./../user-service.service";

@Component({
  selector: 'app-add-file',
  templateUrl: './add-file.component.html',
  styleUrls: ['./add-file.component.css']
})
export class AddFileComponent implements OnInit {

  constructor(private userService: UserServiceService) { }
  uploadedFiles: Array < File > ;
  isHidden: boolean = true;
  ngOnInit() {
  }
  fileChange(element) {
    this.uploadedFiles = element.target.files;
  }
  upload(form){
   this.userService.uploadFile(this.uploadedFiles[0]);
   this.isHidden=false;
  }
}
 