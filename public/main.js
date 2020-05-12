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

module.exports = "<div id=\"mySidenav\" class=\"sidenav\">\n  <a href=\"javascript:void(0)\" class=\"closebtn\" (click)=\"closeNav()\">&times;</a>\n  <a (click)=\"goToHome()\">Home</a>\n  <a (click)=\"logout()\">Logout</a>\n</div>\n\n<!-- Use any element to open the sidenav -->\n<span (click)=\"openNav()\" class=\"menu_icon\" id=\"menu_id\">\n  <div class=\"menu\"></div>\n  <div class=\"menu\"></div>\n  <div class=\"menu\"></div\n></span>\n<div class=\"\" id=\"maindiv\">\n  <router-outlet></router-outlet>\n</div>\n"

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
/* harmony import */ var _components_requests_requests_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/requests/requests.component */ "./src/app/components/requests/requests.component.ts");
/* harmony import */ var _components_requests_request_create_request_create_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/requests/request-create/request-create.component */ "./src/app/components/requests/request-create/request-create.component.ts");
/* harmony import */ var _services_toaster_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/toaster.service */ "./src/app/services/toaster.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _services_role_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/role.service */ "./src/app/services/role.service.ts");
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/request.service */ "./src/app/services/request.service.ts");
/* harmony import */ var _authInterceptor_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./authInterceptor.service */ "./src/app/authInterceptor.service.ts");
/* harmony import */ var _components_cell_renderer_cell_renderer_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/cell_renderer/cell_renderer.component */ "./src/app/components/cell_renderer/cell_renderer.component.ts");
/* harmony import */ var _components_requests_request_interact_request_interact_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/requests/request-interact/request-interact.component */ "./src/app/components/requests/request-interact/request-interact.component.ts");
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
    { path: "home/user", component: _components_user_user_component__WEBPACK_IMPORTED_MODULE_12__["UserComponent"] },
    { path: "category", component: _components_category_category_component__WEBPACK_IMPORTED_MODULE_14__["CategoryComponent"] },
    { path: "category/create", component: _components_category_create_category_create_category_component__WEBPACK_IMPORTED_MODULE_15__["CreateCategoryComponent"] },
    { path: "roles", component: _components_roles_roles_component__WEBPACK_IMPORTED_MODULE_16__["RolesComponent"] },
    { path: "roles/create", component: _components_roles_create_roles_create_roles_component__WEBPACK_IMPORTED_MODULE_17__["CreateRolesComponent"] },
    { path: "requests", component: _components_requests_requests_component__WEBPACK_IMPORTED_MODULE_18__["RequestsComponent"] },
    { path: "requests/create", component: _components_requests_request_create_request_create_component__WEBPACK_IMPORTED_MODULE_19__["RequestCreateComponent"] },
    { path: "requests/edit/:id", component: _components_requests_request_create_request_create_component__WEBPACK_IMPORTED_MODULE_19__["RequestCreateComponent"] },
    { path: "requests/interact/:id", component: _components_requests_request_interact_request_interact_component__WEBPACK_IMPORTED_MODULE_27__["RequestInteractComponent"] },
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
                _components_requests_requests_component__WEBPACK_IMPORTED_MODULE_18__["RequestsComponent"],
                _components_requests_request_create_request_create_component__WEBPACK_IMPORTED_MODULE_19__["RequestCreateComponent"],
                _components_cell_renderer_cell_renderer_component__WEBPACK_IMPORTED_MODULE_26__["CellRendererComponent"],
                _components_requests_request_interact_request_interact_component__WEBPACK_IMPORTED_MODULE_27__["RequestInteractComponent"],
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
            entryComponents: [_components_cell_renderer_cell_renderer_component__WEBPACK_IMPORTED_MODULE_26__["CellRendererComponent"]],
            providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_21__["UserService"], _services_category_service__WEBPACK_IMPORTED_MODULE_22__["CategoryService"], _services_role_service__WEBPACK_IMPORTED_MODULE_23__["RolesService"], _services_request_service__WEBPACK_IMPORTED_MODULE_24__["RequestService"], _services_toaster_service__WEBPACK_IMPORTED_MODULE_20__["ToasterService"], {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
                    useClass: _authInterceptor_service__WEBPACK_IMPORTED_MODULE_25__["AuthInterceptorService"],
                    multi: true
                }],
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

module.exports = "<div class=\"maindiv col-md-12\">\n  <div class=\"container\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div\n            class=\"col-md-3 imgdiv\"\n            routerLink=\"/home/user\"\n            *ngIf=\"user.type == 'admin' || user.type == 'superAdmin'\"\n          >\n            <div class=\"card-container\">\n              <div class=\"card\">\n                <div class=\"front\">\n                  <div class=\"cover\">\n                    <img src=\"../../../assets/images/cardbg.jpg\" />\n                  </div>\n                  <div class=\"user\">\n                    <img\n                      class=\"img-circle\"\n                      src=\"../../../assets/images/user.png\"\n                    />\n                  </div>\n                  <div class=\"content\">\n                    <div class=\"main\">\n                      <h3 class=\"name\">Users</h3>\n                      <p class=\"profession\"></p>\n\n                      <p class=\"text-center\">\n                        The list of registered users depicting their\n                        corresponding categories and roles can be viewed. A new\n                        user can be registered based on availability.\n                      </p>\n                    </div>\n                    <div class=\"footer\"></div>\n                  </div>\n                </div>\n                <!-- end front panel -->\n                <div class=\"back\">\n                  <div class=\"header\">\n                    <h5 class=\"motto\">\n                      \"Clean your hands often. Use soap and water, or an\n                      alcohol-based hand rub.\"\n                    </h5>\n                  </div>\n                  <div class=\"content\">\n                    <div class=\"main\">\n                      <h4 class=\"text-center\">Brief Overview</h4>\n                      <p class=\"text-center\">\n                        The below depicts the total count of users registered\n                        within the application.\n                      </p>\n\n                      <div class=\"stats-container\">\n                        <div class=\"stats\">\n                          <h4></h4>\n                          <p></p>\n                        </div>\n                        <div class=\"stats\" style=\"width:100%\">\n                          <h4>{{ userSummary }}</h4>\n                          <p>\n                            {{ userType }}\n                          </p>\n                        </div>\n                        <div class=\"stats\">\n                          <h4></h4>\n                          <p></p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"footer\"></div>\n                </div>\n                <!-- end back panel -->\n              </div>\n              <!-- end card -->\n            </div>\n            <!-- end card-container -->\n          </div>\n          <div\n            class=\"col-md-3 imgdiv\"\n            routerLink=\"/category\"\n            *ngIf=\"user.type == 'admin' || user.type == 'superAdmin'\"\n          >\n            <div class=\"card-container\">\n              <div class=\"card\">\n                <div class=\"front\">\n                  <div class=\"cover\">\n                    <img src=\"../../../assets/images/cardbg.jpg\" />\n                  </div>\n                  <div class=\"user\">\n                    <img\n                      class=\"img-circle\"\n                      src=\"../../../assets/images/category.png\"\n                    />\n                  </div>\n                  <div class=\"content\">\n                    <div class=\"main\">\n                      <h3 class=\"name\">Categories</h3>\n                      <p class=\"profession\"></p>\n\n                      <p class=\"text-center\">\n                        All the categories within the system can be viewed. A\n                        new category can be created based on the incoming\n                        request if not already available.\n                      </p>\n                    </div>\n                    <div class=\"footer\"></div>\n                  </div>\n                </div>\n                <!-- end front panel -->\n                <div class=\"back\">\n                  <div class=\"header\">\n                    <h5 class=\"motto\">\n                      \"Maintain a safe distance from anyone who is coughing or\n                      sneezing.\"\n                    </h5>\n                  </div>\n                  <div class=\"content\">\n                    <div class=\"main\">\n                      <h4 class=\"text-center\">Brief Overview</h4>\n                      <p class=\"text-center\">\n                        The below depicts the total number of categories for\n                        which services are being provided.\n                      </p>\n\n                      <div class=\"stats-container\">\n                        <div class=\"stats\">\n                          <h4></h4>\n                          <p></p>\n                        </div>\n\n                        <div class=\"stats\">\n                          <h4>{{ categorySummary }}</h4>\n                          <p>\n                            Categories\n                          </p>\n                        </div>\n                        <div class=\"stats\">\n                          <h4></h4>\n                          <p></p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"footer\"></div>\n                </div>\n                <!-- end back panel -->\n              </div>\n              <!-- end card -->\n            </div>\n            <!-- end card-container -->\n          </div>\n          <div\n            class=\"col-md-3 imgdiv\"\n            routerLink=\"/roles\"\n            *ngIf=\"user.type == 'admin' || user.type == 'superAdmin'\"\n          >\n            <div class=\"card-container\">\n              <div class=\"card\">\n                <div class=\"front\">\n                  <div class=\"cover\">\n                    <img src=\"../../../assets/images/cardbg.jpg\" />\n                  </div>\n                  <div class=\"user\">\n                    <img\n                      class=\"img-circle\"\n                      src=\"../../../assets/images/role.png\"\n                    />\n                  </div>\n                  <div class=\"content\">\n                    <div class=\"main\">\n                      <h3 class=\"name\">Roles</h3>\n                      <p class=\"profession\"></p>\n\n                      <p class=\"text-center\">\n                        All roles within the system can be viewed. A new role\n                        can be created based on the incoming request if not\n                        already available.\n                      </p>\n                    </div>\n                    <div class=\"footer\"></div>\n                  </div>\n                </div>\n                <!-- end front panel -->\n                <div class=\"back\">\n                  <div class=\"header\">\n                    <h5 class=\"motto\">\n                      \"Cover your nose and mouth with your bent elbow or a\n                      tissue when you cough or sneeze.\"\n                    </h5>\n                  </div>\n                  <div class=\"content\">\n                    <div class=\"main\">\n                      <h4 class=\"text-center\">Brief Overview</h4>\n                      <p class=\"text-center\">\n                        The below depicts the total number of roles which are\n                        actively participating for resolving the requests\n                        created.\n                      </p>\n\n                      <div class=\"stats-container\">\n                        <div class=\"stats\">\n                          <h4></h4>\n                          <p></p>\n                        </div>\n\n                        <div class=\"stats\">\n                          <h4>{{ roleSummary }}</h4>\n                          <p>\n                            Roles\n                          </p>\n                        </div>\n                        <div class=\"stats\">\n                          <h4></h4>\n                          <p></p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"footer\"></div>\n                </div>\n                <!-- end back panel -->\n              </div>\n              <!-- end card -->\n            </div>\n            <!-- end card-container -->\n          </div>\n          <div class=\"col-md-3 imgdiv\" routerLink=\"/requests\" *ngIf=\"user.type\">\n            <div class=\"card-container\">\n              <div class=\"card\">\n                <div class=\"front\">\n                  <div class=\"cover\">\n                    <img src=\"../../../assets/images/cardbg.jpg\" />\n                  </div>\n                  <div class=\"user\">\n                    <img\n                      class=\"img-circle\"\n                      src=\"../../../assets/images/request.jpg\"\n                    />\n                  </div>\n                  <div class=\"content\">\n                    <div class=\"main\">\n                      <h3 class=\"name\">Requests</h3>\n                      <p class=\"profession\"></p>\n\n                      <p class=\"text-center\">\n                        The complete set of requests can be viewed. A new\n                        request can be regstered by mapping it to the\n                        corresponding service provider.\n                      </p>\n                    </div>\n                    <div class=\"footer\"></div>\n                  </div>\n                </div>\n                <!-- end front panel -->\n                <div class=\"back\">\n                  <div class=\"header\">\n                    <h5 class=\"motto\">\n                      \"Follow the directions of your local health authority.\"\n                    </h5>\n                  </div>\n                  <div class=\"content\">\n                    <div class=\"main\">\n                      <h4 class=\"text-center\">Brief Overview</h4>\n                      <p class=\"text-center\">\n                        The below depicts the total count of requests that have\n                        been raised along with their corresponding statuses..\n                      </p>\n\n                      <div class=\"stats-container\">\n                        <div\n                          class=\"stats\"\n                          *ngFor=\"let summary of requestsSummary\"\n                        >\n                          <h4>{{ summary.count }}</h4>\n                          <p>\n                            {{ statuses[summary._id - 1] }}\n                          </p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"footer\"></div>\n                </div>\n                <!-- end back panel -->\n              </div>\n              <!-- end card -->\n            </div>\n            <!-- end card-container -->\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

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

/***/ "./src/app/components/cell_renderer/cell_renderer.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/cell_renderer/cell_renderer.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\n    padding: 10px;\n    margin-right: 10px;\n    width: 70px;\n    margin-top: 5px;\n    margin-bottom: 5px;\n}"

/***/ }),

/***/ "./src/app/components/cell_renderer/cell_renderer.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/cell_renderer/cell_renderer.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-primary\" type=\"button\" *ngIf=\"readAccess\" routerLink=\"/requests/edit/{{data._id}}\">Edit</button>\n<button class=\"btn btn-primary\" type=\"button\" routerLink=\"/requests/interact/{{data._id}}\">Interact</button>"

/***/ }),

/***/ "./src/app/components/cell_renderer/cell_renderer.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/cell_renderer/cell_renderer.component.ts ***!
  \*********************************************************************/
/*! exports provided: CellRendererComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CellRendererComponent", function() { return CellRendererComponent; });
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

var CellRendererComponent = /** @class */ (function () {
    function CellRendererComponent() {
        this.user = localStorage.getItem("user")
            ? JSON.parse(localStorage.getItem("user"))
            : "";
        this.readAccess = this.user.role && this.user.role.requestReadAccess;
    }
    CellRendererComponent.prototype.agInit = function (params) {
        this.params = params;
        this.data = params.data;
    };
    CellRendererComponent.prototype.ngOnInit = function () { };
    CellRendererComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-cell_renderer",
            template: __webpack_require__(/*! ./cell_renderer.component.html */ "./src/app/components/cell_renderer/cell_renderer.component.html"),
            styles: [__webpack_require__(/*! ./cell_renderer.component.css */ "./src/app/components/cell_renderer/cell_renderer.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], CellRendererComponent);
    return CellRendererComponent;
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
                }
                else {
                    _this.route.navigate(["/requests"]);
                }
                document.getElementById('menu_id').style.display = "block";
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

module.exports = "<div class=\"main col-md-12\">\n  <h2 style=\"text-align: center;\">\n    Add {{ loggedInUser.type === \"superAdmin\" ? \"Admin\" : \"User\" }}\n  </h2>\n\n  <form class=\"col-md-12\" #signupForm=\"ngForm\" (ngSubmit)=\"signup(user)\">\n    <div class=\"container col-md-12\">\n      <label class=\"col-md-12\" for=\"fname\">\n        <b>First Name</b>\n      </label>\n      <input\n        type=\"text\"\n        [(ngModel)]=\"user.fName\"\n        class=\"form-control col-md-12\"\n        placeholder=\"Enter First name\"\n        name=\"fName\"\n        required\n        #fName=\"ngModel\"\n      />\n      <div\n        [hidden]=\"fName.valid || fName.pristine\"\n        class=\"alert alert-danger col-md-12\"\n      >\n        First name is required\n      </div>\n      <label class=\"col-md-12\" for=\"lname\">\n        <b>Last Name</b>\n      </label>\n      <input\n        type=\"text\"\n        [(ngModel)]=\"user.lName\"\n        class=\"form-control col-md-12\"\n        placeholder=\"Enter Last name\"\n        name=\"lName\"\n        required\n        #lName=\"ngModel\"\n      />\n      <div\n        [hidden]=\"lName.valid || lName.pristine\"\n        class=\"alert alert-danger col-md-12\"\n      >\n        Last name is required\n      </div>\n      <label class=\"col-md-12\" for=\"uname\">\n        <b>Username</b>\n      </label>\n      <input\n        type=\"text\"\n        [(ngModel)]=\"user.userName\"\n        class=\"form-control col-md-12\"\n        placeholder=\"Enter Username\"\n        name=\"userName\"\n        required\n        #userName=\"ngModel\"\n      />\n      <div\n        [hidden]=\"userName.valid || userName.pristine\"\n        class=\"alert alert-danger col-md-12\"\n      >\n        Username is required\n      </div>\n      <label class=\"col-md-12\" for=\"psw\">\n        <b>Password</b>\n      </label>\n      <input\n        type=\"password\"\n        [(ngModel)]=\"user.password\"\n        class=\"form-control col-md-12\"\n        placeholder=\"Enter Password\"\n        name=\"password\"\n        required\n        #password=\"ngModel\"\n      />\n      <div\n        [hidden]=\"password.valid || password.pristine\"\n        class=\"alert alert-danger col-md-12\"\n      >\n        Password is required\n      </div>\n\n      <div *ngIf=\"loggedInUser.type === 'admin'\">\n        <label class=\"col-md-12\" for=\"category\">\n          <b>Category</b>\n        </label>\n        <select\n          [(ngModel)]=\"user.category\"\n          class=\"form-control col-md-12\"\n          placeholder=\"Select Category\"\n          name=\"category\"\n          required\n          #category=\"ngModel\"\n          (ngModelChange)=\"onChange($event)\"\n        >\n          <option disabled>Select Category</option>\n          <option\n            *ngFor=\"let category of categories\"\n            [ngValue]=\"category._id\"\n            >{{ category.name }}</option\n          >\n        </select>\n        <div\n          [hidden]=\"category.valid || category.pristine\"\n          class=\"alert alert-danger col-md-12\"\n        >\n          Category is required\n        </div>\n        <label class=\"col-md-12\" for=\"category\">\n          <b>Role</b>\n        </label>\n        <select\n          [(ngModel)]=\"user.role\"\n          class=\"form-control col-md-12\"\n          placeholder=\"Select Category\"\n          name=\"role\"\n          required\n          #role=\"ngModel\"\n        >\n          <option disabled> Select Role</option>\n          <option *ngFor=\"let role of roles\" [ngValue]=\"role._id\">{{\n            role.name\n          }}</option>\n        </select>\n        <div\n          [hidden]=\"role.valid || role.pristine\"\n          class=\"alert alert-danger col-md-12\"\n        >\n          Role is required\n        </div>\n      </div>\n      <div class=\"col-md-12 buttondiv\">\n        <button class=\"btn btn-success\" [ngClass]=\"{disabled:!signupForm.form.valid}\" [disabled]=\"!signupForm.form.valid\" type=\"submit\">\n          Sign Up\n        </button>\n      </div>\n    </div>\n  </form>\n</div>\n"

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
    function RegisterComponent(route, _user, _category, _roles, toaster) {
        var _this = this;
        this.route = route;
        this._user = _user;
        this._category = _category;
        this._roles = _roles;
        this.toaster = toaster;
        this.loggedInUser = localStorage.getItem("user")
            ? JSON.parse(localStorage.getItem("user"))
            : "";
        // type = this.loggedInUser.type === "admin" ? "regular" : "admin";
        this.type = this.loggedInUser !== ""
            ? this.loggedInUser.type === "admin"
                ? "regular"
                : "admin"
            : "";
        this.user = { type: this.type };
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
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.loadCategories();
    };
    RegisterComponent.prototype.signup = function (data) {
        var _this = this;
        this._user.signup(data).subscribe(function (data) {
            if (data.status == "success") {
                _this.toaster.showSuccess("User registered successfully");
                _this.route.navigate(["/home/user"]);
            }
            else
                _this.toaster.showError(data.message);
        }, function (error) {
            _this.toaster.showError(error.error.message);
            if (error.error.statusCode === 403)
                _this.route.navigate(["login"]);
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-register",
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            src_app_services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"],
            src_app_services_role_service__WEBPACK_IMPORTED_MODULE_5__["RolesService"],
            _services_toaster_service__WEBPACK_IMPORTED_MODULE_2__["ToasterService"]])
    ], RegisterComponent);
    return RegisterComponent;
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

module.exports = "<div class=\"main col-md-12\">\n  <h2 style=\"text-align: center;\">{{ heading }} Request</h2>\n\n  <form\n    class=\"col-md-12\"\n    #requestForm=\"ngForm\"\n    (ngSubmit)=\"createRequest(request)\"\n  >\n    <div class=\"container col-md-12\">\n      <label class=\"col-md-12\" for=\"title\">\n        <b>Title</b>\n      </label>\n      <input\n        type=\"text\"\n        [(ngModel)]=\"request.title\"\n        class=\"form-control col-md-12\"\n        placeholder=\"Enter Title\"\n        name=\"title\"\n        required\n        #title=\"ngModel\"\n      />\n      <div\n        [hidden]=\"title.valid || title.pristine\"\n        class=\"alert alert-danger col-md-12\"\n      >\n        Title is required\n      </div>\n      <label class=\"col-md-12\" for=\"lname\">\n        <b>Description</b>\n      </label>\n      <input\n        type=\"text\"\n        [(ngModel)]=\"request.description\"\n        class=\"form-control col-md-12\"\n        placeholder=\"Enter Description\"\n        name=\"description\"\n        required\n        #description=\"ngModel\"\n      />\n      <div\n        [hidden]=\"description.valid || description.pristine\"\n        class=\"alert alert-danger col-md-12\"\n      >\n        Description is required\n      </div>\n\n      <label class=\"col-md-12\" for=\"name\">\n        <b>Full Name</b>\n      </label>\n      <input\n        type=\"text\"\n        [(ngModel)]=\"request.fullName\"\n        class=\"form-control col-md-12\"\n        placeholder=\"Enter Full Name\"\n        name=\"fullName\"\n        required\n        #fullName=\"ngModel\"\n      />\n      <div\n        [hidden]=\"fullName.valid || fullName.pristine\"\n        class=\"alert alert-danger col-md-12\"\n      >\n        Title is required\n      </div>\n\n      <label class=\"col-md-12\" for=\"country\">\n        <b>Select Country</b>\n      </label>\n      <select\n        [(ngModel)]=\"request.country\"\n        class=\"form-control col-md-12\"\n        name=\"country\"\n        required\n        #country=\"ngModel\"\n      >\n        <option disabled> Country</option>\n        <option *ngFor=\"let country of countryList\" [ngValue]=\"country.code\">\n          {{ country.name }} ({{ country.dial_code }})</option\n        >\n      </select>\n      <div\n        [hidden]=\"country.valid || country.pristine\"\n        class=\"alert alert-danger col-md-12\"\n      >\n        Country is required\n      </div>\n\n      <label class=\"col-md-12\" for=\"primaryContactNumber\">\n        <b>Primary Contact Number</b>\n      </label>\n      <input\n        type=\"number\"\n        [(ngModel)]=\"request.primaryContactNumber\"\n        class=\"form-control col-md-12\"\n        placeholder=\"Primary Contact number\"\n        name=\"primaryContactNumber\"\n        #primaryContactNumber=\"ngModel\"\n        required\n      />\n      <div\n        [hidden]=\"primaryContactNumber.valid || primaryContactNumber.pristine\"\n        class=\"alert alert-danger col-md-12\"\n      >\n        Primary Contact Number is required\n      </div>\n\n      <label class=\"col-md-12\" for=\"alternateContactNumber\">\n        <b>Alternate Contact Number</b>\n      </label>\n      <input\n        type=\"number\"\n        [(ngModel)]=\"request.alternateContactNumber\"\n        class=\"form-control col-md-12\"\n        placeholder=\"Alternate Contact Number\"\n        name=\"alternateContactNumber\"\n        #alternateContactNumber=\"ngModel\"\n      />\n      <!-- <div\n        [hidden]=\"\n          alternateContactNumber.valid || alternateContactNumber.pristine\n        \"\n        class=\"alert alert-danger col-md-12\"\n      >\n        Alternate Contact Number is required\n      </div> -->\n\n      <label class=\"col-md-12\" for=\"currentAddress\">\n        <b>Current Address</b>\n      </label>\n      <textarea\n        class=\"form-control col-md-12\"\n        placeholder=\"Current Address\"\n        [(ngModel)]=\"request.currentAddress\"\n        [maxlength]=\"400\"\n        name=\"currentAddress\"\n        #currentAddress\n      >\n      </textarea>\n\n      <!-- <div\n        [hidden]=\"currentAddress.valid || currentAddress.pristine\"\n        class=\"alert alert-danger col-md-12\"\n      >\n        Current address is required\n      </div> -->\n\n      <label class=\"col-md-12\" for=\"nativeAddress\">\n        <b>Native Address</b>\n      </label>\n      <textarea\n        class=\"form-control col-md-12\"\n        placeholder=\"Native Address\"\n        [(ngModel)]=\"request.nativeAddress\"\n        [maxlength]=\"400\"\n        name=\"nativeAddress\"\n        #nativeAddress\n      >\n      </textarea>\n      <!-- <div\n        [hidden]=\"nativeAddress.valid || nativeAddress.pristine\"\n        class=\"alert alert-danger col-md-12\"\n      >\n        Native address is required\n      </div> -->\n\n      <label class=\"col-md-12\" for=\"communicationMedium\">\n        <b>Preferred communication medium</b>\n      </label>\n      <select\n        [(ngModel)]=\"request.communicationMedium\"\n        class=\"form-control col-md-12\"\n        name=\"communicationMedium\"\n        required\n        #communicationMedium=\"ngModel\"\n      >\n        <option disabled> Preferred communication medium</option>\n        <option\n          *ngFor=\"let mode of communicationModes\"\n          [ngValue]=\"mode.value\"\n          >{{ mode.label }}</option\n        >\n      </select>\n      <div\n        [hidden]=\"communicationMedium.valid || communicationMedium.pristine\"\n        class=\"alert alert-danger col-md-12\"\n      >\n        Preferred communication medium is required\n      </div>\n      <div *ngIf=\"statuses.length > 1\">\n        <label class=\"col-md-12\" for=\"status\">\n          <b>Status</b>\n        </label>\n        <select\n          [(ngModel)]=\"request.status\"\n          class=\"form-control col-md-12\"\n          name=\"status\"\n          required\n          #status=\"ngModel\"\n        >\n          <option disabled> Status</option>\n          <option *ngFor=\"let status of statuses\" [ngValue]=\"status.value\">{{\n            status.label\n          }}</option>\n        </select>\n        <div\n          [hidden]=\"status.valid || status.pristine\"\n          class=\"alert alert-danger col-md-12\"\n        >\n          Status is required\n        </div>\n      </div>\n      <div class=\"col-md-12\" style=\"margin-bottom: 10px; margin-top: 10px;\">\n        <b>Please select a category and role to find the relevant assignee.</b>\n      </div>\n      <label class=\"col-md-12\" for=\"category\">\n        <b>Category</b>\n      </label>\n      <select\n        [(ngModel)]=\"request.category\"\n        class=\"form-control col-md-12\"\n        placeholder=\"Select Category\"\n        name=\"category\"\n        required\n        #category=\"ngModel\"\n        (ngModelChange)=\"onCategoryChange($event)\"\n      >\n        <option disabled>Select Category</option>\n        <option *ngFor=\"let category of categories\" [ngValue]=\"category._id\">{{\n          category.name\n        }}</option>\n      </select>\n      <div\n        [hidden]=\"category.valid || category.pristine\"\n        class=\"alert alert-danger col-md-12\"\n      >\n        Category is required\n      </div>\n      <label class=\"col-md-12\" for=\"Role\">\n        <b>Role</b>\n      </label>\n      <select\n        [(ngModel)]=\"request.role\"\n        class=\"form-control col-md-12\"\n        placeholder=\"Select Category\"\n        name=\"role\"\n        required\n        (ngModelChange)=\"onRoleChange($event)\"\n        #role=\"ngModel\"\n      >\n        <option disabled>Select Role</option>\n        <option *ngFor=\"let role of roles\" [ngValue]=\"role._id\">{{\n          role.name\n        }}</option>\n      </select>\n      <div\n        [hidden]=\"role.valid || role.pristine\"\n        class=\"alert alert-danger col-md-12\"\n      >\n        Role is required\n      </div>\n      <label class=\"col-md-12\" for=\"assignee\">\n        <b>Assignee</b>\n      </label>\n      <select\n        [(ngModel)]=\"request.assignedTo\"\n        class=\"form-control col-md-12\"\n        name=\"assignTo\"\n        required\n        #assignTo=\"ngModel\"\n      >\n        <option disabled> Assign To</option>\n        <option *ngFor=\"let user of users\" [ngValue]=\"user._id\"\n          >{{ user.fName }} {{ user.lName }} ({{user.total}} requests in queue)</option\n        >\n      </select>\n      <div\n        [hidden]=\"assignTo.valid || assignTo.pristine\"\n        class=\"alert alert-danger col-md-12\"\n      >\n        Assignee is required\n      </div>\n      <div class=\"col-md-12 buttondiv\">\n        <button\n          class=\"btn btn-success\"\n          [ngClass]=\"{ disabled: !requestForm.form.valid }\"\n          [disabled]=\"!requestForm.form.valid\"\n          type=\"submit\"\n        >\n          {{ heading }} Request\n        </button>\n      </div>\n    </div>\n  </form>\n</div>\n"

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
        this.users = [];
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
        this.onCategoryChange = function (category) {
            var url = _this.route.url;
            _this.roles = [];
            if (url.indexOf("create") > -1) {
                _this.request["role"] = "";
                _this.request["assignedTo"] = "";
            }
            _this._roles.getByCategory(category).subscribe(function (res) {
                if (res.data == null)
                    _this.toaster.showError(res.message);
                else {
                    _this.roles = res.data;
                    if (url.indexOf("edit") > -1) {
                        _this.request["role"] = _this.request["role"]._id;
                        _this.onRoleChange(_this.request["role"]);
                    }
                }
            }, function (error) {
                _this.toaster.showError(error.error.message);
                if (error.error.statusCode === 403)
                    _this.route.navigate(["login"]);
            });
        };
        this.onRoleChange = function (role) {
            var url = _this.route.url;
            _this.users = [];
            if (url.indexOf("create") > -1) {
                _this.request["assignedTo"] = "";
            }
            var query = { type: "regular", role: role };
            _this._user.getAssignee(query).subscribe(function (res) {
                if (res.data == null)
                    _this.toaster.showError(res.message);
                else {
                    _this.users = res.data;
                    if (url.indexOf("edit") > -1) {
                        _this.request["assignedTo"] = _this.request["assignedTo"]._id;
                    }
                }
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
                    _this.request["category"] = _this.request["category"]._id;
                    _this.onCategoryChange(_this.request["category"]);
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

module.exports = "<!--Section to update status and comments, Can be created as component if needed-->\n<div class=\"main col-md-12\">\n  <h1 style=\"text-align: center;\" *ngIf=\"request.requestID\">\n    {{ request.requestID.title }}\n  </h1>\n  <h5 style=\"text-align: center;\">\n    Created By: {{ request.requestID ? request.requestID.createdBy.fName : \"\" }}\n    {{ request.requestID ? request.requestID.createdBy.lName : \"\" }}\n  </h5>\n  <div class=\"col-md-12 details\">\n    <div class=\"col-md-6\">\n      <div class=\"col-md-12\">\n        <b>Full Name:</b>\n        {{ request.requestID ? request.requestID.fullName : \"\" }}\n      </div>\n      <div class=\"col-md-12\">\n        <b>Description:</b>\n        {{ request.requestID ? request.requestID.description : \"\" }}\n      </div>\n      <div class=\"col-md-12\">\n        <b>Country:</b> {{ request.requestID ? request.requestID.country : \"\" }}\n      </div>\n      <div class=\"col-md-12\">\n        <b>Communication Medium:</b>\n        {{ request.requestID ? request.requestID.communicationMedium : \"\" }}\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"col-md-12\">\n        <b>Primary Address:</b>\n        {{ request.requestID ? request.requestID.currentAddress : \"\" }}\n      </div>\n      <div class=\"col-md-12\">\n        <b>Native Address:</b>\n        {{ request.requestID ? request.requestID.nativeAddress : \"\" }}\n      </div>\n      <div class=\"col-md-12\">\n        <b>Primary Contact Number:</b>\n        {{\n          request.requestID\n            ? countrycode + request.requestID.primaryContactNumber\n            : \"\"\n        }}\n      </div>\n      <div class=\"col-md-12\">\n        <b>Alternate Contact Number:</b>\n        {{\n          request.requestID\n            ? countrycode + request.requestID.alternateContactNumber\n            : \"\"\n        }}\n      </div>\n    </div>\n  </div>\n  <div class=\"separator col-md-12\"></div>\n  <h3 style=\"text-align: center;\" *ngIf=\"request.requestID\">\n    Request Status\n  </h3>\n  <!-- <div class=\"col-md-12\" *ngFor=\"let item of requestdata; let last = last\">\n    <div class=\"col-md-12 journeydiv\">\n      <div\n        class=\"stepdiv col-md-12\"\n        [ngClass]=\"{\n          new: item.statusid === 1,\n          inprogress: item.statusid == 2,\n          resolved: item.statusid == 3,\n          archive: item.statusid == 4\n        }\"\n      >\n        <b>Assigned To:</b> {{ item.assigned }}\n        <div class=\"col-md-12\"><b>Status:</b> {{ item.status }}</div>\n        <div class=\"col-md-12\"><b>Comment:</b> {{ item.comment }}</div>\n      </div>\n    </div>\n    <div class=\"col-md-12 journeydiv\" *ngIf=\"!last\">\n      <div class=\"arrow\"><span style=\"font-size: 50px;\">&#8595;</span></div>\n    </div>\n  </div> -->\n  <div class=\"col-md-12\">\n  <div class=\"col-md-4\" *ngFor=\"let item of requestdata; let last = last\">\n    <div class=\"col-md-11 journeydiv1\">\n      <div\n        class=\"stepdiv1 col-md-12\"\n        [ngClass]=\"{\n          new: item.statusid === 1,\n          inprogress: item.statusid == 2,\n          resolved: item.statusid == 3,\n          archive: item.statusid == 4\n        }\"\n      >\n        <b>Assigned To:</b> {{ item.assigned }}\n        <div class=\"col-md-12\"><b>Status:</b> {{ item.status }}</div>\n        <div class=\"col-md-12\"><b>Comment:</b> {{ item.comment }}</div>\n      </div>\n    </div>\n    <div class=\"col-md-1 arrowdiv\" *ngIf=\"!last\">\n      <div><span class=\"arrow\">&#8594;</span></div>\n    </div>\n  </div>\n</div>\n  <div class=\"separator col-md-12\"></div>\n  <div\n    *ngIf=\"(request.requestID && request.requestID.status != 4) || isVolunteer\"\n  >\n    <h3 style=\"text-align: center;\">Add Comment</h3>\n    <form class=\"col-md-12\" #commentForm=\"ngForm\" (ngSubmit)=\"update(updates)\">\n      <div class=\"container col-md-12\">\n        <label class=\"col-md-12\" for=\"comment\"><b>Comment</b></label>\n        <textarea\n          class=\"form-control col-md-12\"\n          placeholder=\"Comment\"\n          [(ngModel)]=\"updates.comment\"\n          [maxlength]=\"400\"\n          name=\"comment\"\n          #comment=\"ngModel\"\n          required\n        >\n        </textarea>\n        <div\n          [hidden]=\"comment.valid || comment.pristine\"\n          class=\"alert alert-danger col-md-12\"\n        >\n          Comment is required\n        </div>\n\n        <label class=\"col-md-12\" for=\"status\">\n          <b>Status</b>\n        </label>\n        <select\n          [(ngModel)]=\"updates.status\"\n          class=\"form-control col-md-12\"\n          name=\"status\"\n          required\n          #status=\"ngModel\"\n        >\n          <option disabled> Status</option>\n          <option *ngFor=\"let status of statuses\" [ngValue]=\"status.value\">{{\n            status.label\n          }}</option>\n        </select>\n        <div\n          [hidden]=\"status.valid || status.pristine\"\n          class=\"alert alert-danger col-md-12\"\n        >\n          Status is required\n        </div>\n\n        <b> Mark as resolved will auto assign to volunteer</b>\n        <button\n          class=\"col-md-12\"\n          [ngClass]=\"{ disabled: !commentForm.form.valid }\"\n          [disabled]=\"!commentForm.form.valid\"\n          type=\"submit\"\n        >\n          Update\n        </button>\n      </div>\n    </form>\n  </div>\n</div>\n"

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
                _this.request["requestID"].country = _this.getCountries(_this.request["requestID"].country);
                _this.request["requestID"].communicationMedium = _this.getMedium(_this.request["requestID"].communicationMedium);
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
    RequestInteractComponent.prototype.getMedium = function (val) {
        var medium = src_app_utils_utils_json__WEBPACK_IMPORTED_MODULE_4__.communicationModes.filter(function (item) { return item.value === val; });
        return medium[0].label;
    };
    RequestInteractComponent.prototype.getCountries = function (code) {
        var country = src_app_utils_countries_json__WEBPACK_IMPORTED_MODULE_3__.filter(function (item) { return item.code === code; });
        this.countrycode = country[0].dial_code;
        return country[0].name;
    };
    RequestInteractComponent.prototype.processRequestData = function () {
        for (var i = 0; i < this.assignments.length; i++) {
            if (i == 0) {
                this.requestdata.push({
                    assigned: this.assignments[i].assignedTo.fName +
                        " " +
                        this.assignments[i].assignedTo.lName,
                    status: this.getStatus(this.assignments[i].status),
                    statusid: this.assignments[i].status,
                    comment: "Request Initiated",
                });
            }
            else {
                this.requestdata.push({
                    assigned: this.assignments[i].assignedTo
                        ? this.assignments[i].assignedTo.fName +
                            " " +
                            this.assignments[i].assignedTo.lName
                        : this.assignments[0].assignedTo.fName +
                            " " +
                            this.assignments[0].assignedTo.lName,
                    status: this.getStatus(this.assignments[i].status),
                    statusid: this.assignments[i].status,
                    comment: this.comments[i - 1] ? this.comments[i - 1].comment : '',
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

/***/ "./src/app/components/requests/requests.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/requests/requests.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\n  margin-top: 20px;\n}\n\n  button:hover {\n    opacity: 0.8;\n  }\n\n  .category {\n    background-color: white;\n    padding: 15px;\n    border-radius: 10px;\n    box-shadow: 2px 2px 2px 2px;\n    margin-top: 20px;\n    margin-bottom: 30px;\n    border: 3px solid transparent;\n    background-clip: padding-box;\n    min-height: 100px;\n  }\n\n  .buttondiv {\n    text-align: center;\n  }\n\n  .activetab {\n    background-color: blue;\n    color: white;\n    font-weight: 700;\n  }\n\n  ul {\n    border-bottom: 5px solid black;\n    margin-bottom: 20px;\n  }\n\n  .categories {\n    cursor: pointer;\n  }\n\n  .category_tabs {\n    padding: 10px 20px 10px 20px;\n    border: 1px solid lightslategray;\n    border-radius: 5px;\n  }\n\n  .request {\n    background-color: white;\n    padding: 15px;\n    border-radius: 10px;\n    box-shadow: 2px 2px 2px 2px;\n    margin-top: 20px;\n    margin-bottom: 30px;\n    border: 3px solid transparent;\n    background-clip: padding-box;\n    min-height: 150px;\n  }\n\n  .active {\n    background-color: #ccc;\n    font-weight: 700; \n  }\n\n  .status {\n    padding: 15px;\n    border: 1px solid lightslategray;\n    border-radius: 10px;\n    cursor: pointer;\n  }\n\n\n\n"

/***/ }),

/***/ "./src/app/components/requests/requests.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/requests/requests.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main col-md-12\">\n  <h2 class=\"col-md-12\" style=\"text-align: center;color:white\">Requests</h2>\n\n  <div class=\"col-md-12\">\n    <ag-grid-angular\n      style=\"height: 600px;\"\n      class=\"ag-theme-alpine col-md-12\"\n      [rowData]=\"rowData\"\n      [columnDefs]=\"columnDefs\"\n      [headerHeight]=\"50\"\n      [rowHeight]=\"55\"\n      [suppressMenuHide]=\"true\"\n    >\n    </ag-grid-angular>\n  </div>\n  <div class=\"col-md-12 buttondiv\" *ngIf=\"isVolunteer\">\n    <button class=\"btn btn-primary\" type=\"button\" routerLink=\"/requests/create\">\n      Create a new request\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/requests/requests.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/requests/requests.component.ts ***!
  \***********************************************************/
/*! exports provided: RequestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestsComponent", function() { return RequestsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/request.service */ "./src/app/services/request.service.ts");
/* harmony import */ var _services_toaster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/toaster.service */ "./src/app/services/toaster.service.ts");
/* harmony import */ var _cell_renderer_cell_renderer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cell_renderer/cell_renderer.component */ "./src/app/components/cell_renderer/cell_renderer.component.ts");
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







var RequestsComponent = /** @class */ (function () {
    function RequestsComponent(_request, toaster, route) {
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
    RequestsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._request.listByRole(this.user._id).subscribe(function (res) {
            if (res.data == null)
                _this.toaster.showError(res.message);
            else {
                _this.requests = res.data;
                _this.columnDefs = [
                    {
                        headerName: "Request",
                        field: "title",
                        cellStyle: { border: "1px solid lightgrey" },
                    },
                    {
                        headerName: "Description",
                        field: "description",
                        cellStyle: { border: "1px solid lightgrey" },
                    },
                    {
                        headerName: "Status",
                        valueGetter: function (params) {
                            var status = src_app_utils_utils_json__WEBPACK_IMPORTED_MODULE_6__.statuses.filter(function (item) { return item.value == params.data.status; });
                            return status[0].label;
                        },
                        sortable: true,
                        filter: true,
                        cellStyle: { border: "1px solid lightgrey" },
                    },
                    {
                        headerName: "Country",
                        valueGetter: function (params) {
                            var country = src_app_utils_countries_json__WEBPACK_IMPORTED_MODULE_5__.filter(function (item) { return item.code == params.data.country; });
                            return country[0].name;
                        },
                        sortable: true,
                        filter: true,
                        cellStyle: { border: "1px solid lightgrey" },
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
                        headerName: "Assigned To",
                        valueGetter: function (params) {
                            return params.data.assignedTo
                                ? params.data.assignedTo.fName +
                                    " " +
                                    params.data.assignedTo.lName
                                : "";
                        },
                        sortable: true,
                        filter: true,
                        cellStyle: { border: "1px solid lightgrey" },
                    },
                    {
                        headerName: "Actions",
                        field: "action",
                        cellRendererFramework: _cell_renderer_cell_renderer_component__WEBPACK_IMPORTED_MODULE_4__["CellRendererComponent"],
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
    RequestsComponent.prototype.getitemFromList = function (key, value, list, valueKey) {
        if (list === void 0) { list = []; }
        var item = list.filter(function (d) { return d[key] === value; }) || [];
        return item.length > 0 ? item[0][valueKey] : "";
    };
    RequestsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-requests",
            template: __webpack_require__(/*! ./requests.component.html */ "./src/app/components/requests/requests.component.html"),
            styles: [__webpack_require__(/*! ./requests.component.css */ "./src/app/components/requests/requests.component.css")],
        }),
        __metadata("design:paramtypes", [_services_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"],
            _services_toaster_service__WEBPACK_IMPORTED_MODULE_3__["ToasterService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RequestsComponent);
    return RequestsComponent;
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

module.exports = {"statuses":[{"label":"New","value":1},{"label":"Re Open","value":2},{"label":"In progress","value":3},{"label":"Resolved","value":4},{"label":"Archive","value":5}],"communicationModes":[{"label":"Whatsapp","value":1},{"label":"Call","value":2},{"label":"SMS","value":3}]};

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


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map