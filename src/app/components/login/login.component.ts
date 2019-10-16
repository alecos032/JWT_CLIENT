import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from '../../models/UserLogin';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoginError: boolean =false;
  userLog: UserLogin ={
    username: '',
    passwd: ''
  };
  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
  }

  loginUser(){
    this.loginService.getToken(this.userLog).subscribe(
      (response: any ) =>{
        localStorage.setItem('userToken',response.access_token);
        this.loginService.isLoggedUser= true;
        this.loginService.change.emit(this.loginService.isLoggedUser);
        this.router.navigate(['/content']);
      },
      err=> {
        this.isLoginError= true;
      }
    );
  }
}
