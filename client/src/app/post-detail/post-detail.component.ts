import { Component, OnInit } from '@angular/core';
import { PostService } from '../postservice/post.service';
import { Post } from '../model/Post';
import { ConfigApp } from '../model/ConfigApp';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  constructor(private postService: PostService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }
  postDetail: Post;
  relatedPost: Array<Post>;
  configApp = new ConfigApp();
  page: number;
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(param => {
      this.page = Number(param.get('post_id'));
      if (isNaN(this.page) || this.page !== parseInt(param.get('post_id') , 10)) {
        this.router.navigate(['welcome']);
        return;
      }
      this.postService.getPostDetail(this.configApp.url, param.get('post_id')).subscribe(
        (data) => {
          if (data.length === 0) {
            this.router.navigate(['welcome']);
            return;
          }
          this.postDetail = data[0];
        },
        err => {
          this.router.navigate(['welcome']);
          return;
        }
      );
      this.postService.getRelatedPost(this.configApp.url, param.get('post_id')).subscribe(
        (data) => { this.relatedPost = data; });
    });
  }

}
