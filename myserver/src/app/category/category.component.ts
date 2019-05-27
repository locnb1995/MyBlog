import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config';
import { CategoryService } from './category.service';
import { Post } from '../Model/Post';
import { ActivatedRoute , Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService]
})
export class CategoryComponent implements OnInit {

  constructor(private configService: ConfigService,
              private categoryService: CategoryService,
              private postData: Post,
              private router: Router,
              private activateRoute: ActivatedRoute) { }
  postConstruct = this.postData.postConstruct;
  listPost: {postConstruct: any}[];
  ngOnInit() {
    this.activateRoute.paramMap.subscribe(param => {
      this.categoryService.getPostByTypeId(this.configService.url , param.get('type_id')).subscribe((data) => {
        if (data.length === 0) {
          this.router.navigate(['list']);
          return;
        }
        this.listPost = data;
      });
    });
  }

}
