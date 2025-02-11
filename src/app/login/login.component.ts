import { Component,Inject,OnInit, } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { StorageKeys } from "./../storage-constants";
import { ApiService } from "./../api.service";
import { LoginService } from "./../login.service";
import { LoaderService } from '../loader.service';
import { ResponseType } from '@microsoft/microsoft-graph-client';
import { HttpClient } from '@angular/common/http';
import { protectedResources } from '../auth-config';
import { MsalService, MsalBroadcastService, MSAL_GUARD_CONFIG, MsalGuardConfiguration } from '@azure/msal-angular';
import { AuthenticationResult, InteractionStatus, InteractionType, PopupRequest, RedirectRequest,EventMessage, EventType } from '@azure/msal-browser';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { GraphService, ProviderOptions } from '../graph.service';
import { map } from 'rxjs/operators';
import { PasswordResetComponent } from "../password-reset/password-reset.component";



@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  title = 'Microsoft identity platform';
  isIframe = false;
  loginDisplay = false;
  private readonly _destroying$ = new Subject<void>();
  microsoftSignInClicked: boolean = false;
  LoginForm: FormGroup;
  profilePicture: string;

  constructor(
    @Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration,
    private authService: MsalService,
    private msalBroadcastService: MsalBroadcastService,
    private formBuilder: FormBuilder,
    private log: LoginService,
    public dialog: MatDialog,
    private http: HttpClient,
    private router: Router,
    private snackbar: MatSnackBar,
    private API: ApiService,
    private loaderService: LoaderService,
    private graphService: GraphService,
    
  ) {
    this.loaderService.show();
    this.msalBroadcastService.msalSubject$
    .pipe(
      filter((msg: EventMessage) => msg.eventType === EventType.LOGIN_SUCCESS),
      takeUntil(this._destroying$)
    )
    .subscribe((result: EventMessage) => {
      console.log(result);
      const payload = result.payload as AuthenticationResult;
      this.authService.instance.setActiveAccount(payload.account);
    });
  
    this.msalBroadcastService.inProgress$
    .pipe(
      filter((status: InteractionStatus) => status === InteractionStatus.None)
    )
    .subscribe(() => {
      this.setLoginDisplay();
      this.checkAndSetActiveAccount();
      const activeAccount = this.authService.instance.getActiveAccount();
      const idTokenClaims = activeAccount ? activeAccount.idTokenClaims : null;
      this.getClaims(idTokenClaims);
     // this.getClaims(this.authService.instance.getActiveAccount()?.idTokenClaims);
  
    });
this.loaderService.hide();
  }

 ngOnInit(): void {
  
  // this.LoginForm = this.formBuilder.group({
  //   username: ["", [Validators.required]],
  //   password: ["", Validators.required]
  // });
  }

//   getProfile(providerOptions: ProviderOptions) {
//     this.graphService
//         .getGraphClient(providerOptions)
//         .api('/me/photo/$value')
//         .responseType(ResponseType.RAW)
//         .get()
//         .then((response: any) => {
//             if (response.status === 200) return response.json();
//             if (response.status === 401) {
//                 if (response.headers.get('WWW-Authenticate')) {
//                     this.graphService.handleClaimsChallenge(response, providerOptions);
//                 }
//             }
//         })
//         .then((profileResponse) => {
//             Object.entries(profileResponse).forEach((claim: [string, unknown]) => {
//               console.log("response from grapj", profileResponse)
//                 //this.dataSource = [...this.dataSource, { claim: claim[0], value: claim[1] }];
//             });
//         })
//         .catch((error: any) => {
//             console.log(error);
//         });
// }
getProfile(providerOptions: ProviderOptions) {
  this.graphService
    .getGraphClient(providerOptions)
    .api('/me/photo/$value')
    .responseType(ResponseType.RAW)
    .get()
    .then((response: any) => {
      if (response.status === 200) return response.blob();
      if (response.status === 401) {
        if (response.headers.get('WWW-Authenticate')) {
          this.graphService.handleClaimsChallenge(response, providerOptions);
        }
      }
    })
    .then((blob: Blob) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
       // console.log("Profile picture string:", base64String);
        this.profilePicture = base64String;
        this.API.set(StorageKeys.PROFILE, this.profilePicture);
        // Store the base64String value into a variable or perform any other operations
      };
      reader.readAsDataURL(blob);
    })
    .catch((error: any) => {
      console.log(error);
    });
}

  checkAndSetActiveAccount() {

    let activeAccount = this.authService.instance.getActiveAccount();

    if (!activeAccount && this.authService.instance.getAllAccounts().length > 0) {
      let accounts = this.authService.instance.getAllAccounts();
      this.authService.instance.setActiveAccount(accounts[0]);
    }
  }

  setLoginDisplay() {
    this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;
  }

  getClaims(claims: any) {
    if (claims && claims.preferred_username) {
      const alreadyLoggedIn = this.API.get('Attendance-token');
      if(!alreadyLoggedIn){
        this.loaderService.show();
        this.sendEmailToServer(claims.preferred_username);
      }
    
    } else {
      console.log("No claims available.");
    }
  }
  get fc() {
    return this.LoginForm.controls;
  }

  isMicrosoftSignInClicked(): boolean {
    return this.microsoftSignInClicked;
  }
 

  loginWithMicroSoft() {
    this.microsoftSignInClicked = true;
    this.loaderService.show();
    if (this.msalGuardConfig.interactionType === InteractionType.Popup) {
      if (this.msalGuardConfig.authRequest) {
        this.authService.loginPopup({ ...this.msalGuardConfig.authRequest } as PopupRequest)
          .subscribe((response: AuthenticationResult) => {
            this.authService.instance.setActiveAccount(response.account);
          });
      } else {
        this.authService.loginPopup()
          .subscribe((response: AuthenticationResult) => {
            this.authService.instance.setActiveAccount(response.account);
            //console.log("in microsoft login")
            this.API.set("isLoggedin", true);
            this.router.navigate(["/"]);
          });
      }
    } else {
      if (this.msalGuardConfig.authRequest) {
        this.authService.loginRedirect({ ...this.msalGuardConfig.authRequest } as RedirectRequest);
      } else {
        this.authService.loginRedirect();
      }
    }
  }



  sendEmailToServer(email: string) {
  this.loaderService.show();
  const providerOptions: ProviderOptions = {
    account: this.authService.instance.getActiveAccount()!,
    scopes: protectedResources.graphMe.scopes,
    interactionType: InteractionType.Redirect,
    endpoint: protectedResources.graphMe.endpoint,
};

this.getProfile(providerOptions);
//console.log("navigate is not happeining")
//this.router.navigate(['/']);
this.API.set("isLoggedin", true);
setTimeout(() => {
  this.router.navigate(["/"]);
  this.loaderService.hide(); // Hide loader after navigation
}, 500);
            //this.loaderService.hide();

        // this.log.loginWithMicrosoft(email).subscribe(
          
        //   res => {
        //     this.API.set(StorageKeys.TOKEN, res.accessToken, true);
        //     this.API.set(StorageKeys.USER, res);
        //     this.router.navigate(["/"]);
        //     this.loaderService.hide();
        //   },
        //   _err => {
        //     console.log("error", _err);
        //     this.snackbar.open(_err.error.message, null, {
        //       duration: 10 * 1000
        //     });
        //   }
        // );
      };
    
  

  // unsubscribe to events when component is destroyed
  ngOnDestroy(): void {
    this.loaderService.hide();
  this._destroying$.next(undefined);
  this._destroying$.complete();
  }

  // passwordReset() {
  //   var refCheckoutDialog = this.dialog.open(PasswordResetComponent ,{
  //     role: 'dialog',
  //     minWidth: 400,
  //     minHeight: 300
  //   });

  //   refCheckoutDialog.afterClosed().subscribe(res => {
  //     if(res.email == undefined){
  //       return
  //     }
  //       if(res.email != undefined)
  //       var postBody = {
  //         email: res.email
  //       }
  //         this.log.resetPassword(postBody).subscribe(
  //           res => {
  //             this.snackbar.open(res.message, null, {
  //               duration: 10 * 1000
  //             });
  //              console.log("res", res)
  //           },
  //           _err => {
  //             console.log("error", _err);
  //             this.snackbar.open(_err.error.message, null, {
  //               duration: 10 * 1000
  //             });
  //           }
  //         );
  //        });
  // }


  // login() {
  //   if (this.LoginForm.invalid) {
  //     return;
  //   }

  //   this.API.set(StorageKeys.FROM_LOGIN, true);
  //   this.log.loginV2(this.fc.username.value, this.fc.password.value).subscribe(
  //     res => {
  //       this.API.set(StorageKeys.TOKEN, res.accessToken, true);
  //       this.API.set(StorageKeys.USER, res);
  //       // this.API.set(StorageKeys.PERMISSIONS, res.permissions);
  //       // this.API.set(StorageKeys.COMPANY_NAME, res.companyName);
  //       // this.API.set(StorageKeys.HAS_DISTRIBUTIONS, res.hasDistributions);
  //       // this.API.set(StorageKeys.DOMAIN, res.domain);
  //       this.router.navigate(["/"]);
  //     },
  //     _err => {
  //       console.log("error", _err);
  //       this.snackbar.open(_err.error.message, null, {
  //         duration: 10 * 1000
  //       });
  //     }
  //   );
  // }
}
