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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var subject_service_1 = require("./service/subject.service");
var ng2_toastr_1 = require('ng2-toastr/ng2-toastr');
var SubjectComponent = (function () {
    function SubjectComponent(route, router, service, toastr) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.toastr = toastr;
    }
    SubjectComponent.prototype.ngOnInit = function () {
        var subject_id;
        this.route.params.forEach(function (params) {
            subject_id = +params['subject_id'];
        });
        this.reloadData(subject_id);
    };
    SubjectComponent.prototype.enroll = function (course_id) {
        var _this = this;
        var student_id = localStorage.getItem('user_number');
        this.service.enroll(this.subject.id, course_id, student_id)
            .subscribe(function (student) {
            _this.reloadData(_this.subject.id);
            _this.toastr.success('Alumno ' + student_id + ' inscripto', 'Excelente!');
        }, function (error) {
            _this.toastr.error(error.json().message, 'Oops!');
        });
    };
    SubjectComponent.prototype.reloadData = function (subject_id) {
        var _this = this;
        this.service.findSubjectById(subject_id)
            .subscribe(function (subject) {
            _this.subject = subject;
        }, function (error) { return console.error('Error: ' + error); });
    };
    SubjectComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'subject-detail',
            templateUrl: 'views/subjects/show.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, subject_service_1.SubjectService, ng2_toastr_1.ToastsManager])
    ], SubjectComponent);
    return SubjectComponent;
}());
exports.SubjectComponent = SubjectComponent;
//# sourceMappingURL=subject.component.js.map