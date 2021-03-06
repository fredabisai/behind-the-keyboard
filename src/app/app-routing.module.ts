import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from './login/admin-login/admin-login.component';
import { ExpertLoginComponent } from './login/expert-login/expert-login.component';
import { UserLoginComponent } from './login/user-login/user-login.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { ProfileComponent } from './common/profile/profile.component';
import { LoginGuard } from './login/login.guard';
import { UserRegisterComponent } from './user-register/user-register.component';

const routes: Routes = [
  {
    path: '',
    component: PostListComponent
  },
  {
    path: 'profile',
    canActivate: [LoginGuard],
    component: ProfileComponent
  },
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
  {
    path: 'register',
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
        component: UserRegisterComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
