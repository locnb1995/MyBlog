import { Component, OnInit , Output , EventEmitter } from '@angular/core';
import { PostTypeService } from '../postTypeservice/post-type.service';
import { ConfigApp } from '../model/ConfigApp';
import { PostType } from '../model/PostType';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Output() redirect = new EventEmitter<[string, number]>();

  configApp = new ConfigApp();
  postType: Array<PostType>;
  constructor(private postTypeService: PostTypeService) { }

  ngOnInit() {
    this.postTypeService.getAllPostType(this.configApp.url).subscribe((data) => {
      this.postType = data;
    });
  }

  redirectHot() {
    this.redirect.emit(['hots', 0]);
  }

  redirectWelcome() {
    this.redirect.emit(['welcome', 0]);
  }

  redirectPostByType(typeId) {
    this.redirect.emit(['postByType', typeId]);
  }

}
