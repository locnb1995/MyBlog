import { Component, OnInit , Input } from '@angular/core';
import { ConfigService } from '../config';
import { MainPageService } from './mainpage.service';
import { Post } from '../Model/Post';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css'],
  providers: [MainPageService]
})
export class MainpageComponent implements OnInit {
  constructor(private configService: ConfigService,
              private mainpageService: MainPageService,
              private postData: Post ) { }
  postConstruct = this.postData.postConstruct;
  @Input() listPost: {postConstruct: any}[];
  ngOnInit() {
    this.mainpageService.getAllPost(this.configService.url).subscribe((data) => {
      this.listPost = data;
    });
  }

}
