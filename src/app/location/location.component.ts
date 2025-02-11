import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  latitude: number;
  longitude: number;
  zoom: number;

  constructor(public dialogRef: MatDialogRef<LocationComponent>) { }


  // checkGeolocation() {
  //   if ('geolocation' in navigator) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         const accuracyThreshold = 20; // Define your accuracy threshold here

  //         if (position.coords.accuracy <= accuracyThreshold) {
  //           // Check if additional properties indicate a mocked position (if available)
  //           if (!position.mocked) {
  //             // Position is likely not mocked, use it
  //             const userLat = position.coords.latitude;
  //             const userLon = position.coords.longitude;

  //             // Further logic...
  //           } else {
  //             // Position is mocked
  //             console.log("You are using a fake GPS location.");
  //           }
  //         } else {
  //           // Position accuracy is above the threshold, potentially fake
  //           console.log("Position accuracy is too high, might be fake.");
  //         }
  //       },
  //       (error) => {
  //         console.error('Error retrieving geolocation:', error);
  //       }
  //     );
  //   } else {
  //     console.log('Geolocation not available');
  //   }
  // }

  ngOnInit() {

    // navigator.permissions.query({ name: 'geolocation' }).then((result) => {
    //   if (result.state === 'granted') {
    //    console.log("geo location permission granted", result.state)
    //   } else if (result.state === 'prompt') {
    //     console.log("prompt", result.state )
    //   } else if (result.state === 'denied') {
    //     console.log("denied", result.state )
    //   }
    // });

    // const options: PositionOptions = {
    //   enableHighAccuracy: true, // Request higher accuracy if available
    //   timeout: 10000, // Set a timeout in milliseconds
    // };
    
    // navigator.geolocation.getCurrentPosition(
    //   (position) => {
    //     this.latitude = position.coords.latitude;
    //     this.longitude = position.coords.longitude;
    //     this.zoom = 15;
    //     console.log('Latitude:', this.latitude);
    //     console.log('Longitude:', this.longitude);
    //     // Success, obtain and use the coordinates from position.coords
    //   },
    //   (error) => {
    //     // Handle geolocation error
    //     console.error('Geolocation error:', error);
    //   },
    //   options // Pass the options parameter
    // );




    if (navigator) {
      // navigator.geolocation.getCurrentPosition(pos => {
      //   this.latitude = pos.coords.latitude;
      //   this.longitude = pos.coords.longitude;
      //   this.zoom = 15;
      // });

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            this.latitude = position.coords.latitude;
            this.longitude = position.coords.longitude;
            this.zoom = 15;
            // if (this.latitude >= -90 && this.latitude <= 90 && this.longitude >= -180 && this.longitude <= 180) {
            //   console.log("Data is within valid range, send to server")
            //   // Data is within valid range, send to server
            //   // Code to send data to the server
            // }
            // console.log('Latitude:', this.latitude);
            // console.log('Longitude:', this.longitude);
          },
          (error) => {
            console.error('Error getting device location:', error);
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    }
  }


 

  checkIn() {
    this.dialogRef.close({
      latitude: this.latitude,
      longitude: this.longitude,
    });
  }
}
