import { Component, OnInit } from '@angular/core';
import { Post } from '../model/Post';
import { PostService } from '../postservice/post.service';
import { ConfigApp } from '../model/ConfigApp';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  detailPage = false;
  ListPost: Array<Post>;
  configApp = new ConfigApp();
  PostDetail: Post;
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getAllPost(this.configApp.url).subscribe((data) => {
      this.ListPost = data;
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
  }

  getPostDetailId(id: number) {
    this.detailPage = true;
    this.postService.getPostDetail(this.configApp.url , id).subscribe((data) => {
      this.PostDetail = data[0];
    });
  }

}
