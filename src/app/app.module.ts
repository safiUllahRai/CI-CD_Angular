import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material';
import { GridModule } from '@progress/kendo-angular-grid';
import { AgmCoreModule } from '@agm/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LocationComponent } from './location/location.component';
import { IPublicClientApplication, PublicClientApplication, InteractionType, } from '@azure/msal-browser';
import { MsalGuard, MsalBroadcastService, MsalModule, MsalService, MSAL_GUARD_CONFIG, MSAL_INSTANCE, MsalGuardConfiguration, MsalRedirectComponent,MsalInterceptorConfiguration, MSAL_INTERCEPTOR_CONFIG } from '@azure/msal-angular';


import { HttpModule } from '@angular/http';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { NewRequestComponent } from './new-request/new-request.component';
import { TeamLogsComponent } from './team-logs/team-logs.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AttendanceLogComponent } from './attendance-log/attendance-log.component';
import { NewReqFromTimeLogsComponent } from './new-req-from-time-logs/new-req-from-time-logs.component';
import { LeaveRemarksComponent } from './leave-remarks/leave-remarks.component';
import { GetManagerEmailsComponent } from './get-manager-emails/get-manager-emails.component';
import { AllRequestsComponent } from './all-requests/all-requests.component';
import { ManagerEmployeesComponent } from './manager-employees/manager-employees.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { LeaveApprovalComponent } from './leave-approval/leave-approval.component';
import { LoginComponent } from './login/login.component';
import { MissedAttendanceFromTimeLogsComponent } from './missed-attendance-from-time-logs/missed-attendance-from-time-logs.component';
import { LocationApprovalComponent } from './location-approval/location-approval.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoaderComponent } from './loader/loader.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { MissedAttendanceComponent } from './missed-attendance/missed-attendance.component';
import { AllTeamLogsComponent } from './all-team-logs/all-team-logs.component';
import { DataApiService } from './data-api.service';
import { StorageService } from './storage.service';
import { LoaderService } from './loader.service';
import { AuthGuard } from './auth/auth.guard';
import { LoginService } from './login.service';
import { GraphService } from './graph.service';
import { MsCallBackComponent } from './ms-call-back/ms-call-back.component';
import { ApiService } from './api.service';
import { HttpClientService } from './http-client.service';
import { ProgressInterceptorService } from './progress-interceptor.service';
import { DesignModule } from './design.module';
import { msalConfig, loginRequest, protectedResources } from './auth-config';
import { getClaimsFromStorage } from './utils/storage-utils';



export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication(msalConfig);
}
export function MSALGuardConfigFactory(): MsalGuardConfiguration {
  return { 
    interactionType: InteractionType.Redirect,
    authRequest: loginRequest
  };
}
export function MSALInterceptorConfigFactory(): MsalInterceptorConfiguration {
  const protectedResourceMap = new Map<string, Array<string>>();

  protectedResourceMap.set(protectedResources.graphMe.endpoint, protectedResources.graphMe.scopes);
  //protectedResourceMap.set(protectedResources.graphContacts.endpoint, protectedResources.graphContacts.scopes);

  return {
      interactionType: InteractionType.Redirect,
      protectedResourceMap,
      authRequest: (msalService, httpReq, originalAuthRequest) => {
          const resource = new URL(httpReq.url).hostname;
          let claim =
              msalService.instance.getActiveAccount()! &&
                  getClaimsFromStorage(
                      `cc.${msalConfig.auth.clientId}.${msalService.instance.getActiveAccount().idTokenClaims.oid
                      }.${resource}`
                  )
                  ? window.atob(
                      getClaimsFromStorage(
                          `cc.${msalConfig.auth.clientId}.${msalService.instance.getActiveAccount().idTokenClaims.oid
                          }.${resource}`
                      )
                  )
                  : undefined; // claims challenge e.g {"access_token":{"xms_cc":{"values":["cp1"]}}}
          return {
              ...originalAuthRequest,
              claims: claim,
          };
      },
  };
}

export const DateFormat = {
  parse: {
    dateInput: 'input'
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'MM/DD/YYYY',
    monthYearA11yLabel: 'MMMM YYYY'
  }
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LocationComponent,
    SuggestionsComponent,
    NewRequestComponent,
    ChangePasswordComponent,
    AttendanceLogComponent,
    NewReqFromTimeLogsComponent,
    LeaveRemarksComponent,
    TeamLogsComponent,
    GetManagerEmailsComponent,
    AllRequestsComponent,
    ManagerEmployeesComponent,
    HolidaysComponent,
    MsCallBackComponent,
    PasswordResetComponent,
    LeaveApprovalComponent,
    LoginComponent,
    MissedAttendanceFromTimeLogsComponent,
    LocationApprovalComponent,
    CheckoutComponent,
    LoaderComponent,
    ForgotPasswordComponent,
    MissedAttendanceComponent,
    AllTeamLogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DesignModule,
    FormsModule,
    MsalModule,
    HttpModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCEQkHjD8UbTMg67my8ModvJkkmDuw_EJI',
      libraries: ['places']
    }),
    GridModule,
  ],
  providers: [
    DataApiService,
    StorageService,
    LoaderService,
    AuthGuard,
    LoginService,
    ApiService,
    GraphService,
    HttpClientService,
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory
    },
    {
      provide: MSAL_GUARD_CONFIG,
      useFactory: MSALGuardConfigFactory
    },

    {
      provide: MSAL_INTERCEPTOR_CONFIG,
      useFactory: MSALInterceptorConfigFactory,
    },
    MsalService,
    MsalGuard,
    GraphService,
    MsalBroadcastService,
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE]
    },
    { provide: MAT_DATE_FORMATS, useValue: DateFormat },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ProgressInterceptorService,
      multi: true
    },
  ],
  bootstrap: [AppComponent, MsalRedirectComponent],
  entryComponents: [
    LocationComponent,
    CheckoutComponent,
    LocationApprovalComponent,
    PasswordResetComponent,
    LeaveRemarksComponent
  ]
})
export class AppModule { }
