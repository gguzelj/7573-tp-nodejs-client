import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {SubjectService} from "./service/subject.service";
import {Subject} from "./model/subject";

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

    let subject_id;
    this.route.params.forEach((params: Params) => {
      subject_id = +params['subject_id'];
    });

    this.service.findSubjectById(subject_id)
        .subscribe(
            subject => {
              this.subject = subject;
            },
            error => console.error('Error: ' + error));
  }

  enroll(course_id): void {
    this.service.enroll(this.subject.id, course_id, localStorage.getItem('user_number'))
        .subscribe(
            student => {
            },
            error => console.error('Error: ' + error));
  }

}
