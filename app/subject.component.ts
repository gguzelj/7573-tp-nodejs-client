import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {SubjectService} from "./service/subject.service";
import {Subject} from "./model/subject";
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

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
        private service: SubjectService,
        public toastr: ToastsManager) {
    }


    ngOnInit(): void {

        let subject_id;
        this.route.params.forEach((params: Params) => {
            subject_id = +params['subject_id'];
        });

        this.reloadData(subject_id);
    }

    enroll(course_id): void {
        var student_id = localStorage.getItem('user_number');
        this.service.enroll(this.subject.id, course_id, student_id)
            .subscribe(
                student => {
                    this.reloadData(this.subject.id);
                    this.toastr.success('Alumno ' + student_id + ' inscripto', 'Excelente!');
                },
                error => {
                    this.toastr.error(error.json().message, 'Oops!');
                }
            );
    }

    reloadData(subject_id): void {
        this.service.findSubjectById(subject_id)
            .subscribe(
                (subject) => {
                    this.subject = subject;
                },
                (error) => console.error('Error: ' + error));
    }

}
