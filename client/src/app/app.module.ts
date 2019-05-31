import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PostComponent } from './post/post.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PostService } from './postservice/post.service';
import { PostPipe } from './post.pipe';
import { MenuComponent } from './menu/menu.component';
import { AdminComponent } from './admin/admin.component';
import { PostFormComponent } from './post-form/post-form.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    PostComponent,
    PostDetailComponent,
    PagenotfoundComponent,
    PostPipe,
    MenuComponent,
    AdminComponent,
    PostFormComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
