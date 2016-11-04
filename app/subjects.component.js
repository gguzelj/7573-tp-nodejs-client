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
var SUBJECTS = [
    {
        "id": 1,
        "department": "75",
        "code": "43",
        "name": "INTRODUCCION A LOS SISTEMAS DISTRIBUIDOS",
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
var SubjectsComponent = (function () {
    function SubjectsComponent() {
        // Here would be the GET request
        this.subjects = SUBJECTS;
    }
    SubjectsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'views/subjects/index.html'
        }), 
        __metadata('design:paramtypes', [])
    ], SubjectsComponent);
    return SubjectsComponent;
}());
exports.SubjectsComponent = SubjectsComponent;
//# sourceMappingURL=subjects.component.js.map