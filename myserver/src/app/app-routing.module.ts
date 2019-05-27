import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DetailComponent } from './detail/detail.component';
import { CategoryComponent } from './category/category.component';
import { HotnewsComponent } from './hotnews/hotnews.component';

const routes: Routes = [
  { path: 'list', component: MainpageComponent },
  { path: 'detail/:post_id', component: DetailComponent },
  { path: 'category/:type_id', component: CategoryComponent },
  { path: 'hotnews', component: HotnewsComponent },
  { path: '',
    redirectTo: '/list',
    pathMatch: 'full'
  },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
