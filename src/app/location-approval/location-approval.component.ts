import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { DataApiService } from '../data-api.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-location-approval',
  templateUrl: './location-approval.component.html',
  styleUrls: ['./location-approval.component.scss']
})
export class LocationApprovalComponent implements OnInit {
  latitude: number;
  longitude: number;
  zoom: number;
  remarks: any;
  remoteLocationForm: FormGroup;
  typeLocation: any;
  constructor(
    public dialogRef: MatDialogRef<LocationApprovalComponent>,
    public dialog: MatDialog,
    public dataApi: DataApiService,
    public snackbar: MatSnackBar,
    public storageService: StorageService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    if (navigator) {
      navigator.geolocation.getCurrentPosition(pos => {
        this.latitude = pos.coords.latitude;
        this.longitude = pos.coords.longitude;
        this.zoom = 15;
      });
    }
    this.remoteLocationForm = this.fb.group({
      locationType: ['', Validators.required],
      remarks: ['']
    });
  }
  onSubmit() {

    this.typeLocation = this.remoteLocationForm.get('locationType').value;
     this.remarks = this.remoteLocationForm.get('remarks').value;
console.log(this.remarks)
    if (this.typeLocation === 'Client Visit') {
      if (this.remarks === ""){
        this.snackbar.open(
          'Remarks are mandatory',
          null,
          {
            duration: 10 * 1000
          }
        );
        return;
      }
    }

    if (this.remoteLocationForm.invalid) {
      this.snackbar.open(
        'Please select location from where you are checking in.',
        null,
        {
          duration: 10 * 1000
        }
      );
      return;
    }

    this.dialogRef.close({
      remarks: this.remoteLocationForm.get('remarks').value,
      latitude: this.latitude,
      longitude: this.longitude,
      remoteType: this.remoteLocationForm.get('locationType').value
    });
  }
}
