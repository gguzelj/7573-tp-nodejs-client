import { Component } from '@angular/core';

const SUBJECTS = [
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

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'views/subjects/index.html'
})

export class SubjectsComponent {
    // Here would be the GET request
    subjects = SUBJECTS;
}
