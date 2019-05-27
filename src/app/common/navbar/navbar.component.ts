import { Component, OnInit, DoCheck } from '@angular/core';
import { UserLoginService } from 'src/app/login/user-login/user-login.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, DoCheck {
  isLoggedIn: boolean;
  login_data: null;
  constructor(
    private userLoginService: UserLoginService,
    private router: Router
  ) {}

  ngOnInit() {}
  ngDoCheck(): void {
    if (sessionStorage.getItem('login_credentials')) {
      this.login_data = JSON.parse(sessionStorage.getItem('login_credentials'));
      this.isLoggedIn = true;
    }
    // this.userLoginService.loggerItem.subscribe(res => {
    //   this.isLoggedIn = res;
    //   console.log('Status', res);
    // });
  }
  logOut() {
    // this.userLoginService.changeLoginStatus(false);
    sessionStorage.removeItem('login_credentials');
    sessionStorage.removeItem('token');
    window.location.reload();
  }
}
