import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../ConfigService';
import { MainPageService } from './mainpage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css'],
  providers: [MainPageService]
})
export class MainpageComponent implements OnInit {

  constructor(private configService: ConfigService,
              private mainpageService: MainPageService,
              private router: Router) { }

  urlConfig = this.configService.url;
  listPost;
  viewDetail(post_id) {
    this.mainpageService.viewDetailPost(this.urlConfig, post_id).subscribe((data) => { console.log(data)});
    const detailUrl = 'detail/' + post_id;
    this.router.navigate([detailUrl]);
  }

  ngOnInit() {
    // tslint:disable-next-line:no-unused-expression
    this.mainpageService.getAllPost(this.urlConfig).subscribe((data) => {
      this.listPost = data;
    });
  }

}
