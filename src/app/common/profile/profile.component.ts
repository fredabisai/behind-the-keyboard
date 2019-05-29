import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user_type = null;
  user_info = null;

  constructor() {}

  ngOnInit() {
    this.settings();
  }
  settings() {
    this.user_type = sessionStorage.getItem('user_type');

    this.user_info = JSON.parse(sessionStorage.getItem('user_data'));
    console.log('User type', this.user_info.email);
  }
}
