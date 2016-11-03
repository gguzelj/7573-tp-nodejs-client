import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent }  from './app.component';
import { SubjectsComponent }  from './subjects.component';
import { CoursesComponent }  from './courses.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
          { path: 'subjects', component: SubjectsComponent },
          { path: 'courses', component: CoursesComponent },
          { path: '', component: AppComponent },
        ])
    ],
    declarations: [
        AppComponent,
        SubjectsComponent,
        CoursesComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
