import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {SubjectService} from "./service/subject.service";
import {Subject} from "./model/subject";

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

    this.reloadData(subject_id);
  }

  enroll(course_id): void {
    this.service.enroll(this.subject.id, course_id, localStorage.getItem('user_number'))
        .subscribe(
            student => {
              this.reloadData(this.subject.id);
            },
            error => console.error('Error: ' + error)
        );
  }

  reloadData(subject_id): void {
    this.service.findSubjectById(subject_id)
        .subscribe(
            subject => {
              this.subject = subject;
            },
            error => console.error('Error: ' + error));
  }

}
