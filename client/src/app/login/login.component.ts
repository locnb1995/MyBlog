import { Component, OnInit } from '@angular/core';
import { LoginService } from '../loginservice/login.service';
import { Member } from '../model/Member';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  token: string;
  LoginNotification: string;
  member = new Member();
  constructor(private loginService: LoginService) { }

  ngOnInit() {

  }

  onCheckLogin(userInfo) {
    this.member.username = userInfo.value.username;
    this.member.password = userInfo.value.password;
    this.loginService.checkUserInfo(this.member).subscribe((data: Array<string>) => {
      if (data.length === 0) {
        this.LoginNotification = 'Invalid Username or Password';
      } else {
        this.token = data[0] + '/' + new Date();
        localStorage.setItem('key', this.token);
      }
    });
  }

}
