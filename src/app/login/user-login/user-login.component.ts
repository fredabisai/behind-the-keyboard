import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoginService } from './user-login.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  loginForm: FormGroup;
  answers_open = false;
  error_msg = '';
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userLoginService: UserLoginService
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [
        null,
        Validators.compose([Validators.required, Validators.email])
      ],
      password: [null, Validators.required]
    });
  }
  onSubmit(form: NgForm) {
    if (form.value.email && form.value.password) {
      this.userLoginService.login(form.value).subscribe(
        (res: any) => {
          const credentials = { login_status: 'true', token: res.token };
          sessionStorage.setItem(
            'login_credentials',
            JSON.stringify(credentials)
          );
          sessionStorage.setItem('user_data', JSON.stringify(res.data));
          this.userLoginService.changeLoginStatus(true);
          this.router.navigate(['/']);
        },
        (err: HttpErrorResponse) => {
          // this.spinner.hide();
          console.log('Error:', err.error.success);
          if (err.error.success === 'false') {
            this.error_msg = 'IsInvalidError';
          } else {
            this.error_msg = 'NetworkError';
          }
        }
      );
    }
  }
  get f() {
    return this.loginForm.controls;
  }
}
