import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoginService } from '../login/user-login/user-login.service';
import { HttpErrorResponse } from '@angular/common/http';
import { UserRegisterService } from './user-register.service';
import { ToastrService } from 'ngx-toastr';
import { PasswordValidation } from '../password-validation';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  registerForm: FormGroup;
  answers_open = false;
  error_msg = '';
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userLoginService: UserLoginService,
    private userRegisterService: UserRegisterService,
    private toastr: ToastrService
  ) {}
  ngOnInit() {
    this.registerForm = this.fb.group(
      {
        email: [
          null,
          Validators.compose([Validators.required, Validators.email])
        ],
        password: [null, Validators.required],
        confirm_password: [null, Validators.compose([Validators.required])]
      },
      {
        validator: PasswordValidation.MatchPassword // your validation method
      }
    );
  }
  onSubmit(form: NgForm) {
    console.log(form.value.email, form.value.password);
    if (form.value.email && form.value.password) {
      const data = { email: form.value.email, password: form.value.password };
      this.userRegisterService.registerUser(data).subscribe(
        res => {
          this.registerForm.reset();
          this.toastr.success('Registered successfully', 'Success');
          this.router.navigate(['/login/user']);
        },
        error1 => {
          this.toastr.error('Error on registering, Try again later!', 'Error');
        }
      );
    }
  }
  get f() {
    return this.registerForm.controls;
  }
}
