(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employee-employee-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/employee/employee-create/employee-create.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/employee/employee-create/employee-create.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"column\">\r\n  <form [formGroup]=\"EmployeeForm\" (ngSubmit)=\"submit()\" fxLayoutAlign=\"center\">\r\n    <mat-card style=\"width: 90vh\">\r\n      <mat-card-header fxLayout=\"column\">\r\n        <div>\r\n          <span class=\"mat-title\">\r\n            {{__FORM_TITLE}}\r\n          </span>\r\n          <br />\r\n          <span class=\"mat-caption\">\r\n            {{__FORM_SUB_TITLE}}\r\n          </span>\r\n        </div>\r\n      </mat-card-header>\r\n      <mat-card-content fxLayout=\"column\">\r\n        <div fxLayout=\"column\" fxLayoutGap=\"1em\">\r\n          <mat-form-field class=\"full-width\">\r\n            <input matInput placeholder=\"First Name*\" formControlName=\"firstName\">\r\n          </mat-form-field>\r\n          <mat-form-field class=\"full-width\">\r\n            <input matInput placeholder=\"Last Name*\" formControlName=\"lastName\">\r\n          </mat-form-field>\r\n          <mat-form-field class=\"full-width\">\r\n            <input matInput placeholder=\"Father Name\" formControlName=\"fatherName\">\r\n          </mat-form-field>\r\n          <mat-form-field class=\"full-width\">\r\n            <input matInput type=\"tel\" maxlength=\"11\"  placeholder=\"Personal Number*\" formControlName=\"personalNo\">\r\n\r\n        </mat-form-field>\r\n          <mat-form-field class=\"full-width\">\r\n            <input matInput placeholder=\"Qualification\" formControlName=\"qualification\">\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Manager\" value=\"{{ employee?.fullName }}\" formControlName=\"manager\" >\r\n            <mat-icon matSuffix (click)=\"selectManager()\">tab</mat-icon>\r\n          </mat-form-field>\r\n        </div>\r\n        <div fxLayout=\"column\" fxLayoutGap=\"1em\">\r\n          <mat-form-field class=\"full-width\">\r\n            <input matInput placeholder=\"Email*\" formControlName=\"email\">\r\n            <mat-error *ngIf=\"EmployeeForm.controls.email.hasError('pattern')\">\r\n              Not a valid\r\n              <strong>Email</strong>\r\n              <i>jon@doe.com</i>\r\n            </mat-error>\r\n          </mat-form-field>\r\n          <mat-form-field class=\"full-width\">\r\n            <input matInput placeholder=\"CNIC\" formControlName=\"cnic\">\r\n          </mat-form-field>\r\n          <mat-form-field class=\"full-width\">\r\n            <input type=\"number\" matInput placeholder=\"Contact\" formControlName=\"contactNo\">\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <mat-select placeholder=\"Employee Type*\" formControlName=\"employeeType\">\r\n              <mat-option *ngFor=\"let i of employeee\" [value]=\"i.value\">\r\n                {{ i.viewValue }}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <mat-select placeholder=\"Department*\" formControlName=\"departmentId\">\r\n              <mat-option *ngFor=\"let i of department\" [value]=\"i.id\">\r\n                {{ i.name }}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </div>\r\n        <div fxLayout=\"column\" fxLayoutGap=\"1em\">\r\n          <mat-form-field>\r\n            <mat-select placeholder=\"Designation*\" formControlName=\"designation\">\r\n              <mat-option *ngFor=\"let i of designations\" [value]=\"i.id\">\r\n                {{ i.name }}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <mat-form-field class=\"full-width\">\r\n            <input type=\"tel\" maxlength=\"2\"  matInput placeholder=\"Total Leaves\" formControlName=\"totalLeaves\">\r\n          </mat-form-field>\r\n        </div>\r\n        <div fxLayout=\"row\" fxLayoutGap=\"1em\">\r\n          <mat-checkbox formControlName=\"enabled\">Enabled</mat-checkbox>\r\n        </div>\r\n\r\n      </mat-card-content>\r\n      <mat-card-actions align=\"end\">\r\n        <button type=\"button\" mat-raised-button color=\"default\" matTooltip=\"Cancel\" routerLink=\"{{__PAGE_ROUTE}}\">\r\n          Cancel\r\n        </button>\r\n        <button type=\"submit\" mat-raised-button color=\"primary\" matTooltip=\"Create\">\r\n          Submit\r\n        </button>\r\n      </mat-card-actions>\r\n    </mat-card>\r\n  </form>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/employee/employee-details/employee-details.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/employee/employee-details/employee-details.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container form\" fxLayout=\"row\">\r\n\r\n    <div fxLayout=\"row\" fxFlexFill fxLayoutGap=\"10px\" fxLayoutAlign=\"center start\">\r\n        <mat-card fxLayout=\"column\" fxFlex=\"50\" style=\"height: 100%\">\r\n\r\n            <mat-card-header fxLayout=\"row\" fxFlex=\"10\">\r\n                <div fxFlex>\r\n                    <span class=\"mat-title\">{{__PAGE_TITLE}}</span>\r\n                    <br/>\r\n                    <span class=\"mat-caption\">{{__PAGE_SUBTITLE}}</span>\r\n                </div>\r\n\r\n            </mat-card-header>\r\n\r\n\r\n        </mat-card>\r\n    </div>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/employee/employee-edit/employee-edit.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/employee/employee-edit/employee-edit.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"column\">\r\n  <form  [formGroup]=\"EmployeeForm\" (ngSubmit)=\"submit()\" fxLayout=\"row\"\r\n    fxLayoutAlign=\"center\">\r\n    <mat-card style=\"width: 90vh\">\r\n      <mat-card-header fxLayout=\"column\">\r\n        <div>\r\n          <span class=\"mat-title\">\r\n            {{__FORM_TITLE}}\r\n          </span>\r\n          <br />\r\n          <span class=\"mat-caption\">\r\n            {{__FORM_SUB_TITLE}}\r\n          </span>\r\n        </div>\r\n      </mat-card-header>\r\n      <mat-card-content fxLayout=\"column\">\r\n        <div fxLayout=\"column\" fxLayoutGap=\"1em\">\r\n          <mat-form-field class=\"full-width\">\r\n            <input matInput placeholder=\"First Name\" formControlName=\"firstName\">\r\n          </mat-form-field>\r\n          <mat-form-field class=\"full-width\">\r\n            <input matInput placeholder=\"Last Name\" formControlName=\"lastName\">\r\n          </mat-form-field>\r\n          <mat-form-field class=\"full-width\">\r\n            <input matInput placeholder=\"Father Name\" formControlName=\"fatherName\">\r\n          </mat-form-field>\r\n          <mat-form-field class=\"full-width\">\r\n            <input matInput type=\"tel\" maxlength=\"11\"  placeholder=\"Personal Number*\" formControlName=\"personalNo\">\r\n\r\n        </mat-form-field>\r\n          <mat-form-field class=\"full-width\">\r\n            <input matInput placeholder=\"Qualification\" formControlName=\"qualification\">\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Manager\" value=\"{{ employee?.fullName }}\" formControlName=\"manager\">\r\n            <mat-icon matSuffix (click)=\"selectManager()\">tab</mat-icon>\r\n          </mat-form-field>\r\n        </div>\r\n        <div fxLayout=\"column\" fxLayoutGap=\"1em\">\r\n          <mat-form-field class=\"full-width\">\r\n            <input matInput placeholder=\"Email\" formControlName=\"email\">\r\n            <mat-error *ngIf=\"EmployeeForm.controls.email.hasError('required')\">\r\n              Email is\r\n              <strong>required</strong>\r\n            </mat-error>\r\n            <mat-error *ngIf=\"EmployeeForm.controls.email.hasError('pattern')\">\r\n              Not a valid\r\n              <strong>Email</strong>\r\n              <i>jon@doe.com</i>\r\n            </mat-error>\r\n          </mat-form-field>\r\n          <mat-form-field class=\"full-width\">\r\n            <input matInput placeholder=\"CNIC\" formControlName=\"cnic\">\r\n          </mat-form-field>\r\n          <mat-form-field class=\"full-width\">\r\n            <input type=\"number\" matInput placeholder=\"Contact\" formControlName=\"contactNo\">\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n          <mat-select placeholder=\"Employee Type*\" formControlName=\"employeeType\">\r\n            <mat-option *ngFor=\"let i of employeee\" [value]=\"i.value\">\r\n              {{ i.viewValue }}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n          <mat-form-field>\r\n            <mat-select #selectBox placeholder=\"Department\" formControlName=\"departmentId\">\r\n              <mat-option *ngFor=\"let i of department\" [value]=\"i.id\">\r\n                {{ i.name}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </div>\r\n        <div fxLayout=\"column\" fxLayoutGap=\"1em\">\r\n          <mat-form-field>\r\n            <mat-select placeholder=\"Designation\" formControlName=\"designation\">\r\n              <mat-option *ngFor=\"let i of designations\" [value]=\"i.id\">\r\n                {{ i.name }}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </div>\r\n        <div fxLayout=\"column\" fxLayoutGap=\"1em\" *ngIf=\"!employee?.enabled\">\r\n          <mat-checkbox formControlName=\"enabled\">Enabled</mat-checkbox>\r\n        </div>\r\n      </mat-card-content>\r\n      <mat-card-actions align=\"end\">\r\n        <button type=\"button\" mat-raised-button color=\"default\" matTooltip=\"Cancel\" routerLink=\"{{__PAGE_ROUTE}}\">\r\n          Cancel\r\n        </button>\r\n        <button type=\"submit\" mat-raised-button color=\"primary\" matTooltip=\"Create\">\r\n          Update\r\n        </button>\r\n      </mat-card-actions>\r\n    </mat-card>\r\n  </form>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/employee/employee-list/employee-list.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/employee/employee-list/employee-list.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n    <mat-progress-bar *ngIf=\"!stopSpiner\" mode=\"indeterminate\"></mat-progress-bar>\r\n\r\n<div  fxLayout=\"row\" fxLayoutAlign=\"center\"  >\r\n    <mat-card >\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"space-between stretch\">\r\n            <div>\r\n                <span class=\"mat-title\">{{__PAGE_TITLE}}</span>\r\n            </div>\r\n            <!-- <button routerLink=\"/employees/create\" mat-button color=\"primary\">\r\n              <span class=\"material-icons\">\r\n                add\r\n                </span> New\r\n            </button> -->\r\n        </div>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutGap=\"2em\">\r\n            <kendo-grid [data]=\"gridData\" [pageSize]=\"state.take\" [skip]=\"state.skip\" [pageable]=\"true\"\r\n                filterable=\"menu\" [sortable]=\"true\" (dataStateChange)=\"dataStateChange($event)\">\r\n                <kendo-grid-column  field=\"id\" title=\"ID\" [width]=\"50\" [filterable]=\"false\"></kendo-grid-column>\r\n                <kendo-grid-column field=\"fullName\" title=\"Name\" [width]=\"150\"></kendo-grid-column>\r\n                <!-- <kendo-grid-column field=\"fatherName\" title=\"Father Name\" [width]=\"100\"></kendo-grid-column> -->\r\n                <kendo-grid-column field=\"email\" title=\"Email\" [width]=\"200\"></kendo-grid-column>\r\n                <kendo-grid-column field=\"contactNo\" title=\"Contact No.\" [width]=\"120\"></kendo-grid-column>\r\n                <kendo-grid-column field=\"departmentName\" title=\"Department\" [width]=\"120\"></kendo-grid-column>\r\n                <kendo-grid-column field=\"designationName\" title=\"Designation\" [width]=\"120\"></kendo-grid-column>\r\n                <kendo-grid-column field=\"managerName\" title=\"Manager\" [width]=\"120\"></kendo-grid-column>\r\n                <kendo-grid-column title=\"Status\" [width]=\"150\">\r\n                  <ng-template kendoGridCellTemplate let-dataItem>\r\n                    <input\r\n                      type=\"checkbox\"\r\n                      class=\"k-checkbox\"\r\n                      [checked]=\"dataItem.enabled\"\r\n                      id=\"ch1\"\r\n                      disabled\r\n                    />\r\n                    <label class=\"k-checkbox-label\" for=\"ch1\"></label>\r\n                  </ng-template>\r\n                </kendo-grid-column>\r\n                <kendo-grid-column filterable=\"false\" [width]=\"50\">\r\n                    <ng-template kendoGridCellTemplate let-dataItem >\r\n                        <button mat-icon-button routerLink=\"{{__PAGE_ROUTE}}edit/{{dataItem.id}}\">\r\n                          <span class=\"material-icons\">\r\n                            edit\r\n                            </span>\r\n                        </button>\r\n                    </ng-template>\r\n                </kendo-grid-column>\r\n            </kendo-grid>\r\n        </mat-card-content>\r\n    </mat-card>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/employee/select-manager-dialog/select-manager-dialog.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/employee/select-manager-dialog/select-manager-dialog.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"column\">\r\n  <h1 mat-dialog-title>Select Manager</h1>\r\n  <div mat-dialog-content>\r\n    <kendo-grid [data]=\"gridData\" [pageSize]=\"state.take\" [skip]=\"state.skip\" [pageable]=\"true\" filterable=\"menu\"\r\n      [sortable]=\"true\" (dataStateChange)=\"dataStateChange($event)\" [selectable]=\"selectableSettings\"\r\n      [navigable]=\"true\"\r\n      [kendoGridSelectBy]=\"'id'\"\r\n      [selectedKeys]=\"selectedEmployeeKey\">\r\n      <kendo-grid-checkbox-column [width]=\"30\"></kendo-grid-checkbox-column>\r\n      <kendo-grid-column [filterable]=\"false\" field=\"id\" title=\"ID\" [width]=\"50\"></kendo-grid-column>\r\n      <kendo-grid-column  field=\"firstName\" title=\"Name\" [width]=\"100\"></kendo-grid-column>\r\n      <kendo-grid-column field=\"departmentName\" title=\"Department\" [width]=\"100\"></kendo-grid-column>\r\n    </kendo-grid>\r\n  </div>\r\n  <mat-error *ngIf=\"message\">{{message}}</mat-error>\r\n  <div mat-dialog-actions align=\"end\">\r\n    <button mat-button  (click)=\"onCancel()\">Cancel</button>\r\n    <button mat-raised-button color=\"primary\" cdkFocusInitial (click)=\"selectClicked()\">Select</button>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/admin/employee/employee-create/employee-create.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/admin/employee/employee-create/employee-create.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".align-checkbox{\r\n    padding-top: 18px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vZW1wbG95ZWUvZW1wbG95ZWUtY3JlYXRlL2VtcGxveWVlLWNyZWF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vZW1wbG95ZWUvZW1wbG95ZWUtY3JlYXRlL2VtcGxveWVlLWNyZWF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsaWduLWNoZWNrYm94e1xyXG4gICAgcGFkZGluZy10b3A6IDE4cHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/admin/employee/employee-create/employee-create.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/employee/employee-create/employee-create.component.ts ***!
  \*****************************************************************************/
/*! exports provided: EmployeeCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeCreateComponent", function() { return EmployeeCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _select_manager_dialog_select_manager_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../select-manager-dialog/select-manager-dialog.component */ "./src/app/admin/employee/select-manager-dialog/select-manager-dialog.component.ts");
/* harmony import */ var src_app_data_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/data-api.service */ "./src/app/data-api.service.ts");









let EmployeeCreateComponent = class EmployeeCreateComponent {
    constructor(dataApi, router, formBuilder, snackbar, dialog) {
        this.dataApi = dataApi;
        this.router = router;
        this.formBuilder = formBuilder;
        this.snackbar = snackbar;
        this.dialog = dialog;
        this.employeee = [
            { value: 'Permanent', viewValue: 'Permanent' },
            { value: 'Probation', viewValue: 'Probation' },
            { value: 'Internship', viewValue: 'Internship' },
            { value: 'Mentorship', viewValue: 'Mentorship' },
            { value: 'Time & Money', viewValue: 'Time & Money' },
            { value: 'Contractual Fixed term', viewValue: 'Contractual Fixed term' }
        ];
        this.PHONENUMBER = [/^[0-9]+$/];
        // VIEW CONFIG
        this.__PAGE_ROUTE = '/employees/';
        this.__FORM_TITLE = "New Employee";
        this.__FORM_SUB_TITLE = "";
        this.DepartmentLookup = [];
        this.DesignationLookup = [];
    }
    ngOnInit() {
        this.getDepartmentsLookup();
        this.getDesignationLookup();
        this.EmployeeForm = this.formBuilder.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            fatherName: [''],
            personalNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(11)]],
            employeeType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            qualification: [''],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            cnic: [''],
            contactNo: [''],
            manager: [{ value: '', disabled: true }],
            enabled: [true],
            totalLeaves: [''],
            departmentId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            designation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        this.onChanges();
    }
    submit() {
        if (this.EmployeeForm.invalid) {
            return;
        }
        const model = {
            firstName: this.fc.firstName.value,
            lastName: this.fc.lastName.value,
            fatherName: this.fc.fatherName.value,
            qualification: this.fc.qualification.value,
            email: this.fc.email.value,
            cnic: this.fc.cnic.value,
            personalNo: this.fc.personalNo.value,
            contactNo: this.fc.contactNo.value,
            managerId: this.selectedManagerId,
            enabled: this.fc.enabled.value,
            employeeType: this.fc.employeeType.value,
            departmentId: this.fc.departmentId.value,
            designationId: this.fc.designation.value,
            totalLeaves: this.fc.totalLeaves.value
        };
        console.log(model);
        this.dataApi.createNewEmployee(model).subscribe(() => {
            this.snackbar.open('Employee Created Successfully.', null, {
                duration: 10 * 1000
            });
            this.router.navigate([this.__PAGE_ROUTE]);
        }, _err => {
            this.snackbar.open(_err.error.message, null, {
                duration: 10 * 1000
            });
        });
    }
    getDepartmentsLookup() {
        this.dataApi.getDepartmentLookup()
            .subscribe(res => {
            this.department = res;
            for (var i = 0, len = this.department.length; i < len; i++) {
                const id = this.department[i].id;
            }
        });
    }
    getDesignationLookup() {
        this.dataApi.getDesignationLookup()
            .subscribe(res => {
            this.designations = [res];
            for (var i = 0, len = this.designations.length; i < len; i++) {
                const name = this.designations[i].name;
            }
        });
    }
    designationSelected(id) {
        let selectedDesignation = this.designations.find(d => d.id == id);
    }
    get fc() { return this.EmployeeForm.controls; }
    selectManager() {
        const dialogRef = this.dialog.open(_select_manager_dialog_select_manager_dialog_component__WEBPACK_IMPORTED_MODULE_5__["SelectManagerDialogComponent"], {
            width: '500px'
        });
        dialogRef.afterClosed().subscribe(res => {
            if (res != null) {
                this.fc.manager.patchValue(res.fullName);
                this.selectedManagerId = res.id;
            }
        });
    }
    onChanges() {
        this.fc.designation.valueChanges.subscribe(id => {
            this.designationSelected(id);
        });
    }
};
EmployeeCreateComponent.ctorParameters = () => [
    { type: src_app_data_api_service__WEBPACK_IMPORTED_MODULE_6__["DataApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }
];
EmployeeCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-employee-create',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./employee-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/employee/employee-create/employee-create.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./employee-create.component.css */ "./src/app/admin/employee/employee-create/employee-create.component.css")).default]
    })
], EmployeeCreateComponent);



/***/ }),

/***/ "./src/app/admin/employee/employee-details/employee-details.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/admin/employee/employee-details/employee-details.component.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2VtcGxveWVlL2VtcGxveWVlLWRldGFpbHMvZW1wbG95ZWUtZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/admin/employee/employee-details/employee-details.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/employee/employee-details/employee-details.component.ts ***!
  \*******************************************************************************/
/*! exports provided: EmployeeDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeDetailsComponent", function() { return EmployeeDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _data_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../data-api.service */ "./src/app/data-api.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");





let EmployeeDetailsComponent = class EmployeeDetailsComponent {
    constructor(dataApi, route, snackbar) {
        this.dataApi = dataApi;
        this.route = route;
        this.snackbar = snackbar;
        this.__ACCESS_EDIT_DETAIL = true;
        this.__PAGE_ROUTE = '/employees';
        this.__PAGE_TITLE = 'Employee Details';
    }
    ngOnInit() {
        this.route.params.subscribe(k => this.id = k['id']);
        this.dataApi.getSingleEmployee(this.id)
            .subscribe(_emp => {
            this.Details = {
                'First Name': _emp['firstName'],
                'Last Name': _emp['lastName'],
                'Father Name': _emp['fatherName'],
                'Qualification': _emp['qualification'],
                'Email': _emp['email'],
                'CINC #': _emp['cnic'],
                'Contact Number': _emp['contactNo'],
                'Manager': _emp['managerName'],
                'Status': _emp['enabled'] ? 'Enabled' : 'Disabled',
                'Department Name': _emp['departmentName'],
                'Designation': _emp['designationName'],
            };
        }, _err => {
            this.snackbar.open(_err.error.message, null, {
                duration: 10 * 1000
            });
        });
    }
};
EmployeeDetailsComponent.ctorParameters = () => [
    { type: _data_api_service__WEBPACK_IMPORTED_MODULE_1__["DataApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
];
EmployeeDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-employee-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./employee-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/employee/employee-details/employee-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./employee-details.component.css */ "./src/app/admin/employee/employee-details/employee-details.component.css")).default]
    })
], EmployeeDetailsComponent);



/***/ }),

/***/ "./src/app/admin/employee/employee-edit/employee-edit.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/admin/employee/employee-edit/employee-edit.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".align-checkbox{\r\n    padding-top: 18px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vZW1wbG95ZWUvZW1wbG95ZWUtZWRpdC9lbXBsb3llZS1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9lbXBsb3llZS9lbXBsb3llZS1lZGl0L2VtcGxveWVlLWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGlnbi1jaGVja2JveHtcclxuICAgIHBhZGRpbmctdG9wOiAxOHB4O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/admin/employee/employee-edit/employee-edit.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/admin/employee/employee-edit/employee-edit.component.ts ***!
  \*************************************************************************/
/*! exports provided: EmployeeEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeEditComponent", function() { return EmployeeEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _select_manager_dialog_select_manager_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../select-manager-dialog/select-manager-dialog.component */ "./src/app/admin/employee/select-manager-dialog/select-manager-dialog.component.ts");
/* harmony import */ var src_app_data_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/data-api.service */ "./src/app/data-api.service.ts");










let EmployeeEditComponent = class EmployeeEditComponent {
    constructor(snackbar, router, formBuilder, dialog, route, dataApi) {
        this.snackbar = snackbar;
        this.router = router;
        this.formBuilder = formBuilder;
        this.dialog = dialog;
        this.route = route;
        this.dataApi = dataApi;
        this.employeee = [
            { value: 'Permanent', viewValue: 'Permanent' },
            { value: 'Probation', viewValue: 'Probation' },
            { value: 'Internship', viewValue: 'Internship' },
            { value: 'Mentorship', viewValue: 'Mentorship' },
            { value: 'Time & Money', viewValue: 'Time & Money' },
            { value: 'Contractual Fixed term', viewValue: 'Contractual Fixed term' }
        ];
        this.PHONENUMBER = [/^[0-9]+$/];
        // VIEW CONFIG
        this.__PAGE_ROUTE = "/employees/";
        this.__FORM_TITLE = "Edit Employee";
        this.__FORM_SUB_TITLE = "";
        this.allDistributions = [];
        this.DepartmentLookup = [];
        this.DesignationLookup = [];
    }
    ngOnInit() {
        this.route.params.subscribe(res => this.employeeId = res['id']);
        this.EmployeeForm = this.formBuilder.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            fatherName: [''],
            personalNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(11)]],
            qualification: [''],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            cnic: [''],
            contactNo: [''],
            employeeType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            manager: [{ value: '', disabled: true },],
            enabled: [''],
            departmentId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            designation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
        this.onChanges();
        this.getDepartmentsLookup();
        this.getDesignationLookup();
        this.initFormValues();
    }
    get user() {
        return JSON.parse(localStorage.getItem("Attendance-user"));
    }
    initFormValues() {
        this.dataApi.getSingleEmployee(this.employeeId).subscribe(emp => {
            var x = emp;
            //console.log("designation id", x.designationId)
            this.selectedManagerId = x.managerId;
            this.fc.firstName.setValue(x.firstName);
            this.fc.lastName.setValue(x.lastName);
            this.fc.fatherName.setValue(x.fatherName);
            this.fc.personalNo.setValue(x.personalNo);
            this.fc.qualification.setValue(x.qualification);
            this.fc.email.setValue(x.email);
            this.fc.cnic.setValue(x.cnic);
            this.fc.contactNo.setValue(x.contactNo);
            this.fc.manager.setValue(x.managerName);
            this.fc.enabled.setValue(x.enabled);
            this.fc.employeeType.setValue(x.employeeType);
            this.fc.departmentId.setValue(x.departmentId);
            this.fc.designation.setValue(x.designationId);
        });
    }
    submit() {
        if (this.EmployeeForm.invalid) {
            return;
        }
        const postData = {
            id: this.employeeId,
            firstName: this.fc.firstName.value,
            lastName: this.fc.lastName.value,
            fatherName: this.fc.fatherName.value,
            qualification: this.fc.qualification.value,
            email: this.fc.email.value,
            cnic: this.fc.cnic.value,
            contactNo: this.fc.contactNo.value,
            personalNo: this.fc.personalNo.value,
            employeeType: this.fc.employeeType.value,
            managerId: this.selectedManagerId,
            enabled: this.fc.enabled.value,
            departmentId: this.fc.departmentId.value,
            designationId: this.fc.designation.value,
        };
        this.dataApi.updateEmployee(postData).subscribe(res => {
            {
                this.snackbar.open('Employee updated successfully.', null, {
                    duration: 10 * 1000
                });
                this.router.navigate([this.__PAGE_ROUTE]);
            }
        }, _err => {
            this.snackbar.open(_err.error.message, null, {
                duration: 10 * 1000
            });
        });
    }
    getDepartmentsLookup() {
        this.dataApi.getDepartmentLookup()
            .subscribe(res => {
            this.department = res;
            for (var i = 0, len = this.department.length; i < len; i++) {
                const id = this.department[i].id;
            }
        });
    }
    getDesignationLookup() {
        this.dataApi.getDesignationLookup()
            .subscribe(res => {
            this.designations = res;
            for (var i = 0, len = this.designations.length; i < len; i++) {
                const name = this.designations[i].name;
            }
        });
    }
    designationSelected(id) {
        const selectedDesignation = this.designations.find(d => d.id == id);
    }
    get fc() { return this.EmployeeForm.controls; }
    selectManager() {
        const dialogRef = this.dialog.open(_select_manager_dialog_select_manager_dialog_component__WEBPACK_IMPORTED_MODULE_5__["SelectManagerDialogComponent"], {
            width: '800px'
        });
        dialogRef.afterClosed().subscribe(res => {
            if (res != null) {
                this.fc.manager.patchValue(res.fullName);
                this.selectedManagerId = res.id;
            }
        });
    }
    onChanges() {
        this.fc.designation.valueChanges.subscribe(id => {
            this.designationSelected(id);
        });
    }
};
EmployeeEditComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_data_api_service__WEBPACK_IMPORTED_MODULE_6__["DataApiService"] }
];
EmployeeEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-employee-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./employee-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/employee/employee-edit/employee-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./employee-edit.component.css */ "./src/app/admin/employee/employee-edit/employee-edit.component.css")).default]
    })
], EmployeeEditComponent);



/***/ }),

/***/ "./src/app/admin/employee/employee-list/employee-list.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/admin/employee/employee-list/employee-list.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".no-wrap {\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vZW1wbG95ZWUvZW1wbG95ZWUtbGlzdC9lbXBsb3llZS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtFQUNyQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2VtcGxveWVlL2VtcGxveWVlLWxpc3QvZW1wbG95ZWUtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vLXdyYXAge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/admin/employee/employee-list/employee-list.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/admin/employee/employee-list/employee-list.component.ts ***!
  \*************************************************************************/
/*! exports provided: EmployeeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeListComponent", function() { return EmployeeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @progress/kendo-data-query */ "./node_modules/@progress/kendo-data-query/dist/es2015/main.js");
/* harmony import */ var src_app_data_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/data-api.service */ "./src/app/data-api.service.ts");





let EmployeeListComponent = class EmployeeListComponent {
    constructor(dataApi, snackbar) {
        this.dataApi = dataApi;
        this.snackbar = snackbar;
        this.state = {
            skip: 0,
            take: 20
        };
        this.employees = [];
        // VIEW CONFIG
        this.__PAGE_TITLE = "Employees";
        this.__PAGE_ROUTE = "/employees/";
    }
    dataStateChange(state) {
        this.state = state;
        this.gridData = Object(_progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_3__["process"])(this.employees, this.state);
    }
    ngOnInit() {
        this.dataApi.getEmployeeList().subscribe(res => {
            this.stopSpiner = true;
            this.employees = res;
            this.gridData = Object(_progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_3__["process"])(this.employees, this.state);
        }, _err => {
            this.snackbar.open(_err.error.message, null, {
                duration: 10 * 1000
            });
        });
    }
};
EmployeeListComponent.ctorParameters = () => [
    { type: src_app_data_api_service__WEBPACK_IMPORTED_MODULE_4__["DataApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"] }
];
EmployeeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-employee-list",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./employee-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/employee/employee-list/employee-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./employee-list.component.css */ "./src/app/admin/employee/employee-list/employee-list.component.css")).default]
    })
], EmployeeListComponent);



/***/ }),

/***/ "./src/app/admin/employee/employee-module.routing.ts":
/*!***********************************************************!*\
  !*** ./src/app/admin/employee/employee-module.routing.ts ***!
  \***********************************************************/
/*! exports provided: EmployeeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeRoutingModule", function() { return EmployeeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _employee_create_employee_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee-create/employee-create.component */ "./src/app/admin/employee/employee-create/employee-create.component.ts");
/* harmony import */ var _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employee-list/employee-list.component */ "./src/app/admin/employee/employee-list/employee-list.component.ts");
/* harmony import */ var _employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employee-details/employee-details.component */ "./src/app/admin/employee/employee-details/employee-details.component.ts");
/* harmony import */ var _employee_edit_employee_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./employee-edit/employee-edit.component */ "./src/app/admin/employee/employee-edit/employee-edit.component.ts");







const routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    { path: 'create', component: _employee_create_employee_create_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeCreateComponent"] },
    { path: 'list', component: _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_4__["EmployeeListComponent"] },
    { path: 'edit/:id', component: _employee_edit_employee_edit_component__WEBPACK_IMPORTED_MODULE_6__["EmployeeEditComponent"] },
    { path: ':id', component: _employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeDetailsComponent"] },
];
let EmployeeRoutingModule = class EmployeeRoutingModule {
};
EmployeeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], EmployeeRoutingModule);



/***/ }),

/***/ "./src/app/admin/employee/employee.module.ts":
/*!***************************************************!*\
  !*** ./src/app/admin/employee/employee.module.ts ***!
  \***************************************************/
/*! exports provided: EmployeeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeModule", function() { return EmployeeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employee-list/employee-list.component */ "./src/app/admin/employee/employee-list/employee-list.component.ts");
/* harmony import */ var _employee_create_employee_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employee-create/employee-create.component */ "./src/app/admin/employee/employee-create/employee-create.component.ts");
/* harmony import */ var _employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./employee-details/employee-details.component */ "./src/app/admin/employee/employee-details/employee-details.component.ts");
/* harmony import */ var _employee_edit_employee_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./employee-edit/employee-edit.component */ "./src/app/admin/employee/employee-edit/employee-edit.component.ts");
/* harmony import */ var _employee_module_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./employee-module.routing */ "./src/app/admin/employee/employee-module.routing.ts");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
/* harmony import */ var _select_manager_dialog_select_manager_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./select-manager-dialog/select-manager-dialog.component */ "./src/app/admin/employee/select-manager-dialog/select-manager-dialog.component.ts");
/* harmony import */ var src_app_design_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/design.module */ "./src/app/design.module.ts");












let EmployeeModule = class EmployeeModule {
};
EmployeeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            src_app_design_module__WEBPACK_IMPORTED_MODULE_11__["DesignModule"],
            _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_9__["GridModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _employee_module_routing__WEBPACK_IMPORTED_MODULE_8__["EmployeeRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]
        ],
        declarations: [
            _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_4__["EmployeeListComponent"],
            _employee_create_employee_create_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeCreateComponent"],
            _employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_6__["EmployeeDetailsComponent"],
            _employee_edit_employee_edit_component__WEBPACK_IMPORTED_MODULE_7__["EmployeeEditComponent"],
            _select_manager_dialog_select_manager_dialog_component__WEBPACK_IMPORTED_MODULE_10__["SelectManagerDialogComponent"],
        ],
        providers: [],
        entryComponents: [_select_manager_dialog_select_manager_dialog_component__WEBPACK_IMPORTED_MODULE_10__["SelectManagerDialogComponent"]]
    })
], EmployeeModule);



/***/ }),

/***/ "./src/app/admin/employee/select-manager-dialog/select-manager-dialog.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/admin/employee/select-manager-dialog/select-manager-dialog.component.css ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2VtcGxveWVlL3NlbGVjdC1tYW5hZ2VyLWRpYWxvZy9zZWxlY3QtbWFuYWdlci1kaWFsb2cuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/admin/employee/select-manager-dialog/select-manager-dialog.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/admin/employee/select-manager-dialog/select-manager-dialog.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: SelectManagerDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectManagerDialogComponent", function() { return SelectManagerDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @progress/kendo-data-query */ "./node_modules/@progress/kendo-data-query/dist/es2015/main.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_data_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/data-api.service */ "./src/app/data-api.service.ts");





let SelectManagerDialogComponent = class SelectManagerDialogComponent {
    constructor(dataApi, dialogRef) {
        this.dataApi = dataApi;
        this.dialogRef = dialogRef;
        this.selectedEmployeeKey = [];
        this.state = {
            skip: 0,
            take: 20
        };
        this.setSelectableSettings();
    }
    setSelectableSettings() {
        this.selectableSettings = {
            mode: "single",
            checkboxOnly: false
        };
    }
    ngOnInit() {
        this.dataApi.getEmployeeList().subscribe(res => {
            this.employees = res;
            this.gridData = Object(_progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_2__["process"])(this.employees, this.state);
        });
    }
    dataStateChange(state) {
        this.state = state;
        this.gridData = Object(_progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_2__["process"])(this.employees, this.state);
    }
    selectClicked() {
        if (this.selectedEmployeeKey.length < 1) {
            return;
        }
        const employee = this.employees.find(x => x.id === this.selectedEmployeeKey[0]);
        this.dialogRef.close(employee);
    }
    onCancel() {
        this.dialogRef.close();
    }
};
SelectManagerDialogComponent.ctorParameters = () => [
    { type: src_app_data_api_service__WEBPACK_IMPORTED_MODULE_4__["DataApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] }
];
SelectManagerDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-select-manager-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./select-manager-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/employee/select-manager-dialog/select-manager-dialog.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./select-manager-dialog.component.css */ "./src/app/admin/employee/select-manager-dialog/select-manager-dialog.component.css")).default]
    })
], SelectManagerDialogComponent);



/***/ })

}]);
//# sourceMappingURL=employee-employee-module-es2015.js.map