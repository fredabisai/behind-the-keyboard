import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getPosts().subscribe(res => {
      console.log('Res', res.data);
    });
  }
}
