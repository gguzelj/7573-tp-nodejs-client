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
var EnrolledComponent = (function () {
    function EnrolledComponent(route, router, service, toastr) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.toastr = toastr;
    }
    EnrolledComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.subject_id = +params['subject_id'];
            _this.course_id = +params['course_id'];
        });
        this.reloadData();
    };
    EnrolledComponent.prototype.unroll = function (student_id) {
        var _this = this;
        this.service.unroll(this.subject_id, this.course_id, student_id)
            .subscribe(function (student) {
            _this.reloadData();
            _this.toastr.success('Alumno ' + student.student_id + ' desinscripto correctamente.', 'Excelente!');
        }, function (error) {
            _this.toastr.error(error.json().message, 'Oops!');
        });
    };
    EnrolledComponent.prototype.reloadData = function () {
        var _this = this;
        this.service.findStudentsBySubjectIdAndCourseId(this.subject_id, this.course_id)
            .subscribe(function (students) {
            _this.students = students;
        }, function (error) { return console.error('Error: ' + error); });
    };
    EnrolledComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'students-detail',
            templateUrl: 'views/subjects/enrolled.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, subject_service_1.SubjectService, ng2_toastr_1.ToastsManager])
    ], EnrolledComponent);
    return EnrolledComponent;
}());
exports.EnrolledComponent = EnrolledComponent;
//# sourceMappingURL=enrolled.component.js.map