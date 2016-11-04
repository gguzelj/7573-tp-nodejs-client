import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent }  from './app.component';
import { LandingComponent }  from './landing.component';
import { SubjectsComponent }  from './subjects.component';
import { SubjectComponent }  from './subject.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
          { path: '', component: LandingComponent },
        ]),
        RouterModule.forChild([
          { path: 'subjects', component: SubjectsComponent },
          { path: 'subject', component: SubjectComponent },
        ])
    ],
    declarations: [
        AppComponent,
        LandingComponent,
        SubjectsComponent,
        SubjectComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
