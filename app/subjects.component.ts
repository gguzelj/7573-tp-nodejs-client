import { Component } from '@angular/core';

export class Subject {
    id: number;
    name: string;
}

const SUBJECTS: Subject[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

@Component({
    moduleId: module.id,
    selector: 'subjects',
    templateUrl: 'views/subjects/index.html'
})

export class SubjectsComponent {
    // Here would be the GET request
    subjects = SUBJECTS;
}
