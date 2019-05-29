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
  detailPage = false;
  ListPost: Array<Post>;
  PostDetail: Post;
  RelatedPost: Array<Post>;
  configApp = new ConfigApp();
  constructor(private router: Router,
              private postService: PostService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.postService.getAllPost(this.configApp.url).subscribe((data) => {
      this.ListPost = data;
    });
  }
  getPostDetailId(id) {
    this.detailPage = true;
    this.postService.getPostDetail(this.configApp.url , id).subscribe((data) => {
      this.PostDetail = data[0];
    });
    this.postService.getRelatedPost(this.configApp.url , id).subscribe((data) => {
      this.RelatedPost = data;
    });
  }
  getRelatedPostID(id) {
    this.postService.getPostDetail(this.configApp.url , id).subscribe((data) => {
      this.PostDetail = data[0];
    });
    this.postService.getRelatedPost(this.configApp.url , id).subscribe((data) => {
      this.RelatedPost = data;
    });
  }
  redirectPage(page: [string, number]) {
    this.detailPage = false;
    if (page[0] === 'welcome') {
      this.postService.getAllPost(this.configApp.url).subscribe((data) => {
        this.ListPost = data;
      });
    }
    if (page[0] === 'postByType') {
      this.ListPost = [];
      this.postService.getAllPost(this.configApp.url).subscribe((data) => {
        for (const i of data) {
          if (i.postType.id === page[1]) {
            this.ListPost.push(i);
          }
        }
      });
    }
    if (page[0] === 'hots') {
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
