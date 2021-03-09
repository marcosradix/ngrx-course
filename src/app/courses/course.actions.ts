import { Course } from './model/course';
import { props } from '@ngrx/store';
import { createAction } from '@ngrx/store';


export const loadAllCourses = createAction(
    "[Courses Resolver] Load All Courses",

);


export const allCoursesLoaded = createAction(
    "[Load Courses Effect] All Courses Loaded",
    props<{courses: Course[]}>()
);