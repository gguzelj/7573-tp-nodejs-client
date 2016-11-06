import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Subject } from '../model/subject';
import {Student} from "../model/student";
import {Schedule} from "../model/schedule";
import {Course} from "../model/course";


var schedule = new Schedule("12222","carlos","pepe", "19", "22");
var course = new Course(2,"Casa rosada", Array("Carlos","juan"), Array(schedule), 2, null);
var subject = new Subject(1,"75","32","TREST",1, Array(course));
var subject2 = new Subject(2,"75","32","Oooootra materia mas",1, Array(course));
var subject2 = new Subject(3,"75","32","TESSSST to delete",1, Array(course));

/*
var SUBJECTS = [
    {
        "id": 1,
        "department": "75",
        "code": "43",
        "name": "TEST A LOS SISTEMAS DISTRIBUIDOS",
        "credits": 6,
    },
    {
        "id": 2,
        "department": "75",
        "code": "73",
        "name": "ARQUITECTURA DEL SOFTWARE",
        "credits": 6,
    },
    {
        "id": 3,
        "department": "75",
        "code": "26",
        "name": "SIMULACIÓN",
        "credits": 6,
    }
];

var SUBJECT = {
    "id": 3,
    "department": "75",
    "code": "73",
    "name": "ARQUITECTURA DEL SOFTWARE",
    "credits": 6,
    "courses": [
    {
        "id": 1,
        "name": "Diez",
        "vacancy": 40,
        "headquarters": "(PC) Paseo Colon",
        "professors": [
            "DIEZ, EDUARDO LUIS",
            "RUGILO, GUILLERMO HERNAN"
        ],
        "schedule": [
            {
                "classroom": "LC",
                "type": "Teórica Obligatoria",
                "day": "Jueves",
                "from": "19:00",
                "to": "21:00"
            },
            {
                "classroom": "404",
                "type": "Práctica",
                "day": "Viernes",
                "from": "19:00",
                "to": "21:00"
            }
        ]
    }
]
}*/

@Injectable()
export class SubjectService {
    getSubjects(): Promise<Subject[]> {
        return Promise.resolve(Array(subject, subject2));
    }

    findSubjectById(id: number): Promise<Subject> {
/*    return this.getHeroes()
.then(heroes => heroes.find(hero => hero.id === id));*/
        return Promise.resolve(subject);
    }
}