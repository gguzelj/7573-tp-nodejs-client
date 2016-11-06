import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Location }                 from '@angular/common';
import {SubjectService} from "./service/subject.service";
import {Subject} from "./model/subject";
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
  selector: 'subject-detail',
  templateUrl: 'views/subjects/show.html'
})

export class SubjectComponent implements OnInit {

  subject:Subject;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private service: SubjectService) {}


  ngOnInit(): void {

    let id;
    this.route.params.forEach((params: Params) => {
      id = +params['id']; // (+) converts string 'id' to a number
    });
    this.service.findSubjectById(id).then(subject => {
      console.log(id);
      console.log(subject);
      this.subject = subject
    });
  }

  enroll(course_id): void {
    console.log(localStorage.getItem('user_number'));
    console.log(course_id);
  }

}
