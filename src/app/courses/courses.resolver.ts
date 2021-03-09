import { loadAllCourses } from './course.actions';
import { tap, first, finalize } from 'rxjs/operators';
import { AppState } from './../reducers/index';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";


@Injectable()
export class CoursesResolver implements Resolve<any>{
    loading = false;
    constructor(private store: Store<AppState>) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.store.pipe(
            tap(() => {
                if (!this.loading) {
                    this.loading = true;
                    this.store.dispatch(loadAllCourses())

                }
            }

            ),
            first(),
            finalize(() => this.loading= false)
        );
    }


}