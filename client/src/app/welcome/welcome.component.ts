import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Post } from '../model/Post';
import { PostService } from '../postservice/post.service';
import { ConfigApp } from '../model/ConfigApp';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  page = '';
  ListPost: Array<Post>;
  configApp = new ConfigApp();
  pageNumber: number;
  constructor(private router: Router,
              private postService: PostService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    if (this.router.url.includes('welcome')) {
      this.page = 'post';
      this.postService.getAllPost(this.configApp.url).subscribe((data) => {
        this.ListPost = data;
      });
    }
    if (this.router.url.includes('detail')) {
      this.page = 'post-detail';
    }
    if (this.router.url.includes('postType')) {
      this.page = 'post-type';
      this.activatedRoute.paramMap.subscribe(param => {
        this.pageNumber = Number(param.get('type_id'));
        if (isNaN(this.pageNumber) || this.pageNumber !== parseInt(param.get('type_id'), 10)) {
          this.router.navigate(['welcome']);
          return;
        }
        this.ListPost = [];
        this.postService.getAllPost(this.configApp.url).subscribe((data) => {
          for (let i of data) {
            if (i.postType.id === this.pageNumber) {
              this.ListPost.push(i);
            }
          }
        });
      });
    }
    if (this.router.url.includes('hots')) {
      this.page = 'post-hots';
      this.postService.getAllPost(this.configApp.url).subscribe((data) => {
        data.sort((obj1, obj2) => {
          if (obj1.view_total > obj2.view_total) {
            return -1;
          }
          if (obj1.view_total < obj2.view_total) {
            return 1;
          }
          return 0;
        });
        this.ListPost = data;
      });
    }
  }

}
