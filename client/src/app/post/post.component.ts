import { Component, OnInit, Input , Output , EventEmitter } from '@angular/core';
import { Post } from '../model/Post';
import { ConfigApp } from '../model/ConfigApp';
import { PostService } from '../postservice/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() Post: Array<Post>;
  @Output() PostDetailID = new EventEmitter<number>();
  @Input() isAdmin: boolean;
  @Output() EventPost = new EventEmitter<[string, number]>();
  @Output() backToManagerPost = new EventEmitter();
  configApp = new ConfigApp();

  constructor(private postService: PostService) { }

  ngOnInit() {}

  getPostId(id) {
    this.PostDetailID.emit(id);
  }

  getPostIdEdit(id: number) {
    this.EventPost.emit(['edit', id]);
  }

  getAddPostForm() {
    this.EventPost.emit(['add', 0]);
  }

  deletePostById(id) {
    this.postService.deletePost(this.configApp.url, id).subscribe((data) => {
      this.backToManagerPost.emit();
    });
  }

}
