import {Component, OnInit} from '@angular/core';
import {SubjectService} from "./service/subject.service";
import {Router} from "@angular/router";
import {Subject} from "./model/subject";
import {Observable} from "rxjs";

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
        .subscribe(
            subjects => this.subjects = subjects,
            error => console.error('Error: ' + error));
  }

  onSelect(subject: Subject): void {
    this.router.navigate(['/subjects', subject.id]);
  }
}
