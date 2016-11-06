import { Course } from './course';

export class Subject {
    id: number;
    department: string;
    code: string;
    name: string;
    credits: number;
    courses: Course[];

    constructor(id: number, department: string, code: string, name: string, credits: number, courses: Course[]) {
        this.id = id;
        this.department = department;
        this.code = code;
        this.name = name;
        this.credits = credits;
        this.courses = courses;
    }
}
