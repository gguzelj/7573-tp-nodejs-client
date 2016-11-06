"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
var login_component_1 = require('./login.component');
var landing_component_1 = require('./landing.component');
var subjects_component_1 = require('./subjects.component');
var subject_component_1 = require('./subject.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot([
                    { path: '', component: login_component_1.LoginComponent },
                ]),
                router_1.RouterModule.forChild([
                    { path: 'subjects', component: subjects_component_1.SubjectsComponent },
                    { path: 'subject', component: subject_component_1.SubjectComponent },
                    { path: 'home', component: landing_component_1.LandingComponent },
                ])
            ],
            declarations: [
                app_component_1.AppComponent,
                landing_component_1.LandingComponent,
                subjects_component_1.SubjectsComponent,
                subject_component_1.SubjectComponent,
                login_component_1.LoginComponent
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map