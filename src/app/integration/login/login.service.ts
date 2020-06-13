import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment'
import { Login, Group, DeleteGroup } from './login.model';

export interface JWT {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public token = '';
  
  constructor(
    private http: HttpClient) {}

  //login
  userInfromation(login: Login, setHeaders) {
    const body: Login = {
      id: login.id,
      name: login.name,
      email: login.email,
      avatar: login.avatar,
      status: login.status,
    }
    return this.http.put(environment.host + '/user/update', body, setHeaders)
  }

  getGroup(group: Group , setHeaders){
    const body: Group={
      page: group.page,
      per_page: group.per_page
    }
    return this.http.post(environment.host + '/group/get',body, setHeaders);
  }
  deleteGroup(id:string){
    this.token = localStorage.getItem('jwt-token');
    const options ={
      headers: new HttpHeaders().set('Authorization', this.token).set('x-access-token', this.token)
      .set('X-Requested-With','XMLHttpRequest'),
      body:{
        id:id
      }
    }
     return this.http.delete(environment.host + '/group/delete',options)
  }
  getUser(group:Group, setHeaders){
      const body: Group ={
        page: group.page,
        per_page: group.per_page
      }
    return this.http.post(environment.host + '/user/get', body, setHeaders)
  }
}