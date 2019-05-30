import { Component, OnInit , Input , Output , EventEmitter } from '@angular/core';
import { Post } from '../model/Post';
import { PostType } from '../model/PostType';
import { Member } from '../model/Member';
import { PostTypeService } from '../postTypeservice/post-type.service';
import { PostService } from '../postservice/post.service';
import { MemberService } from '../memberservice/member.service';
import { ConfigApp } from '../model/ConfigApp';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  @Input() eventEditPost: boolean;
  @Input() PostDetail: Post;
  @Output() redirectToManager = new EventEmitter();
  listPostType: Array<PostType>;
  configApp = new ConfigApp();
  postHandling = new Post();
  member: Member;
  type: PostType;
  constructor(private postTypeService: PostTypeService,
              private memberService: MemberService,
              private postService: PostService,
              private router: Router) { }

  ngOnInit() {
    this.postTypeService.getAllPostType(this.configApp.url).subscribe((data: Array<PostType>) => {
      this.listPostType = data;
    });
    this.memberService.getAllMember(this.configApp.url).toPromise().then(result => {
      this.member = result[0];
    });
  }

  onAddPost(post) {
    this.type = this.listPostType.find(x => x.id === post.value.type);
    this.postHandling.title = post.value.title;
    this.postHandling.description = post.value.description;
    this.postHandling.detail = post.value.detail;
    this.postHandling.postType = this.type;
    this.postHandling.member = this.member;
    this.postHandling.image = '';
    this.postService.createPost(this.configApp.url, this.postHandling).subscribe((data) => {});
    this.redirectToManager.emit();
  }

}
