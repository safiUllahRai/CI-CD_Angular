import { environment } from "./../environments/environment";
import { HttpClientService } from "./http-client.service";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DataApiService {
  private remoteApiBaseUrl;
  //private remoteApiBaseUrl = 'https://tribe-backend-api.herokuapp.com/api/';

  constructor(private http: HttpClientService) {
    this.remoteApiBaseUrl = environment.remoteApiBaseUrl;
  }

  getAllRequests(email: string) {
    const url = "employee/request?email=" + email;
    return this.http.get(url);
  }
  getResetPasswordEmail(email: string) {
    const url = "requestPasswordResetToken?email=" + email;
    return this.http.get(url);
  
  }

  getHoliDays() {
    const url = "getHolidays" 
    return this.http.get(url);
  }
  getCordinates() {
    const url = "coordinates" 
    return this.http.get(url);
  }
  getManagerEmails() {
    const url = "getManager/emails" 
    return this.http.get(url);
  }
  getApprovals(id ) {
    const url = "employee/request/approvals/" + id;
    return this.http.get(url,);
  }

  getAdminApprovals(){
    const url = "employee/request/allApprovals";
    return this.http.get(url,);
  }
  getAdminTimeLogs(){
    const url = "employee/allTeamLogs";
    return this.http.get(url,);
  }
  public addRole(obj) {
    var url = "user/role/add";
    return this.http.post(url, obj);
  }

  withdrawRequest(requestId: number) {
    const url = "employee/request/edit?id=" + requestId;
    return this.http.put(url, null);
  }

  statusUpdate(usertId: number, body) {
    const url = "user/status/update?id=" + usertId;
    return this.http.put(url, body);
  }
  updateApprovalStatus(id: number, model) {
    const url = "employee/request/update?id=" + id;
    return this.http.put(url, model);
  }

  public updateRole(_role) {
    var url = "user/role/edit";
    return this.http.put(url, _role);
  }

  public getRoleList() {
    var url = "user/role/";
    return this.http.get(url);
  }

  public getUserList() {
    var url = 'user/'
    return this.http.get(url);
}

  public updateUser(_user){
    var url = "user/edit"
    return this.http.put(url, _user);
}

  public getSingleUser(_id){
    var url = 'user/' + _id;
    return this.http.get(url);
}

  public getPermissionsList() {
    var url = "user/lookup/permissions";
    return this.http.get(url);
  }
  public getManagerEmployees(id) {
    var url = "employee/request/history?manager_id="+id;
    return this.http.get(url);
  }
 
  public getManagerTeamLogs(id) {
    var url = "employee/teamLogs?manager_id="+id;
    return this.http.get(url);
  }

  public getSingleRole(id) {
    var url = "user/role/" + id;
    return this.http.get(url);
  }

  public updateDesignation(_designation) {
    var url = "employee/designation/update/" + _designation.id;
    return this.http.put(url, _designation);
  }

  public getSingleDesignation(id) {
    var url = "employee/designation/"+ id;
    return this.http.get(url);
  }

  public getRole(id) {
    var url = "user/role/" + id;
    return this.http.get(url);
  }

  public getDesignations() {
    var url = "employee/designation/";
    return this.http.get(url);
  }

  public updateDepartment(_department){
    var url = 'employee/department/update/'+_department.id;
    return this.http.put(url, _department);
}

  public createNewUser(_user) {
    var url = "user/add";
    return this.http.post(url, _user);
  }
  postMissedAttendanceData(data){
    var url = "employee/missingAttendance/add";
    return this.http.post(url, data);
  }
  postSuggestions(data){
    var url = "employee/suggestion/add";
    return this.http.post(url, data);
  }
  public getSingleDepartment(id) {
    var url = "employee/department/" + id;
    return this.http.get(url);
  }
getManagerList(){
  const url = "employee/attendance/getManager"
  return this.http.get(url);
}
  addRequest(body) {
    const url = "employee/request/add";
    return this.http.post(url, body);
  }

	getRolesLookup() {
  	var url = "user/lookup/roles";
	  return this.http.get(url);
  }

  public updateEmployee(_employee) {
    var url = "employee/edit/" +_employee.id;
    return this.http.put(url, _employee);
  }

  public getSingleEmployee(id){
    var url = 'employee/find/'+ id;
    return this.http.get(url,);
}

  public getAttendanceLog(email: string) {
    var url = "employee/attendance?email=" + email;
    return this.http.get(url);
  }

  public getDepartmentLookup() {
    var url = "employee/department/";
    return this.http.get(url);
  }

  public getDesignationLookup() {
    var url = "employee/designation/";
    return this.http.get(url);
  }

  public getEmployeeList() {
    var url = "employee/all";
    return this.http.get(url);
  }

  public getDepartments() {
    var url = "employee/department/";
    return this.http.get(url);
  }

  postCheckInStatus(model) {
    const url = "employee/attendance/add";
    return this.http.post(url, model);
  }
getDashBoardInfo(email: string){
  var url = "employee/dashboard?email="+ email;
    return this.http.get(url);
}
  createNewDepartment(model) {
    const url = "employee/department/add";
    return this.http.post(url, model);
  }

  createNewEmployee(model) {
    const url = "employee/add";
    return this.http.post(url, model);
  }
  public createNewDesignation(_user) {
    var url = "employee/designation/add";
    return this.http.post(url, _user);
  }

  public disableEmployee(employeeId) {
    var url = "employee/" + employeeId + "/disable";
    return this.http.post(url);
  }

  changePassword(model) {
    const url = "user/changePassword";
    return this.http.post(url, model);
  }

  changePasswordWithId(model) {
    const url = "user/changeTokenPassword";
    return this.http.post(url, model);
  }
}
