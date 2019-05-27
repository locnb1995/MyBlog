import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config';
import { HeaderService } from './header.service';
import { PostType } from '../Model/PostType';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [HeaderService]
})
export class HeaderComponent implements OnInit {

  constructor(private configService: ConfigService,
              private headerService: HeaderService,
              private postTypeData: PostType) { }
  postTypeConstruct = this.postTypeData.postTypeConstruct;
  listPostType: {postTypeConstruct: any}[];
  ngOnInit() {
    this.headerService.getAllPostType(this.configService.url).subscribe((data) => {
      this.listPostType = data;
    });
  }

}
