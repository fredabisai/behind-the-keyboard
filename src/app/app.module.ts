import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './login/admin-login/admin-login.component';
import { ExpertLoginComponent } from './login/expert-login/expert-login.component';
import { UserLoginComponent } from './login/user-login/user-login.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    ExpertLoginComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
