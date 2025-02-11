import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { DataApiService } from '../data-api.service';
import { MatDialog } from '@angular/material';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-leave-remarks',
  templateUrl: './leave-remarks.component.html',
  styleUrls: ['./leave-remarks.component.scss']
})
export class LeaveRemarksComponent implements OnInit {
  leaveRemarksForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<LeaveRemarksComponent>,
    public dialog: MatDialog,
    public dataApi: DataApiService,
    public storageService: StorageService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.leaveRemarksForm = this.fb.group({
      remarks: ['']
    });

  }
  get fc() {
    return this.leaveRemarksForm.controls;
  }

  onSubmit() {
    this.dialogRef.close({
      remarks:  this.leaveRemarksForm.get('remarks').value,
    });
  }

}
