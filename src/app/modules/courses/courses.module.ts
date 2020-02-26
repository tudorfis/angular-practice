import { NgModule } from '@angular/core';
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses.component';
import { CoursesService } from './services/courses.service';
import { CommonModule } from '@angular/common';
import { EmailsService } from './services/emails.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        CourseComponent,
        CoursesComponent
    ],
    exports: [
        CoursesComponent
    ],
    providers: [
        CoursesService,
        EmailsService
    ]
})
export class CoursesModule {}