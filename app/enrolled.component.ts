import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {SubjectService} from "./service/subject.service";
import {Subject} from "./model/subject";
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import {Student} from "./model/student";

@Component({
    moduleId: module.id,
    selector: 'students-detail',
    templateUrl: 'views/subjects/enrolled.html'
})

export class EnrolledComponent implements OnInit {

    students:Student[];
    subject_id:number;
    course_id:number;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: SubjectService,
        public toastr: ToastsManager) {
    }


    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            this.subject_id = +params['subject_id'];
            this.course_id = +params['course_id'];
        });
        this.reloadData();
    }

    unroll(student_id): void {
        this.service.unroll(this.subject_id, this.course_id, student_id)
            .subscribe(
                student => {
                    this.reloadData();
                    this.toastr.success('Alumno ' + student.student_id + ' desinscripto correctamente.', 'Excelente!');
                },
                error => {
                    this.toastr.error(error.json().message, 'Oops!');
                }
            );
    }

    reloadData(): void {
        this.service.findStudentsBySubjectIdAndCourseId(this.subject_id, this.course_id)
            .subscribe(
                (students) => {
                    this.students = students;
                },
                (error) => console.error('Error: ' + error));
    }

}
