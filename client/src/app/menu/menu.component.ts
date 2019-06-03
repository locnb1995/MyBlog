import { Component, OnInit , Output , EventEmitter, Input } from '@angular/core';
import { PostTypeService } from '../postTypeservice/post-type.service';
import { ConfigApp } from '../model/ConfigApp';
import { PostType } from '../model/PostType';
import { LoginService } from '../loginservice/login.service';
import { Member } from '../model/Member';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Output() redirect = new EventEmitter<[string, number]>();
  @Input() isAdmin: boolean;

  configApp = new ConfigApp();
  postType: Array<PostType>;
  member = new Member();
  constructor(private postTypeService: PostTypeService,
              private loginService: LoginService,
              private router: Router) { }

  ngOnInit() {
    this.loginService.getUserInfo().subscribe((data: Array<Member>) => {
      this.member = data[0];
    });
    this.postTypeService.getAllPostType(this.configApp.url).subscribe((data: Array<PostType>) => {
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

  logout() {
    this.loginService.logout().subscribe(data => {});
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
