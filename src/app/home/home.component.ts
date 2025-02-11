import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { DataApiService } from '../data-api.service';
import { StorageService } from '../storage.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  coordinates: any[] = [
    //{latitude:31.4998784, longitude: 74.2981632},
    { latitude: 24.869063385209635, longitude: 67.08215498444576 }, // Coordinate 1
    { latitude: 31.47581, longitude: 74.3427233 }, // Coordinate 2
    { latitude: 33.6847056, longitude: 72.983932 }, // Coordinate 3
    { latitude: 31.443602552054166, longitude: 74.31902075089425 }  // Coordinate 4
  ];



  hasCheckedIn: boolean = false;
  roles: any;
  userHistory: any;
  base64Image: string;

  

   
  constructor(
    public dialog: MatDialog,
    public dataApi: DataApiService,
    public snackbar: MatSnackBar,
    public storageService: StorageService
  ) {
   

  }

  get user(): any {
    return JSON.parse(localStorage.getItem('Attendance-user'));
  };

  ngOnInit() {
    this.getProfilePicture()
   // this.hasCheckedIn = this.storageService.hasUserCheckedIn();
   // const userObj = JSON.parse(localStorage.getItem('Attendance-user'));
  
  }
  openWhatsAppChat() {
    const phoneNumber = '03018255927'; // Replace with your WhatsApp number (without + or 00)
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  }
  getProfilePicture(){
    setTimeout(() => {    
      const getImage = JSON.parse(localStorage.getItem('Attendance-Profile'))
    this.base64Image = getImage
    }, 3000);

   setTimeout(() => {
    if(!this.base64Image){
      this.base64Image = 'data:image/jpeg;base64,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'
     }
  }, 3000);
  }

  // calculateDistance(lat1, lon1, lat2, lon2) {
  //   const R = 6371; // Radius of the earth in kilometers
  //   const dLat = this.deg2rad(lat2 - lat1);
  //   const dLon = this.deg2rad(lon2 - lon1);
  //   const a =
  //     Math.sin(dLat / 2) * Math.sin(dLat / 2) +
  //     Math.cos(this.deg2rad(lat1)) *
  //       Math.cos(this.deg2rad(lat2)) *
  //       Math.sin(dLon / 2) *
  //       Math.sin(dLon / 2);
  //   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  //   const d = R * c; // Distance in kilometers
  //   const meterConversion = 1000; // Convert distance to meters
  //   return d * meterConversion;
  // }

  // deg2rad(deg) {
  //   return deg * (Math.PI / 180);
  // }


// checkIn() {

//   if ('geolocation' in navigator) {
//     navigator.geolocation.getCurrentPosition((position) => {
//       const userLatitude = position.coords.latitude;
//       const userLongitude = position.coords.longitude;

//       for (const coordinate of this.coordinates) {
//         const distance = this.calculateDistance(
//           userLatitude,
//           userLongitude,
//           coordinate.latitude,
//           coordinate.longitude
//         );

//         if (distance <= 500) {
//           console.log('User is within 500 meters of a coordinate.');
//           const userObj = JSON.parse(localStorage.getItem('Attendance-user'));
//           const model = {
//             userName: userObj.name,
//             userEmail: userObj.email,
//             type: 1,
//             latitude: userLatitude,
//             longitude: userLongitude,
//             appTimeStamp: new Date(),
//             remarks: "",
//             remoteType: 'Office',
//           };
//           this.dataApi.postCheckInStatus(model).subscribe(
//             res => {
//               this.snackbar.open('You have checked in successfully.', null, {
//                 duration: 10 * 1000
//               });
//               this.hasCheckedIn = true;
//               this.storageService.addUserCheckIn();
//             },
//             _err => {
//               this.snackbar.open(_err.error.message, null, {
//                 duration: 10 * 1000
//               });
//             }
//           );
//           // Perform the check-in action here
//           return;
//         }
//       }

//       console.log('User is not within 500 meters of any coordinate.');
//       // Perform the action when user is outside the geofence here
//       var refLocationDialog = this.dialog.open(LocationComponent, {
//         role: 'dialog',
//         minWidth: 350,
//         minHeight: 350
//       });
  
//       refLocationDialog.afterClosed().subscribe(res => {
//         if (res != null) {
//           var refRemoteDialog = this.dialog.open(LocationApprovalComponent, {
//             role: 'dialog',
//             minWidth: 350,
//             minHeight: 350
//           });
  
//           refRemoteDialog.afterClosed().subscribe(res => {
//             if (res == null) {
//               return;
//             }
//            if (!res.latitude || !res.longitude ){
//             this.snackbar.open('Unable to detect your location.Make sure you turn on the location', null, {
//               duration: 10 * 1000
//             });
//             return;
//            }
//             const userObj = JSON.parse(localStorage.getItem('Attendance-user'));
//             const model = {
//               userName: userObj.name,
//               userEmail: userObj.email,
//               type: 1,
//               latitude: res.latitude,
//               longitude: res.longitude,
//               appTimeStamp: new Date(),
//               remarks: res.remarks,
//               remoteType: res.remoteType,
//             };
//             this.dataApi.postCheckInStatus(model).subscribe(
//               res => {
//                 this.snackbar.open('You have checked in successfully.', null, {
//                   duration: 10 * 1000
//                 });
//                 this.hasCheckedIn = true;
//                 this.storageService.addUserCheckIn();
//               },
//               _err => {
//                 this.snackbar.open(_err.error.message, null, {
//                   duration: 10 * 1000
//                 });
//               }
//             );
//           });
//         }
//       });
//     });
//   } else {
//     console.log('Geolocation is not supported by this browser.');
//   }




//   }
// checkOut() {
//     var refCheckoutDialog = this.dialog.open(CheckoutComponent, {
//       role: 'dialog',
//       minWidth: 400,
//       minHeight: 400
//     });

//     refCheckoutDialog.afterClosed().subscribe(res => {
//       if (res == null) {
//         return;
//       }
//       if (!res.latitude || !res.longitude ){
//         this.snackbar.open('Unable to detect your location.Make sure you turn on the location', null, {
//           duration: 10 * 1000
//         });
//         return;
//        }
//       const userObj = JSON.parse(localStorage.getItem('Attendance-user'));

//       const model = {
//         userName: userObj.name,
//         userEmail: userObj.email,
//         type: 2,
//         latitude: res.latitude,
//         longitude: res.longitude,
//         appTimeStamp: new Date(),
//         remarks: "Check-Out",
//         remoteType: ""
//       };

//       this.dataApi.postCheckInStatus(model).subscribe(
//         res => {
//           this.snackbar.open('You have checked out successfully.', null, {
//             duration: 10 * 1000
//           });

//           this.hasCheckedIn = false;
//           this.storageService.addUserCheckout();
//         },
//         _err => {
//           this.snackbar.open(_err.error.message, null, {
//             duration: 10 * 1000
//           });
//         }
//       );
//     });
//   }
openTeamsChat() {
  window.open('https://teams.microsoft.com/l/chat/0/0?users=hr@tmcltd.com', '_blank');
}

}
