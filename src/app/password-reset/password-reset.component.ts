import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent implements OnInit {

  email: any;

  constructor(public dialogRef: MatDialogRef<PasswordResetComponent>) { }

  ngOnInit() {
  }
  submit(){
  
    this.dialogRef.close({
     email: this.email
    });
  }
}
