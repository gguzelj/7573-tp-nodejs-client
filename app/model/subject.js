"use strict";
var Subject = (function () {
    function Subject(id, department, code, name, credits, courses) {
        this.id = id;
        this.department = department;
        this.code = code;
        this.name = name;
        this.credits = credits;
        this.courses = courses;
    }
    return Subject;
}());
exports.Subject = Subject;
//# sourceMappingURL=subject.js.map