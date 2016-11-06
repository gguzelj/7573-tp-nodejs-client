import { Student } from './student';
import { Schedule } from './schedule';

export class Course {
    id: number;
    headquarters: string;
    professors: string[];
    schedule: Schedule[];
    vacancy: number;
    students: Student[];

    constructor(id: number, headquartes: string, professors: string[], schedule: Schedule[], vacancy: number, students: Student[]) {
        this.id = id;
        this.headquarters = headquartes;
        this.professors = professors;
        this.schedule = schedule;
        this.vacancy = vacancy;
        this.students = students;
    }
}