import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class UserService {

  constructor(private http:HttpClient) { }
  register(body:any){
    return this.http.post('http://127.0.0.1:3000/users/register',body,{
    observe:'body',
    headers:new HttpHeaders().append('Content-Type','application/json')
    })  
  }
  login(body:any){
    return this.http.post('http://127.0.0.1:3000/users/login',body,{
      observe:'body',
      withCredentials:true, //The cookie will be available with the Browser
      headers:new HttpHeaders().append('Content-Type','application/json')
      })
  }
}
