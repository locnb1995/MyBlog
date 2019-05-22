import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { ConfigService } from '../ConfigService';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  constructor(private loginService: LoginService,
              private configService: ConfigService) { }

  ngOnInit() {
    this.loginService.checkLoginStatus(this.configService.url).subscribe((data) => {
      console.log(data);
    });
  }

}
