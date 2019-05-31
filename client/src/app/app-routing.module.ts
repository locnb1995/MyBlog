import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    { path: 'welcome', component: WelcomeComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'login', component: LoginComponent },
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
