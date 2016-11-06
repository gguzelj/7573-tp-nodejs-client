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
    function SubjectComponent() {
        // Here should be the GET request
        this.subject = db_subject;
    }
    SubjectComponent.prototype.enroll = function (course_id) {
        console.log(course_id);
    };
    SubjectComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'views/subjects/show.html',
        }), 
        __metadata('design:paramtypes', [])
    ], SubjectComponent);
    return SubjectComponent;
}());
exports.SubjectComponent = SubjectComponent;
//# sourceMappingURL=subject.component.js.map