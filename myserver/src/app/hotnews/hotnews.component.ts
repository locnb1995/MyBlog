import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config';
import { HotNewService } from './hotnews.service';
import { Post } from '../Model/Post';

@Component({
  selector: 'app-hotnews',
  templateUrl: './hotnews.component.html',
  styleUrls: ['./hotnews.component.css'],
  providers: [HotNewService]
})
export class HotnewsComponent implements OnInit {

  constructor(private configService: ConfigService,
              private hotnewService: HotNewService,
              private postData: Post,) { }
  postConstruct = this.postData.postConstruct;
  listPostHot: {postConstruct: any}[];
  ngOnInit() {
    this.hotnewService.getPostByView(this.configService.url).subscribe((data) => {
      console.log(data);
      this.listPostHot = data;
    });
  }

}
