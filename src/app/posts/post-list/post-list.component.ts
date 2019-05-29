import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  user_info = null;
  user_type = null;
  questions = null;
  constructor(private postService: PostService) {}

  ngOnInit() {
    this.user_info = this.checkUserLogin();
    this.user_type = sessionStorage.getItem('user_type');
    this.postService.getPosts().subscribe(res => {
      console.log('Res', res.data);
      this.questions = res.data;
    });
  }
  checkUserLogin() {
    const info = sessionStorage.getItem('user_data');
    if (info) {
      return JSON.parse(sessionStorage.getItem('login_credentials'));
    }
    return null;
  }
}
