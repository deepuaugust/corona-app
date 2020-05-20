(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* The side navigation menu */\n.sidenav {\n    height: 100%; /* 100% Full-height */\n    width: 0; /* 0 width - change this with JavaScript */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Stay on top */\n    top: 0; /* Stay at the top */\n    left: 0;\n    background-color: #111; /* Black*/\n    overflow-x: hidden; /* Disable horizontal scroll */\n    padding-top: 60px; /* Place content 60px from the top */\n    transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */\n  }\n/* The navigation menu links */\n.sidenav a {\n    padding: 8px 8px 8px 32px;\n    text-decoration: none;\n    font-size: 25px;\n    color: white;\n    display: block;\n    transition: 0.3s;\n    cursor: pointer;\n  }\n/* When you mouse over the navigation links, change their color */\n.sidenav a:hover {\n    color: #f1f1f1;\n  }\n/* Position and style the close button (top right corner) */\n.sidenav .closebtn {\n    position: absolute;\n    top: 0;\n    right: 25px;\n    font-size: 36px;\n    margin-left: 50px;\n  }\n/* Style page content - use this if you want to push the page content to the right when you open the side navigation */\n#maindiv {\n    transition: margin-left .5s;\n    padding: 20px;\n    margin-top: 20px;\n  }\n.menu {\n    width: 35px;\n    height: 5px;\n    background-color: rgb(255, 241, 241);\n    margin: 3px 0;\n    cursor: pointer;\n  }\n.menu_icon{\n      position: absolute;\n      top: 5px;\n      left: 5px;\n      cursor: pointer;\n  }\n/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */\n@media screen and (max-height: 450px) {\n    .sidenav {padding-top: 15px;}\n    .sidenav a {font-size: 18px;}\n  }"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"mySidenav\" class=\"sidenav\">\n  <a href=\"javascript:void(0)\" class=\"closebtn\" (click)=\"closeNav()\">&times;</a>\n  <a (click)=\"goToHome()\">Home</a>\n  <a (click)=\"goToRequestHome()\">Home</a>\n  <a (click)=\"logout()\">Logout</a>\n</div>\n\n<!-- Use any element to open the sidenav -->\n<span (click)=\"openNav()\" class=\"menu_icon\" id=\"menu_id\">\n  <div class=\"menu\"></div>\n  <div class=\"menu\"></div>\n  <div class=\"menu\"></div\n></span>\n<div class=\"\" id=\"maindiv\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(_user, route) {
        this._user = _user;
        this.route = route;
    }
    AppComponent.prototype.openNav = function () {
        document.getElementById("mySidenav").style.width = "250px";
    };
    /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
    AppComponent.prototype.closeNav = function () {
        document.getElementById("mySidenav").style.width = "0";
    };
    AppComponent.prototype.logout = function () {
        this.closeNav();
        this._user.logout();
    };
    AppComponent.prototype.goToHome = function () {
        this.closeNav();
        this.route.navigate(["home"]);
    };
    AppComponent.prototype.goToRequestHome = function () {
        this.closeNav();
        this.route.navigate(["requests/home"]);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/fesm5/ag-grid-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/user/user.component */ "./src/app/components/user/user.component.ts");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
/* harmony import */ var _components_category_category_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/category/category.component */ "./src/app/components/category/category.component.ts");
/* harmony import */ var _components_category_create_category_create_category_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/category/create-category/create-category.component */ "./src/app/components/category/create-category/create-category.component.ts");
/* harmony import */ var _components_roles_roles_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/roles/roles.component */ "./src/app/components/roles/roles.component.ts");
/* harmony import */ var _components_roles_create_roles_create_roles_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/roles/create-roles/create-roles.component */ "./src/app/components/roles/create-roles/create-roles.component.ts");
/* harmony import */ var _components_requests_requests_medical_requests_medical_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/requests/requests-medical/requests-medical.component */ "./src/app/components/requests/requests-medical/requests-medical.component.ts");
/* harmony import */ var _components_requests_request_create_request_create_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/requests/request-create/request-create.component */ "./src/app/components/requests/request-create/request-create.component.ts");
/* harmony import */ var _services_toaster_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/toaster.service */ "./src/app/services/toaster.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _services_role_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/role.service */ "./src/app/services/role.service.ts");
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/request.service */ "./src/app/services/request.service.ts");
/* harmony import */ var _services_medicalRequest_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/medicalRequest.service */ "./src/app/services/medicalRequest.service.ts");
/* harmony import */ var _authInterceptor_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./authInterceptor.service */ "./src/app/authInterceptor.service.ts");
/* harmony import */ var _components_cell_renderer_requestCellRenderer_cell_renderer_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/cell_renderer/requestCellRenderer/cell_renderer.component */ "./src/app/components/cell_renderer/requestCellRenderer/cell_renderer.component.ts");
/* harmony import */ var _components_cell_renderer_userCellRenderer_cell_renderer_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/cell_renderer/userCellRenderer/cell_renderer.component */ "./src/app/components/cell_renderer/userCellRenderer/cell_renderer.component.ts");
/* harmony import */ var _components_requests_request_interact_request_interact_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/requests/request-interact/request-interact.component */ "./src/app/components/requests/request-interact/request-interact.component.ts");
/* harmony import */ var _components_excelImport_excelImport_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/excelImport/excelImport.component */ "./src/app/components/excelImport/excelImport.component.ts");
/* harmony import */ var _components_requests_request_home_request_home_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/requests/request-home/request-home.component */ "./src/app/components/requests/request-home/request-home.component.ts");
/* harmony import */ var _components_requests_requests_nonmedical_requests_nonmedical_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/requests/requests-nonmedical/requests-nonmedical.component */ "./src/app/components/requests/requests-nonmedical/requests-nonmedical.component.ts");
/* harmony import */ var _components_requests_request_create_medical_request_create_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/requests/request-create/medical/request-create.component */ "./src/app/components/requests/request-create/medical/request-create.component.ts");
/* harmony import */ var _components_requests_request_create_nonmedical_request_create_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/requests/request-create/nonmedical/request-create.component */ "./src/app/components/requests/request-create/nonmedical/request-create.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



































var routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"] },
    { path: "home/register", component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"] },
    { path: "home", component: _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_13__["AdminComponent"] },
    { path: "user", component: _components_user_user_component__WEBPACK_IMPORTED_MODULE_12__["UserComponent"] },
    { path: "user/edit/:id", component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"] },
    { path: "category", component: _components_category_category_component__WEBPACK_IMPORTED_MODULE_14__["CategoryComponent"] },
    { path: "category/create", component: _components_category_create_category_create_category_component__WEBPACK_IMPORTED_MODULE_15__["CreateCategoryComponent"] },
    { path: "roles", component: _components_roles_roles_component__WEBPACK_IMPORTED_MODULE_16__["RolesComponent"] },
    { path: "roles/create", component: _components_roles_create_roles_create_roles_component__WEBPACK_IMPORTED_MODULE_17__["CreateRolesComponent"] },
    { path: "requests/medical", component: _components_requests_requests_medical_requests_medical_component__WEBPACK_IMPORTED_MODULE_18__["RequestsMedicalComponent"] },
    { path: "requests/non-medical", component: _components_requests_requests_nonmedical_requests_nonmedical_component__WEBPACK_IMPORTED_MODULE_32__["RequestsNonMedicalComponent"] },
    { path: "requests/home", component: _components_requests_request_home_request_home_component__WEBPACK_IMPORTED_MODULE_31__["RequestHomeComponent"] },
    { path: "requests/create/medical", component: _components_requests_request_create_medical_request_create_component__WEBPACK_IMPORTED_MODULE_33__["RequestCreateMedicalComponent"] },
    {
        path: "requests/create/nonmedical",
        component: _components_requests_request_create_nonmedical_request_create_component__WEBPACK_IMPORTED_MODULE_34__["RequestCreateNonMedicalComponent"],
    },
    {
        path: "requests/edit/medical/:id",
        component: _components_requests_request_create_medical_request_create_component__WEBPACK_IMPORTED_MODULE_33__["RequestCreateMedicalComponent"],
    },
    {
        path: "requests/edit/nonmedical/:id",
        component: _components_requests_request_create_nonmedical_request_create_component__WEBPACK_IMPORTED_MODULE_34__["RequestCreateNonMedicalComponent"],
    },
    { path: "requests/interact/:id", component: _components_requests_request_interact_request_interact_component__WEBPACK_IMPORTED_MODULE_29__["RequestInteractComponent"] },
    { path: "requests/import", component: _components_excelImport_excelImport_component__WEBPACK_IMPORTED_MODULE_30__["ExcelImport"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"],
                _components_user_user_component__WEBPACK_IMPORTED_MODULE_12__["UserComponent"],
                _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_13__["AdminComponent"],
                _components_category_category_component__WEBPACK_IMPORTED_MODULE_14__["CategoryComponent"],
                _components_category_create_category_create_category_component__WEBPACK_IMPORTED_MODULE_15__["CreateCategoryComponent"],
                _components_roles_roles_component__WEBPACK_IMPORTED_MODULE_16__["RolesComponent"],
                _components_roles_create_roles_create_roles_component__WEBPACK_IMPORTED_MODULE_17__["CreateRolesComponent"],
                _components_requests_requests_medical_requests_medical_component__WEBPACK_IMPORTED_MODULE_18__["RequestsMedicalComponent"],
                _components_requests_request_create_request_create_component__WEBPACK_IMPORTED_MODULE_19__["RequestCreateComponent"],
                _components_cell_renderer_requestCellRenderer_cell_renderer_component__WEBPACK_IMPORTED_MODULE_27__["RequestCellRendererComponent"],
                _components_cell_renderer_userCellRenderer_cell_renderer_component__WEBPACK_IMPORTED_MODULE_28__["UserCellRendererComponent"],
                _components_requests_request_interact_request_interact_component__WEBPACK_IMPORTED_MODULE_29__["RequestInteractComponent"],
                _components_excelImport_excelImport_component__WEBPACK_IMPORTED_MODULE_30__["ExcelImport"],
                _components_requests_request_home_request_home_component__WEBPACK_IMPORTED_MODULE_31__["RequestHomeComponent"],
                _components_requests_requests_nonmedical_requests_nonmedical_component__WEBPACK_IMPORTED_MODULE_32__["RequestsNonMedicalComponent"],
                _components_requests_request_create_medical_request_create_component__WEBPACK_IMPORTED_MODULE_33__["RequestCreateMedicalComponent"],
                _components_requests_request_create_nonmedical_request_create_component__WEBPACK_IMPORTED_MODULE_34__["RequestCreateNonMedicalComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(routes),
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrModule"].forRoot(),
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__["AgGridModule"].withComponents([]),
            ],
            entryComponents: [_components_cell_renderer_requestCellRenderer_cell_renderer_component__WEBPACK_IMPORTED_MODULE_27__["RequestCellRendererComponent"], _components_cell_renderer_userCellRenderer_cell_renderer_component__WEBPACK_IMPORTED_MODULE_28__["UserCellRendererComponent"]],
            providers: [
                _services_user_service__WEBPACK_IMPORTED_MODULE_21__["UserService"],
                _services_category_service__WEBPACK_IMPORTED_MODULE_22__["CategoryService"],
                _services_role_service__WEBPACK_IMPORTED_MODULE_23__["RolesService"],
                _services_request_service__WEBPACK_IMPORTED_MODULE_24__["RequestService"],
                _services_toaster_service__WEBPACK_IMPORTED_MODULE_20__["ToasterService"],
                _services_medicalRequest_service__WEBPACK_IMPORTED_MODULE_25__["MedicalRequestService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
                    useClass: _authInterceptor_service__WEBPACK_IMPORTED_MODULE_26__["AuthInterceptorService"],
                    multi: true,
                },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/authInterceptor.service.ts":
/*!********************************************!*\
  !*** ./src/app/authInterceptor.service.ts ***!
  \********************************************/
/*! exports provided: AuthInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptorService", function() { return AuthInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthInterceptorService = /** @class */ (function () {
    function AuthInterceptorService(injector) {
        this.injector = injector;
    }
    AuthInterceptorService.prototype.intercept = function (req, next) {
        var auth = this.injector.get(_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]);
        var authRequest = req.clone({
            headers: req.headers.set('Authorization', auth.token)
        });
        return next.handle(authRequest);
    };
    AuthInterceptorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], AuthInterceptorService);
    return AuthInterceptorService;
}());



/***/ }),

/***/ "./src/app/components/admin/admin.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/admin/admin.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".maindiv {\n  position: absolute;\n  top: 50%;\n  right: 50%;\n  -webkit-transform: translate(50%, -50%);\n          transform: translate(50%, -50%);\n}\n\n.heading {\n  font-weight: 700;\n  font-size: 30px;\n  text-align: center;\n}\n\nbutton {\n    background-color: #4CAF50;\n    color: white;\n    padding: 14px 20px;\n    margin: 8px 0;\n    border: none;\n    cursor: pointer;\n    width: 100%;\n  }\n\nbutton:hover {\n    opacity: 0.8;\n  }\n\n.imgtxt {\n    text-align: center;\n    font-weight: 700;\n    font-size: 20px;\n    margin-top: 30px;\n  }\n\n.imgdiv {\n    cursor: pointer;\n  }"

/***/ }),

/***/ "./src/app/components/admin/admin.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/admin/admin.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"maindiv col-md-12\">\n  <div class=\"container\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div\n            class=\"col-md-3 imgdiv\"\n            routerLink=\"/user\"\n            *ngIf=\"user.type == 'admin' || user.type == 'superAdmin'\"\n          >\n            <div class=\"card-container\">\n              <div class=\"card\">\n                <div class=\"front\">\n                  <div class=\"cover\">\n                    <img src=\"../../../assets/images/cardbg.jpg\" />\n                  </div>\n                  <div class=\"user\">\n                    <img\n                      class=\"img-circle\"\n                      src=\"../../../assets/images/user.png\"\n                    />\n                  </div>\n                  <div class=\"content\">\n                    <div class=\"main\">\n                      <h3 class=\"name\">Users</h3>\n                      <p class=\"profession\"></p>\n\n                      <p class=\"text-center\">\n                        The list of registered users depicting their\n                        corresponding categories and roles can be viewed. A new\n                        user can be registered based on availability.\n                      </p>\n                    </div>\n                    <div class=\"footer\"></div>\n                  </div>\n                </div>\n                <!-- end front panel -->\n                <div class=\"back\">\n                  <div class=\"header\">\n                    <h5 class=\"motto\">\n                      \"Clean your hands often. Use soap and water, or an\n                      alcohol-based hand rub.\"\n                    </h5>\n                  </div>\n                  <div class=\"content\">\n                    <div class=\"main\">\n                      <h4 class=\"text-center\">Brief Overview</h4>\n                      <p class=\"text-center\">\n                        The below depicts the total count of users registered\n                        within the application.\n                      </p>\n\n                      <div class=\"stats-container\">\n                        <div class=\"stats\">\n                          <h4></h4>\n                          <p></p>\n                        </div>\n                        <div class=\"stats\" style=\"width:100%\">\n                          <h4>{{ userSummary }}</h4>\n                          <p>\n                            {{ userType }}\n                          </p>\n                        </div>\n                        <div class=\"stats\">\n                          <h4></h4>\n                          <p></p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"footer\"></div>\n                </div>\n                <!-- end back panel -->\n              </div>\n              <!-- end card -->\n            </div>\n            <!-- end card-container -->\n          </div>\n          <div\n            class=\"col-md-3 imgdiv\"\n            routerLink=\"/category\"\n            *ngIf=\"user.type == 'admin' || user.type == 'superAdmin'\"\n          >\n            <div class=\"card-container\">\n              <div class=\"card\">\n                <div class=\"front\">\n                  <div class=\"cover\">\n                    <img src=\"../../../assets/images/cardbg.jpg\" />\n                  </div>\n                  <div class=\"user\">\n                    <img\n                      class=\"img-circle\"\n                      src=\"../../../assets/images/category.png\"\n                    />\n                  </div>\n                  <div class=\"content\">\n                    <div class=\"main\">\n                      <h3 class=\"name\">Categories</h3>\n                      <p class=\"profession\"></p>\n\n                      <p class=\"text-center\">\n                        All the categories within the system can be viewed. A\n                        new category can be created based on the incoming\n                        request if not already available.\n                      </p>\n                    </div>\n                    <div class=\"footer\"></div>\n                  </div>\n                </div>\n                <!-- end front panel -->\n                <div class=\"back\">\n                  <div class=\"header\">\n                    <h5 class=\"motto\">\n                      \"Maintain a safe distance from anyone who is coughing or\n                      sneezing.\"\n                    </h5>\n                  </div>\n                  <div class=\"content\">\n                    <div class=\"main\">\n                      <h4 class=\"text-center\">Brief Overview</h4>\n                      <p class=\"text-center\">\n                        The below depicts the total number of categories for\n                        which services are being provided.\n                      </p>\n\n                      <div class=\"stats-container\">\n                        <div class=\"stats\">\n                          <h4></h4>\n                          <p></p>\n                        </div>\n\n                        <div class=\"stats\">\n                          <h4>{{ categorySummary }}</h4>\n                          <p>\n                            Categories\n                          </p>\n                        </div>\n                        <div class=\"stats\">\n                          <h4></h4>\n                          <p></p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"footer\"></div>\n                </div>\n                <!-- end back panel -->\n              </div>\n              <!-- end card -->\n            </div>\n            <!-- end card-container -->\n          </div>\n          <div\n            class=\"col-md-3 imgdiv\"\n            routerLink=\"/roles\"\n            *ngIf=\"user.type == 'admin' || user.type == 'superAdmin'\"\n          >\n            <div class=\"card-container\">\n              <div class=\"card\">\n                <div class=\"front\">\n                  <div class=\"cover\">\n                    <img src=\"../../../assets/images/cardbg.jpg\" />\n                  </div>\n                  <div class=\"user\">\n                    <img\n                      class=\"img-circle\"\n                      src=\"../../../assets/images/role.png\"\n                    />\n                  </div>\n                  <div class=\"content\">\n                    <div class=\"main\">\n                      <h3 class=\"name\">Roles</h3>\n                      <p class=\"profession\"></p>\n\n                      <p class=\"text-center\">\n                        All roles within the system can be viewed. A new role\n                        can be created based on the incoming request if not\n                        already available.\n                      </p>\n                    </div>\n                    <div class=\"footer\"></div>\n                  </div>\n                </div>\n                <!-- end front panel -->\n                <div class=\"back\">\n                  <div class=\"header\">\n                    <h5 class=\"motto\">\n                      \"Cover your nose and mouth with your bent elbow or a\n                      tissue when you cough or sneeze.\"\n                    </h5>\n                  </div>\n                  <div class=\"content\">\n                    <div class=\"main\">\n                      <h4 class=\"text-center\">Brief Overview</h4>\n                      <p class=\"text-center\">\n                        The below depicts the total number of roles which are\n                        actively participating for resolving the requests\n                        created.\n                      </p>\n\n                      <div class=\"stats-container\">\n                        <div class=\"stats\">\n                          <h4></h4>\n                          <p></p>\n                        </div>\n\n                        <div class=\"stats\">\n                          <h4>{{ roleSummary }}</h4>\n                          <p>\n                            Roles\n                          </p>\n                        </div>\n                        <div class=\"stats\">\n                          <h4></h4>\n                          <p></p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"footer\"></div>\n                </div>\n                <!-- end back panel -->\n              </div>\n              <!-- end card -->\n            </div>\n            <!-- end card-container -->\n          </div>\n          <div class=\"col-md-3 imgdiv\" routerLink=\"/requests\" *ngIf=\"user.type\">\n            <div class=\"card-container\">\n              <div class=\"card\">\n                <div class=\"front\">\n                  <div class=\"cover\">\n                    <img src=\"../../../assets/images/cardbg.jpg\" />\n                  </div>\n                  <div class=\"user\">\n                    <img\n                      class=\"img-circle\"\n                      src=\"../../../assets/images/request.jpg\"\n                    />\n                  </div>\n                  <div class=\"content\">\n                    <div class=\"main\">\n                      <h3 class=\"name\">Requests</h3>\n                      <p class=\"profession\"></p>\n\n                      <p class=\"text-center\">\n                        The complete set of requests can be viewed. A new\n                        request can be regstered by mapping it to the\n                        corresponding service provider.\n                      </p>\n                    </div>\n                    <div class=\"footer\"></div>\n                  </div>\n                </div>\n                <!-- end front panel -->\n                <div class=\"back\">\n                  <div class=\"header\">\n                    <h5 class=\"motto\">\n                      \"Follow the directions of your local health authority.\"\n                    </h5>\n                  </div>\n                  <div class=\"content\">\n                    <div class=\"main\">\n                      <h4 class=\"text-center\">Brief Overview</h4>\n                      <p class=\"text-center\">\n                        The below depicts the total count of requests that have\n                        been raised along with their corresponding statuses..\n                      </p>\n\n                      <div class=\"stats-container\">\n                        <div\n                          class=\"stats\"\n                          *ngFor=\"let summary of requestsSummary\"\n                        >\n                          <h4>{{ summary.count }}</h4>\n                          <p>\n                            {{ statuses[summary._id - 1] }}\n                          </p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"footer\"></div>\n                </div>\n                <!-- end back panel -->\n              </div>\n              <!-- end card -->\n            </div>\n            <!-- end card-container -->\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/admin/admin.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/admin/admin.component.ts ***!
  \*****************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_toaster_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/toaster.service */ "./src/app/services/toaster.service.ts");
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/request.service */ "./src/app/services/request.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utils_utils_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/utils.json */ "./src/app/utils/utils.json");
var _utils_utils_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/Object.assign({}, _utils_utils_json__WEBPACK_IMPORTED_MODULE_4__, {"default": _utils_utils_json__WEBPACK_IMPORTED_MODULE_4__});
/* harmony import */ var _services_role_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/role.service */ "./src/app/services/role.service.ts");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AdminComponent = /** @class */ (function () {
    function AdminComponent(toaster, route, _request, _role, _category, _user) {
        this.toaster = toaster;
        this.route = route;
        this._request = _request;
        this._role = _role;
        this._category = _category;
        this._user = _user;
        this.statuses = _utils_utils_json__WEBPACK_IMPORTED_MODULE_4__.statuses.map(function (d) { return d.label; });
        this.requestsSummary = [];
        this.roleSummary = [];
        this.categorySummary = [];
        this.userSummary = [];
        this.user = localStorage.getItem("user")
            ? JSON.parse(localStorage.getItem("user"))
            : "";
        this.type = this.user.type === "superAdmin" ? "admin" : "regular";
        this.userType = this.user.type === "superAdmin" ? "Admins" : "Volunteers/Service Providers";
    }
    AdminComponent.prototype.loadDahsboard = function () {
        var _this = this;
        this._request.summary(this.user._id).subscribe(function (res) {
            if (res.data == null)
                _this.toaster.showError(res.message);
            else
                _this.requestsSummary = res.data;
        }, function (error) {
            _this.toaster.showError(error.error.message);
            if (error.error.statusCode === 403)
                _this.route.navigate(["login"]);
        });
        this._role.summary().subscribe(function (res) {
            if (res.data == null)
                _this.toaster.showError(res.message);
            else
                _this.roleSummary = res.data;
        }, function (error) {
            _this.toaster.showError(error.error.message);
            if (error.error.statusCode === 403)
                _this.route.navigate(["login"]);
        });
        this._category.summary().subscribe(function (res) {
            if (res.data == null)
                _this.toaster.showError(res.message);
            else
                _this.categorySummary = res.data;
        }, function (error) {
            _this.toaster.showError(error.error.message);
            if (error.error.statusCode === 403)
                _this.route.navigate(["login"]);
        });
        this._user.summary(this.type).subscribe(function (res) {
            if (res.data == null)
                _this.toaster.showError(res.message);
            else
                _this.userSummary = res.data;
        }, function (error) {
            _this.toaster.showError(error.error.message);
            if (error.error.statusCode === 403)
                _this.route.navigate(["login"]);
        });
    };
    AdminComponent.prototype.ngOnInit = function () {
        if (this.user.type === undefined) {
            this.toaster.showError("Authentication Failed. Please login again.");
            this.route.navigate(["login"]);
            return;
        }
        this.loadDahsboard();
    };
    AdminComponent.prototype.login = function () { };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-admin",
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/components/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/components/admin/admin.component.css"), __webpack_require__(/*! ../../../assets/styles/rotating-card.css */ "./src/assets/styles/rotating-card.css")],
        }),
        __metadata("design:paramtypes", [_services_toaster_service__WEBPACK_IMPORTED_MODULE_1__["ToasterService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"],
            _services_role_service__WEBPACK_IMPORTED_MODULE_5__["RolesService"],
            _services_category_service__WEBPACK_IMPORTED_MODULE_6__["CategoryService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/components/category/category.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/category/category.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\n  margin-top: 20px;\n}\n\nbutton:hover {\n  opacity: 0.8;\n}\n\n.category {\n  background-color: white;\n  padding: 15px;\n  border-radius: 10px;\n  box-shadow: 2px 2px 2px 2px;\n  margin-top: 20px;\n  margin-bottom: 30px;\n  border: 3px solid transparent;\n  background-clip: padding-box;\n  min-height: 100px;\n}\n\n.buttondiv {\n  text-align: center;\n}\n"

/***/ }),

/***/ "./src/app/components/category/category.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/category/category.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main col-md-12\">\n  <h2 class=\"col-md-12\" style=\"text-align: center;color:white\">Available Categories</h2>\n  <div class=\"col-md-12\">\n    <ag-grid-angular\n      style=\"height: 600px;\"\n      class=\"ag-theme-alpine col-md-12\"\n      [rowData]=\"rowData\"\n      [columnDefs]=\"columnDefs\"\n      [headerHeight]=\"50\"\n      [rowHeight]=\"55\"\n      [suppressMenuHide]=\"true\"\n      (gridReady)=\"onGridReady($event)\"\n    >\n    </ag-grid-angular>\n  </div>\n  <div class=\"col-md-12 buttondiv\" *ngIf=\"user.type == 'admin'\">\n    <button class=\"btn btn-primary\" type=\"button\" routerLink=\"/category/create\">\n      Create a new category\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/category/category.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/category/category.component.ts ***!
  \***********************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_toaster_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/toaster.service */ "./src/app/services/toaster.service.ts");
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/category.service */ "./src/app/services/category.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoryComponent = /** @class */ (function () {
    function CategoryComponent(_category, route, toaster) {
        this._category = _category;
        this.route = route;
        this.toaster = toaster;
        this.user = localStorage.getItem("user")
            ? JSON.parse(localStorage.getItem("user"))
            : "";
        this.categories = [];
        this.columnDefs = [];
        this.rowData = [];
        this.gridApi = [];
        this.gridColumnApi = [];
    }
    CategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._category.list().subscribe(function (res) {
            if (res.data == null)
                _this.toaster.showError(res.message);
            else {
                _this.categories = res.data;
                _this.columnDefs = [
                    {
                        headerName: "Category",
                        field: "name",
                        cellStyle: { border: "1px solid lightgrey" },
                        sortable: true,
                        filter: true,
                    },
                    {
                        headerName: "Description",
                        field: "description",
                        cellStyle: { border: "1px solid lightgrey" },
                    },
                ];
                _this.rowData = _this.categories;
            }
        }, function (error) {
            _this.toaster.showError(error.error.message);
            if (error.error.statusCode === 403)
                _this.route.navigate(["login"]);
        });
    };
    CategoryComponent.prototype.onGridReady = function (params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        params.api.sizeColumnsToFit();
    };
    CategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-category",
            template: __webpack_require__(/*! ./category.component.html */ "./src/app/components/category/category.component.html"),
            styles: [__webpack_require__(/*! ./category.component.css */ "./src/app/components/category/category.component.css")],
        }),
        __metadata("design:paramtypes", [src_app_services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_toaster_service__WEBPACK_IMPORTED_MODULE_2__["ToasterService"]])
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "./src/app/components/category/create-category/create-category.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/components/category/create-category/create-category.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n    width: 50%;\n    box-shadow: 3px 3px 3px 3px;\n    background-color: white;\n    border-radius: 20px;\n    padding: 40px;\n    position: absolute;\n    top: 50%;\n    right: 50%;\n    -webkit-transform: translate(50%, -50%);\n            transform: translate(50%, -50%);\n  }\n  \n  form {\n    border: 3px solid #f1f1f1;\n    padding: 20px;\n    border-radius: 20px;\n  }\n  \n  input[type=\"text\"],\n  input[type=\"password\"] {\n    padding: 12px 20px;\n    margin-bottom: 20px;\n    display: inline-block;\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n    border-radius: 15px;\n  }\n  \n  select {\n      margin-bottom: 20px;\n  }\n  \n  button {\n    background-color: #4caf50;\n    color: white;\n    padding: 14px 20px;\n    margin: 8px 0;\n    border: none;\n    cursor: pointer;\n  }\n  \n  .disabled {\n    background-color: lightgrey;\n  }\n  \n  .container {\n    padding: 16px;\n  }\n  \n  .ng-valid[required],\n  .ng-valid.required {\n    border-left: 5px solid #42a948;\n    /* green */\n  }\n  \n  .ng-invalid:not(form) {\n    border-left: 5px solid #a94442;\n    /* red */\n  }\n  \n  .buttondiv {\n    text-align: center;\n  }\n\n  "

/***/ }),

/***/ "./src/app/components/category/create-category/create-category.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/category/create-category/create-category.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main col-md-12\">\n  <h2 style=\"text-align:center\">Create Category</h2>\n  <form class=\"col-md-12\" #categoryForm=\"ngForm\" (ngSubmit)=\"create(category)\">\n    <div class=\"container col-md-12\">\n      <label class=\"col-md-12\" for=\"category\"><b>Category</b></label>\n      <input\n        type=\"text\"\n        [(ngModel)]=\"category.name\"\n        class=\"form-control col-md-12\"\n        placeholder=\"Enter Category\"\n        name=\"categoryName\"\n        required\n        #categoryName=\"ngModel\"\n      />\n      <div\n        [hidden]=\"categoryName.valid || categoryName.pristine\"\n        class=\"alert alert-danger col-md-12\"\n      >\n        Category Name is required\n      </div>\n\n      <label class=\"col-md-12\" for=\"psw\"><b>Description</b></label>\n      <input\n        type=\"text\"\n        [(ngModel)]=\"category.description\"\n        class=\"form-control col-md-12\"\n        placeholder=\"Enter Description\"\n        name=\"description\"\n        #description=\"ngModel\"\n      />\n      <div class=\"col-md-12 buttondiv\">\n      <button class=\"btn btn-success\" [ngClass]=\"{disabled:!categoryForm.form.valid}\" [disabled]=\"!categoryForm.form.valid\" type=\"submit\">\n        Create Category\n      </button>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/category/create-category/create-category.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/category/create-category/create-category.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CreateCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCategoryComponent", function() { return CreateCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_toaster_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/toaster.service */ "./src/app/services/toaster.service.ts");
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/category.service */ "./src/app/services/category.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateCategoryComponent = /** @class */ (function () {
    function CreateCategoryComponent(_category, route, toaster) {
        this._category = _category;
        this.route = route;
        this.toaster = toaster;
        this.category = {};
        this.user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : "";
    }
    CreateCategoryComponent.prototype.ngOnInit = function () {
        if (this.user.type === undefined) {
            this.toaster.showError("Authentication Failed. Please login again.");
            this.route.navigate(['login']);
        }
    };
    CreateCategoryComponent.prototype.create = function (data) {
        var _this = this;
        this._category.create(data).subscribe(function (res) {
            if (res.message == "success")
                _this.route.navigate(["/category"]);
            else
                _this.toaster.showError(res.message);
        }, function (error) {
            _this.toaster.showError(error.error.message);
            if (error.error.statusCode === 403)
                _this.route.navigate(["login"]);
        });
    };
    CreateCategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-create-category",
            template: __webpack_require__(/*! ./create-category.component.html */ "./src/app/components/category/create-category/create-category.component.html"),
            styles: [__webpack_require__(/*! ./create-category.component.css */ "./src/app/components/category/create-category/create-category.component.css")],
        }),
        __metadata("design:paramtypes", [src_app_services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_toaster_service__WEBPACK_IMPORTED_MODULE_2__["ToasterService"]])
    ], CreateCategoryComponent);
    return CreateCategoryComponent;
}());



/***/ }),

/***/ "./src/app/components/cell_renderer/requestCellRenderer/cell_renderer.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/components/cell_renderer/requestCellRenderer/cell_renderer.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\n    padding: 10px;\n    margin-right: 10px;\n    width: 70px;\n    margin-top: 5px;\n    margin-bottom: 5px;\n}"

/***/ }),

/***/ "./src/app/components/cell_renderer/requestCellRenderer/cell_renderer.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/cell_renderer/requestCellRenderer/cell_renderer.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-primary\" type=\"button\" *ngIf=\"readAccess&&medical\" routerLink=\"/requests/edit/medical/{{data._id}}\">Edit</button>\n<button class=\"btn btn-primary\" type=\"button\" *ngIf=\"readAccess&&!medical\" routerLink=\"/requests/edit/nonmedical/{{data._id}}\">Edit</button>\n<!-- <button class=\"btn btn-primary\" type=\"button\" routerLink=\"/requests/interact/{{data._id}}\">Interact</button> -->"

/***/ }),

/***/ "./src/app/components/cell_renderer/requestCellRenderer/cell_renderer.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/cell_renderer/requestCellRenderer/cell_renderer.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: RequestCellRendererComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestCellRendererComponent", function() { return RequestCellRendererComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RequestCellRendererComponent = /** @class */ (function () {
    function RequestCellRendererComponent(route) {
        this.route = route;
        this.medical = true;
        this.user = localStorage.getItem("user")
            ? JSON.parse(localStorage.getItem("user"))
            : "";
        this.readAccess = (this.user.role && this.user.role.requestReadAccess) ||
            this.user.type === "admin";
    }
    RequestCellRendererComponent.prototype.agInit = function (params) {
        this.params = params;
        console.log(this.params);
        this.data = params.data;
    };
    RequestCellRendererComponent.prototype.ngOnInit = function () {
        var url = this.route.url;
        if (url.indexOf("non") > -1) {
            this.medical = false;
        }
        else
            this.medical = true;
    };
    RequestCellRendererComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-cell_renderer",
            template: __webpack_require__(/*! ./cell_renderer.component.html */ "./src/app/components/cell_renderer/requestCellRenderer/cell_renderer.component.html"),
            styles: [__webpack_require__(/*! ./cell_renderer.component.css */ "./src/app/components/cell_renderer/requestCellRenderer/cell_renderer.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RequestCellRendererComponent);
    return RequestCellRendererComponent;
}());



/***/ }),

/***/ "./src/app/components/cell_renderer/userCellRenderer/cell_renderer.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/components/cell_renderer/userCellRenderer/cell_renderer.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\n    padding: 10px;\n    margin-right: 10px;\n    width: 70px;\n    margin-top: 5px;\n    margin-bottom: 5px;\n}"

/***/ }),

/***/ "./src/app/components/cell_renderer/userCellRenderer/cell_renderer.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/components/cell_renderer/userCellRenderer/cell_renderer.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-primary\" type=\"button\" routerLink=\"/user/edit/{{data._id}}\">Edit</button>\n<button class=\"btn btn-primary\" type=\"button\">Enable</button>\n<button class=\"btn btn-primary\" type=\"button\">Disable</button>"

/***/ }),

/***/ "./src/app/components/cell_renderer/userCellRenderer/cell_renderer.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/cell_renderer/userCellRenderer/cell_renderer.component.ts ***!
  \**************************************************************************************/
/*! exports provided: UserCellRendererComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCellRendererComponent", function() { return UserCellRendererComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserCellRendererComponent = /** @class */ (function () {
    function UserCellRendererComponent() {
        this.user = localStorage.getItem("user")
            ? JSON.parse(localStorage.getItem("user"))
            : "";
    }
    UserCellRendererComponent.prototype.agInit = function (params) {
        this.params = params;
        this.data = params.data;
    };
    UserCellRendererComponent.prototype.ngOnInit = function () { };
    UserCellRendererComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-cell_renderer",
            template: __webpack_require__(/*! ./cell_renderer.component.html */ "./src/app/components/cell_renderer/userCellRenderer/cell_renderer.component.html"),
            styles: [__webpack_require__(/*! ./cell_renderer.component.css */ "./src/app/components/cell_renderer/userCellRenderer/cell_renderer.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], UserCellRendererComponent);
    return UserCellRendererComponent;
}());



/***/ }),

/***/ "./src/app/components/excelImport/excelImport.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/excelImport/excelImport.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  text-align: center;\n}\n\n.buttondiv {\n  margin-top: 30px;\n  text-align: center;\n}\n\n.file-input {\n  display: inline-block;\n  margin-top: 50px;\n  text-align: left;\n  background: #fff;\n  padding: 16px;\n  width: 450px;\n  position: relative;\n  border-radius: 3px;\n}\n\n.file-input > [type=\"file\"] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  z-index: 10;\n  cursor: pointer;\n}\n\n.file-input > .button {\n  display: inline-block;\n  cursor: pointer;\n  background: #eee;\n  padding: 8px 16px;\n  border-radius: 2px;\n  margin-right: 8px;\n}\n\n.file-input:hover > .button {\n  background: dodgerblue;\n  color: white;\n}\n\n.file-input > .label {\n  color: #333;\n  white-space: nowrap;\n  opacity: 0.3;\n}\n\n.file-input.-chosen > .label {\n  opacity: 1;\n}\n"

/***/ }),

/***/ "./src/app/components/excelImport/excelImport.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/excelImport/excelImport.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main col-md-12\">\n  <h2 class=\"col-md-12\" style=\"text-align: center; color: white;\">\n    Import Data\n  </h2>\n\n  <div class='file-input'>\n    <input type='file' (change)=\"fileSelect($event)\">\n    <span class='button'>Choose</span>\n    <span class='label' data-js-label>No file selected</span>\n  </div>\n\n  <div class=\"col-md-12 buttondiv\">\n    <button class=\"btn btn-primary\" type=\"button\" (click)=\"uploadJson()\">\n      Upload\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/excelImport/excelImport.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/excelImport/excelImport.component.ts ***!
  \*****************************************************************/
/*! exports provided: ExcelImport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcelImport", function() { return ExcelImport; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/request.service */ "./src/app/services/request.service.ts");
/* harmony import */ var _services_medicalRequest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/medicalRequest.service */ "./src/app/services/medicalRequest.service.ts");
/* harmony import */ var src_app_services_toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/toaster.service */ "./src/app/services/toaster.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ExcelImport = /** @class */ (function () {
    function ExcelImport(toaster, _request, _mediacalRequest, route) {
        this.toaster = toaster;
        this._request = _request;
        this._mediacalRequest = _mediacalRequest;
        this.route = route;
        this.user = localStorage.getItem("user")
            ? JSON.parse(localStorage.getItem("user"))
            : "";
        this.uploadData = [];
        this.uploadType = "";
    }
    ExcelImport.prototype.ngOnInit = function () { };
    ExcelImport.prototype.onFileChange = function (ev) {
        var _this = this;
        var workBook = null;
        var jsonData = null;
        var reader = new FileReader();
        var file = ev.target.files[0];
        reader.onload = function (event) {
            var data = reader.result;
            workBook = xlsx__WEBPACK_IMPORTED_MODULE_1__["read"](data, { type: "binary" });
            jsonData = workBook.SheetNames.reduce(function (initial, name) {
                var sheet = workBook.Sheets[name];
                initial[name] = xlsx__WEBPACK_IMPORTED_MODULE_1__["utils"].sheet_to_json(sheet);
                return initial;
            }, {});
            //This is where the data is being displayed. dataString variable contains the json data.
            var dataString = JSON.stringify(jsonData);
            _this.uploadData = JSON.parse(dataString);
        };
        reader.readAsBinaryString(file);
    };
    ExcelImport.prototype.fileSelect = function (ev) {
        var inputs = document.querySelectorAll(".file-input");
        for (var i = 0, len = inputs.length; i < len; i++) {
            this.customInput(inputs[i], ev);
        }
    };
    ExcelImport.prototype.customInput = function (el, ev) {
        var fileInput = el.querySelector('[type="file"]');
        var label = el.querySelector("[data-js-label]");
        if (!fileInput.value)
            return;
        var value = fileInput.value.replace(/^.*[\\\/]/, "");
        el.className += " -chosen";
        label.innerText = value;
        this.onFileChange(ev);
    };
    ExcelImport.prototype.uploadJson = function () {
        var _this = this;
        var label = document.querySelector("[data-js-label]");
        if (label.innerHTML == "No file selected")
            this.toaster.showError("Please select a file");
        console.log(this.uploadData);
        if (this.uploadData["Medical"] !== undefined) {
            this.uploadType = "Medical";
            this.uploadType = "Non-Medical";
            this._mediacalRequest
                .upload({ createdBy: this.user._id, data: this.uploadData })
                .subscribe(function (res) {
                if (res.data == null)
                    _this.toaster.showError(res.message);
                else {
                    _this.toaster.showSuccess("Upload successful");
                    _this.route.navigate(["/requests/home"]);
                }
            }, function (error) {
                _this.toaster.showError(error.error.message);
                if (error.error.statusCode === 403)
                    _this.route.navigate(["login"]);
            });
        }
        else {
            this.uploadType = "Non-Medical";
            this._request
                .upload({ createdBy: this.user._id, data: this.uploadData })
                .subscribe(function (res) {
                if (res.data == null)
                    _this.toaster.showError(res.message);
                else {
                    _this.toaster.showSuccess("Upload successful");
                    _this.route.navigate(["/requests/home"]);
                }
            }, function (error) {
                _this.toaster.showError(error.error.message);
                if (error.error.statusCode === 403)
                    _this.route.navigate(["login"]);
            });
        }
        // this.toaster.showSuccess("Upload successful");
        // this.route.navigate(['/requests']);
    };
    ExcelImport = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-excel-import",
            template: __webpack_require__(/*! ./excelImport.component.html */ "./src/app/components/excelImport/excelImport.component.html"),
            styles: [__webpack_require__(/*! ./excelImport.component.css */ "./src/app/components/excelImport/excelImport.component.css")],
        }),
        __metadata("design:paramtypes", [src_app_services_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"],
            _services_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"],
            _services_medicalRequest_service__WEBPACK_IMPORTED_MODULE_3__["MedicalRequestService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], ExcelImport);
    return ExcelImport;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " .main{\n   width: 50%;\n   box-shadow: 3px 3px 3px 3px;\n   background-color: white;\n   border-radius: 20px;\n   padding: 40px;\n   position: absolute;\n   top: 50%;\n   right:50%;\n   -webkit-transform: translate(50%,-50%);\n           transform: translate(50%,-50%);\n } \n \n form {\n    border: 3px solid #f1f1f1;\n    padding: 20px;\n    border-radius: 20px;\n  } \n \n input[type=text],\n  input[type=password] {\n    padding: 12px 20px;\n    margin-bottom: 20px;\n    display: inline-block;\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n    border-radius: 15px;\n  } \n \n button {\n    background-color: #4CAF50;\n    color: white;\n    padding: 14px 20px;\n    margin: 8px 0;\n    border: none;\n    border-radius: 5px;\n  } \n \n .disabled {\n    background-color: lightgrey;\n  } \n \n .cancelbtn {\n    width: auto;\n    padding: 10px 18px;\n    background-color: #f44336;\n  } \n \n .imgcontainer {\n    text-align: center;\n    margin: 24px 0 12px 0;\n  } \n \n img.avatar {\n    width: 40%;\n    border-radius: 50%;\n  } \n \n .container {\n    padding: 16px;\n  } \n \n span.psw {\n    float: right;\n    padding-top: 16px;\n  } \n \n .ng-valid[required],\n  .ng-valid.required {\n    border-left: 5px solid #42A948;\n    /* green */\n  } \n \n .ng-invalid:not(form) {\n    border-left: 5px solid #a94442;\n    /* red */\n  }"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n  <div class=\"main col-md-12\">\n    <h2 style=\"text-align: center;\">Login</h2>\n    <form class=\"col-md-12\" #loginForm=\"ngForm\" (ngSubmit)=\"login(user)\">\n      <div class=\"container col-md-12\">\n        <label class=\"col-md-12\" for=\"uname\"><b>Username</b></label>\n        <input\n          type=\"text\"\n          [(ngModel)]=\"user.userName\"\n          class=\"form-control col-md-12\"\n          placeholder=\"Enter Username\"\n          name=\"userName\"\n          required\n          #userName=\"ngModel\"\n        />\n        <div\n          [hidden]=\"userName.valid || userName.pristine\"\n          class=\"alert alert-danger col-md-12\"\n        >\n          Username is required\n        </div>\n\n        <label class=\"col-md-12\" for=\"psw\"><b>Password</b></label>\n        <input\n          type=\"password\"\n          [(ngModel)]=\"user.password\"\n          class=\"form-control col-md-12\"\n          placeholder=\"Enter Password\"\n          name=\"password\"\n          required\n          #password=\"ngModel\"\n        />\n        <div\n          [hidden]=\"password.valid || password.pristine\"\n          class=\"alert alert-danger col-md-12\"\n        >\n          Password is required\n        </div>\n        <button class=\"col-md-12 btn btn-success\" [ngClass]=\"{disabled:!loginForm.form.valid}\" [disabled]=\"!loginForm.form.valid\" type=\"submit\">Login</button>\n      </div>\n    </form>\n  </div>\n</body>\n\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_toaster_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/toaster.service */ "./src/app/services/toaster.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(_user, route, toaster) {
        this._user = _user;
        this.route = route;
        this.toaster = toaster;
        this.user = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
        document.getElementById("menu_id").style.display = "none";
        this._user.logout();
    };
    LoginComponent.prototype.goHome = function () {
        alert('hasd');
    };
    LoginComponent.prototype.login = function (data) {
        var _this = this;
        localStorage.setItem("token", "");
        this._user.login(data).subscribe(function (res) {
            if (res.data == null) {
                _this.toaster.showError(res.msg);
            }
            else {
                var data_1 = res.data;
                var role = data_1.userDetails.type;
                _this._user.saveTokenUser(data_1.jwtToken, role, JSON.stringify(data_1.userDetails));
                if (role == "superAdmin" || role == "admin") {
                    _this.route.navigate(["/home"]);
                    document.getElementById('menu_id').style.display = "block";
                    document.getElementById('mySidenav').getElementsByTagName('a')[2].style.display = "none";
                    document.getElementById('mySidenav').getElementsByTagName('a')[1].style.display = "block";
                }
                else {
                    _this.route.navigate(["/requests/home"]);
                    document.getElementById('menu_id').style.display = "block";
                    document.getElementById('mySidenav').getElementsByTagName('a')[1].style.display = "none";
                    document.getElementById('mySidenav').getElementsByTagName('a')[2].style.display = "block";
                }
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-login",
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")],
        }),
        __metadata("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_toaster_service__WEBPACK_IMPORTED_MODULE_2__["ToasterService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  width: 50%;\n  box-shadow: 3px 3px 3px 3px;\n  background-color: white;\n  border-radius: 20px;\n  padding: 40px;\n  position: absolute;\n  top: 50%;\n  right: 50%;\n  -webkit-transform: translate(50%, -50%);\n          transform: translate(50%, -50%);\n}\n\nform {\n  border: 3px solid #f1f1f1;\n  padding: 20px;\n  border-radius: 20px;\n}\n\ninput[type=\"text\"],\ninput[type=\"password\"] {\n  padding: 12px 20px;\n  margin-bottom: 20px;\n  display: inline-block;\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n  border-radius: 15px;\n}\n\nselect {\n    margin-bottom: 20px;\n}\n\nbutton {\n  background-color: #4caf50;\n  color: white;\n  padding: 14px 20px;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n}\n\n.disabled {\n  background-color: lightgrey;\n}\n\n.buttondiv{\n  text-align: center;\n}\n\n.container {\n  padding: 16px;\n}\n\nspan.psw {\n  float: right;\n  padding-top: 16px;\n}\n\n.ng-valid[required],\n.ng-valid.required {\n  border-left: 5px solid #42a948;\n  /* green */\n}\n\n.ng-invalid:not(form) {\n  border-left: 5px solid #a94442;\n  /* red */\n}\n\n/* Change styles for span and cancel button on extra small screens */\n\n@media screen and (max-width: 300px) {\n  span.psw {\n    display: block;\n    float: none;\n  }\n  .cancelbtn {\n    width: 100%;\n  }\n}\n"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main col-md-12\">\n  <h2 style=\"text-align: center;\">\n    {{ heading }} {{ loggedInUser.type === \"superAdmin\" ? \"Admin\" : \"User\" }}\n  </h2>\n\n  <form class=\"col-md-12\" #signupForm=\"ngForm\" (ngSubmit)=\"signup(user)\">\n    <div class=\"container col-md-12\">\n      <label class=\"col-md-12\" for=\"fname\">\n        <b>First Name</b>\n      </label>\n      <input\n        type=\"text\"\n        [(ngModel)]=\"user.fName\"\n        class=\"form-control col-md-12\"\n        placeholder=\"Enter First name\"\n        name=\"fName\"\n        required\n        #fName=\"ngModel\"\n      />\n      <div\n        [hidden]=\"fName.valid || fName.pristine\"\n        class=\"alert alert-danger col-md-12\"\n      >\n        First name is required\n      </div>\n      <label class=\"col-md-12\" for=\"lname\">\n        <b>Last Name</b>\n      </label>\n      <input\n        type=\"text\"\n        [(ngModel)]=\"user.lName\"\n        class=\"form-control col-md-12\"\n        placeholder=\"Enter Last name\"\n        name=\"lName\"\n        required\n        #lName=\"ngModel\"\n      />\n      <div\n        [hidden]=\"lName.valid || lName.pristine\"\n        class=\"alert alert-danger col-md-12\"\n      >\n        Last name is required\n      </div>\n      <label class=\"col-md-12\" for=\"uname\">\n        <b>Username</b>\n      </label>\n      <input\n        type=\"text\"\n        [(ngModel)]=\"user.userName\"\n        class=\"form-control col-md-12\"\n        placeholder=\"Enter Username\"\n        name=\"userName\"\n        required\n        [readonly]=\"isEditMode\"\n        #userName=\"ngModel\"\n      />\n      <div\n        [hidden]=\"userName.valid || userName.pristine\"\n        class=\"alert alert-danger col-md-12\"\n      >\n        Username is required\n      </div>\n      <div *ngIf=\"!isEditMode\">\n        <label class=\"col-md-12\" for=\"psw\">\n          <b>Password</b>\n        </label>\n        <input\n          type=\"password\"\n          [(ngModel)]=\"user.password\"\n          class=\"form-control col-md-12\"\n          placeholder=\"Enter Password\"\n          name=\"password\"\n          required\n          #password=\"ngModel\"\n        />\n        <div\n          [hidden]=\"password.valid || password.pristine\"\n          class=\"alert alert-danger col-md-12\"\n        >\n          Password is required\n        </div>\n      </div>\n\n      <div *ngIf=\"loggedInUser.type === 'admin'\">\n        <label class=\"col-md-12\" for=\"category\">\n          <b>Category</b>\n        </label>\n        <select\n          [(ngModel)]=\"user.category\"\n          class=\"form-control col-md-12\"\n          placeholder=\"Select Category\"\n          name=\"category\"\n          required\n          #category=\"ngModel\"\n          (ngModelChange)=\"onChange($event)\"\n        >\n          <option disabled>Select Category</option>\n          <option\n            *ngFor=\"let category of categories\"\n            [ngValue]=\"category._id\"\n            >{{ category.name }}</option\n          >\n        </select>\n        <div\n          [hidden]=\"category.valid || category.pristine\"\n          class=\"alert alert-danger col-md-12\"\n        >\n          Category is required\n        </div>\n        <label class=\"col-md-12\" for=\"category\">\n          <b>Role</b>\n        </label>\n        <select\n          [(ngModel)]=\"user.role\"\n          class=\"form-control col-md-12\"\n          placeholder=\"Select Category\"\n          name=\"role\"\n          required\n          #role=\"ngModel\"\n        >\n          <option disabled> Select Role</option>\n          <option *ngFor=\"let role of roles\" [ngValue]=\"role._id\">{{\n            role.name\n          }}</option>\n        </select>\n        <div\n          [hidden]=\"role.valid || role.pristine\"\n          class=\"alert alert-danger col-md-12\"\n        >\n          Role is required\n        </div>\n        <div class=\"custom-control custom-switch\">\n          <input\n            type=\"checkbox\"\n            class=\"custom-control-input\"\n            name=\"status\"\n            [(ngModel)]=\"user.status\"\n          />\n          <label class=\"custom-control-label\" for=\"customSwitch1\">\n            Enable / Disable user</label\n          >\n        </div>\n      </div>\n      <div class=\"col-md-12 buttondiv\">\n        <button\n          class=\"btn btn-success\"\n          [ngClass]=\"{ disabled: !signupForm.form.valid }\"\n          [disabled]=\"!signupForm.form.valid\"\n          type=\"submit\"\n        >\n          Sign Up\n        </button>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_toaster_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/toaster.service */ "./src/app/services/toaster.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var src_app_services_role_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/role.service */ "./src/app/services/role.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(route, _route, _user, _category, _roles, toaster) {
        var _this = this;
        this.route = route;
        this._route = _route;
        this._user = _user;
        this._category = _category;
        this._roles = _roles;
        this.toaster = toaster;
        this.loggedInUser = localStorage.getItem("user")
            ? JSON.parse(localStorage.getItem("user"))
            : "";
        this.heading = "";
        // type = this.loggedInUser.type === "admin" ? "regular" : "admin";
        this.type = this.loggedInUser !== ""
            ? this.loggedInUser.type === "admin"
                ? "regular"
                : "admin"
            : "";
        this.isEditMode = false;
        this.user = { type: this.type, status: true };
        this.roles = [];
        this.categories = [];
        this.loadCategories = function () {
            _this._category.list().subscribe(function (res) {
                if (res.data == null)
                    _this.toaster.showError(res.message);
                else
                    _this.categories = res.data;
            }, function (error) {
                _this.toaster.showError(error.error.message);
                if (error.error.statusCode === 403)
                    _this.route.navigate(["login"]);
            });
        };
        this.onChange = function (category) {
            _this._roles.getByCategory(category).subscribe(function (res) {
                if (res.data == null)
                    _this.toaster.showError(res.message);
                else
                    _this.roles = res.data;
            }, function (error) {
                _this.toaster.showError(error.error.message);
                if (error.error.statusCode === 403)
                    _this.route.navigate(["login"]);
            });
        };
        var url = this.route.url;
        if (url.indexOf("edit") > -1)
            this.isEditMode = true;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.loadCategories();
        this.loadData();
        this.heading = this.isEditMode ? "Edit" : "Create";
    };
    RegisterComponent.prototype.loadData = function () {
        var _this = this;
        if (this.isEditMode) {
            var id = this._route.snapshot.params["id"];
            this._user.getById(id).subscribe(function (res) {
                if (res.message == "success" && res.data[0]) {
                    var user = res.data[0];
                    _this.user = user;
                    _this.onChange(user.category);
                }
                else
                    _this.toaster.showError(res.message);
            }, function (error) {
                _this.toaster.showError(error.error.message);
                if (error.error.statusCode === 403)
                    _this.route.navigate(["login"]);
            });
        }
    };
    RegisterComponent.prototype.signup = function (data) {
        var _this = this;
        if (this.isEditMode) {
            this._user.update(data).subscribe(function (data) {
                if (data.status == "success") {
                    _this.toaster.showSuccess("User Updated successfully");
                    _this.route.navigate(["/user"]);
                }
                else
                    _this.toaster.showError(data.message);
            }, function (error) {
                _this.toaster.showError(error.error.message);
            });
        }
        else {
            this._user.signup(data).subscribe(function (data) {
                if (data.status == "success") {
                    _this.toaster.showSuccess("User registered successfully");
                    _this.route.navigate(["/user"]);
                }
                else
                    _this.toaster.showError(data.message);
            }, function (error) {
                _this.toaster.showError(error.error.message);
                if (error.error.statusCode === 403)
                    _this.route.navigate(["login"]);
            });
        }
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-register",
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            src_app_services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"],
            src_app_services_role_service__WEBPACK_IMPORTED_MODULE_5__["RolesService"],
            _services_toaster_service__WEBPACK_IMPORTED_MODULE_2__["ToasterService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/requests/request-create/medical/request-create.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/requests/request-create/medical/request-create.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n    width: 50%;\n    box-shadow: 3px 3px 3px 3px;\n    background-color: white;\n    border-radius: 20px;\n    padding: 40px;\n    position: absolute;\n    top: 50%;\n    right: 50%;\n    -webkit-transform: translate(50%, -18%);\n            transform: translate(50%, -18%);\n    overflow-y: auto;\n  }\n  \n  form {\n    border: 3px solid #f1f1f1;\n    padding: 20px;\n    border-radius: 20px;\n  }\n  \n  input {\n    padding: 12px 20px;\n    margin-bottom: 20px;\n    display: inline-block;\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n    border-radius: 15px;\n  }\n  \n  select, textarea {\n      margin-bottom: 20px;\n  }\n  \n  button {\n    background-color: #4caf50;\n    color: white;\n    padding: 14px 20px;\n    margin: 8px 0;\n    border: none;\n    cursor: pointer;\n  }\n  \n  .disabled {\n    background-color: lightgrey;\n  }\n  \n  .buttondiv{\n    text-align: center;\n  }\n  \n  .container {\n    padding: 16px;\n  }\n  \n  span.psw {\n    float: right;\n    padding-top: 16px;\n  }\n  \n  .ng-valid[required],\n  .ng-valid.required {\n    border-left: 5px solid #42a948;\n    /* green */\n  }\n  \n  .ng-invalid:not(form) {\n    border-left: 5px solid #a94442;\n    /* red */\n  }\n  \n  /* Change styles for span and cancel button on extra small screens */\n  \n  @media screen and (max-width: 300px) {\n    span.psw {\n      display: block;\n      float: none;\n    }\n    .cancelbtn {\n      width: 100%;\n    }\n  }\n  "

/***/ }),

/***/ "./src/app/components/requests/request-create/medical/request-create.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/components/requests/request-create/medical/request-create.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main col-md-12\">\n  <h2 style=\"text-align: center;\">{{ heading }} Request</h2>\n\n  <form\n    class=\"col-md-12\"\n    #requestForm=\"ngForm\"\n    (ngSubmit)=\"createRequest(request)\"\n  >\n    <div class=\"container col-md-12\">\n      <label class=\"col-md-12\" for=\"title\">\n        <b>Registration Number</b>\n      </label>\n      <input\n        type=\"text\"\n        [(ngModel)]=\"request.token\"\n        class=\"form-control col-md-12\"\n        placeholder=\"Enter Registration number\"\n        name=\"token\"\n        required\n        #token=\"ngModel\"\n      />\n      <div\n        [hidden]=\"token.valid || token.pristine\"\n        class=\"alert alert-danger col-md-12\"\n      >\n        Registration Number is required\n      </div>\n\n      <label class=\"col-md-12\" for=\"title\">\n        <b>Contact Number</b>\n      </label>\n      <input\n        type=\"number\"\n        [(ngModel)]=\"request.contactNumber\"\n        class=\"form-control col-md-12\"\n        placeholder=\"Enter Contact Number\"\n        name=\"contactNumber\"\n        required\n        #contactNumber=\"ngModel\"\n      />\n      <div\n        [hidden]=\"contactNumber.valid || contactNumber.pristine\"\n        class=\"alert alert-danger col-md-12\"\n      >\n        Contact Number is required\n      </div>\n\n      <label class=\"col-md-12\" for=\"age\">\n        <b>Age</b>\n      </label>\n      <input\n        type=\"number\"\n        [(ngModel)]=\"request.age\"\n        class=\"form-control col-md-12\"\n        placeholder=\"Age\"\n        name=\"age\"\n        #age=\"ngModel\"\n      />\n\n      <label class=\"col-md-12\" for=\"gender\">\n        <b>Gender</b>\n      </label>\n      <input\n        typ=\"text\"\n        [(ngModel)]=\"request.gender\"\n        placeholder=\"Gender\"\n        class=\"form-control col-md-12\"\n        name=\"gender\"\n        #gender=\"ngModel\"\n      />\n\n      <label class=\"col-md-12\" for=\"country\">\n        <b>Country</b>\n      </label>\n      <input\n        type=\"text\"\n        [(ngModel)]=\"request.country\"\n        class=\"form-control col-md-12\"\n        name=\"country\"\n        required\n        #country=\"ngModel\"\n      />\n\n      <div\n        [hidden]=\"country.valid || country.pristine\"\n        class=\"alert alert-danger col-md-12\"\n      >\n        Country is required\n      </div>\n\n      <label class=\"col-md-12\" for=\"area\">\n        <b>Area in the Country</b>\n      </label>\n      <input\n        type=\"text\"\n        [(ngModel)]=\"request.area\"\n        class=\"form-control col-md-12\"\n        placeholder=\"Enter Area in the Country\"\n        name=\"area\"\n        required\n        #area=\"ngModel\"\n      />\n      <div\n        [hidden]=\"area.valid || area.pristine\"\n        class=\"alert alert-danger col-md-12\"\n      >\n        Area in the Country is required\n      </div>\n      <label class=\"col-md-12\" for=\"status\">\n        <b>Request status New / Inprogrss / Solved</b>\n      </label>\n      <input\n        type=\"text\"\n        [(ngModel)]=\"request.status\"\n        class=\"form-control col-md-12\"\n        name=\"status\"\n        #status=\"ngModel\"\n        required\n      />\n\n      <div\n        [hidden]=\"status.valid || status.pristine\"\n        class=\"alert alert-danger col-md-12\"\n      >\n        status is required\n      </div>\n      <label class=\"col-md-12\" for=\"complaints\">\n        <b>Complaints</b>\n      </label>\n      <textarea\n        [(ngModel)]=\"request.complaints\"\n        class=\"form-control col-md-12\"\n        placeholder=\"Enter complaints\"\n        name=\"complaints\"\n        #complaints=\"ngModel\"\n      ></textarea>\n      <div *ngIf=\"isEditMode\">\n        <label class=\"col-md-12\" for=\"title\">\n          <b>Doctor Name</b>\n        </label>\n        <input\n          type=\"text\"\n          [(ngModel)]=\"request.assignedTo\"\n          class=\"form-control col-md-12\"\n          placeholder=\"Enter Doctor Name\"\n          name=\"assignedTo\"\n          required\n          #assignedTo=\"ngModel\"\n        />\n        <div\n          [hidden]=\"assignedTo.valid || assignedTo.pristine\"\n          class=\"alert alert-danger col-md-12\"\n        >\n          Doctor Name is required\n        </div>\n\n        <label class=\"col-md-12\" for=\"requirement\">\n          <b>Requirment General / Psych</b>\n        </label>\n        <input\n          type=\"text\"\n          [(ngModel)]=\"request.requirement\"\n          class=\"form-control col-md-12\"\n          name=\"requirement\"\n          #requirement=\"ngModel\"\n        />\n        <label class=\"col-md-12\" for=\"requirement\">\n          <b>Details</b>\n        </label>\n        <input\n          type=\"text\"\n          [(ngModel)]=\"request.details\"\n          class=\"form-control col-md-12\"\n          name=\"requirement\"\n          #requirement=\"ngModel\"\n        />\n        <label class=\"col-md-12\" for=\"covidStatus\">\n          <b>COVID Status</b>\n        </label>\n        <input\n          type=\"text\"\n          [(ngModel)]=\"request.covidStatus\"\n          class=\"form-control col-md-12\"\n          name=\"covidStatus\"\n          #covidStatus=\"ngModel\"\n        />\n\n        <label class=\"col-md-12\" for=\"medicalHistory\">\n          <b>Past Medical History</b>\n        </label>\n        <input\n          type=\"text\"\n          [(ngModel)]=\"request.medicalHistory\"\n          class=\"form-control col-md-12\"\n          name=\"medicalHistory\"\n          #medicalHistory=\"ngModel\"\n        />\n\n        <label class=\"col-md-12\" for=\"currentPrescription\">\n          <b>Current Prescription</b>\n        </label>\n        <input\n          type=\"text\"\n          [(ngModel)]=\"request.currentPrescription\"\n          class=\"form-control col-md-12\"\n          name=\"currentPrescription\"\n          #currentPrescription=\"ngModel\"\n        />\n\n        <label class=\"col-md-12\" for=\"currentIssues\">\n          <b>Current Issues</b>\n        </label>\n        <input\n          type=\"text\"\n          [(ngModel)]=\"request.currentIssues\"\n          class=\"form-control col-md-12\"\n          placeholder=\"Enter Current Issues\"\n          name=\"currentIssues\"\n          #currentIssues=\"ngModel\"\n        />\n\n        <label class=\"col-md-12\" for=\"advice\">\n          <b>Advice and prescription given</b>\n        </label>\n        <input\n          type=\"text\"\n          [(ngModel)]=\"request.advice\"\n          class=\"form-control col-md-12\"\n          placeholder=\"Enter Advice and prescription given\"\n          name=\"advice\"\n          #advice=\"ngModel\"\n        />\n\n        <label class=\"col-md-12\" for=\"prescriptionIssue\">\n          <b>Prescription Issued ?</b>\n        </label>\n        <input\n          type=\"text\"\n          [(ngModel)]=\"request.prescriptionIssue\"\n          class=\"form-control col-md-12\"\n          name=\"prescriptionIssue\"\n          #prescriptionIssue=\"ngModel\"\n        />\n\n        <label class=\"col-md-12\" for=\"medicalFollowup\">\n          <b>Medical / Mental /Social Follow up?</b>\n        </label>\n        <input\n          type=\"text\"\n          [(ngModel)]=\"request.medicalFollowup\"\n          class=\"form-control col-md-12\"\n          name=\"medicalFollowup\"\n          #medicalFollowup=\"ngModel\"\n        />\n\n        <label class=\"col-md-12\" for=\"comments\">\n          <b>Comments</b>\n        </label>\n        <textarea\n          [(ngModel)]=\"request.comments\"\n          class=\"form-control col-md-12\"\n          placeholder=\"Enter Comments\"\n          name=\"comments\"\n          #comments=\"ngModel\"\n        ></textarea>\n      </div>\n      <div class=\"col-md-12 buttondiv\">\n        <button\n          class=\"btn btn-success\"\n          [ngClass]=\"{ disabled: !requestForm.form.valid }\"\n          [disabled]=\"!requestForm.form.valid\"\n          type=\"submit\"\n        >\n          {{ heading }} Request\n        </button>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/requests/request-create/medical/request-create.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/requests/request-create/medical/request-create.component.ts ***!
  \****************************************************************************************/
/*! exports provided: RequestCreateMedicalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestCreateMedicalComponent", function() { return RequestCreateMedicalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_toaster_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/toaster.service */ "./src/app/services/toaster.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_medicalRequest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/medicalRequest.service */ "./src/app/services/medicalRequest.service.ts");
/* harmony import */ var src_app_utils_countries_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utils/countries.json */ "./src/app/utils/countries.json");
var src_app_utils_countries_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/Object.assign({}, src_app_utils_countries_json__WEBPACK_IMPORTED_MODULE_5__, {"default": src_app_utils_countries_json__WEBPACK_IMPORTED_MODULE_5__});
/* harmony import */ var src_app_utils_utils_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/utils/utils.json */ "./src/app/utils/utils.json");
var src_app_utils_utils_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/Object.assign({}, src_app_utils_utils_json__WEBPACK_IMPORTED_MODULE_6__, {"default": src_app_utils_utils_json__WEBPACK_IMPORTED_MODULE_6__});
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RequestCreateMedicalComponent = /** @class */ (function () {
    function RequestCreateMedicalComponent(route, _route, _user, _request, toaster) {
        var _this = this;
        this.route = route;
        this._route = _route;
        this._user = _user;
        this._request = _request;
        this.toaster = toaster;
        this.user = localStorage.getItem("user")
            ? JSON.parse(localStorage.getItem("user"))
            : "";
        this.heading = "";
        this.request = { createdBy: this.user._id };
        this.categories = [];
        this.roles = [];
        this.users = [];
        this.countryList = src_app_utils_countries_json__WEBPACK_IMPORTED_MODULE_5__;
        this.isEditMode = false;
        this.statuses = []; // utils.statuses;
        this.communicationModes = src_app_utils_utils_json__WEBPACK_IMPORTED_MODULE_6__.communicationModes;
        this.createRequest = function (request) {
            _this._request.create(request).subscribe(function (res) {
                if (res.message == "success")
                    _this.route.navigate(["/requests/medical"]);
                else
                    _this.toaster.showError(res.message);
            }, function (error) {
                _this.toaster.showError(error.error.message);
                if (error.error.statusCode === 403)
                    _this.route.navigate(["login"]);
            });
        };
        var url = this.route.url;
        if (url.indexOf("edit") > -1)
            this.isEditMode = true;
    }
    RequestCreateMedicalComponent.prototype.loadData = function () {
        var _this = this;
        var url = this.route.url;
        if (url.indexOf("edit") > -1) {
            var id = this._route.snapshot.params["id"];
            this._request.getById(id).subscribe(function (res) {
                if (res.message == "success" && res.data[0]) {
                    _this.request = res.data[0];
                }
                else
                    _this.toaster.showError(res.message);
            }, function (error) {
                _this.toaster.showError(error.error.message);
                if (error.error.statusCode === 403)
                    _this.route.navigate(["login"]);
            });
        }
    };
    RequestCreateMedicalComponent.prototype.ngOnInit = function () {
        this.loadData();
        var id = this._route.snapshot.params["id"];
        this.heading = id == undefined || id == null ? "Create" : "Edit";
    };
    RequestCreateMedicalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-request-create",
            template: __webpack_require__(/*! ./request-create.component.html */ "./src/app/components/requests/request-create/medical/request-create.component.html"),
            styles: [__webpack_require__(/*! ./request-create.component.css */ "./src/app/components/requests/request-create/medical/request-create.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            src_app_services_medicalRequest_service__WEBPACK_IMPORTED_MODULE_4__["MedicalRequestService"],
            _services_toaster_service__WEBPACK_IMPORTED_MODULE_2__["ToasterService"]])
    ], RequestCreateMedicalComponent);
    return RequestCreateMedicalComponent;
}());



/***/ }),

/***/ "./src/app/components/requests/request-create/nonmedical/request-create.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/components/requests/request-create/nonmedical/request-create.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n    width: 50%;\n    box-shadow: 3px 3px 3px 3px;\n    background-color: white;\n    border-radius: 20px;\n    padding: 40px;\n    position: absolute;\n    top: 50%;\n    right: 50%;\n    -webkit-transform: translate(50%, -20%);\n            transform: translate(50%, -20%);\n    overflow-y: auto;\n  }\n  \n  form {\n    border: 3px solid #f1f1f1;\n    padding: 20px;\n    border-radius: 20px;\n  }\n  \n  input {\n    padding: 12px 20px;\n    margin-bottom: 20px;\n    display: inline-block;\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n    border-radius: 15px;\n  }\n  \n  select, textarea {\n      margin-bottom: 20px;\n  }\n  \n  button {\n    background-color: #4caf50;\n    color: white;\n    padding: 14px 20px;\n    margin: 8px 0;\n    border: none;\n    cursor: pointer;\n  }\n  \n  .disabled {\n    background-color: lightgrey;\n  }\n  \n  .buttondiv{\n    text-align: center;\n  }\n  \n  .container {\n    padding: 16px;\n  }\n  \n  span.psw {\n    float: right;\n    padding-top: 16px;\n  }\n  \n  .ng-valid[required],\n  .ng-valid.required {\n    border-left: 5px solid #42a948;\n    /* green */\n  }\n  \n  .ng-invalid:not(form) {\n    border-left: 5px solid #a94442;\n    /* red */\n  }\n  \n  /* Change styles for span and cancel button on extra small screens */\n  \n  @media screen and (max-width: 300px) {\n    span.psw {\n      display: block;\n      float: none;\n    }\n    .cancelbtn {\n      width: 100%;\n    }\n  }\n  "

/***/ }),

/***/ "./src/app/components/requests/request-create/nonmedical/request-create.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/requests/request-create/nonmedical/request-create.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main col-md-12\">\n  <h2 style=\"text-align: center;\">{{ heading }} Request</h2>\n\n  <form\n    class=\"col-md-12\"\n    #requestForm=\"ngForm\"\n    (ngSubmit)=\"createRequest(request)\"\n  >\n    <div class=\"container col-md-12\">\n      <label class=\"col-md-12\" for=\"title\">\n        <b>Token Number</b>\n      </label>\n      <input\n        type=\"text\"\n        [(ngModel)]=\"request.token\"\n        class=\"form-control col-md-12\"\n        placeholder=\"Enter Token\"\n        name=\"token\"\n        required\n        #token=\"ngModel\"\n      />\n      <div\n        [hidden]=\"token.valid || token.pristine\"\n        class=\"alert alert-danger col-md-12\"\n      >\n        Token is required\n      </div>\n\n      <label class=\"col-md-12\" for=\"currentCountry\">\n        <b>Country of Residence</b>\n      </label>\n      <input\n        type=\"text\"\n        [(ngModel)]=\"request.currentCountry\"\n        class=\"form-control col-md-12\"\n        name=\"currentCountry\"\n        #country=\"ngModel\"\n      />\n\n      <label class=\"col-md-12\" for=\"name\">\n        <b>Full Name</b>\n      </label>\n      <input\n        type=\"text\"\n        [(ngModel)]=\"request.fullName\"\n        class=\"form-control col-md-12\"\n        placeholder=\"Enter Full Name\"\n        name=\"fullName\"\n        required\n        #fullName=\"ngModel\"\n      />\n      <div\n        [hidden]=\"fullName.valid || fullName.pristine\"\n        class=\"alert alert-danger col-md-12\"\n      >\n        Full Name is required\n      </div>\n\n      <label class=\"col-md-12\" for=\"phoneNumber\">\n        <b>Whatsapp Contact Number</b>\n      </label>\n      <input\n        type=\"text\"\n        [(ngModel)]=\"request.phoneNumber\"\n        class=\"form-control col-md-12\"\n        placeholder=\"Whatsapp Contact number\"\n        name=\"phoneNumber\"\n        #phoneNumber=\"ngModel\"\n        required\n      />\n      <div\n        [hidden]=\"phoneNumber.valid || phoneNumber.pristine\"\n        class=\"alert alert-danger col-md-12\"\n      >\n        Whatsapp Contact Number is required\n      </div>\n\n      <label class=\"col-md-12\" for=\"contactPhone\">\n        <b>Phone Contact Number</b>\n      </label>\n      <input\n        type=\"text\"\n        [(ngModel)]=\"request.contactPhone\"\n        class=\"form-control col-md-12\"\n        placeholder=\"Phone Contact Number\"\n        name=\"contactPhone\"\n        #contactPhone=\"ngModel\"\n        required\n      />\n      <div\n        [hidden]=\"contactPhone.valid || contactPhone.pristine\"\n        class=\"alert alert-danger col-md-12\"\n      >\n        Phone Contact Number is required\n      </div>\n\n      <label class=\"col-md-12\" for=\"age\">\n        <b>Age</b>\n      </label>\n      <input\n        type=\"number\"\n        [(ngModel)]=\"request.age\"\n        class=\"form-control col-md-12\"\n        placeholder=\"Age\"\n        name=\"age\"\n        #age=\"ngModel\"\n      />\n\n      <label class=\"col-md-12\" for=\"gender\">\n        <b>Gender</b>\n      </label>\n      <input\n        type=\"text\"\n        [(ngModel)]=\"request.gender\"\n        class=\"form-control col-md-12\"\n        name=\"gender\"\n        #gender=\"ngModel\"\n      />\n\n      <label class=\"col-md-12\" for=\"supportRequested\">\n        <b>Support Requested</b>\n      </label>\n      <input\n        type=\"text\"\n        [(ngModel)]=\"request.supportRequested\"\n        class=\"form-control col-md-12\"\n        placeholder=\"Enter Support Requested\"\n        name=\"supportRequested\"\n        required\n        #supportRequested=\"ngModel\"\n      />\n      <div\n        [hidden]=\"supportRequested.valid || supportRequested.pristine\"\n        class=\"alert alert-danger col-md-12\"\n      >\n        Support Requested is required\n      </div>\n\n      <label class=\"col-md-12\" for=\"supportRequiredFor\">\n        <b>Support Requested For</b>\n      </label>\n      <input\n        type=\"text\"\n        [(ngModel)]=\"request.supportRequiredFor\"\n        class=\"form-control col-md-12\"\n        placeholder=\"Enter Title\"\n        name=\"supportRequiredFor\"\n        #supportRequiredFor=\"ngModel\"\n      />\n\n      <label class=\"col-md-12\" for=\"contactFullName\">\n        <b>Person to be contacted</b>\n      </label>\n      <input\n        type=\"text\"\n        [(ngModel)]=\"request.contactFullName\"\n        class=\"form-control col-md-12\"\n        placeholder=\"Enter Person to be contacted\"\n        name=\"contactFullName\"\n        #contactFullName=\"ngModel\"\n      />\n\n      <label class=\"col-md-12\" for=\"houseNumber\">\n        <b>Flat No / House No / House Name</b>\n      </label>\n      <input\n        type=\"text\"\n        [(ngModel)]=\"request.houseNumber\"\n        class=\"form-control col-md-12\"\n        placeholder=\"Enter Flat No / House No / House Name\"\n        name=\"houseNumber\"\n        #houseNumber=\"ngModel\"\n        required\n      />\n      <div\n        [hidden]=\"houseNumber.valid || houseNumber.pristine\"\n        class=\"alert alert-danger col-md-12\"\n      >\n        Flat No / House No / House Name is required\n      </div>\n\n      <label class=\"col-md-12\" for=\"area\">\n        <b>Apartments / Local Area / Street / Road</b>\n      </label>\n      <input\n        type=\"text\"\n        [(ngModel)]=\"request.area\"\n        class=\"form-control col-md-12\"\n        placeholder=\"Enter Apartments / Local Area / Street / Road\"\n        name=\"area\"\n        #area=\"ngModel\"\n        required\n      />\n      <div\n        [hidden]=\"area.valid || area.pristine\"\n        class=\"alert alert-danger col-md-12\"\n      >\n        Apartments / Local Area / Street / Road is required\n      </div>\n\n      <label class=\"col-md-12\" for=\"landmark\">\n        <b>Landmark & Post Office</b>\n      </label>\n      <input\n        type=\"text\"\n        [(ngModel)]=\"request.landmark\"\n        class=\"form-control col-md-12\"\n        placeholder=\"Enter Landmark & Post Office\"\n        name=\"landmark\"\n        #landmark=\"ngModel\"\n      />\n\n      <label class=\"col-md-12\" for=\"district\">\n        <b>District / City</b>\n      </label>\n      <input\n        type=\"text\"\n        [(ngModel)]=\"request.district\"\n        class=\"form-control col-md-12\"\n        placeholder=\"Enter District / City\"\n        name=\"district\"\n        #district=\"ngModel\"\n        required\n      />\n      <div\n        [hidden]=\"district.valid || district.pristine\"\n        class=\"alert alert-danger col-md-12\"\n      >\n        District / City is required\n      </div>\n\n      <label class=\"col-md-12\" for=\"postal\">\n        <b>Pin or Postal Code</b>\n      </label>\n      <input\n        type=\"text\"\n        [(ngModel)]=\"request.postal\"\n        class=\"form-control col-md-12\"\n        placeholder=\"Enter Pin or Postal Code\"\n        name=\"postal\"\n        #postal=\"ngModel\"\n      />\n\n      <label class=\"col-md-12\" for=\"email\">\n        <b>EMAIL Address</b>\n      </label>\n      <input\n        type=\"text\"\n        [(ngModel)]=\"request.email\"\n        class=\"form-control col-md-12\"\n        placeholder=\"Enter EMAIL Address\"\n        name=\"email\"\n        #email=\"ngModel\"\n      />\n\n      <label class=\"col-md-12\" for=\"status\">\n        <b>Status</b>\n      </label>\n      <input\n        type=\"text\"\n        [(ngModel)]=\"request.status\"\n        class=\"form-control col-md-12\"\n        placeholder=\"Enter Status\"\n        name=\"status\"\n        #status=\"ngModel\"\n        required\n      />\n      <div\n        [hidden]=\"status.valid || status.pristine\"\n        class=\"alert alert-danger col-md-12\"\n      >\n        Status is required\n      </div>\n\n      <label class=\"col-md-12\" for=\"assignedTo\">\n        <b>Forwarded To</b>\n      </label>\n      <input\n        type=\"text\"\n        [(ngModel)]=\"request.assignedTo\"\n        class=\"form-control col-md-12\"\n        placeholder=\"Enter Forwarded To\"\n        name=\"assignedTo\"\n        #assignedTo=\"ngModel\"\n        required\n      />\n      <div\n        [hidden]=\"assignedTo.valid || assignedTo.pristine\"\n        class=\"alert alert-danger col-md-12\"\n      >\n        Forwarded To is required\n      </div>\n      <div class=\"col-md-12 buttondiv\">\n        <button\n          class=\"btn btn-success\"\n          [ngClass]=\"{ disabled: !requestForm.form.valid }\"\n          [disabled]=\"!requestForm.form.valid\"\n          type=\"submit\"\n        >\n          {{ heading }} Request\n        </button>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/requests/request-create/nonmedical/request-create.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/requests/request-create/nonmedical/request-create.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: RequestCreateNonMedicalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestCreateNonMedicalComponent", function() { return RequestCreateNonMedicalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_toaster_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/toaster.service */ "./src/app/services/toaster.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var src_app_services_role_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/role.service */ "./src/app/services/role.service.ts");
/* harmony import */ var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/request.service */ "./src/app/services/request.service.ts");
/* harmony import */ var src_app_utils_countries_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/utils/countries.json */ "./src/app/utils/countries.json");
var src_app_utils_countries_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/Object.assign({}, src_app_utils_countries_json__WEBPACK_IMPORTED_MODULE_7__, {"default": src_app_utils_countries_json__WEBPACK_IMPORTED_MODULE_7__});
/* harmony import */ var src_app_utils_utils_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/utils/utils.json */ "./src/app/utils/utils.json");
var src_app_utils_utils_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/Object.assign({}, src_app_utils_utils_json__WEBPACK_IMPORTED_MODULE_8__, {"default": src_app_utils_utils_json__WEBPACK_IMPORTED_MODULE_8__});
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var RequestCreateNonMedicalComponent = /** @class */ (function () {
    function RequestCreateNonMedicalComponent(route, _route, _user, _category, _roles, _request, toaster) {
        var _this = this;
        this.route = route;
        this._route = _route;
        this._user = _user;
        this._category = _category;
        this._roles = _roles;
        this._request = _request;
        this.toaster = toaster;
        this.user = localStorage.getItem("user")
            ? JSON.parse(localStorage.getItem("user"))
            : "";
        this.heading = "";
        this.request = { createdBy: this.user._id };
        this.categories = [];
        this.roles = [];
        this.users = [];
        this.countryList = src_app_utils_countries_json__WEBPACK_IMPORTED_MODULE_7__;
        this.statuses = []; // utils.statuses;
        this.communicationModes = src_app_utils_utils_json__WEBPACK_IMPORTED_MODULE_8__.communicationModes;
        this.createRequest = function (request) {
            _this._request.create(request).subscribe(function (res) {
                if (res.message == "success")
                    _this.route.navigate(["/requests"]);
                else
                    _this.toaster.showError(res.message);
            }, function (error) {
                _this.toaster.showError(error.error.message);
                if (error.error.statusCode === 403)
                    _this.route.navigate(["login"]);
            });
        };
    }
    RequestCreateNonMedicalComponent.prototype.loadData = function () {
        var _this = this;
        var url = this.route.url;
        if (url.indexOf("edit") > -1) {
            var id = this._route.snapshot.params["id"];
            this._request.getById(id).subscribe(function (res) {
                if (res.message == "success" && res.data[0]) {
                    _this.request = res.data[0];
                }
                else
                    _this.toaster.showError(res.message);
            }, function (error) {
                _this.toaster.showError(error.error.message);
                if (error.error.statusCode === 403)
                    _this.route.navigate(["login"]);
            });
        }
    };
    RequestCreateNonMedicalComponent.prototype.ngOnInit = function () {
        this.loadData();
        var id = this._route.snapshot.params["id"];
        this.heading = id == undefined || id == null ? "Create" : "Edit";
    };
    RequestCreateNonMedicalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-request-create",
            template: __webpack_require__(/*! ./request-create.component.html */ "./src/app/components/requests/request-create/nonmedical/request-create.component.html"),
            styles: [__webpack_require__(/*! ./request-create.component.css */ "./src/app/components/requests/request-create/nonmedical/request-create.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            src_app_services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"],
            src_app_services_role_service__WEBPACK_IMPORTED_MODULE_5__["RolesService"],
            src_app_services_request_service__WEBPACK_IMPORTED_MODULE_6__["RequestService"],
            _services_toaster_service__WEBPACK_IMPORTED_MODULE_2__["ToasterService"]])
    ], RequestCreateNonMedicalComponent);
    return RequestCreateNonMedicalComponent;
}());



/***/ }),

/***/ "./src/app/components/requests/request-create/request-create.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/components/requests/request-create/request-create.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n    width: 50%;\n    box-shadow: 3px 3px 3px 3px;\n    background-color: white;\n    border-radius: 20px;\n    padding: 40px;\n    position: absolute;\n    top: 50%;\n    right: 50%;\n    -webkit-transform: translate(50%, -25%);\n            transform: translate(50%, -25%);\n    overflow-y: auto;\n  }\n  \n  form {\n    border: 3px solid #f1f1f1;\n    padding: 20px;\n    border-radius: 20px;\n  }\n  \n  input {\n    padding: 12px 20px;\n    margin-bottom: 20px;\n    display: inline-block;\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n    border-radius: 15px;\n  }\n  \n  select, textarea {\n      margin-bottom: 20px;\n  }\n  \n  button {\n    background-color: #4caf50;\n    color: white;\n    padding: 14px 20px;\n    margin: 8px 0;\n    border: none;\n    cursor: pointer;\n  }\n  \n  .disabled {\n    background-color: lightgrey;\n  }\n  \n  .buttondiv{\n    text-align: center;\n  }\n  \n  .container {\n    padding: 16px;\n  }\n  \n  span.psw {\n    float: right;\n    padding-top: 16px;\n  }\n  \n  .ng-valid[required],\n  .ng-valid.required {\n    border-left: 5px solid #42a948;\n    /* green */\n  }\n  \n  .ng-invalid:not(form) {\n    border-left: 5px solid #a94442;\n    /* red */\n  }\n  \n  /* Change styles for span and cancel button on extra small screens */\n  \n  @media screen and (max-width: 300px) {\n    span.psw {\n      display: block;\n      float: none;\n    }\n    .cancelbtn {\n      width: 100%;\n    }\n  }\n  "

/***/ }),

/***/ "./src/app/components/requests/request-create/request-create.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/requests/request-create/request-create.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main col-md-12\">\n  <h2 style=\"text-align: center;\">{{ heading }} Request</h2>\n\n  <form\n    class=\"col-md-12\"\n    #requestForm=\"ngForm\"\n    (ngSubmit)=\"createRequest(request)\"\n  >\n    <div class=\"container col-md-12\">\n      <label class=\"col-md-12\" for=\"title\">\n        <b>Token</b>\n      </label>\n      <input\n        type=\"text\"\n        [(ngModel)]=\"request.token\"\n        class=\"form-control col-md-12\"\n        placeholder=\"Enter Token\"\n        name=\"token\"\n        required\n        #token=\"ngModel\"\n      />\n      <div\n        [hidden]=\"token.valid || token.pristine\"\n        class=\"alert alert-danger col-md-12\"\n      >\n        Token is required\n      </div>\n      <label class=\"col-md-12\" for=\"fullName\">\n        <b>fullName</b>\n      </label>\n      <input\n        type=\"text\"\n        [(ngModel)]=\"request.fullName\"\n        class=\"form-control col-md-12\"\n        placeholder=\"Enter fullName\"\n        name=\"fullName\"\n        required\n        #fullName=\"ngModel\"\n      />\n      <div\n        [hidden]=\"fullName.valid || fullName.pristine\"\n        class=\"alert alert-danger col-md-12\"\n      >\n        fullName is required\n      </div>\n\n      <label class=\"col-md-12\" for=\"currentCountry\">\n        <b>Select currentCountry</b>\n      </label>\n      <select\n        [(ngModel)]=\"request.currentCountry\"\n        class=\"form-control col-md-12\"\n        name=\"currentCountry\"\n        required\n        #currentCountry=\"ngModel\"\n      >\n        <option disabled> currentCountry</option>\n        <option *ngFor=\"let country of countryList\" [ngValue]=\"country.code\">\n          {{ country.name }} ({{ country.dial_code }})</option\n        >\n      </select>\n      <div\n        [hidden]=\"currentCountry.valid || currentCountry.pristine\"\n        class=\"alert alert-danger col-md-12\"\n      >\n        currentCountry is required\n      </div>\n\n      <label class=\"col-md-12\" for=\"phoneNumber\">\n        <b>phoneNumber</b>\n      </label>\n      <input\n        type=\"text\"\n        [(ngModel)]=\"request.phoneNumber\"\n        class=\"form-control col-md-12\"\n        placeholder=\"Enter Full Name\"\n        name=\"phoneNumber\"\n        required\n        #phoneNumber=\"ngModel\"\n      />\n      <div\n        [hidden]=\"phoneNumber.valid || phoneNumber.pristine\"\n        class=\"alert alert-danger col-md-12\"\n      >\n        phoneNumber is required\n      </div>\n\n      <label class=\"col-md-12\" for=\"contactFullName\">\n        <b>Contact Full Name</b>\n      </label>\n      <input\n        type=\"string\"\n        [(ngModel)]=\"request.contactFullName\"\n        class=\"form-control col-md-12\"\n        placeholder=\"Primary Contact number\"\n        name=\"contactFullName\"\n        #contactFullName=\"ngModel\"\n      />\n\n      <label class=\"col-md-12\" for=\"contactPhone\">\n        <b>contact Phone</b>\n      </label>\n      <input\n        type=\"string\"\n        [(ngModel)]=\"request.contactPhone\"\n        class=\"form-control col-md-12\"\n        placeholder=\"Alternate Contact Number\"\n        name=\"contactPhone\"\n        #contactPhone=\"ngModel\"\n      />\n\n      <label class=\"col-md-12\" for=\"age\">\n        <b>Age</b>\n      </label>\n      <input\n        type=\"number\"\n        [(ngModel)]=\"request.age\"\n        class=\"form-control col-md-12\"\n        placeholder=\"Age\"\n        name=\"age\"\n        #age=\"ngModel\"\n      />\n\n      <label class=\"col-md-12\" for=\"gender\">\n        <b>gender</b>\n      </label>\n      <input\n        type=\"string\"\n        [(ngModel)]=\"request.gender\"\n        class=\"form-control col-md-12\"\n        placeholder=\"gender\"\n        name=\"gender\"\n        #gender=\"ngModel\"\n      />\n\n      <label class=\"col-md-12\" for=\"supportRequested\">\n        <b>supportRequested</b>\n      </label>\n      <input\n        type=\"string\"\n        [(ngModel)]=\"request.supportRequested\"\n        class=\"form-control col-md-12\"\n        placeholder=\"supportRequested\"\n        name=\"supportRequested\"\n        #supportRequested=\"ngModel\"\n      />\n\n      <label class=\"col-md-12\" for=\"supportRequiredFor\">\n        <b>supportRequiredFor</b>\n      </label>\n      <input\n        type=\"string\"\n        [(ngModel)]=\"request.supportRequiredFor\"\n        class=\"form-control col-md-12\"\n        placeholder=\"supportRequiredFor\"\n        name=\"supportRequiredFor\"\n        #supportRequiredFor=\"ngModel\"\n      />\n\n      <label class=\"col-md-12\" for=\"postal\">\n        <b>postal</b>\n      </label>\n      <input\n        type=\"string\"\n        [(ngModel)]=\"request.postal\"\n        class=\"form-control col-md-12\"\n        placeholder=\"postal\"\n        name=\"postal\"\n        #postal=\"ngModel\"\n      />\n\n      <label class=\"col-md-12\" for=\"email\">\n        <b>email</b>\n      </label>\n      <input\n        type=\"string\"\n        [(ngModel)]=\"request.email\"\n        class=\"form-control col-md-12\"\n        placeholder=\"email\"\n        name=\"email\"\n        #email=\"ngModel\"\n      />\n\n      <label class=\"col-md-12\" for=\"fullAddress\">\n        <b>Full Address</b>\n      </label>\n      <textarea\n        class=\"form-control col-md-12\"\n        placeholder=\"Full Address\"\n        [(ngModel)]=\"request.fullAddress\"\n        [maxlength]=\"400\"\n        name=\"fullAddress\"\n        #fullAddress\n      ></textarea>\n\n      <div *ngIf=\"statuses.length > 1\">\n        <label class=\"col-md-12\" for=\"status\">\n          <b>Status</b>\n        </label>\n        <select\n          [(ngModel)]=\"request.status\"\n          class=\"form-control col-md-12\"\n          name=\"status\"\n          required\n          #status=\"ngModel\"\n        >\n          <option disabled> Status</option>\n          <option *ngFor=\"let status of statuses\" [ngValue]=\"status.value\">{{\n            status.label\n          }}</option>\n        </select>\n        <div\n          [hidden]=\"status.valid || status.pristine\"\n          class=\"alert alert-danger col-md-12\"\n        >\n          Status is required\n        </div>\n      </div>\n      <div class=\"col-md-12\" style=\"margin-bottom: 10px; margin-top: 10px;\">\n        <b>Please enter user name of assignee.</b>\n      </div>\n      <label class=\"col-md-12\" for=\"assignee\">\n        <b>Assignee</b>\n      </label>\n      <input\n        type=\"string\"\n        [(ngModel)]=\"request.assignedTo\"\n        class=\"form-control col-md-12\"\n        placeholder=\"assignedTo\"\n        name=\"assignedTo\"\n        #assignedTo=\"ngModel\"\n      />\n      <div class=\"col-md-12 buttondiv\">\n        <button [disabled]=\"!requestForm.form.valid\" type=\"submit\">\n          Sign Up\n        </button>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/requests/request-create/request-create.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/requests/request-create/request-create.component.ts ***!
  \********************************************************************************/
/*! exports provided: RequestCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestCreateComponent", function() { return RequestCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_toaster_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/toaster.service */ "./src/app/services/toaster.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var src_app_services_role_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/role.service */ "./src/app/services/role.service.ts");
/* harmony import */ var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/request.service */ "./src/app/services/request.service.ts");
/* harmony import */ var src_app_utils_countries_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/utils/countries.json */ "./src/app/utils/countries.json");
var src_app_utils_countries_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/Object.assign({}, src_app_utils_countries_json__WEBPACK_IMPORTED_MODULE_7__, {"default": src_app_utils_countries_json__WEBPACK_IMPORTED_MODULE_7__});
/* harmony import */ var src_app_utils_utils_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/utils/utils.json */ "./src/app/utils/utils.json");
var src_app_utils_utils_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/Object.assign({}, src_app_utils_utils_json__WEBPACK_IMPORTED_MODULE_8__, {"default": src_app_utils_utils_json__WEBPACK_IMPORTED_MODULE_8__});
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var RequestCreateComponent = /** @class */ (function () {
    function RequestCreateComponent(route, _route, _user, _category, _roles, _request, toaster) {
        var _this = this;
        this.route = route;
        this._route = _route;
        this._user = _user;
        this._category = _category;
        this._roles = _roles;
        this._request = _request;
        this.toaster = toaster;
        this.user = localStorage.getItem("user")
            ? JSON.parse(localStorage.getItem("user"))
            : "";
        this.heading = "";
        this.request = { createdBy: this.user._id };
        this.categories = [];
        this.roles = [];
        this.users = [{ value: "dasd", label: "dfdsf", count: 2 }];
        this.countryList = src_app_utils_countries_json__WEBPACK_IMPORTED_MODULE_7__;
        this.statuses = []; // utils.statuses;
        this.communicationModes = src_app_utils_utils_json__WEBPACK_IMPORTED_MODULE_8__.communicationModes;
        this.loadCategories = function () {
            _this._category.list().subscribe(function (res) {
                if (res.data == null)
                    _this.toaster.showError(res.message);
                else
                    _this.categories = res.data;
            }, function (error) {
                _this.toaster.showError(error.error.message);
                if (error.error.statusCode === 403)
                    _this.route.navigate(["login"]);
            });
        };
        this.createRequest = function (request) {
            _this._request.create(request).subscribe(function (res) {
                if (res.message == "success")
                    _this.route.navigate(["/requests"]);
                else
                    _this.toaster.showError(res.message);
            }, function (error) {
                _this.toaster.showError(error.error.message);
                if (error.error.statusCode === 403)
                    _this.route.navigate(["login"]);
            });
        };
    }
    RequestCreateComponent.prototype.setStaus = function () {
        var url = this.route.url;
        if (url.indexOf("create") > -1) {
            this.request["status"] = 1;
        }
        else if (url.indexOf("edit") > -1)
            this.statuses = src_app_utils_utils_json__WEBPACK_IMPORTED_MODULE_8__.statuses; //.filter((d) => d.value != 1);
    };
    RequestCreateComponent.prototype.loadData = function () {
        var _this = this;
        var url = this.route.url;
        if (url.indexOf("edit") > -1) {
            var id = this._route.snapshot.params["id"];
            this._request.getById(id).subscribe(function (res) {
                if (res.message == "success" && res.data[0]) {
                    _this.request = res.data[0];
                }
                else
                    _this.toaster.showError(res.message);
            }, function (error) {
                _this.toaster.showError(error.error.message);
                if (error.error.statusCode === 403)
                    _this.route.navigate(["login"]);
            });
        }
    };
    RequestCreateComponent.prototype.ngOnInit = function () {
        this.setStaus();
        this.loadCategories();
        this.loadData();
        var id = this._route.snapshot.params["id"];
        this.heading = id == undefined || id == null ? "Create" : "Edit";
    };
    RequestCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-request-create",
            template: __webpack_require__(/*! ./request-create.component.html */ "./src/app/components/requests/request-create/request-create.component.html"),
            styles: [__webpack_require__(/*! ./request-create.component.css */ "./src/app/components/requests/request-create/request-create.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            src_app_services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"],
            src_app_services_role_service__WEBPACK_IMPORTED_MODULE_5__["RolesService"],
            src_app_services_request_service__WEBPACK_IMPORTED_MODULE_6__["RequestService"],
            _services_toaster_service__WEBPACK_IMPORTED_MODULE_2__["ToasterService"]])
    ], RequestCreateComponent);
    return RequestCreateComponent;
}());



/***/ }),

/***/ "./src/app/components/requests/request-home/request-home.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/components/requests/request-home/request-home.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".maindiv {\n    position: absolute;\n    top: 50%;\n    right: 50%;\n    -webkit-transform: translate(50%, -50%);\n            transform: translate(50%, -50%);\n  }\n  \n  .heading {\n    font-weight: 700;\n    font-size: 30px;\n    text-align: center;\n  }\n  \n  button {\n      background-color: #4CAF50;\n      color: white;\n      padding: 14px 20px;\n      margin: 8px 0;\n      border: none;\n      cursor: pointer;\n      width: 100%;\n    }\n  \n  button:hover {\n      opacity: 0.8;\n    }\n  \n  .imgtxt {\n      text-align: center;\n      font-weight: 700;\n      font-size: 20px;\n      margin-top: 30px;\n    }\n  \n  .imgdiv {\n      cursor: pointer;\n    }"

/***/ }),

/***/ "./src/app/components/requests/request-home/request-home.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/requests/request-home/request-home.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"maindiv col-md-12\">\n  <div class=\"container\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div\n            class=\"col-md-6 imgdiv\"\n            routerLink=\"/requests/medical\"\n          >\n            <div class=\"card-container\">\n              <div class=\"card\">\n                <div class=\"front\">\n                  <div class=\"cover\">\n                    <img src=\"../../../assets/images/cardbg.jpg\" />\n                  </div>\n                  <div class=\"user\">\n                    <img\n                      class=\"img-circle\"\n                      src=\"../../../assets/images/category.png\"\n                    />\n                  </div>\n                  <div class=\"content\">\n                    <div class=\"main\">\n                      <h3 class=\"name\">Medical</h3>\n                      <p class=\"profession\"></p>\n\n                      <p class=\"text-center\">\n                        The list of medical requests can be viewed and modified in this page.\n                      </p>\n                    </div>\n                    <div class=\"footer\"></div>\n                  </div>\n                </div>\n                <!-- end front panel -->\n                <div class=\"back\">\n                  <div class=\"header\">\n                    <h5 class=\"motto\">\n                      \"Clean your hands often. Use soap and water, or an\n                      alcohol-based hand rub.\"\n                    </h5>\n                  </div>\n                  <div class=\"footer\"></div>\n                </div>\n                <!-- end back panel -->\n              </div>\n              <!-- end card -->\n            </div>\n            <!-- end card-container -->\n          </div>\n          <div\n            class=\"col-md-6 imgdiv\"\n            routerLink=\"/requests/non-medical\"\n          >\n            <div class=\"card-container\">\n              <div class=\"card\">\n                <div class=\"front\">\n                  <div class=\"cover\">\n                    <img src=\"../../../assets/images/cardbg.jpg\" />\n                  </div>\n                  <div class=\"user\">\n                    <img\n                      class=\"img-circle\"\n                      src=\"../../../assets/images/category.png\"\n                    />\n                  </div>\n                  <div class=\"content\">\n                    <div class=\"main\">\n                      <h3 class=\"name\">Non-Medical</h3>\n                      <p class=\"profession\"></p>\n\n                      <p class=\"text-center\">\n                        The list of non-medical requests can be viewed and modified in this page.\n                      </p>\n                    </div>\n                    <div class=\"footer\"></div>\n                  </div>\n                </div>\n                <!-- end front panel -->\n                <div class=\"back\">\n                  <div class=\"header\">\n                    <h5 class=\"motto\">\n                      \"Maintain a safe distance from anyone who is coughing or\n                      sneezing.\"\n                    </h5>\n                  </div>\n                  <div class=\"footer\"></div>\n                </div>\n                <!-- end back panel -->\n              </div>\n              <!-- end card -->\n            </div>\n            <!-- end card-container -->\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/requests/request-home/request-home.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/requests/request-home/request-home.component.ts ***!
  \****************************************************************************/
/*! exports provided: RequestHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestHomeComponent", function() { return RequestHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_toaster_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/toaster.service */ "./src/app/services/toaster.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utils_utils_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/utils.json */ "./src/app/utils/utils.json");
var _utils_utils_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/Object.assign({}, _utils_utils_json__WEBPACK_IMPORTED_MODULE_3__, {"default": _utils_utils_json__WEBPACK_IMPORTED_MODULE_3__});
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RequestHomeComponent = /** @class */ (function () {
    function RequestHomeComponent(toaster, route) {
        this.toaster = toaster;
        this.route = route;
        this.statuses = _utils_utils_json__WEBPACK_IMPORTED_MODULE_3__.statuses.map(function (d) { return d.label; });
        this.requestsSummary = [];
        this.roleSummary = [];
        this.categorySummary = [];
        this.userSummary = [];
        this.user = localStorage.getItem("user")
            ? JSON.parse(localStorage.getItem("user"))
            : "";
        this.type = this.user.type === "superAdmin" ? "admin" : "regular";
        this.userType = this.user.type === "superAdmin" ? "Admins" : "Volunteers/Service Providers";
    }
    RequestHomeComponent.prototype.loadDahsboard = function () { };
    RequestHomeComponent.prototype.ngOnInit = function () {
        if (this.user.type === undefined) {
            this.toaster.showError("Authentication Failed. Please login again.");
            this.route.navigate(["login"]);
            return;
        }
        this.loadDahsboard();
    };
    RequestHomeComponent.prototype.login = function () { };
    RequestHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-request-home",
            template: __webpack_require__(/*! ./request-home.component.html */ "./src/app/components/requests/request-home/request-home.component.html"),
            styles: [__webpack_require__(/*! ./request-home.component.css */ "./src/app/components/requests/request-home/request-home.component.css"), __webpack_require__(/*! ../../../../assets/styles/rotating-card.css */ "./src/assets/styles/rotating-card.css")],
        }),
        __metadata("design:paramtypes", [_services_toaster_service__WEBPACK_IMPORTED_MODULE_1__["ToasterService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RequestHomeComponent);
    return RequestHomeComponent;
}());



/***/ }),

/***/ "./src/app/components/requests/request-interact/request-interact.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/components/requests/request-interact/request-interact.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  width: 80%;\n  box-shadow: 3px 3px 3px 3px;\n  background-color: white;\n  border-radius: 20px;\n  padding: 40px;\n  position: absolute;\n  top: 1%;\n  right: 50%;\n  -webkit-transform: translate(50%, 0%);\n          transform: translate(50%, 0%);\n}\n\n.details {\n  margin-top: 20px;\n  text-align: center;\n}\n\nform {\n  border: 3px solid #f1f1f1;\n  padding: 20px;\n  border-radius: 20px;\n}\n\ninput[type=\"text\"],\ninput[type=\"password\"] {\n  padding: 12px 20px;\n  margin-bottom: 20px;\n  display: inline-block;\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n  border-radius: 15px;\n}\n\nselect, textarea {\n  margin-bottom: 20px;\n}\n\nbutton {\n  background-color: #4caf50;\n  color: white;\n  padding: 14px 20px;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n}\n\n.disabled {\n  background-color: lightgrey;\n}\n\n.buttondiv {\n  text-align: center;\n}\n\n.stepdiv {\n  background-color: red;\n  width: 500px;\n  height: 150px;\n  border-radius: 20px;\n  margin-top: 20px;\n  padding-top: 20px;\n  border: 1px solid black;\n}\n\n.stepdiv1 {\n  background-color: red;\n  height: 150px;\n  border-radius: 20px;\n  margin-top: 20px;\n  padding-top: 20px;\n  border: 1px solid black;\n}\n\n.journeydiv {\n  text-align: center;\n  display: flex;\n  justify-content: center;\n}\n\n.journeydiv1 {\n  text-align: center;\n  width: 85%;\n}\n\n.arrowdiv {\n  width: 15%;\n}\n\n.arrow {\n  font-size: 50px;\n  position: relative;\n  top: 50px;\n  right: 15px;\n}\n\n.new {\n  background-color: blanchedalmond;\n}\n\n.inprogress {\n  background-color: yellow;\n}\n\n.resolved {\n  background-color: green;\n  color: white;\n}\n\n.archive {\n  background-color: blue;\n  color: white;\n}\n\n.separator {\n  height: 10px;\n  background-color: black;\n  margin: 50px 0 50px 0;\n}\n\n.ng-valid[required],\n.ng-valid.required {\n  border-left: 5px solid #42a948;\n  /* green */\n}\n\n.ng-invalid:not(form) {\n  border-left: 5px solid #a94442;\n  /* red */\n}\n"

/***/ }),

/***/ "./src/app/components/requests/request-interact/request-interact.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/components/requests/request-interact/request-interact.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Section to update status and comments, Can be created as component if needed-->\n<div class=\"main col-md-12\">\n  <h1 style=\"text-align: center;\" *ngIf=\"request.requestID\">\n    {{ request.requestID.title }}\n  </h1>\n  <h5 style=\"text-align: center;\">\n    Created By: {{ request.requestID ? request.requestID.createdBy : \"\" }}\n    {{ request.requestID ? request.requestID.createdBy : \"\" }}\n  </h5>\n\n  <div class=\"col-md-12 details\">\n    <div class=\"col-md-6\">\n      <div class=\"col-md-12\">\n        <b>Token:</b>\n        {{ request.requestID ? request.requestID.token : \"\" }}\n      </div>\n      <div class=\"col-md-12\">\n        <b>Full Name:</b>\n        {{ request.requestID ? request.requestID.fullName : \"\" }}\n      </div>\n      <div class=\"col-md-12\">\n        <b>Current Country:</b>\n        {{ request.requestID ? request.requestID.currentCountry : \"\" }}\n      </div>\n      <div class=\"col-md-12\">\n        <b>Contact Phone:</b>\n        {{ request.requestID ? request.requestID.contactPhone : \"\" }}\n      </div>\n      <div class=\"col-md-12\">\n        <b>status:</b>\n        {{ request.requestID ? request.requestID.status : \"\" }}\n      </div>\n      <div class=\"col-md-12\">\n        <b>assignedTo:</b>\n        {{ request.requestID ? request.requestID.assignedTo : \"\" }}\n      </div>\n      <div class=\"col-md-12\">\n        <b>created at:</b>\n        {{ request.requestID ? request.requestID.created_at : \"\" }}\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"col-md-12\">\n        <b>Age:</b>\n        {{ request.requestID ? request.requestID.age : \"\" }}\n      </div>\n      <div class=\"col-md-12\">\n        <b>Gender Address:</b>\n        {{ request.requestID ? request.requestID.gender : \"\" }}\n      </div>\n      <div class=\"col-md-12\">\n        <b>supportRequested :</b>\n        {{ request.requestID ? request.requestID.supportRequested : \"\" }}\n      </div>\n      <div class=\"col-md-12\">\n        <b>supportRequiredFor:</b>\n        {{ request.requestID ? request.requestID.supportRequiredFor : \"\" }}\n      </div>\n      <div class=\"col-md-12\">\n        <b>Contact Full Name:</b>\n        {{ request.requestID ? request.requestID.contactFullName : \"\" }}\n      </div>\n      <div class=\"col-md-12\">\n        <b>district:</b>\n        {{ request.requestID ? request.requestID.district : \"\" }}\n      </div>\n      <div class=\"col-md-12\">\n        <b>postal:</b>\n        {{ request.requestID ? request.requestID.postal : \"\" }}\n      </div>\n    </div>\n  </div>\n  <div class=\"separator col-md-12\"></div>\n  <h3 style=\"text-align: center;\" *ngIf=\"request.requestID\">\n    Request Status\n  </h3>\n\n  <div class=\"col-md-12\">\n    <div class=\"col-md-4\" *ngFor=\"let item of requestdata; let last = last\">\n      <div class=\"col-md-11 journeydiv1\">\n        <div\n          class=\"stepdiv1 col-md-12\"\n          [ngClass]=\"{\n            new: item.statusid === 1,\n            inprogress: item.statusid == 2,\n            resolved: item.statusid == 3,\n            archive: item.statusid == 4\n          }\"\n        >\n          <b>Assigned To:</b> {{ item.assigned }}\n          <div class=\"col-md-12\"><b>Status:</b> {{ item.status }}</div>\n          <div class=\"col-md-12\"><b>Comment:</b> {{ item.comment }}</div>\n        </div>\n      </div>\n      <div class=\"col-md-1 arrowdiv\" *ngIf=\"!last\">\n        <div><span class=\"arrow\">&#8594;</span></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"separator col-md-12\"></div>\n  <div\n    *ngIf=\"(request.requestID && request.requestID.status != 4) || isVolunteer\"\n  >\n    <h3 style=\"text-align: center;\">Add Comment</h3>\n    <form class=\"col-md-12\" #commentForm=\"ngForm\" (ngSubmit)=\"update(updates)\">\n      <div class=\"container col-md-12\">\n        <label class=\"col-md-12\" for=\"comment\"><b>Comment</b></label>\n        <textarea\n          class=\"form-control col-md-12\"\n          placeholder=\"Comment\"\n          [(ngModel)]=\"updates.comment\"\n          [maxlength]=\"400\"\n          name=\"comment\"\n          #comment=\"ngModel\"\n          required\n        >\n        </textarea>\n        <div\n          [hidden]=\"comment.valid || comment.pristine\"\n          class=\"alert alert-danger col-md-12\"\n        >\n          Comment is required\n        </div>\n\n        <label class=\"col-md-12\" for=\"status\">\n          <b>Status</b>\n        </label>\n        <select\n          [(ngModel)]=\"updates.status\"\n          class=\"form-control col-md-12\"\n          name=\"status\"\n          required\n          #status=\"ngModel\"\n        >\n          <option disabled> Status</option>\n          <option *ngFor=\"let status of statuses\" [ngValue]=\"status.value\">{{\n            status.label\n          }}</option>\n        </select>\n        <div\n          [hidden]=\"status.valid || status.pristine\"\n          class=\"alert alert-danger col-md-12\"\n        >\n          Status is required\n        </div>\n\n        <b> Mark as resolved will auto assign to volunteer</b>\n        <button\n          class=\"col-md-12\"\n          [ngClass]=\"{ disabled: !commentForm.form.valid }\"\n          [disabled]=\"!commentForm.form.valid\"\n          type=\"submit\"\n        >\n          Update\n        </button>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/requests/request-interact/request-interact.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/requests/request-interact/request-interact.component.ts ***!
  \************************************************************************************/
/*! exports provided: RequestInteractComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestInteractComponent", function() { return RequestInteractComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_toaster_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/toaster.service */ "./src/app/services/toaster.service.ts");
/* harmony import */ var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/request.service */ "./src/app/services/request.service.ts");
/* harmony import */ var src_app_utils_countries_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utils/countries.json */ "./src/app/utils/countries.json");
var src_app_utils_countries_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/Object.assign({}, src_app_utils_countries_json__WEBPACK_IMPORTED_MODULE_3__, {"default": src_app_utils_countries_json__WEBPACK_IMPORTED_MODULE_3__});
/* harmony import */ var src_app_utils_utils_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utils/utils.json */ "./src/app/utils/utils.json");
var src_app_utils_utils_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/Object.assign({}, src_app_utils_utils_json__WEBPACK_IMPORTED_MODULE_4__, {"default": src_app_utils_utils_json__WEBPACK_IMPORTED_MODULE_4__});
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RequestInteractComponent = /** @class */ (function () {
    function RequestInteractComponent(_request, toaster, _route, router) {
        this._request = _request;
        this.toaster = toaster;
        this._route = _route;
        this.router = router;
        this.request = {};
        this.updates = {};
        this.countrycode = "";
        this.user = localStorage.getItem("user")
            ? JSON.parse(localStorage.getItem("user"))
            : "";
        this.isVolunteer = false;
        this.assignments = [];
        this.comments = [];
        this.requestdata = [];
        this.countryList = src_app_utils_countries_json__WEBPACK_IMPORTED_MODULE_3__;
        this.statuses = [];
        this.communicationModes = src_app_utils_utils_json__WEBPACK_IMPORTED_MODULE_4__.communicationModes;
        this.isVolunteer = this.user.role && this.user.role.requestReadAccess;
    }
    RequestInteractComponent.prototype.loadData = function () {
        var _this = this;
        var id = this._route.snapshot.params["id"];
        this.requestdata = [];
        this._request.interact(id).subscribe(function (res) {
            if (res.data == null)
                _this.toaster.showError(res.message);
            else {
                var data = res.data;
                _this.request = data;
                console.log(_this.request);
                _this.setStaus();
                _this.assignments = _this.request["assignment"];
                _this.comments = _this.request["comments"];
                _this.processRequestData();
                _this.updates["id"] = data._id;
            }
        }, function (error) {
            _this.toaster.showError(error.error.message);
            if (error.error.statusCode === 403)
                _this.router.navigate(["login"]);
        });
    };
    RequestInteractComponent.prototype.processRequestData = function () {
        for (var i = 0; i < this.assignments.length; i++) {
            if (i == 0) {
                this.requestdata.push({
                    assigned: this.assignments[i].assignedTo,
                    status: this.assignments[i].status,
                    // status: this.getStatus(this.assignments[i].status),
                    statusid: this.assignments[i].status,
                    comment: "Request Initiated",
                });
            }
            else {
                this.requestdata.push({
                    assigned: this.assignments[i].assignedTo
                        ? this.assignments[i].assignedTo
                        : this.assignments[0].assignedTo,
                    status: this.assignments[i].status,
                    // status: this.getStatus(this.assignments[i].status),
                    statusid: this.assignments[i].status,
                    comment: this.comments[i - 1] ? this.comments[i - 1].comment : "",
                });
            }
        }
    };
    RequestInteractComponent.prototype.getStatus = function (value) {
        var status = src_app_utils_utils_json__WEBPACK_IMPORTED_MODULE_4__.statuses.filter(function (item) { return item.value == value; });
        return status[0].label;
    };
    RequestInteractComponent.prototype.update = function (commentData) {
        var _this = this;
        var req = commentData;
        req["user"] = this.user._id;
        this._request.addComment(commentData).subscribe(function (res) {
            if (res.data == null)
                _this.toaster.showError(res.message);
            else
                _this.loadData();
        }, function (error) {
            _this.toaster.showError(error.error.message);
            if (error.error.statusCode === 403)
                _this.router.navigate(["login"]);
        });
    };
    RequestInteractComponent.prototype.setStaus = function () {
        if (this.isVolunteer)
            this.statuses = src_app_utils_utils_json__WEBPACK_IMPORTED_MODULE_4__.statuses.filter(function (d) { return d.value != 1; });
        else
            this.statuses = src_app_utils_utils_json__WEBPACK_IMPORTED_MODULE_4__.statuses.filter(function (d) { return d.value != 1 && d.value != 2 && d.value != 5; });
    };
    RequestInteractComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    RequestInteractComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-request-interact",
            template: __webpack_require__(/*! ./request-interact.component.html */ "./src/app/components/requests/request-interact/request-interact.component.html"),
            styles: [__webpack_require__(/*! ./request-interact.component.css */ "./src/app/components/requests/request-interact/request-interact.component.css")],
        }),
        __metadata("design:paramtypes", [src_app_services_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"],
            _services_toaster_service__WEBPACK_IMPORTED_MODULE_1__["ToasterService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], RequestInteractComponent);
    return RequestInteractComponent;
}());



/***/ }),

/***/ "./src/app/components/requests/requests-medical/requests-medical.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/components/requests/requests-medical/requests-medical.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\n  margin-top: 20px;\n}\n\n  button:hover {\n    opacity: 0.8;\n  }\n\n  .category {\n    background-color: white;\n    padding: 15px;\n    border-radius: 10px;\n    box-shadow: 2px 2px 2px 2px;\n    margin-top: 20px;\n    margin-bottom: 30px;\n    border: 3px solid transparent;\n    background-clip: padding-box;\n    min-height: 100px;\n  }\n\n  .buttondiv {\n    text-align: center;\n  }\n\n  .activetab {\n    background-color: blue;\n    color: white;\n    font-weight: 700;\n  }\n\n  ul {\n    border-bottom: 5px solid black;\n    margin-bottom: 20px;\n  }\n\n  .categories {\n    cursor: pointer;\n  }\n\n  .category_tabs {\n    padding: 10px 20px 10px 20px;\n    border: 1px solid lightslategray;\n    border-radius: 5px;\n  }\n\n  .request {\n    background-color: white;\n    padding: 15px;\n    border-radius: 10px;\n    box-shadow: 2px 2px 2px 2px;\n    margin-top: 20px;\n    margin-bottom: 30px;\n    border: 3px solid transparent;\n    background-clip: padding-box;\n    min-height: 150px;\n  }\n\n  .active {\n    background-color: #ccc;\n    font-weight: 700; \n  }\n\n  .status {\n    padding: 15px;\n    border: 1px solid lightslategray;\n    border-radius: 10px;\n    cursor: pointer;\n  }\n\n\n\n"

/***/ }),

/***/ "./src/app/components/requests/requests-medical/requests-medical.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/components/requests/requests-medical/requests-medical.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main col-md-12\">\n  <h2 class=\"col-md-12\" style=\"text-align: center;color:white\">Requests</h2>\n\n  <div class=\"col-md-12\">\n    <ag-grid-angular\n      style=\"height: 600px;\"\n      class=\"ag-theme-alpine col-md-12\"\n      [rowData]=\"rowData\"\n      [columnDefs]=\"columnDefs\"\n      [headerHeight]=\"50\"\n      [rowHeight]=\"55\"\n      [suppressMenuHide]=\"true\"\n    >\n    </ag-grid-angular>\n  </div>\n  <div class=\"col-md-12 buttondiv\" *ngIf=\"isVolunteer\">\n    <button class=\"btn btn-primary\" type=\"button\" routerLink=\"/requests/create/medical\">\n      Create a new request\n    </button>\n    <button style=\"margin-left:30px\" class=\"btn btn-primary\" type=\"button\" routerLink=\"/requests/import\">\n      Import Data\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/requests/requests-medical/requests-medical.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/requests/requests-medical/requests-medical.component.ts ***!
  \************************************************************************************/
/*! exports provided: RequestsMedicalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestsMedicalComponent", function() { return RequestsMedicalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_medicalRequest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/medicalRequest.service */ "./src/app/services/medicalRequest.service.ts");
/* harmony import */ var _services_toaster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/toaster.service */ "./src/app/services/toaster.service.ts");
/* harmony import */ var _cell_renderer_requestCellRenderer_cell_renderer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../cell_renderer/requestCellRenderer/cell_renderer.component */ "./src/app/components/cell_renderer/requestCellRenderer/cell_renderer.component.ts");
/* harmony import */ var src_app_utils_countries_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utils/countries.json */ "./src/app/utils/countries.json");
var src_app_utils_countries_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/Object.assign({}, src_app_utils_countries_json__WEBPACK_IMPORTED_MODULE_5__, {"default": src_app_utils_countries_json__WEBPACK_IMPORTED_MODULE_5__});
/* harmony import */ var src_app_utils_utils_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/utils/utils.json */ "./src/app/utils/utils.json");
var src_app_utils_utils_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/Object.assign({}, src_app_utils_utils_json__WEBPACK_IMPORTED_MODULE_6__, {"default": src_app_utils_utils_json__WEBPACK_IMPORTED_MODULE_6__});
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RequestsMedicalComponent = /** @class */ (function () {
    function RequestsMedicalComponent(_request, toaster, route) {
        this._request = _request;
        this.toaster = toaster;
        this.route = route;
        this.user = localStorage.getItem("user")
            ? JSON.parse(localStorage.getItem("user"))
            : "";
        this.isVolunteer = this.user.role && this.user.role.requestReadAccess;
        this.requests = [];
        this.categories = [];
        this.status = [];
        this.filtered_requests = [];
        this.columnDefs = [];
        this.rowData = [];
        this.countryList = src_app_utils_countries_json__WEBPACK_IMPORTED_MODULE_5__;
        this.statuses = src_app_utils_utils_json__WEBPACK_IMPORTED_MODULE_6__.statuses;
        this.communicationModes = src_app_utils_utils_json__WEBPACK_IMPORTED_MODULE_6__.communicationModes;
    }
    RequestsMedicalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._request.listByRole(this.user._id).subscribe(function (res) {
            if (res.data == null)
                _this.toaster.showError(res.message);
            else {
                _this.requests = res.data;
                _this.columnDefs = [
                    {
                        headerName: "Token #",
                        field: "token",
                        cellStyle: { border: "1px solid lightgrey" },
                    },
                    {
                        headerName: "Doctor Name",
                        field: "assignedTo",
                        cellStyle: { border: "1px solid lightgrey" },
                    },
                    {
                        headerName: "Country",
                        field: "country",
                        sortable: true,
                        filter: true,
                        cellStyle: { border: "1px solid lightgrey" },
                    },
                    {
                        headerName: "Area in the country",
                        field: "area",
                        cellStyle: { border: "1px solid lightgrey" },
                    },
                    {
                        headerName: "Age",
                        field: "age",
                        cellStyle: { border: "1px solid lightgrey" },
                    },
                    {
                        headerName: "Gender",
                        field: "gender",
                        cellStyle: { border: "1px solid lightgrey" },
                    },
                    {
                        headerName: "COVID Status",
                        field: "covidStatus",
                        cellStyle: { border: "1px solid lightgrey" },
                    },
                    {
                        headerName: "Past Medical History",
                        field: "medicalHistory",
                        cellStyle: { border: "1px solid lightgrey" },
                    },
                    {
                        headerName: "Current Prescription",
                        field: "currentPrescription",
                        cellStyle: { border: "1px solid lightgrey" },
                    },
                    {
                        headerName: "Current Issues",
                        field: "currentIssues",
                        cellStyle: { border: "1px solid lightgrey" },
                    },
                    {
                        headerName: "Advice and prescription given",
                        field: "advice",
                        cellStyle: { border: "1px solid lightgrey" },
                    },
                    {
                        headerName: "Prescription Issued ?",
                        field: "prescriptionIssue",
                        cellStyle: { border: "1px solid lightgrey" },
                    },
                    {
                        headerName: "Mental Health/Social Follow-up?",
                        field: "medicalFollowup",
                        cellStyle: { border: "1px solid lightgrey" },
                    },
                    {
                        headerName: "Comments",
                        field: "comments",
                        cellStyle: { border: "1px solid lightgrey" },
                    },
                    {
                        headerName: "Actions",
                        field: "action",
                        cellRendererFramework: _cell_renderer_requestCellRenderer_cell_renderer_component__WEBPACK_IMPORTED_MODULE_4__["RequestCellRendererComponent"],
                        cellStyle: { border: "1px solid lightgrey" },
                    },
                ];
                _this.rowData = _this.requests;
            }
        }, function (error) {
            _this.toaster.showError(error.error.message);
            if (error.error.statusCode === 403)
                _this.route.navigate(["login"]);
        });
    };
    RequestsMedicalComponent.prototype.getitemFromList = function (key, value, list, valueKey) {
        if (list === void 0) { list = []; }
        var item = list.filter(function (d) { return d[key] === value; }) || [];
        return item.length > 0 ? item[0][valueKey] : "";
    };
    RequestsMedicalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-requests",
            template: __webpack_require__(/*! ./requests-medical.component.html */ "./src/app/components/requests/requests-medical/requests-medical.component.html"),
            styles: [__webpack_require__(/*! ./requests-medical.component.css */ "./src/app/components/requests/requests-medical/requests-medical.component.css")],
        }),
        __metadata("design:paramtypes", [_services_medicalRequest_service__WEBPACK_IMPORTED_MODULE_2__["MedicalRequestService"],
            _services_toaster_service__WEBPACK_IMPORTED_MODULE_3__["ToasterService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RequestsMedicalComponent);
    return RequestsMedicalComponent;
}());



/***/ }),

/***/ "./src/app/components/requests/requests-nonmedical/requests-nonmedical.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/requests/requests-nonmedical/requests-nonmedical.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\n  margin-top: 20px;\n}\n\n  button:hover {\n    opacity: 0.8;\n  }\n\n  .category {\n    background-color: white;\n    padding: 15px;\n    border-radius: 10px;\n    box-shadow: 2px 2px 2px 2px;\n    margin-top: 20px;\n    margin-bottom: 30px;\n    border: 3px solid transparent;\n    background-clip: padding-box;\n    min-height: 100px;\n  }\n\n  .buttondiv {\n    text-align: center;\n  }\n\n  .activetab {\n    background-color: blue;\n    color: white;\n    font-weight: 700;\n  }\n\n  ul {\n    border-bottom: 5px solid black;\n    margin-bottom: 20px;\n  }\n\n  .categories {\n    cursor: pointer;\n  }\n\n  .category_tabs {\n    padding: 10px 20px 10px 20px;\n    border: 1px solid lightslategray;\n    border-radius: 5px;\n  }\n\n  .request {\n    background-color: white;\n    padding: 15px;\n    border-radius: 10px;\n    box-shadow: 2px 2px 2px 2px;\n    margin-top: 20px;\n    margin-bottom: 30px;\n    border: 3px solid transparent;\n    background-clip: padding-box;\n    min-height: 150px;\n  }\n\n  .active {\n    background-color: #ccc;\n    font-weight: 700; \n  }\n\n  .status {\n    padding: 15px;\n    border: 1px solid lightslategray;\n    border-radius: 10px;\n    cursor: pointer;\n  }\n\n\n\n"

/***/ }),

/***/ "./src/app/components/requests/requests-nonmedical/requests-nonmedical.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/components/requests/requests-nonmedical/requests-nonmedical.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main col-md-12\">\n  <h2 class=\"col-md-12\" style=\"text-align: center;color:white\">Requests</h2>\n\n  <div class=\"col-md-12\">\n    <ag-grid-angular\n      style=\"height: 600px;\"\n      class=\"ag-theme-alpine col-md-12\"\n      [rowData]=\"rowData\"\n      [columnDefs]=\"columnDefs\"\n      [headerHeight]=\"50\"\n      [rowHeight]=\"55\"\n      [suppressMenuHide]=\"true\"\n    >\n    </ag-grid-angular>\n  </div>\n  <div class=\"col-md-12 buttondiv\" *ngIf=\"isVolunteer\">\n    <button class=\"btn btn-primary\" type=\"button\" routerLink=\"/requests/create/nonmedical\">\n      Create a new request\n    </button>\n    <button style=\"margin-left:30px\" class=\"btn btn-primary\" type=\"button\" routerLink=\"/requests/import\">\n      Import Data\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/requests/requests-nonmedical/requests-nonmedical.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/requests/requests-nonmedical/requests-nonmedical.component.ts ***!
  \******************************************************************************************/
/*! exports provided: RequestsNonMedicalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestsNonMedicalComponent", function() { return RequestsNonMedicalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/request.service */ "./src/app/services/request.service.ts");
/* harmony import */ var _services_toaster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/toaster.service */ "./src/app/services/toaster.service.ts");
/* harmony import */ var _cell_renderer_requestCellRenderer_cell_renderer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../cell_renderer/requestCellRenderer/cell_renderer.component */ "./src/app/components/cell_renderer/requestCellRenderer/cell_renderer.component.ts");
/* harmony import */ var src_app_utils_countries_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utils/countries.json */ "./src/app/utils/countries.json");
var src_app_utils_countries_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/Object.assign({}, src_app_utils_countries_json__WEBPACK_IMPORTED_MODULE_5__, {"default": src_app_utils_countries_json__WEBPACK_IMPORTED_MODULE_5__});
/* harmony import */ var src_app_utils_utils_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/utils/utils.json */ "./src/app/utils/utils.json");
var src_app_utils_utils_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/Object.assign({}, src_app_utils_utils_json__WEBPACK_IMPORTED_MODULE_6__, {"default": src_app_utils_utils_json__WEBPACK_IMPORTED_MODULE_6__});
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RequestsNonMedicalComponent = /** @class */ (function () {
    function RequestsNonMedicalComponent(_request, toaster, route) {
        this._request = _request;
        this.toaster = toaster;
        this.route = route;
        this.user = localStorage.getItem("user")
            ? JSON.parse(localStorage.getItem("user"))
            : "";
        this.isVolunteer = this.user.role && this.user.role.requestReadAccess;
        this.requests = [];
        this.categories = [];
        this.status = [];
        this.filtered_requests = [];
        this.columnDefs = [];
        this.rowData = [];
        this.countryList = src_app_utils_countries_json__WEBPACK_IMPORTED_MODULE_5__;
        this.statuses = src_app_utils_utils_json__WEBPACK_IMPORTED_MODULE_6__.statuses;
        this.communicationModes = src_app_utils_utils_json__WEBPACK_IMPORTED_MODULE_6__.communicationModes;
    }
    RequestsNonMedicalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._request.listByRole(this.user._id).subscribe(function (res) {
            if (res.data == null)
                _this.toaster.showError(res.message);
            else {
                _this.requests = res.data;
                console.log(_this.requests);
                _this.columnDefs = [
                    {
                        headerName: "Token #",
                        field: "token",
                        cellStyle: { border: "1px solid lightgrey" },
                    },
                    {
                        headerName: "Country of residence",
                        // valueGetter: function (params) {
                        //   let country = countries.filter(
                        //     (item) => item.code == params.data.country
                        //   );
                        //   return country[0].name;
                        // },
                        field: "currentCountry",
                        sortable: true,
                        filter: true,
                        cellStyle: { border: "1px solid lightgrey" },
                    },
                    {
                        headerName: "Full Name",
                        field: "fullName",
                        cellStyle: { border: "1px solid lightgrey" },
                    },
                    {
                        headerName: "Whatsapp Contact Number",
                        field: "phoneNumber",
                        cellStyle: { border: "1px solid lightgrey" },
                    },
                    {
                        headerName: "Phone Contact Number",
                        field: "contactPhone",
                        cellStyle: { border: "1px solid lightgrey" },
                    },
                    {
                        headerName: "Age",
                        field: "age",
                        cellStyle: { border: "1px solid lightgrey" },
                    },
                    {
                        headerName: "Gender",
                        field: "gender",
                        cellStyle: { border: "1px solid lightgrey" },
                    },
                    {
                        headerName: "Support Requested",
                        field: "supportRequested",
                        cellStyle: { border: "1px solid lightgrey" },
                    },
                    {
                        headerName: "Support Requested For",
                        field: "supportRequiredFor",
                        cellStyle: { border: "1px solid lightgrey" },
                    },
                    {
                        headerName: "Person to be contacted",
                        field: "contactFullName",
                        cellStyle: { border: "1px solid lightgrey" },
                    },
                    {
                        headerName: "Flat No / House No / House Name",
                        field: "houseNumber",
                        cellStyle: { border: "1px solid lightgrey" },
                    },
                    {
                        headerName: "Apartments / Local Area / Street / Road",
                        field: "area",
                        cellStyle: { border: "1px solid lightgrey" },
                    },
                    {
                        headerName: "Landmark & Post Office",
                        field: "landmark",
                        cellStyle: { border: "1px solid lightgrey" },
                    },
                    {
                        headerName: "District / City",
                        field: "district",
                        cellStyle: { border: "1px solid lightgrey" },
                    },
                    {
                        headerName: "Pin or Postal Code",
                        field: "postal",
                        cellStyle: { border: "1px solid lightgrey" },
                    },
                    {
                        headerName: "EMAIL Address",
                        field: "email",
                        cellStyle: { border: "1px solid lightgrey" },
                    },
                    {
                        headerName: "Status",
                        field: "status",
                        cellStyle: { border: "1px solid lightgrey" },
                    },
                    {
                        headerName: "Forwarded To",
                        field: "assignedTo",
                        cellStyle: { border: "1px solid lightgrey" },
                    },
                    {
                        headerName: "Actions",
                        field: "action",
                        cellRendererFramework: _cell_renderer_requestCellRenderer_cell_renderer_component__WEBPACK_IMPORTED_MODULE_4__["RequestCellRendererComponent"],
                        cellStyle: { border: "1px solid lightgrey" },
                    },
                ];
                _this.rowData = _this.requests;
            }
        }, function (error) {
            _this.toaster.showError(error.error.message);
            if (error.error.statusCode === 403)
                _this.route.navigate(["login"]);
        });
    };
    RequestsNonMedicalComponent.prototype.getitemFromList = function (key, value, list, valueKey) {
        if (list === void 0) { list = []; }
        var item = list.filter(function (d) { return d[key] === value; }) || [];
        return item.length > 0 ? item[0][valueKey] : "";
    };
    RequestsNonMedicalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-requests",
            template: __webpack_require__(/*! ./requests-nonmedical.component.html */ "./src/app/components/requests/requests-nonmedical/requests-nonmedical.component.html"),
            styles: [__webpack_require__(/*! ./requests-nonmedical.component.css */ "./src/app/components/requests/requests-nonmedical/requests-nonmedical.component.css")],
        }),
        __metadata("design:paramtypes", [_services_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"],
            _services_toaster_service__WEBPACK_IMPORTED_MODULE_3__["ToasterService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RequestsNonMedicalComponent);
    return RequestsNonMedicalComponent;
}());



/***/ }),

/***/ "./src/app/components/roles/create-roles/create-roles.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/roles/create-roles/create-roles.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  width: 50%;\n  box-shadow: 3px 3px 3px 3px;\n  background-color: white;\n  border-radius: 20px;\n  padding: 40px;\n  position: absolute;\n  top: 50%;\n  right: 50%;\n  -webkit-transform: translate(50%, -50%);\n          transform: translate(50%, -50%);\n}\n\nform {\n  border: 3px solid #f1f1f1;\n  padding: 20px;\n  border-radius: 20px;\n}\n\ninput[type=\"text\"],\ninput[type=\"password\"] {\n  padding: 12px 20px;\n  margin-bottom: 20px;\n  display: inline-block;\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n  border-radius: 15px;\n}\n\nbutton {\n  background-color: #4caf50;\n  color: white;\n  padding: 14px 20px;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n}\n\n.disabled {\n  background-color: lightgrey;\n}\n\n.buttondiv {\n  text-align: center;\n}\n\nselect {\n  margin-bottom: 20px;\n}\n\n.ng-valid[required],\n.ng-valid.required {\n  border-left: 5px solid #42a948;\n  /* green */\n}\n\n.ng-invalid:not(form) {\n  border-left: 5px solid #a94442;\n  /* red */\n}\n\nspan.psw {\n  float: right;\n  padding-top: 16px;\n}\n\n.custom-control-label {\n  margin-left: 10px;\n}\n"

/***/ }),

/***/ "./src/app/components/roles/create-roles/create-roles.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/roles/create-roles/create-roles.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main col-md-12\">\n  <h2 style=\"text-align: center;\">Create Roles</h2>\n\n  <form class=\"col-md-12\" #roleForm=\"ngForm\" (ngSubmit)=\"create(role)\">\n    <div class=\"container col-md-12\">\n      <label class=\"col-md-12\" for=\"name\"><b>Role</b></label>\n      <input\n        type=\"text\"\n        [(ngModel)]=\"role.name\"\n        class=\"form-control col-md-12\"\n        placeholder=\"Enter Role\"\n        name=\"name\"\n        required\n        #name=\"ngModel\"\n      />\n      <div\n        [hidden]=\"name.valid || name.pristine\"\n        class=\"alert alert-danger col-md-12\"\n      >\n        Role Name is required\n      </div>\n\n      <label class=\"col-md-12\" for=\"psw\"><b>Description</b></label>\n      <input\n        type=\"text\"\n        [(ngModel)]=\"role.description\"\n        class=\"form-control col-md-12\"\n        placeholder=\"Enter Description\"\n        name=\"description\"\n        #description=\"ngModel\"\n      />\n      <label class=\"col-md-12\" for=\"category\">Category</label>\n      <select\n        [(ngModel)]=\"role.category\"\n        name=\"category\"\n        class=\"form-control col-md-12\"\n        required\n        #category=\"ngModel\"\n      >\n        <option disabled>Select Category</option>\n        <option *ngFor=\"let category of categories\" [ngValue]=\"category._id\">{{\n          category.name\n        }}</option>\n      </select>\n      <div\n        [hidden]=\"category.valid || category.pristine\"\n        class=\"alert alert-danger col-md-12\"\n      >\n        Category is required\n      </div>\n      <!-- Default checked -->\n      <div class=\"custom-control custom-switch\">\n        <input\n          type=\"checkbox\"\n          class=\"custom-control-input\"\n          name=\"requestReadAccess\"\n          [(ngModel)]=\"role.requestReadAccess\"\n        />\n        <label class=\"custom-control-label\" for=\"customSwitch1\"\n          >Grant permission to create / Manage Requests</label\n        >\n      </div>\n      <div class=\"col-md-12 buttondiv\">\n        <button\n          class=\"btn btn-success\"\n          [ngClass]=\"{ disabled: !roleForm.form.valid }\"\n          [disabled]=\"!roleForm.form.valid\"\n          type=\"submit\"\n        >\n          Create Role\n        </button>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/roles/create-roles/create-roles.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/roles/create-roles/create-roles.component.ts ***!
  \*************************************************************************/
/*! exports provided: CreateRolesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateRolesComponent", function() { return CreateRolesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_role_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/role.service */ "./src/app/services/role.service.ts");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/toaster.service */ "./src/app/services/toaster.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateRolesComponent = /** @class */ (function () {
    function CreateRolesComponent(_role, _category, route, toaster) {
        var _this = this;
        this._role = _role;
        this._category = _category;
        this.route = route;
        this.toaster = toaster;
        this.role = {};
        this.categories = [];
        this.loadCategories = function () {
            _this._category.list().subscribe(function (res) {
                if (res.data == null)
                    _this.toaster.showError(res.message);
                else
                    _this.categories = res.data;
            }, function (error) {
                _this.toaster.showError(error.error.message);
                if (error.error.statusCode === 403)
                    _this.route.navigate(["login"]);
            });
        };
    }
    CreateRolesComponent.prototype.ngOnInit = function () {
        this.loadCategories();
    };
    CreateRolesComponent.prototype.create = function (data) {
        var _this = this;
        this._role.create(data).subscribe(function (res) {
            if (res.code == 200)
                _this.route.navigate(["/roles"]);
            else
                _this.toaster.showError(res.message);
        }, function (error) {
            _this.toaster.showError(error.error.message);
            if (error.error.statusCode === 403)
                _this.route.navigate(["login"]);
        });
    };
    CreateRolesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-create-roles",
            template: __webpack_require__(/*! ./create-roles.component.html */ "./src/app/components/roles/create-roles/create-roles.component.html"),
            styles: [__webpack_require__(/*! ./create-roles.component.css */ "./src/app/components/roles/create-roles/create-roles.component.css")],
        }),
        __metadata("design:paramtypes", [_services_role_service__WEBPACK_IMPORTED_MODULE_1__["RolesService"],
            _services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"]])
    ], CreateRolesComponent);
    return CreateRolesComponent;
}());



/***/ }),

/***/ "./src/app/components/roles/roles.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/roles/roles.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\n  margin-top: 20px;\n}\n\n  button:hover {\n    opacity: 0.8;\n  }\n\n  .role {\n    background-color: white;\n    padding: 15px;\n    border-radius: 10px;\n    box-shadow: 2px 2px 2px 2px;\n    margin-top: 20px;\n    margin-bottom: 30px;\n    border: 3px solid transparent;\n    background-clip: padding-box;\n    min-height: 150px;\n  }\n\n  .buttondiv {\n    text-align: center;\n  }\n\n  .active{\n    background-color: blue;\n    color: white;\n    font-weight: 700;\n  }\n\n  ul {\n    border-bottom: 5px solid black;\n    margin-bottom: 20px;\n  }\n\n  .categories {\n    cursor: pointer;\n  }\n\n  .category_tabs {\n    padding: 10px 20px 10px 20px;\n    border: 1px solid lightslategray;\n    border-radius: 5px;\n  }"

/***/ }),

/***/ "./src/app/components/roles/roles.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/roles/roles.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main col-md-12\">\n  <h2 class=\"col-md-12\" style=\"text-align: center;color:white\">Available Roles</h2>\n  <div class=\"col-md-12\">\n    <ag-grid-angular\n      style=\"height: 600px;\"\n      class=\"ag-theme-alpine col-md-12\"\n      [rowData]=\"rowData\"\n      [columnDefs]=\"columnDefs\"\n      [headerHeight]=\"50\"\n      [rowHeight]=\"55\"\n      [suppressMenuHide]=\"true\"\n      (gridReady)=\"onGridReady($event)\"\n    >\n    </ag-grid-angular>\n  </div>\n  <div class=\"col-md-12 buttondiv\" *ngIf=\"user.type == 'admin'\">\n    <button class=\"btn btn-primary\" type=\"button\" routerLink=\"/roles/create\">\n      Create a new role\n    </button>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/roles/roles.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/roles/roles.component.ts ***!
  \*****************************************************/
/*! exports provided: RolesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesComponent", function() { return RolesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_role_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/role.service */ "./src/app/services/role.service.ts");
/* harmony import */ var _services_toaster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/toaster.service */ "./src/app/services/toaster.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RolesComponent = /** @class */ (function () {
    function RolesComponent(_roles, route, toaster) {
        this._roles = _roles;
        this.route = route;
        this.toaster = toaster;
        this.user = localStorage.getItem("user")
            ? JSON.parse(localStorage.getItem("user"))
            : "";
        this.roles = [];
        this.categories = [];
        this.filtered_roles = [];
        this.columnDefs = [];
        this.rowData = [];
        this.gridApi = [];
        this.gridColumnApi = [];
    }
    RolesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._roles.list().subscribe(function (res) {
            if (res.data == null)
                _this.toaster.showError(res.message);
            else {
                _this.roles = res.data;
                _this.columnDefs = [
                    {
                        headerName: "Category",
                        field: "category.name",
                        cellStyle: { border: "1px solid lightgrey" },
                        sortable: true,
                        filter: true,
                    },
                    {
                        headerName: "Role",
                        field: "name",
                        sortable: true,
                        filter: true,
                        cellStyle: { border: "1px solid lightgrey" },
                    },
                    {
                        headerName: "Description",
                        field: "description",
                        cellStyle: { border: "1px solid lightgrey" },
                    },
                ];
                _this.rowData = _this.roles;
            }
        }, function (error) {
            _this.toaster.showError(error.error.message);
            if (error.error.statusCode === 403)
                _this.route.navigate(["login"]);
        });
    };
    RolesComponent.prototype.onGridReady = function (params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        params.api.sizeColumnsToFit();
    };
    RolesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-roles",
            template: __webpack_require__(/*! ./roles.component.html */ "./src/app/components/roles/roles.component.html"),
            styles: [__webpack_require__(/*! ./roles.component.css */ "./src/app/components/roles/roles.component.css")],
        }),
        __metadata("design:paramtypes", [_services_role_service__WEBPACK_IMPORTED_MODULE_2__["RolesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_toaster_service__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]])
    ], RolesComponent);
    return RolesComponent;
}());



/***/ }),

/***/ "./src/app/components/user/user.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/user/user.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  button:hover {\n    opacity: 0.8;\n  }\n\n  .btn {\n    margin-top: 20px;\n  }\n\n  .user {\n    background-color: white;\n    padding: 15px;\n    border-radius: 10px;\n    box-shadow: 2px 2px 2px 2px;\n    margin-top: 20px;\n    margin-bottom: 30px;\n    border: 3px solid transparent;\n    background-clip: padding-box;\n    min-height: 150px;\n  }\n\n  .buttondiv {\n    text-align: center;\n  }\n\n  .active{\n    background-color: blue;\n    color: white;\n    font-weight: 700;\n  }\n\n  ul {\n    border-bottom: 5px solid black;\n    margin-bottom: 20px;\n  }\n\n  .categories {\n    cursor: pointer;\n  }\n\n  .category_tabs {\n    padding: 10px 20px 10px 20px;\n    border: 1px solid lightslategray;\n    border-radius: 5px;\n  }\n  "

/***/ }),

/***/ "./src/app/components/user/user.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/user/user.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main col-md-12\">\n  <h2 class=\"col-md-12\" style=\"text-align: center; color: white;\">\n    Available {{ heading }}\n  </h2>\n\n  <div class=\"col-md-12\">\n    <ag-grid-angular\n      style=\"height: 600px;\"\n      class=\"ag-theme-alpine col-md-12\"\n      [rowData]=\"rowData\"\n      [columnDefs]=\"columnDefs\"\n      [headerHeight]=\"50\"\n      [rowHeight]=\"55\"\n      [suppressMenuHide]=\"true\"\n      (gridReady)=\"onGridReady($event)\"\n    >\n    </ag-grid-angular>\n  </div>\n  <div class=\"col-md-12 buttondiv\">\n    <button\n      *ngIf=\"user.type == 'admin'\"\n      class=\"btn btn-primary\"\n      type=\"button\"\n      routerLink=\"/home/register\"\n    >\n      Create a new user\n    </button>\n    <button\n      *ngIf=\"user.type == 'superAdmin'\"\n      class=\"btn btn-primary\"\n      type=\"button\"\n      routerLink=\"/home/register\"\n    >\n      Create a new Admin\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/user/user.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/user/user.component.ts ***!
  \***************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_toaster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/toaster.service */ "./src/app/services/toaster.service.ts");
/* harmony import */ var _cell_renderer_userCellRenderer_cell_renderer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cell_renderer/userCellRenderer/cell_renderer.component */ "./src/app/components/cell_renderer/userCellRenderer/cell_renderer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserComponent = /** @class */ (function () {
    function UserComponent(_users, route, toaster) {
        this._users = _users;
        this.route = route;
        this.toaster = toaster;
        this.user = localStorage.getItem("user")
            ? JSON.parse(localStorage.getItem("user"))
            : "";
        this.users = [];
        this.categories = [];
        this.filtered_users = [];
        this.loggedInUser = localStorage.getItem("user")
            ? JSON.parse(localStorage.getItem("user"))
            : "";
        this.columnDefs = [];
        this.rowData = [];
        this.gridApi = [];
        this.gridColumnApi = [];
        this.heading = "";
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        var type = this.loggedInUser.type === "admin" ? "regular" : "admin";
        this.heading = type === "admin" ? "Admins" : "Volunteers";
        this._users.listUrlByRole(type).subscribe(function (res) {
            if (res.data == null)
                _this.toaster.showError(res.message);
            else {
                _this.users = res.data;
                _this.columnDefs = [
                    {
                        headerName: "Name",
                        valueGetter: function (params) {
                            return params.data.fName + " " + params.data.lName;
                        },
                        cellStyle: { border: "1px solid lightgrey" },
                        sortable: true,
                        filter: true,
                    },
                    {
                        headerName: "Category",
                        field: "category.name",
                        sortable: true,
                        filter: true,
                        cellStyle: { border: "1px solid lightgrey" },
                    },
                    {
                        headerName: "Role",
                        field: "role.name",
                        sortable: true,
                        filter: true,
                        cellStyle: { border: "1px solid lightgrey" },
                    },
                    {
                        headerName: "Actions",
                        field: "action",
                        cellRendererFramework: _cell_renderer_userCellRenderer_cell_renderer_component__WEBPACK_IMPORTED_MODULE_4__["UserCellRendererComponent"],
                        cellStyle: { border: "1px solid lightgrey" },
                    },
                ];
                _this.rowData = _this.users;
            }
        }, function (error) {
            _this.toaster.showError(error.error.message);
            if (error.error.statusCode === 403)
                _this.route.navigate(["login"]);
        });
    };
    UserComponent.prototype.onGridReady = function (params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        params.api.sizeColumnsToFit();
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-user",
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/components/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/components/user/user.component.css")],
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_toaster_service__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/config/index.ts":
/*!*********************************!*\
  !*** ./src/app/config/index.ts ***!
  \*********************************/
/*! exports provided: constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constants", function() { return constants; });
var constants = {
    apiUrl: 'http://ec2-3-19-239-124.us-east-2.compute.amazonaws.com:3001/',
};


/***/ }),

/***/ "./src/app/services/category.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/category.service.ts ***!
  \**********************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/app/config/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoryService = /** @class */ (function () {
    function CategoryService(_http, route) {
        this._http = _http;
        this.route = route;
        this._createUrl = _config__WEBPACK_IMPORTED_MODULE_3__["constants"].apiUrl + "api/category/create";
        this._listUrl = _config__WEBPACK_IMPORTED_MODULE_3__["constants"].apiUrl + "api/category";
        this._updateUrl = _config__WEBPACK_IMPORTED_MODULE_3__["constants"].apiUrl + "api/category/update";
        this._summaryUrl = _config__WEBPACK_IMPORTED_MODULE_3__["constants"].apiUrl + "api/category/summary/";
    }
    CategoryService.prototype.create = function (data) {
        return this._http.post(this._createUrl, data);
    };
    CategoryService.prototype.list = function () {
        return this._http.get(this._listUrl);
    };
    CategoryService.prototype.update = function (data) {
        return this._http.post(this._updateUrl, data);
    };
    CategoryService.prototype.summary = function () {
        return this._http.get(this._summaryUrl);
    };
    CategoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "./src/app/services/medicalRequest.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/medicalRequest.service.ts ***!
  \****************************************************/
/*! exports provided: MedicalRequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicalRequestService", function() { return MedicalRequestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/app/config/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MedicalRequestService = /** @class */ (function () {
    function MedicalRequestService(_http, route) {
        this._http = _http;
        this.route = route;
        this._createUrl = _config__WEBPACK_IMPORTED_MODULE_3__["constants"].apiUrl + "api/medicalrequest/create";
        this._getWithRoleUrl = _config__WEBPACK_IMPORTED_MODULE_3__["constants"].apiUrl + "api/medicalrequest/roleassigned/";
        this._listUrl = _config__WEBPACK_IMPORTED_MODULE_3__["constants"].apiUrl + "api/medicalrequest";
        this._uploadUrl = _config__WEBPACK_IMPORTED_MODULE_3__["constants"].apiUrl + "api/medicalrequest/upload/";
        this._updateUrl = _config__WEBPACK_IMPORTED_MODULE_3__["constants"].apiUrl + "api/request/update";
        this._listByCategoryUrl = _config__WEBPACK_IMPORTED_MODULE_3__["constants"].apiUrl + "api/request/category/";
        this._interactUrl = _config__WEBPACK_IMPORTED_MODULE_3__["constants"].apiUrl + "api/request/interact/";
        this._addCommentUrl = _config__WEBPACK_IMPORTED_MODULE_3__["constants"].apiUrl + "api/request/addcomment/";
        this._summaryUrl = _config__WEBPACK_IMPORTED_MODULE_3__["constants"].apiUrl + "api/request/summary/";
    }
    MedicalRequestService.prototype.create = function (data) {
        return this._http.post(this._createUrl, data);
    };
    MedicalRequestService.prototype.listByRole = function (userid) {
        return this._http.get("" + this._getWithRoleUrl + userid);
    };
    MedicalRequestService.prototype.getById = function (id) {
        return this._http.get(this._listUrl + "/" + id);
    };
    MedicalRequestService.prototype.upload = function (data) {
        return this._http.post(this._uploadUrl, data);
    };
    MedicalRequestService.prototype.list = function () {
        return this._http.get(this._listUrl);
    };
    MedicalRequestService.prototype.update = function (data) {
        return this._http.post(this._updateUrl, data);
    };
    MedicalRequestService.prototype.getByCategory = function (category) {
        return this._http.get("" + this._listByCategoryUrl + category);
    };
    MedicalRequestService.prototype.interact = function (id) {
        return this._http.get("" + this._interactUrl + id);
    };
    MedicalRequestService.prototype.addComment = function (data) {
        return this._http.post(this._addCommentUrl, data);
    };
    MedicalRequestService.prototype.summary = function (id) {
        return this._http.get("" + this._summaryUrl + id);
    };
    MedicalRequestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MedicalRequestService);
    return MedicalRequestService;
}());



/***/ }),

/***/ "./src/app/services/request.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/request.service.ts ***!
  \*********************************************/
/*! exports provided: RequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestService", function() { return RequestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/app/config/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RequestService = /** @class */ (function () {
    function RequestService(_http, route) {
        this._http = _http;
        this.route = route;
        this._createUrl = _config__WEBPACK_IMPORTED_MODULE_3__["constants"].apiUrl + "api/request/create";
        this._listUrl = _config__WEBPACK_IMPORTED_MODULE_3__["constants"].apiUrl + "api/request";
        this._updateUrl = _config__WEBPACK_IMPORTED_MODULE_3__["constants"].apiUrl + "api/request/update";
        this._listByCategoryUrl = _config__WEBPACK_IMPORTED_MODULE_3__["constants"].apiUrl + "api/request/category/";
        this._interactUrl = _config__WEBPACK_IMPORTED_MODULE_3__["constants"].apiUrl + "api/request/interact/";
        this._addCommentUrl = _config__WEBPACK_IMPORTED_MODULE_3__["constants"].apiUrl + "api/request/addcomment/";
        this._getWithRoleUrl = _config__WEBPACK_IMPORTED_MODULE_3__["constants"].apiUrl + "api/request/roleassigned/";
        this._summaryUrl = _config__WEBPACK_IMPORTED_MODULE_3__["constants"].apiUrl + "api/request/summary/";
        this._uploadUrl = _config__WEBPACK_IMPORTED_MODULE_3__["constants"].apiUrl + "api/request/upload/";
    }
    RequestService.prototype.create = function (data) {
        return this._http.post(this._createUrl, data);
    };
    RequestService.prototype.list = function () {
        return this._http.get(this._listUrl);
    };
    RequestService.prototype.getById = function (id) {
        return this._http.get(this._listUrl + "/" + id);
    };
    RequestService.prototype.listByRole = function (userid) {
        return this._http.get("" + this._getWithRoleUrl + userid);
    };
    RequestService.prototype.update = function (data) {
        return this._http.post(this._updateUrl, data);
    };
    RequestService.prototype.getByCategory = function (category) {
        return this._http.get("" + this._listByCategoryUrl + category);
    };
    RequestService.prototype.interact = function (id) {
        return this._http.get("" + this._interactUrl + id);
    };
    RequestService.prototype.addComment = function (data) {
        return this._http.post(this._addCommentUrl, data);
    };
    RequestService.prototype.upload = function (data) {
        return this._http.post(this._uploadUrl, data);
    };
    RequestService.prototype.summary = function (id) {
        return this._http.get("" + this._summaryUrl + id);
    };
    RequestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RequestService);
    return RequestService;
}());



/***/ }),

/***/ "./src/app/services/role.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/role.service.ts ***!
  \******************************************/
/*! exports provided: RolesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesService", function() { return RolesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/app/config/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RolesService = /** @class */ (function () {
    function RolesService(_http, route) {
        this._http = _http;
        this.route = route;
        this._createUrl = _config__WEBPACK_IMPORTED_MODULE_3__["constants"].apiUrl + "api/roles/create";
        this._listUrl = _config__WEBPACK_IMPORTED_MODULE_3__["constants"].apiUrl + "api/roles";
        this._updateUrl = _config__WEBPACK_IMPORTED_MODULE_3__["constants"].apiUrl + "api/roles/update";
        this._listByCategoryUrl = _config__WEBPACK_IMPORTED_MODULE_3__["constants"].apiUrl + "api/roles/category/";
        this._summaryUrl = _config__WEBPACK_IMPORTED_MODULE_3__["constants"].apiUrl + "api/roles/summary/";
    }
    RolesService.prototype.create = function (data) {
        return this._http.post(this._createUrl, data);
    };
    RolesService.prototype.list = function () {
        return this._http.get(this._listUrl);
    };
    RolesService.prototype.update = function (data) {
        return this._http.post(this._updateUrl, data);
    };
    RolesService.prototype.getByCategory = function (category) {
        return this._http.get("" + this._listByCategoryUrl + category);
    };
    RolesService.prototype.summary = function () {
        return this._http.get(this._summaryUrl);
    };
    RolesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RolesService);
    return RolesService;
}());



/***/ }),

/***/ "./src/app/services/toaster.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/toaster.service.ts ***!
  \*********************************************/
/*! exports provided: ToasterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToasterService", function() { return ToasterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToasterService = /** @class */ (function () {
    function ToasterService(toaster) {
        this.toaster = toaster;
    }
    ToasterService.prototype.showError = function (msg) {
        this.toaster.error(msg);
    };
    ToasterService.prototype.showSuccess = function (msg) {
        this.toaster.success(msg);
    };
    ToasterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]])
    ], ToasterService);
    return ToasterService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/app/config/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(_http, route) {
        this._http = _http;
        this.route = route;
        this._loginUrl = _config__WEBPACK_IMPORTED_MODULE_3__["constants"].apiUrl + "api/auth/login";
        this._signupUrl = _config__WEBPACK_IMPORTED_MODULE_3__["constants"].apiUrl + "api/auth/signup";
        this._listUrl = _config__WEBPACK_IMPORTED_MODULE_3__["constants"].apiUrl + "api/user";
        this._listUrlByRole = _config__WEBPACK_IMPORTED_MODULE_3__["constants"].apiUrl + "api/user/role";
        this._getassigneeUrl = _config__WEBPACK_IMPORTED_MODULE_3__["constants"].apiUrl + "api/user/getassignee";
        this._summaryUrl = _config__WEBPACK_IMPORTED_MODULE_3__["constants"].apiUrl + "api/user/summary/";
        this._getByIdUrl = _config__WEBPACK_IMPORTED_MODULE_3__["constants"].apiUrl + "api/user/";
        this._updateUserUrl = _config__WEBPACK_IMPORTED_MODULE_3__["constants"].apiUrl + "api/user/update";
        this.TOKEN_KEY = "token";
    }
    Object.defineProperty(UserService.prototype, "token", {
        get: function () {
            return localStorage.getItem("token");
        },
        enumerable: true,
        configurable: true
    });
    UserService.prototype.saveTokenUser = function (token, role, user) {
        localStorage.setItem("token", token);
        localStorage.setItem("role", role);
        localStorage.setItem("user", user);
    };
    UserService.prototype.signup = function (data) {
        return this._http.post(this._signupUrl, data);
    };
    UserService.prototype.update = function (data) {
        return this._http.post(this._updateUserUrl, data);
    };
    UserService.prototype.login = function (loginData) {
        return this._http.post(this._loginUrl, loginData);
    };
    UserService.prototype.logout = function () {
        localStorage.setItem("user", "");
        localStorage.setItem("token", "");
        localStorage.setItem("role", "");
        this.route.navigate(["/login"]);
    };
    UserService.prototype.list = function () {
        return this._http.get(this._listUrl);
    };
    UserService.prototype.listUrlByRole = function (role) {
        return this._http.get(this._listUrlByRole + "/" + role);
    };
    UserService.prototype.getAssignee = function (query) {
        return this._http.post(this._getassigneeUrl, query);
    };
    UserService.prototype.summary = function (type) {
        return this._http.get("" + this._summaryUrl + type);
    };
    UserService.prototype.getById = function (id) {
        return this._http.get("" + this._getByIdUrl + id);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/utils/countries.json":
/*!**************************************!*\
  !*** ./src/app/utils/countries.json ***!
  \**************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, default */
/***/ (function(module) {

module.exports = [{"name":"Afghanistan","dial_code":"+93","code":"AF"},{"name":"Albania","dial_code":"+355","code":"AL"},{"name":"Algeria","dial_code":"+213","code":"DZ"},{"name":"AmericanSamoa","dial_code":"+1 684","code":"AS"},{"name":"Andorra","dial_code":"+376","code":"AD"},{"name":"Angola","dial_code":"+244","code":"AO"},{"name":"Anguilla","dial_code":"+1 264","code":"AI"},{"name":"Antigua and Barbuda","dial_code":"+1268","code":"AG"},{"name":"Argentina","dial_code":"+54","code":"AR"},{"name":"Armenia","dial_code":"+374","code":"AM"},{"name":"Aruba","dial_code":"+297","code":"AW"},{"name":"Australia","dial_code":"+61","code":"AU"},{"name":"Austria","dial_code":"+43","code":"AT"},{"name":"Azerbaijan","dial_code":"+994","code":"AZ"},{"name":"Bahamas","dial_code":"+1 242","code":"BS"},{"name":"Bahrain","dial_code":"+973","code":"BH"},{"name":"Bangladesh","dial_code":"+880","code":"BD"},{"name":"Barbados","dial_code":"+1 246","code":"BB"},{"name":"Belarus","dial_code":"+375","code":"BY"},{"name":"Belgium","dial_code":"+32","code":"BE"},{"name":"Belize","dial_code":"+501","code":"BZ"},{"name":"Benin","dial_code":"+229","code":"BJ"},{"name":"Bermuda","dial_code":"+1 441","code":"BM"},{"name":"Bhutan","dial_code":"+975","code":"BT"},{"name":"Bosnia and Herzegovina","dial_code":"+387","code":"BA"},{"name":"Botswana","dial_code":"+267","code":"BW"},{"name":"Brazil","dial_code":"+55","code":"BR"},{"name":"British Indian Ocean Territory","dial_code":"+246","code":"IO"},{"name":"Bulgaria","dial_code":"+359","code":"BG"},{"name":"Burkina Faso","dial_code":"+226","code":"BF"},{"name":"Burundi","dial_code":"+257","code":"BI"},{"name":"Cambodia","dial_code":"+855","code":"KH"},{"name":"Cameroon","dial_code":"+237","code":"CM"},{"name":"Canada","dial_code":"+1","code":"CA"},{"name":"Cape Verde","dial_code":"+238","code":"CV"},{"name":"Cayman Islands","dial_code":"+ 345","code":"KY"},{"name":"Central African Republic","dial_code":"+236","code":"CF"},{"name":"Chad","dial_code":"+235","code":"TD"},{"name":"Chile","dial_code":"+56","code":"CL"},{"name":"China","dial_code":"+86","code":"CN"},{"name":"Christmas Island","dial_code":"+61","code":"CX"},{"name":"Colombia","dial_code":"+57","code":"CO"},{"name":"Comoros","dial_code":"+269","code":"KM"},{"name":"Congo","dial_code":"+242","code":"CG"},{"name":"Cook Islands","dial_code":"+682","code":"CK"},{"name":"Costa Rica","dial_code":"+506","code":"CR"},{"name":"Croatia","dial_code":"+385","code":"HR"},{"name":"Cuba","dial_code":"+53","code":"CU"},{"name":"Cyprus","dial_code":"+537","code":"CY"},{"name":"Czech Republic","dial_code":"+420","code":"CZ"},{"name":"Denmark","dial_code":"+45","code":"DK"},{"name":"Djibouti","dial_code":"+253","code":"DJ"},{"name":"Dominica","dial_code":"+1 767","code":"DM"},{"name":"Dominican Republic","dial_code":"+1 849","code":"DO"},{"name":"Ecuador","dial_code":"+593","code":"EC"},{"name":"Egypt","dial_code":"+20","code":"EG"},{"name":"El Salvador","dial_code":"+503","code":"SV"},{"name":"Equatorial Guinea","dial_code":"+240","code":"GQ"},{"name":"Eritrea","dial_code":"+291","code":"ER"},{"name":"Estonia","dial_code":"+372","code":"EE"},{"name":"Ethiopia","dial_code":"+251","code":"ET"},{"name":"Faroe Islands","dial_code":"+298","code":"FO"},{"name":"Fiji","dial_code":"+679","code":"FJ"},{"name":"Finland","dial_code":"+358","code":"FI"},{"name":"France","dial_code":"+33","code":"FR"},{"name":"French Guiana","dial_code":"+594","code":"GF"},{"name":"French Polynesia","dial_code":"+689","code":"PF"},{"name":"Gabon","dial_code":"+241","code":"GA"},{"name":"Gambia","dial_code":"+220","code":"GM"},{"name":"Georgia","dial_code":"+995","code":"GE"},{"name":"Germany","dial_code":"+49","code":"DE"},{"name":"Ghana","dial_code":"+233","code":"GH"},{"name":"Gibraltar","dial_code":"+350","code":"GI"},{"name":"Greece","dial_code":"+30","code":"GR"},{"name":"Greenland","dial_code":"+299","code":"GL"},{"name":"Grenada","dial_code":"+1 473","code":"GD"},{"name":"Guadeloupe","dial_code":"+590","code":"GP"},{"name":"Guam","dial_code":"+1 671","code":"GU"},{"name":"Guatemala","dial_code":"+502","code":"GT"},{"name":"Guinea","dial_code":"+224","code":"GN"},{"name":"Guinea-Bissau","dial_code":"+245","code":"GW"},{"name":"Guyana","dial_code":"+595","code":"GY"},{"name":"Haiti","dial_code":"+509","code":"HT"},{"name":"Honduras","dial_code":"+504","code":"HN"},{"name":"Hungary","dial_code":"+36","code":"HU"},{"name":"Iceland","dial_code":"+354","code":"IS"},{"name":"India","dial_code":"+91","code":"IN"},{"name":"Indonesia","dial_code":"+62","code":"ID"},{"name":"Iraq","dial_code":"+964","code":"IQ"},{"name":"Ireland","dial_code":"+353","code":"IE"},{"name":"Israel","dial_code":"+972","code":"IL"},{"name":"Italy","dial_code":"+39","code":"IT"},{"name":"Jamaica","dial_code":"+1 876","code":"JM"},{"name":"Japan","dial_code":"+81","code":"JP"},{"name":"Jordan","dial_code":"+962","code":"JO"},{"name":"Kazakhstan","dial_code":"+7 7","code":"KZ"},{"name":"Kenya","dial_code":"+254","code":"KE"},{"name":"Kiribati","dial_code":"+686","code":"KI"},{"name":"Kuwait","dial_code":"+965","code":"KW"},{"name":"Kyrgyzstan","dial_code":"+996","code":"KG"},{"name":"Latvia","dial_code":"+371","code":"LV"},{"name":"Lebanon","dial_code":"+961","code":"LB"},{"name":"Lesotho","dial_code":"+266","code":"LS"},{"name":"Liberia","dial_code":"+231","code":"LR"},{"name":"Liechtenstein","dial_code":"+423","code":"LI"},{"name":"Lithuania","dial_code":"+370","code":"LT"},{"name":"Luxembourg","dial_code":"+352","code":"LU"},{"name":"Madagascar","dial_code":"+261","code":"MG"},{"name":"Malawi","dial_code":"+265","code":"MW"},{"name":"Malaysia","dial_code":"+60","code":"MY"},{"name":"Maldives","dial_code":"+960","code":"MV"},{"name":"Mali","dial_code":"+223","code":"ML"},{"name":"Malta","dial_code":"+356","code":"MT"},{"name":"Marshall Islands","dial_code":"+692","code":"MH"},{"name":"Martinique","dial_code":"+596","code":"MQ"},{"name":"Mauritania","dial_code":"+222","code":"MR"},{"name":"Mauritius","dial_code":"+230","code":"MU"},{"name":"Mayotte","dial_code":"+262","code":"YT"},{"name":"Mexico","dial_code":"+52","code":"MX"},{"name":"Monaco","dial_code":"+377","code":"MC"},{"name":"Mongolia","dial_code":"+976","code":"MN"},{"name":"Montenegro","dial_code":"+382","code":"ME"},{"name":"Montserrat","dial_code":"+1664","code":"MS"},{"name":"Morocco","dial_code":"+212","code":"MA"},{"name":"Myanmar","dial_code":"+95","code":"MM"},{"name":"Namibia","dial_code":"+264","code":"NA"},{"name":"Nauru","dial_code":"+674","code":"NR"},{"name":"Nepal","dial_code":"+977","code":"NP"},{"name":"Netherlands","dial_code":"+31","code":"NL"},{"name":"Netherlands Antilles","dial_code":"+599","code":"AN"},{"name":"New Caledonia","dial_code":"+687","code":"NC"},{"name":"New Zealand","dial_code":"+64","code":"NZ"},{"name":"Nicaragua","dial_code":"+505","code":"NI"},{"name":"Niger","dial_code":"+227","code":"NE"},{"name":"Nigeria","dial_code":"+234","code":"NG"},{"name":"Niue","dial_code":"+683","code":"NU"},{"name":"Norfolk Island","dial_code":"+672","code":"NF"},{"name":"Northern Mariana Islands","dial_code":"+1 670","code":"MP"},{"name":"Norway","dial_code":"+47","code":"NO"},{"name":"Oman","dial_code":"+968","code":"OM"},{"name":"Pakistan","dial_code":"+92","code":"PK"},{"name":"Palau","dial_code":"+680","code":"PW"},{"name":"Panama","dial_code":"+507","code":"PA"},{"name":"Papua New Guinea","dial_code":"+675","code":"PG"},{"name":"Paraguay","dial_code":"+595","code":"PY"},{"name":"Peru","dial_code":"+51","code":"PE"},{"name":"Philippines","dial_code":"+63","code":"PH"},{"name":"Poland","dial_code":"+48","code":"PL"},{"name":"Portugal","dial_code":"+351","code":"PT"},{"name":"Puerto Rico","dial_code":"+1 939","code":"PR"},{"name":"Qatar","dial_code":"+974","code":"QA"},{"name":"Romania","dial_code":"+40","code":"RO"},{"name":"Rwanda","dial_code":"+250","code":"RW"},{"name":"Samoa","dial_code":"+685","code":"WS"},{"name":"San Marino","dial_code":"+378","code":"SM"},{"name":"Saudi Arabia","dial_code":"+966","code":"SA"},{"name":"Senegal","dial_code":"+221","code":"SN"},{"name":"Serbia","dial_code":"+381","code":"RS"},{"name":"Seychelles","dial_code":"+248","code":"SC"},{"name":"Sierra Leone","dial_code":"+232","code":"SL"},{"name":"Singapore","dial_code":"+65","code":"SG"},{"name":"Slovakia","dial_code":"+421","code":"SK"},{"name":"Slovenia","dial_code":"+386","code":"SI"},{"name":"Solomon Islands","dial_code":"+677","code":"SB"},{"name":"South Africa","dial_code":"+27","code":"ZA"},{"name":"South Georgia and the South Sandwich Islands","dial_code":"+500","code":"GS"},{"name":"Spain","dial_code":"+34","code":"ES"},{"name":"Sri Lanka","dial_code":"+94","code":"LK"},{"name":"Sudan","dial_code":"+249","code":"SD"},{"name":"Suriname","dial_code":"+597","code":"SR"},{"name":"Swaziland","dial_code":"+268","code":"SZ"},{"name":"Sweden","dial_code":"+46","code":"SE"},{"name":"Switzerland","dial_code":"+41","code":"CH"},{"name":"Tajikistan","dial_code":"+992","code":"TJ"},{"name":"Thailand","dial_code":"+66","code":"TH"},{"name":"Togo","dial_code":"+228","code":"TG"},{"name":"Tokelau","dial_code":"+690","code":"TK"},{"name":"Tonga","dial_code":"+676","code":"TO"},{"name":"Trinidad and Tobago","dial_code":"+1 868","code":"TT"},{"name":"Tunisia","dial_code":"+216","code":"TN"},{"name":"Turkey","dial_code":"+90","code":"TR"},{"name":"Turkmenistan","dial_code":"+993","code":"TM"},{"name":"Turks and Caicos Islands","dial_code":"+1 649","code":"TC"},{"name":"Tuvalu","dial_code":"+688","code":"TV"},{"name":"Uganda","dial_code":"+256","code":"UG"},{"name":"Ukraine","dial_code":"+380","code":"UA"},{"name":"United Arab Emirates","dial_code":"+971","code":"AE"},{"name":"United Kingdom","dial_code":"+44","code":"GB"},{"name":"United States","dial_code":"+1","code":"US"},{"name":"Uruguay","dial_code":"+598","code":"UY"},{"name":"Uzbekistan","dial_code":"+998","code":"UZ"},{"name":"Vanuatu","dial_code":"+678","code":"VU"},{"name":"Wallis and Futuna","dial_code":"+681","code":"WF"},{"name":"Yemen","dial_code":"+967","code":"YE"},{"name":"Zambia","dial_code":"+260","code":"ZM"},{"name":"Zimbabwe","dial_code":"+263","code":"ZW"},{"name":"land Islands","dial_code":"","code":"AX"},{"name":"Antarctica","dial_code":null,"code":"AQ"},{"name":"Bolivia, Plurinational State of","dial_code":"+591","code":"BO"},{"name":"Brunei Darussalam","dial_code":"+673","code":"BN"},{"name":"Cocos (Keeling) Islands","dial_code":"+61","code":"CC"},{"name":"Congo, The Democratic Republic of the","dial_code":"+243","code":"CD"},{"name":"Cote d'Ivoire","dial_code":"+225","code":"CI"},{"name":"Falkland Islands (Malvinas)","dial_code":"+500","code":"FK"},{"name":"Guernsey","dial_code":"+44","code":"GG"},{"name":"Holy See (Vatican City State)","dial_code":"+379","code":"VA"},{"name":"Hong Kong","dial_code":"+852","code":"HK"},{"name":"Iran, Islamic Republic of","dial_code":"+98","code":"IR"},{"name":"Isle of Man","dial_code":"+44","code":"IM"},{"name":"Jersey","dial_code":"+44","code":"JE"},{"name":"Korea, Democratic People's Republic of","dial_code":"+850","code":"KP"},{"name":"Korea, Republic of","dial_code":"+82","code":"KR"},{"name":"Lao People's Democratic Republic","dial_code":"+856","code":"LA"},{"name":"Libyan Arab Jamahiriya","dial_code":"+218","code":"LY"},{"name":"Macao","dial_code":"+853","code":"MO"},{"name":"Macedonia, The Former Yugoslav Republic of","dial_code":"+389","code":"MK"},{"name":"Micronesia, Federated States of","dial_code":"+691","code":"FM"},{"name":"Moldova, Republic of","dial_code":"+373","code":"MD"},{"name":"Mozambique","dial_code":"+258","code":"MZ"},{"name":"Palestinian Territory, Occupied","dial_code":"+970","code":"PS"},{"name":"Pitcairn","dial_code":"+872","code":"PN"},{"name":"Réunion","dial_code":"+262","code":"RE"},{"name":"Russia","dial_code":"+7","code":"RU"},{"name":"Saint Barthélemy","dial_code":"+590","code":"BL"},{"name":"Saint Helena, Ascension and Tristan Da Cunha","dial_code":"+290","code":"SH"},{"name":"Saint Kitts and Nevis","dial_code":"+1 869","code":"KN"},{"name":"Saint Lucia","dial_code":"+1 758","code":"LC"},{"name":"Saint Martin","dial_code":"+590","code":"MF"},{"name":"Saint Pierre and Miquelon","dial_code":"+508","code":"PM"},{"name":"Saint Vincent and the Grenadines","dial_code":"+1 784","code":"VC"},{"name":"Sao Tome and Principe","dial_code":"+239","code":"ST"},{"name":"Somalia","dial_code":"+252","code":"SO"},{"name":"Svalbard and Jan Mayen","dial_code":"+47","code":"SJ"},{"name":"Syrian Arab Republic","dial_code":"+963","code":"SY"},{"name":"Taiwan, Province of China","dial_code":"+886","code":"TW"},{"name":"Tanzania, United Republic of","dial_code":"+255","code":"TZ"},{"name":"Timor-Leste","dial_code":"+670","code":"TL"},{"name":"Venezuela, Bolivarian Republic of","dial_code":"+58","code":"VE"},{"name":"Viet Nam","dial_code":"+84","code":"VN"},{"name":"Virgin Islands, British","dial_code":"+1 284","code":"VG"},{"name":"Virgin Islands, U.S.","dial_code":"+1 340","code":"VI"}];

/***/ }),

/***/ "./src/app/utils/utils.json":
/*!**********************************!*\
  !*** ./src/app/utils/utils.json ***!
  \**********************************/
/*! exports provided: statuses, communicationModes, default */
/***/ (function(module) {

module.exports = {"statuses":[{"label":"New","value":"New"},{"label":"In progress","value":"In progress"},{"label":"Resolved","value":"Resolved"},{"label":"Archive","value":"Archive"}],"communicationModes":[{"label":"Whatsapp","value":1},{"label":"Call","value":2},{"label":"SMS","value":3}]};

/***/ }),

/***/ "./src/assets/styles/rotating-card.css":
/*!*********************************************!*\
  !*** ./src/assets/styles/rotating-card.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n\tmargin-top: 60px;\n\tfont-size: 14px;\n\tfont-family: \"Helvetica Nueue\",Arial,Verdana,sans-serif;\n\tbackground-color: #E5E9ED;\n}\n.btn:hover,\n.btn:focus,\n.btn:active{\n    outline: 0 !important;\n}\n/* entire container, keeps perspective */\n.card-container {\n\t  -webkit-perspective: 800px;\n     -o-perspective: 800px;\n        perspective: 800px;\n        margin-bottom: 30px;\n}\n/* flip the pane when hovered */\n.card-container:not(.manual-flip):hover .card,\n.card-container.hover.manual-flip .card{\n\t-webkit-transform: rotateY( 180deg );\n    transform: rotateY( 180deg );\n}\n.card-container.static:hover .card,\n.card-container.static.hover .card {\n\t-webkit-transform: none;\n    transform: none;\n}\n/* flip speed goes here */\n.card {\n  transition: -webkit-transform .5s;\n  transition: transform .5s;\n  transition: transform .5s, -webkit-transform .5s;\n-webkit-transform-style: preserve-3d;\n        transform-style: preserve-3d;\n\tposition: relative;\n}\n/* hide back of pane during swap */\n.front, .back {\n\t-webkit-backface-visibility: hidden;\n        backface-visibility: hidden;\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tbackground-color: #FFF;\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.14);\n}\n/* front pane, placed above back */\n.front {\n\tz-index: 2;\n}\n/* back, initially hidden pane */\n.back {\n\t\t-webkit-transform: rotateY( 180deg );\n        transform: rotateY( 180deg );\n        z-index: 3;\n}\n.back .btn-simple{\n    position: absolute;\n    left: 0;\n    bottom: 4px;\n}\n/*        Style       */\n.card{\n    background: none repeat scroll 0 0 #FFFFFF;\n    border-radius: 4px;\n    color: #444444;\n}\n.card-container, .front, .back {\n\twidth: 100%;\n\theight: 420px;\n\tborder-radius: 4px;\n}\n.card .cover{\n    height: 105px;\n    overflow: hidden;\n    border-radius: 4px 4px 0 0;\n}\n.card .cover img{\n    width: 100%;\n}\n.card .user{\n    border-radius: 50%;\n    display: block;\n    height: 120px;\n    margin: -55px auto 0;\n    overflow: hidden;\n    width: 120px;\n}\n.card .user img{\n    background: none repeat scroll 0 0 #FFFFFF;\n    border: 4px solid #FFFFFF;\n    width: 100%;\n}\n.card .content{\n    background-color: rgba(0, 0, 0, 0);\n    box-shadow: none;\n    padding: 10px 20px 20px;\n}\n.card .content .main {\n    min-height: 160px;\n}\n.card .back .content .main {\n    height: 215px;\n}\n.card .name {\n    font-size: 22px;\n    line-height: 28px;\n    margin: 10px 0 0;\n    text-align: center;\n    text-transform: capitalize;\n}\n.card h5{\n    margin: 5px 0;\n    font-weight: 400;\n    line-height: 20px;\n}\n.card .profession{\n    color: #999999;\n    text-align: center;\n    margin-bottom: 20px;\n}\n.card .footer {\n    border-top: 1px solid #EEEEEE;\n    color: #999999;\n    margin: 30px 0 0;\n    padding: 10px 0 0;\n    text-align: center;\n}\n.card .footer .social-links{\n    font-size: 18px;\n}\n.card .footer .social-links a{\n    margin: 0 7px;\n}\n.card .footer .btn-simple{\n    margin-top: -6px;\n}\n.card .header {\n    padding: 15px 20px;\n    height: 90px;\n}\n.card .motto{\n    border-bottom: 1px solid #EEEEEE;\n    color: #999999;\n    font-size: 14px;\n    font-weight: 400;\n    padding-bottom: 10px;\n    text-align: center;\n}\n.card .stats-container{\n\twidth: 100%;\n\tmargin-top: 50px;\n}\n.card .stats{\n\tdisplay: block;\n\tfloat: left;\n\twidth: 33.333333%;\n\ttext-align: center;\n}\n.card .stats:first-child{\n\tborder-right: 1px solid #EEEEEE;\n}\n.card .stats:last-child{\n\tborder-left: 1px solid #EEEEEE;\n}\n.card .stats h4{\n\tfont-weight: 300;\n\tmargin-bottom: 5px;\n}\n.card .stats p{\n\tcolor: #777777;\n}\n/*      Just for presentation        */\n.title{\n    color: #506A85;\n    text-align: center;\n    font-weight: 300;\n    font-size: 44px;\n    margin-bottom: 90px;\n    line-height: 90%;\n}\n.title small{\n    font-size: 17px;\n    color: #999;\n    text-transform: uppercase;\n    margin: 0;\n}\n.space-30{\n\theight: 30px;\n\tdisplay: block;\n}\n.space-50{\n    height: 50px;\n    display: block;\n}\n.space-200{\n    height: 200px;\n    display: block;\n}\n.white-board{\n    background-color: #FFFFFF;\n    min-height: 200px;\n    padding: 60px 60px 20px;\n}\n.ct-heart{\n    color: #F74933;\n}\npre.prettyprint{\n    background-color: #ffffff;\n    border: 1px solid #999;\n    margin-top: 20px;\n    padding: 20px;\n    text-align: left;\n}\n.atv, .str{\n    color: #05AE0E;\n}\n.tag, .pln, .kwd{\n     color: #3472F7;\n}\n.atn{\n  color: #2C93FF;\n}\n.pln{\n   color: #333;\n}\n.com{\n    color: #999;\n}\n.btn-simple{\n    opacity: .8;\n    color: #666666;\n    background-color: transparent;\n}\n.btn-simple:hover,\n.btn-simple:focus{\n    background-color: transparent;\n    box-shadow: none;\n    opacity: 1;\n}\n.btn-simple i{\n    font-size: 16px;\n}\n.navbar-brand-logo{\n    padding: 0;\n}\n.navbar-brand-logo .logo{\n    border: 1px solid #333333;\n    border-radius: 50%;\n    float: left;\n    overflow: hidden;\n    width: 60px;\n}\n.navbar .navbar-brand-logo .brand{\n    color: #FFFFFF;\n    float: left;\n    font-size: 18px;\n    font-weight: 400;\n    line-height: 20px;\n    margin-left: 10px;\n    margin-top: 10px;\n    width: 60px;\n}\n.navbar-default .navbar-brand-logo .brand{\n    color: #555;\n}\n/*       Fix bug for IE      */\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n    .front, .back{\n        -webkit-backface-visibility: visible;\n                backface-visibility: visible;\n    }\n\n    .back {\n        visibility: hidden;\n        -ms-transition: all 0.2s cubic-bezier(.92,.01,.83,.67);\n    }\n    .front{\n        z-index: 4;\n    }\n    .card-container:not(.manual-flip):hover .back,\n    .card-container.manual-flip.hover .back{\n        z-index: 5;\n        visibility: visible;\n    }\n}\n"

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/deepuaugust/Desktop/Projects/covid-app/public/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map