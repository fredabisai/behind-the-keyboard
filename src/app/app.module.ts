import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLoginComponent } from './login/admin-login/admin-login.component';
import { ExpertLoginComponent } from './login/expert-login/expert-login.component';
import { UserLoginComponent } from './login/user-login/user-login.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { AddQuestionComponent } from './posts/add-question/add-question.component';
import { ProfileComponent } from './common/profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './posts/post.service';
import { UserLoginService } from './login/user-login/user-login.service';
import { LoginGuard } from './login/login.guard';
import { UserRegisterComponent } from './user-register/user-register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    ExpertLoginComponent,
    UserLoginComponent,
    PostListComponent,
    NavbarComponent,
    AddQuestionComponent,
    ProfileComponent,
    UserRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      toastClass: 'toast toast-bootstrap-compatibility-fix'
    })
  ],
  providers: [PostService, UserLoginService, LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
