import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { DetailComponent } from './detail/detail.component';
import { HotnewsComponent } from './hotnews/hotnews.component';
import { PostbytypeComponent } from './postbytype/postbytype.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AppRoutingModule } from './app-routing.module';
import { ConfigService } from './config';
import { HttpModule } from '@angular/http';
import { Post } from './Model/Post';
import { PostType } from './Model/PostType';
import { CategoryComponent } from './category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    DetailComponent,
    HotnewsComponent,
    PostbytypeComponent,
    HeaderComponent,
    FooterComponent,
    PagenotfoundComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
// tslint:disable-next-line: deprecation
    HttpModule,
  ],
  providers: [ConfigService, Post, PostType],
  bootstrap: [AppComponent]
})
export class AppModule { }
