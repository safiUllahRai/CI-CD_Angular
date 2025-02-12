(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/component/admin/admin.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/component/admin/admin.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n <div class=\"site-wrapper\">\r\n  <mat-toolbar class=\"toolbar\">\r\n    <div fxShow=\"true\" fxHide.gt-sm=\"true\">\r\n      <button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n        <mat-icon>menu</mat-icon>\r\n      </button>\r\n      <mat-menu #menu=\"matMenu\" >\r\n        <div>\r\n          <div *ngIf=\"user\" style=\"padding: 1rem;\">\r\n            <b>Name:</b> {{user.name}} <br>\r\n            <b>Department:</b> {{user.department}} <br>\r\n            <b>Designation:</b> {{user.designation}} <br>\r\n            <b>Roles:</b> {{user.roles}}\r\n          </div>\r\n\r\n        </div>\r\n        <button mat-menu-item *ngIf=\"user\" routerLink=\"/\">\r\n          <mat-icon>home</mat-icon> Home\r\n        </button>\r\n        <button mat-menu-item *ngIf=\"user\" routerLink=\"/new\">\r\n          <mat-icon>edit</mat-icon> New Request\r\n        </button>\r\n        <button mat-menu-item *ngIf=\"user\" routerLink=\"/leaveapproval\">\r\n          <mat-icon>touch_app</mat-icon> Pending Approvals\r\n        </button>\r\n        <button mat-menu-item *ngIf=\"user\" routerLink=\"/designations\">\r\n          <mat-icon>list</mat-icon> Designations\r\n        </button>\r\n        <button mat-menu-item *ngIf=\"user\" routerLink=\"/employees\">\r\n          <mat-icon>list</mat-icon> Employee\r\n        </button>\r\n        <button mat-menu-item *ngIf=\"user\" routerLink=\"/departments\">\r\n          <mat-icon>list</mat-icon> Department\r\n        </button>\r\n        <button mat-menu-item *ngIf=\"user\" routerLink=\"/user\">\r\n          <mat-icon>list</mat-icon> User\r\n        </button>\r\n        <button mat-menu-item *ngIf=\"user\" routerLink=\"/all\">\r\n          <mat-icon>list</mat-icon> View History\r\n        </button>\r\n        <button mat-menu-item *ngIf=\"user\" routerLink=\"/log\">\r\n          <mat-icon>history</mat-icon> Time  Logs\r\n        </button>\r\n        <button mat-menu-item *ngIf=\"user\" (click)=\"logout()\">\r\n          <mat-icon>logout</mat-icon>\r\n          <span>Log out</span>\r\n        </button>\r\n      </mat-menu>\r\n    </div>\r\n\r\n    <button mat-button class=\"docs-button\">\r\n      <img class=\"docs-angular-logo\" src=\"../../../../assets/logo.svg\" alt=\"tmc\">\r\n    </button>\r\n    <span class=\"flex-spacer\"></span>\r\n    <div fxShow=\"true\" fxHide.lt-md=\"true\">\r\n      <div class=\"flex-spacer\"></div>\r\n      <button class=\"header-button\" mat-button *ngIf=\"user\" routerLink=\"/new\">New Request</button>\r\n      <button class=\"header-button\" mat-button *ngIf=\"user\" routerLink=\"/all\">View History</button>\r\n      <button class=\"header-button\" mat-button *ngIf=\"user\" routerLink=\"/designations\">Designation</button>\r\n      <button class=\"header-button\" mat-button *ngIf=\"user\" routerLink=\"/employees\">Employee</button>\r\n      <button class=\"header-button\" mat-button *ngIf=\"user\" routerLink=\"/departments\">Department</button>\r\n      <button class=\"header-button\" mat-button *ngIf=\"user\" routerLink=\"/user\">User</button>\r\n      <button class=\"header-button\" mat-button *ngIf=\"user\" routerLink=\"/log\">Time Logs</button>\r\n      <button class=\"header-button\" mat-button *ngIf=\"user\" routerLink=\"/leaveapproval\">Pending Approvals</button>\r\n      <button mat-button *ngIf=\"user\" (click)=\"logout()\">Log out</button>\r\n    </div>\r\n\r\n  </mat-toolbar>\r\n  <div class=\"site-content\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  <footer class=\"footer\">\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"center\">\r\n      <span class=\"copyright\">Copyright &copy; Tallymarks Consulting</span>\r\n    </div>\r\n  </footer>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./src/app/admin/admin-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _component_admin_admin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/admin/admin.component */ "./src/app/admin/component/admin/admin.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




const routes = [
    {
        path: '', component: _component_admin_admin_component__WEBPACK_IMPORTED_MODULE_1__["AdminComponent"], pathMatch: 'full',
        children: [
            {
                path: 'employees',
                loadChildren: './employee/employee.module#EmployeeModule'
            },
            {
                path: 'departments',
                loadChildren: './department/department.module#DepartmentModule'
            },
            {
                path: 'designations',
                loadChildren: './designation/designation.module#DesignationModule'
            },
            {
                path: 'user',
                loadChildren: './user/user.module#UserModule'
            },
        ]
    }
];
let AdminRoutingModule = class AdminRoutingModule {
};
AdminRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], AdminRoutingModule);



/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _design_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../design.module */ "./src/app/design.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/admin/admin-routing.module.ts");
/* harmony import */ var _component_admin_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/admin/admin.component */ "./src/app/admin/component/admin/admin.component.ts");






let AdminModule = class AdminModule {
};
AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_component_admin_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _admin_routing_module__WEBPACK_IMPORTED_MODULE_4__["AdminRoutingModule"],
            _design_module__WEBPACK_IMPORTED_MODULE_1__["DesignModule"]
        ]
    })
], AdminModule);



/***/ }),

/***/ "./src/app/admin/component/admin/admin.component.scss":
/*!************************************************************!*\
  !*** ./src/app/admin/component/admin/admin.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudC9hZG1pbi9hZG1pbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/admin/component/admin/admin.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin/component/admin/admin.component.ts ***!
  \**********************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let AdminComponent = class AdminComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    get user() {
        return JSON.parse(localStorage.getItem('Attendance-user'));
    }
    logout() {
        localStorage.clear();
        this.router.navigate(['/login']);
    }
};
AdminComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/component/admin/admin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin.component.scss */ "./src/app/admin/component/admin/admin.component.scss")).default]
    })
], AdminComponent);



/***/ })

}]);
//# sourceMappingURL=admin-admin-module-es2015.js.map