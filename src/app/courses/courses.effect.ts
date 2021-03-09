import { allCoursesLoaded } from './course.actions';
import { map } from 'rxjs/operators';
import { concatMap } from 'rxjs/operators';
import { CoursesHttpService } from './services/courses-http.service';
import { ofType } from '@ngrx/effects';
import { createEffect } from '@ngrx/effects';
import { Actions } from '@ngrx/effects';
import { Injectable } from "@angular/core";
import { CourseActions } from './action-types';


@Injectable()
export class CoursesEffect{

constructor(private action$: Actions, private courseService:CoursesHttpService){}

loadCourses$ = createEffect(
    () => this.action$.pipe(
        ofType(CourseActions.loadAllCourses),
        concatMap(action => this.courseService.findAllCourses()),
        map(courses => allCoursesLoaded({courses}))

    )
);

}