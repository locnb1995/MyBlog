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
  showEditPost = false;
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getAllPost(this.configApp.url).subscribe((data: Array<Post>) => {
      this.ListPost = data;
    });
  }

  redirectPage(page: [string, number]) {
    this.detailPage = false;
    if (page[0] === 'welcome') {
      this.postService.getAllPost(this.configApp.url).subscribe((data: Array<Post>) => {
        this.ListPost = data;
      });
    }
    if (page[0] === 'postByType') {
      this.ListPost = [];
      this.postService.getAllPost(this.configApp.url).subscribe((data: Array<Post>) => {
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
  myEventPost(eventPost: [string, number]) {
    if (eventPost[0] === 'edit') {
      this.detailPage = true;
      this.postService.getPostDetail(this.configApp.url , eventPost[1]).subscribe((data) => {
        this.showEditPost = true;
        this.PostDetail = data[0];
      });
    } else {
      this.detailPage = true;
      this.showEditPost = false;
    }
  }

  backToManager() {
    this.postService.getAllPost(this.configApp.url).toPromise().then((result: Array<Post>) => {
      this.ListPost = result;
      this.detailPage = false;
    });
  }

}
