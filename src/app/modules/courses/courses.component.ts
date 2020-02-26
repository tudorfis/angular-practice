import { Component } from '@angular/core'
import { CoursesService } from './services/courses.service'
import { EmailsService } from './services/emails.service';

@Component({
    selector: 'courses',
    templateUrl: './courses.component.html'
})
export class CoursesComponent {
    title: string = 'List of courses'
    courses: string[]
    
    constructor(
        private coursesService: CoursesService,
        private emailService: EmailsService    
    ) {
        this.courses = coursesService.getCourses();
    }

}