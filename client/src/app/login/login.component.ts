import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { ConfigService } from '../ConfigService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService,
              private configService: ConfigService,
              private router: Router ) { }

  loginStatus;

  onLogin(formLogin) {
    this.loginService.checkUserExist(this.configService.url, formLogin.value).subscribe((data) => {
      if (data.length === 0) {
        this.loginStatus = 'invalid username or password';
        this.router.navigate(['/login']);
        return;
      }
      this.router.navigate(['/manager']);
    });
  }

  ngOnInit() {
  }

}
