import { Component, OnInit } from '@angular/core';
import { PostTypeService } from '../postTypeservice/post-type.service';
import { ConfigApp } from '../model/ConfigApp';
import { PostType } from '../model/PostType';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  configApp = new ConfigApp();
  postType: Array<PostType>;
  constructor(private postTypeService: PostTypeService) { }

  ngOnInit() {
    this.postTypeService.getAllPostType(this.configApp.url).subscribe((data) => {
      this.postType = data;
    });
  }

}
