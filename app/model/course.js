"use strict";
var Course = (function () {
    function Course(id, headquartes, professors, schedule, vacancy, students) {
        this.id = id;
        this.headquarters = headquartes;
        this.professors = professors;
        this.schedule = schedule;
        this.vacancy = vacancy;
        this.students = students;
    }
    return Course;
}());
exports.Course = Course;
//# sourceMappingURL=course.js.map