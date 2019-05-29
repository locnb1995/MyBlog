import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
    { path: 'welcome', component: WelcomeComponent },
    { path: 'post', component: WelcomeComponent },
    { path: 'detail/:post_id', component: WelcomeComponent },
    { path: 'postType/:type_id', component: WelcomeComponent },
    { path: 'hots', component: WelcomeComponent },
    {
        path: '',
        redirectTo: '/welcome',
        pathMatch: 'full'
    },
    { path: '**', component: PagenotfoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
