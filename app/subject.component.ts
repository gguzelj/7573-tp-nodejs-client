import { Component } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { LoginComponent }           from './login.component';

const db_subject = {
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
}

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'views/subjects/show.html',
})

export class SubjectComponent {
  // Here should be the GET request
  subject = db_subject;

  enroll(course_id) {
    console.log(course_id);
  }
}
