import { Component, OnInit , Input , Output , EventEmitter } from '@angular/core';
import { Post } from '../model/Post';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  @Input() PostDetail: Post;
  @Input() RelatedPost: Array<Post>;
  @Output() RelatedPostID = new EventEmitter<number>();

  constructor() { }
  ngOnInit() {}

  getRelatedPostId(id) {
    this.RelatedPostID.emit(id);
  }
}
