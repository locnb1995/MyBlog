import { Component, OnInit } from '@angular/core';
import { LoginService } from '../loginservice/login.service';
import { Member } from '../model/Member';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  token: string;
  LoginNotification: string;
  member = new Member();
  constructor(private loginService: LoginService,
              private router: Router) { }

  ngOnInit() {

  }

  onCheckLogin(userInfo) {
    this.member.username = userInfo.value.username;
    this.member.password = userInfo.value.password;
    this.loginService.checkUserInfo(this.member).subscribe((data: Array<string>) => {
      if (data[0] === 'Invalid Username or Password') {
        this.LoginNotification = 'Invalid Username or Password';
        return;
      }
      if (data[0] === 'Your account is logged in at 1 other locations') {
        this.LoginNotification = 'Your account is logged in at 1 other locations';
        return;
      }
      if (data[0] === 'Login Success') {
        this.LoginNotification = 'Login Success';
        return;
      }
    });
  }

}
