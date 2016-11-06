export class Schedule {
    classroom: string;
    type: string;
    day: string;
    from: string;
    to: string;

    constructor(classroom: string, type: string, day: string, from: string, to: string) {
        this.classroom = classroom;
        this.type = type;
        this.day = day;
        this.from = from;
        this.to = to;
    }
};