import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { ManagerComponent } from './manager/manager.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { DetailComponent } from './detail/detail.component';
import { ConfigService } from './ConfigService';
import { LoginService } from '../app/login/login.service';
import { HttpModule } from '@angular/http';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ManagerComponent,
    MainpageComponent,
    DetailComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
  ],
  providers: [ConfigService , LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
