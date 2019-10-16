import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  textWelcome: any;
  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.getContet().subscribe(
      (resp : any) => {
        this.textWelcome= resp.message;
      },
      err => console.log(err)
    );
  }
  
}
