import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/map";

@Injectable()
export class SubjectService {

    private headers = new Headers({'Content-Type': 'application/json'});

    private baseUrl = 'http://localhost:8080/api/subjects';

    constructor(private http: Http) {}

    getSubjects() {
        return this.http.get(this.baseUrl).map(res => res.json());
    }

    findSubjectById(id: number) {
        return this.http.get(`${this.baseUrl}/${id}`, {headers : this.headers})
            .map(res => res.json());
    }

    enroll(subject_id, course_id, user_number) {
        const url = `${this.baseUrl}/${subject_id}/courses/${course_id}`;
        const body = JSON.stringify({student_id: user_number, name: "nombre", last_name: "apellido"});

        return this.http
            .post(url, body, {headers: this.headers})
            .map(res => {
                return res.json()
            });
    }
}