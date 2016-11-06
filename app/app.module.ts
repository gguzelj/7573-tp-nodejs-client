import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent }  from './app.component';
import { LoginComponent }  from './login.component';
import { LandingComponent }  from './landing.component';
import { SubjectsComponent }  from './subjects.component';
import { SubjectComponent }  from './subject.component';
import {SubjectService} from "./service/subject.service";

import { HttpModule }    from '@angular/http';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            { path: '', component: LoginComponent },
        ]),
        RouterModule.forChild([
            { path: 'subjects', component: SubjectsComponent },
            { path: 'subjects/:subject_id', component: SubjectComponent },
            { path: 'home', component: LandingComponent }
        ])
    ],
    declarations: [
        AppComponent,
        LandingComponent,
        SubjectsComponent,
        SubjectComponent,
        LoginComponent
    ],
    providers: [
        SubjectService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
