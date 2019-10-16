import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserLogin } from '../models/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedUser:any = false;
  API_URI='http://localhost:8080';
  @Output() change: EventEmitter<boolean> = new EventEmitter();
  constructor(private http: HttpClient) { }
  
  getToken(user: UserLogin){
   
    let params= new URLSearchParams();
        params.append('username',user.username);
        params.append('password',user.passwd);
        params.append('grant_type','password');
        params.append('client_id','pepe');

    let headersObj= new HttpHeaders(
      {'Content-Type':'application/x-www-form-urlencoded; charset=utf-8', 
      'Authorization': 'Basic '+btoa("pepe:sierra1*")});
      let options= {headers: headersObj};
    return this.http.post(`${this.API_URI}/oauth/token`,params.toString(),options);
  }

  getContet(){
    let params= "access_token="+localStorage.getItem('userToken');
    return this.http.get(`${this.API_URI}/demo?${params}`);
  }
}
