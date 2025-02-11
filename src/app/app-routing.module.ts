import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LeaveApprovalComponent } from './leave-approval/leave-approval.component';
import { AttendanceLogComponent } from './attendance-log/attendance-log.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewRequestComponent } from './new-request/new-request.component';
import { AllRequestsComponent } from './all-requests/all-requests.component';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { MissedAttendanceComponent } from './missed-attendance/missed-attendance.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { ManagerEmployeesComponent } from './manager-employees/manager-employees.component';
import { MissedAttendanceFromTimeLogsComponent } from './missed-attendance-from-time-logs/missed-attendance-from-time-logs.component';
import { NewReqFromTimeLogsComponent } from './new-req-from-time-logs/new-req-from-time-logs.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { GetManagerEmailsComponent } from './get-manager-emails/get-manager-emails.component';
import { MsalGuard } from '@azure/msal-angular';
import { MsCallBackComponent } from './ms-call-back/ms-call-back.component';
import { TeamLogsComponent } from './team-logs/team-logs.component';
import { AllTeamLogsComponent } from './all-team-logs/all-team-logs.component';




const routes: Routes = [

  {
    path: 'login', component: LoginComponent,
  },
 { path: 'auth-callback', component: MsCallBackComponent,  canActivate: [MsalGuard]},
  {
    path: 'reset/:id', component: ForgotPasswordComponent
  },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule'
  },
  {
    path: 'employees', canActivate : [AuthGuard],
    loadChildren: './admin/employee/employee.module#EmployeeModule'
  },
  {
    path: 'departments', canActivate : [AuthGuard],
    loadChildren: './admin/department/department.module#DepartmentModule'
},
{
    path: 'designations', canActivate : [AuthGuard],
    loadChildren: './admin/designation/designation.module#DesignationModule'
},
{
  path: 'user', canActivate : [AuthGuard],
  loadChildren: './admin/user/user.module#UserModule'
},
  {
    path: 'changePassword', component: ChangePasswordComponent, canActivate : [AuthGuard]
  },
  {
    path: 'new', component: NewRequestComponent, canActivate : [AuthGuard]
  },
  {
    path: 'newReqFromLogs', component: NewReqFromTimeLogsComponent, canActivate : [AuthGuard]
  },
  {
    path: 'missedAttendance', component: MissedAttendanceComponent, canActivate : [AuthGuard]
  },
  {
    path: 'missedAttendanceFromLogs', component: MissedAttendanceFromTimeLogsComponent, canActivate : [AuthGuard]
  },
  {
    path: 'holidays', component: HolidaysComponent, canActivate : [AuthGuard]
  },
  {
    path: 'managerEmails', component: GetManagerEmailsComponent, canActivate : [AuthGuard]
  },
  {
    path: 'all', component: AllRequestsComponent, canActivate : [AuthGuard]
  },
  {
    path: 'leaveapproval', component: LeaveApprovalComponent, canActivate : [AuthGuard]
  },
  {
    path: 'allTimeLogs', component: AllTeamLogsComponent, canActivate : [AuthGuard]
  },
{
    path: 'log', component: AttendanceLogComponent, canActivate : [AuthGuard],
},
{
  path: 'suggestions', component: SuggestionsComponent, canActivate : [AuthGuard],
},
{
  path: 'employeeHistory', component: ManagerEmployeesComponent, canActivate : [AuthGuard],
},
{
  path: 'teamLogs', component: TeamLogsComponent, canActivate : [AuthGuard],
},
  {
  path: '', component: HomeComponent , canActivate : [AuthGuard]
  },
];
const isIframe = window !== window.parent && !window.opener;
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // Don't perform initial navigation in iframes
    initialNavigation: !isIframe ? 'enabled' : 'disabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

