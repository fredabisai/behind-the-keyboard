import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from './login/admin-login/admin-login.component';
import { ExpertLoginComponent } from './login/expert-login/expert-login.component';
import { UserLoginComponent } from './login/user-login/user-login.component';

const routes: Routes = [
  {
    path: 'login',
    children: [
        {
            path: 'admin',
            component: AdminLoginComponent
        },
        {
            path: 'expert',
            component: ExpertLoginComponent
        },
        {
            path: 'user',
            component: UserLoginComponent
        }
    ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
