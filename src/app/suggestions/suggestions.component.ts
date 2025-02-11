import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataApiService } from 'src/app/data-api.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss']
})
export class SuggestionsComponent implements OnInit {
  feedbackForm: FormGroup;
  characterCount: number = 0;


  constructor(private fb: FormBuilder,
     private dataApi: DataApiService,
      private snackbar: MatSnackBar,
      private router: Router) {  
        this.feedbackForm = this.fb.group({
                 feedback: ['', [Validators.required, Validators.maxLength(250)]]
  }); }
  get user(): any {
    return JSON.parse(localStorage.getItem('Attendance-user'));
  };
  ngOnInit() {

  }
  get feedbackControl() {
    return this.feedbackForm.get('feedback');
  }
  updateCharacterCount(): void {
    this.characterCount = this.feedbackControl.value.length;
  }
submitFeedBack(){

  const userObj = JSON.parse(localStorage.getItem('Attendance-user'));

  let postBody = {
    email: userObj.email,
    comments: this.feedbackControl.value
  }
  console.log("post", postBody)
  this.dataApi.postSuggestions(postBody).subscribe(() => {
    this.snackbar.open('Your request has been successfully submitted.', null, {
      duration: 10 * 1000
    });

    this.router.navigate(['/']);

  },
  _err => {
    this.snackbar.open(_err.error.message, null, {
      duration: 10 * 1000
    });
  }
  );
}
}
