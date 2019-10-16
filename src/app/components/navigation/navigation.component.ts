import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  isLogged : any= false;
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.loginService.change.subscribe(
      status=>{
        this.isLogged= status;
      }
    );
  }

  logout(){
    localStorage.removeItem('userToken');
    this.isLogged= false;
    this.router.navigate(['/login']);
  }

}
