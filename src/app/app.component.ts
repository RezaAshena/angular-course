import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CourseCardComponent } from './courses/course-card/course-card.component';
import { COURSES } from '../db-data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,CourseCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'angular-course';
   coreCourse=COURSES[0];
   coreCourse2=COURSES[1];
   coreCourse3=COURSES[2];

}
