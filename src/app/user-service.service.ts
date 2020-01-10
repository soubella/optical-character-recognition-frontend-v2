import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { Entreprise } from './entreprise';
import { MyFile } from './my-file';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private baseUrl = 'http://localhost:8081/users/';
  private baseUrl2 = 'http://localhost:8081/users/api';
  private baseUrl3 = 'http://localhost:8081/userdel/';
  private baseUrl4 = 'http://localhost:8081/filedel/';
  private entrepriseBaseUrl = 'http://localhost:8081/entreprises/';
  private roleBaseUrl = 'http://localhost:8081/roles/';
  private uploadUrl = 'http://localhost:8081/upload';
  private filesUrl = 'http://localhost:8081/files';
  private userUrl = 'http://localhost:8081/users/list';

  constructor(private http: HttpClient) { }

  uploadFile(file){
    let postData = new FormData();
    postData.append('file' , file);
    postData.append('entreprise_id' , sessionStorage.getItem('entreprise'));
    console.log(file);
    this.http.post(`${this.uploadUrl}`, postData,{responseType:'text'}).subscribe(rep => {
      console.log(rep);
    });
  }

  login(user: User){
    let postData = new FormData();
    postData.append('email' , user.email);
    postData.append('password' , user.password);
    console.log("login ...");
    this.http.post(`${this.baseUrl}login`, postData,{responseType:'text'}).subscribe(rep => {
      if(rep!="NO"){

        var splitted = rep.split("-", 2);
        sessionStorage.setItem('id',splitted[0]);
        sessionStorage.setItem('entreprise',splitted[1]);
        sessionStorage.setItem('email',user.email);
        console.log(user.email);
        console.log(sessionStorage.getItem('email'));
      }
      console.log("error is :"+rep);
    });
  }

  getUser(id: number): Observable<any> { 
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createUser(user: User){
    this.http.post<User>(`${this.baseUrl}`, user,httpOptions).subscribe(rep => {
    });
  }

  createAdmin(user: User){
    this.http.post<User>(`${this.baseUrl}`, user,httpOptions).subscribe(rep => {
    });
  }

  createEntreprise(entreprise:Entreprise,user: User){
    this.http.post<Entreprise>(`${this.entrepriseBaseUrl}`, entreprise,httpOptions).subscribe(rep => {
      let json=JSON.parse(JSON.stringify(rep));
      user.entreprise=json._links.self.href;
      this.createAdmin(user);
    });
  }

  updateUser(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteUser(id: number) : boolean{
     this.http.get(`${this.baseUrl3}${id}`).subscribe(rep => {
       console.log('deleting user');
        return true ;
    });
  return false ;
  }
  deleteFile(id: number) : boolean{
    this.http.get(`${this.baseUrl4}${id}`).subscribe(rep => {
      console.log('deleting file');
      return true ;
    });
    return false ;
  }

  getUsersList() {
    let id = sessionStorage.getItem("entreprise");
    return this.http.get<User[]>(`${this.baseUrl2}/${id}`);
  }

  getFilesList() {
    return this.http.get<MyFile[]>(`${this.filesUrl}`);
  }

  getFileInfo(id){
    return this.http.get('http://localhost:8081/uploadedFiles/'+id+'/metaData');
  }

  sendMail(email){
    let postData = new FormData();
    postData.append('email' , email);
    postData.append('fileId' , "1");
    this.http.post(`${this.baseUrl}mail`, postData,{responseType:'text'}).subscribe(rep => {
      console.log(rep);
    });
  }
  getEntreprises() {
    return this.http.get(`${this.entrepriseBaseUrl}`);
  }
  getRoles() {
    return this.http.get(`${this.roleBaseUrl}`);
  }

}
