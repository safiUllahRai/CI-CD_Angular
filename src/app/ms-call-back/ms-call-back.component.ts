// import { Component, OnInit } from '@angular/core';
// import { Subject } from 'rxjs';
// import { filter, takeUntil } from 'rxjs/operators';
// import { LoginService } from "./../login.service";
// import { LoaderService } from '../loader.service';
// import { MsalBroadcastService, MsalService } from '@azure/msal-angular';
// import { EventMessage, EventType, AuthenticationResult, InteractionStatus } from '@azure/msal-browser';

// @Component({
//   selector: 'app-ms-call-back',
//   templateUrl: './ms-call-back.component.html',
//   styleUrls: ['./ms-call-back.component.scss']
// })
// export class MsCallBackComponent implements OnInit {


//   loginDisplay = false;
//   private readonly _destroying$ = new Subject<void>();

//   constructor(private authService: MsalService, private msalBroadcastService: MsalBroadcastService, private log: LoginService,private loaderService: LoaderService) { }

//   ngOnInit(): void {
//     this.loaderService.show();
//     this.msalBroadcastService.msalSubject$
//       .pipe(
//         filter((msg: EventMessage) => msg.eventType === EventType.LOGIN_SUCCESS),
//         takeUntil(this._destroying$)
//       )
//       .subscribe((result: EventMessage) => {
//         console.log(result);
//         const payload = result.payload as AuthenticationResult;
//         this.authService.instance.setActiveAccount(payload.account);
//       });

//       this.msalBroadcastService.inProgress$
//       .pipe(
//         filter((status: InteractionStatus) => status === InteractionStatus.None)
//       )
//       .subscribe(() => {
//         this.setLoginDisplay();
//         this.checkAndSetActiveAccount();
//         const activeAccount = this.authService.instance.getActiveAccount();
//         console.log("actrivate account",activeAccount )
//         const idTokenClaims = activeAccount ? activeAccount.idTokenClaims : null;
//         this.getClaims(idTokenClaims);
//        // this.getClaims(this.authService.instance.getActiveAccount()?.idTokenClaims)
//       });
//   }

//   checkAndSetActiveAccount() {
//     /**
//      * If no active account set but there are accounts signed in, sets first account to active account
//      * To use active account set here, subscribe to inProgress$ first in your component
//      * Note: Basic usage demonstrated. Your app may require more complicated account selection logic
//      */
//     let activeAccount = this.authService.instance.getActiveAccount();

//     if (!activeAccount && this.authService.instance.getAllAccounts().length > 0) {
//       let accounts = this.authService.instance.getAllAccounts();
//       this.authService.instance.setActiveAccount(accounts[0]);
//     }
//   }

//   setLoginDisplay() {
//     this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;
//   }

//   getClaims(claims: any) {
// console.log("claims call from aouth", claims)
// this.sendEmailToServer(claims.preferred_username)
//   }

//   ngOnDestroy(): void {
//     this._destroying$.next(undefined);
//     this._destroying$.complete();
//   }
//   sendEmailToServer(email: string) {
//     // Make an HTTP request to your API server with the email parameter
//   // this.log.loginWithMicrosoft(email).subscribe(
//   //     response => {
//   //       console.log('Email sent successfully:', response);
//   //       // Handle the response as needed
//   //     },
//   //     error => {
//   //       this.loaderService.hide();
//   //       console.error('Error sending email:', error);
//   //       // Handle the error appropriately
//   //     }
//   //   );
//   }
  
// }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { LoginService } from "./../login.service";
import { LoaderService } from '../loader.service';
import { MsalBroadcastService, MsalService } from '@azure/msal-angular';
import { EventMessage, EventType, AuthenticationResult, InteractionStatus } from '@azure/msal-browser';

@Component({
  selector: 'app-ms-call-back',
  templateUrl: './ms-call-back.component.html',
  styleUrls: ['./ms-call-back.component.scss']
})
export class MsCallBackComponent implements OnInit {

  private readonly _destroying$ = new Subject<void>();

  constructor(
    private authService: MsalService,
    private msalBroadcastService: MsalBroadcastService,
    private log: LoginService,
    private loaderService: LoaderService,
    private router: Router // Added for navigation
  ) { }

  ngOnInit(): void {
    this.loaderService.show();

    // Handle login success
    this.msalBroadcastService.msalSubject$
      .pipe(
        filter((msg: EventMessage) => 
          msg.eventType === EventType.LOGIN_SUCCESS ||
          msg.eventType === EventType.ACQUIRE_TOKEN_SUCCESS
        ),
        takeUntil(this._destroying$)
      )
      .subscribe((result: EventMessage) => {
        const payload = result.payload as AuthenticationResult;
        this.authService.instance.setActiveAccount(payload.account);
      });

    // Handle errors
    this.msalBroadcastService.msalSubject$
      .pipe(
        filter((msg: EventMessage) => 
          msg.eventType === EventType.LOGIN_FAILURE ||
          msg.eventType === EventType.ACQUIRE_TOKEN_FAILURE
        ),
        takeUntil(this._destroying$)
      )
      .subscribe((result: EventMessage) => {
        console.error('Authentication error:', result);
        this.loaderService.hide();
        this.router.navigate(['/login']); // Redirect to login on error
      });

    // Handle interaction completion
    this.msalBroadcastService.inProgress$
      .pipe(
        filter((status: InteractionStatus) => status === InteractionStatus.None)
      )
      .subscribe(() => {
        this.checkAndSetActiveAccount();
        const activeAccount = this.authService.instance.getActiveAccount();
        
        if (activeAccount) {
          const idTokenClaims = activeAccount.idTokenClaims;
        //  this.sendEmailToServer(idTokenClaims?.preferred_username);
        } else {
          this.loaderService.hide();
          this.router.navigate(['/login']);
        }
      });
  }

  private checkAndSetActiveAccount(): void {
    const accounts = this.authService.instance.getAllAccounts();
    if (accounts.length > 0) {
      this.authService.instance.setActiveAccount(accounts[0]);
    }
  }

  private sendEmailToServer(email: string | undefined): void {
    // if (!email) {
    //   console.error('No email found in token claims');
    //   this.loaderService.hide();
    //   this.router.navigate(['/login']);
    //   return;
    // }

    // this.log.loginWithMicrosoft(email).subscribe({
    //   next: (response) => {
    //     console.log('Server authentication successful:', response);
    //     this.loaderService.hide();
        
    //     // Store any server-returned tokens here
    //     // Example: localStorage.setItem('app_token', response.token);
        
    //     // Redirect to main application
    //     this.router.navigate(['/dashboard']);
    //   },
    //   error: (err) => {
    //     console.error('Server authentication failed:', err);
    //     this.loaderService.hide();
    //     this.router.navigate(['/login']);
    //   }
    // });
  }

  ngOnDestroy(): void {
    this._destroying$.next(undefined);
    this._destroying$.complete();
  }
}