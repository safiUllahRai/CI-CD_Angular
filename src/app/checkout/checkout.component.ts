import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  latitude: number;
  longitude: number;
  zoom:number;
  remarks: string;

  constructor(public dialogRef: MatDialogRef<CheckoutComponent>) { }

  ngOnInit() {
    if (navigator) {
      navigator.geolocation.getCurrentPosition(pos => {
        this.latitude = pos.coords.latitude;
        this.longitude = pos.coords.longitude;
        this.zoom = 15;
      });
    }
  }

  checkOut(){
    this.dialogRef.close({
      latitude: this.latitude,
      longitude: this.longitude,
      remarks: this.remarks
    });
  }

}
