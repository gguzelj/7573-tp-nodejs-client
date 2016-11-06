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
var db_subject = {
    "id": 3,
    "department": "75",
    "code": "73",
    "name": "ARQUITECTURA DEL SOFTWARE",
    "credits": 6,
    "courses": [
        {
            "id": 1,
            "name": "Diez",
            "vacancy": 40,
            "headquarters": "(PC) Paseo Colon",
            "professors": [
                "DIEZ, EDUARDO LUIS",
                "RUGILO, GUILLERMO HERNAN"
            ],
            "schedule": [
                {
                    "classroom": "LC",
                    "type": "Teórica Obligatoria",
                    "day": "Jueves",
                    "from": "19:00",
                    "to": "21:00"
                },
                {
                    "classroom": "404",
                    "type": "Práctica",
                    "day": "Viernes",
                    "from": "19:00",
                    "to": "21:00"
                }
            ]
        }
    ]
};
var SubjectComponent = (function () {
    function SubjectComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
    }
    SubjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        var subject_id;
        this.route.params.forEach(function (params) {
            subject_id = +params['subject_id'];
        });
        this.service.findSubjectById(subject_id)
            .subscribe(function (subject) {
            _this.subject = subject;
        }, function (error) { return console.error('Error: ' + error); });
    };
    SubjectComponent.prototype.enroll = function (course_id) {
        this.service.enroll(this.subject.id, course_id, localStorage.getItem('user_number'))
            .subscribe(function (student) {
        }, function (error) { return console.error('Error: ' + error); });
    };
    SubjectComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'subject-detail',
            templateUrl: 'views/subjects/show.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, subject_service_1.SubjectService])
    ], SubjectComponent);
    return SubjectComponent;
}());
exports.SubjectComponent = SubjectComponent;
//# sourceMappingURL=subject.component.js.map