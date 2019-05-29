import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { PostService } from '../post.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  questionForm: FormGroup;
  user_info = null;
  constructor(private fb: FormBuilder, private postService: PostService) {}

  ngOnInit() {
    this.user_info = this.getUserInfo();
    this.questionForm = this.fb.group({
      question: [null, Validators.compose([Validators.required])]
    });
  }
  getUserInfo() {
    if (sessionStorage.getItem('user_data')) {
      return JSON.parse(sessionStorage.getItem('user_data'));
    }
    return null;
  }
  get f() {
    return this.questionForm.controls;
  }
  onSubmit(form: NgForm) {
    if (form.value.question) {
      const data = { user_id: this.user_info.id, content: form.value.question };

      this.postService.addQuestion(data).subscribe(res => {
        console.log(res);
      });
    }
  }
}
