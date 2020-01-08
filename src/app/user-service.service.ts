import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { Entreprise } from './entreprise';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private baseUrl = 'http://localhost:8081/users/';
  private entrepriseBaseUrl = 'http://localhost:8081/entreprises/';

  constructor(private http: HttpClient) { }

  login(user: User){
    let postData = new FormData();
    postData.append('email' , user.email);
    postData.append('password' , user.password);
    this.http.post(`${this.baseUrl}login`, postData,{responseType:'text'}).subscribe(rep => {
      if(rep!="NO"){
        console.log("login ok")
        sessionStorage.setItem('id',rep);
        sessionStorage.setItem('email',user.email);
      }
      console.log(rep);
    });
  }

  getUser(id: number): Observable<any> { 
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createUser(user: Object): Observable<Object> {;
    return this.http.post<User>(`${this.baseUrl}`, user);
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

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getUsersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
