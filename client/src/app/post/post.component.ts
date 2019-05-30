import { Component, OnInit, Input , Output , EventEmitter } from '@angular/core';
import { Post } from '../model/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() Post: Array<Post>;
  @Output() PostDetailID = new EventEmitter<number>();
  @Input() isAdmin: boolean;
  constructor() { }

  ngOnInit() {}

  getPostId(id) {
    this.PostDetailID.emit(id);
  }

}
