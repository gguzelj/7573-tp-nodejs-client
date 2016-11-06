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
var subject_1 = require('../model/subject');
var schedule_1 = require("../model/schedule");
var course_1 = require("../model/course");
var schedule = new schedule_1.Schedule("12222", "carlos", "pepe", "19", "22");
var course = new course_1.Course(2, "Casa rosada", Array("Carlos", "juan"), Array(schedule), 2, null);
var subject = new subject_1.Subject(1, "75", "32", "TREST", 1, Array(course));
var subject2 = new subject_1.Subject(2, "75", "32", "Oooootra materia mas", 1, Array(course));
var subject2 = new subject_1.Subject(3, "75", "32", "TESSSST to delete", 1, Array(course));
/*
var SUBJECTS = [
    {
        "id": 1,
        "department": "75",
        "code": "43",
        "name": "TEST A LOS SISTEMAS DISTRIBUIDOS",
        "credits": 6,
    },
    {
        "id": 2,
        "department": "75",
        "code": "73",
        "name": "ARQUITECTURA DEL SOFTWARE",
        "credits": 6,
    },
    {
        "id": 3,
        "department": "75",
        "code": "26",
        "name": "SIMULACIÓN",
        "credits": 6,
    }
];

var SUBJECT = {
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
}*/
var SubjectService = (function () {
    function SubjectService() {
    }
    SubjectService.prototype.getSubjects = function () {
        return Promise.resolve(Array(subject, subject2));
    };
    SubjectService.prototype.findSubjectById = function (id) {
        /*    return this.getHeroes()
        .then(heroes => heroes.find(hero => hero.id === id));*/
        return Promise.resolve(subject);
    };
    SubjectService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SubjectService);
    return SubjectService;
}());
exports.SubjectService = SubjectService;
//# sourceMappingURL=subject.service.js.map