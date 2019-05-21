import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { DetailService } from './detail.service';
import { ConfigService } from '../ConfigService';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [DetailService]
})
export class DetailComponent implements OnInit {

  constructor(private activatedroute: ActivatedRoute ,
              private detailService: DetailService ,
              private configService: ConfigService ,
              private router: Router) { }
  urlConfig = this.configService.url;
  postDetail;
  relatedPost;
  checkHaveRelatedPost = false;
  ngOnInit() {
    this.activatedroute.paramMap.subscribe(param => {
      this.detailService.getPostById(this.urlConfig , param.get('post_id')).subscribe((data) => {
        if (data === null) {
          this.router.navigate(['list']);
        }
        this.postDetail = data;
      });
      this.detailService.getRelatedPost(this.urlConfig , param.get('post_id')).subscribe((data) => {
        if (data.length !== 0){
          this.relatedPost = data;
        }
      });
    });
  }

}
