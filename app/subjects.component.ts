import {Component, OnInit} from '@angular/core';
import {SubjectService} from "./service/subject.service";
import {Router} from "@angular/router";
import {Subject} from "./model/subject";

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'views/subjects/index.html'
})

export class SubjectsComponent implements OnInit {

  subjects: Subject[];

  constructor(
      private router: Router,
      private service: SubjectService) { }

  ngOnInit(): void {
    this.getSubjects();
  }

  getSubjects(): void {
    this.service
        .getSubjects()
        .then(subjects => this.subjects = subjects);
  }

  onSelect(subject: Subject): void {
    console.log(subject);
    this.router.navigate(['/subject', subject.id]);
  }
}
