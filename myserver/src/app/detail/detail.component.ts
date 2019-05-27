import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config';
import { DetailService } from './detail.service';
import { Post } from '../Model/Post';
import { ActivatedRoute , Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [DetailService]
})
export class DetailComponent implements OnInit {

  constructor(private configService: ConfigService,
              private detailService: DetailService,
              private postData: Post,
              private router: Router,
              private activateRoute: ActivatedRoute) { }
  postConstruct = this.postData.postConstruct;
  listPost: {postConstruct: any}[];
  relatedPost: {postConstruct: any}[];
  ngOnInit() {
    this.activateRoute.paramMap.subscribe(param => {
      this.detailService.getPostDetail(this.configService.url , param.get('post_id')).subscribe((data) => {
        if (data.length === 0) {
          this.router.navigate(['list']);
          return;
        }
        this.listPost = data;
      });
      this.detailService.getRelatedPost(this.configService.url , param.get('post_id')).subscribe((data) => {
        if (data.length !== 0){
          this.relatedPost = data;
        }
      });
    });
  }

}
