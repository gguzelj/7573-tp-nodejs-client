export class Student {
    student_id: number;
    name: string;
    last_name: string;

    constructor(student_id: number, name: string, last_name: string) {
        this.student_id = student_id;
        this.name = name;
        this.last_name = last_name;
    }
}