import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthActions } from "./actions.types";



@Injectable()
export class AuthEffects {

         login$ = createEffect(() =>
           this.actions$.pipe(
            ofType(AuthActions.login),
            tap(action => {
                localStorage.setItem('user', JSON.stringify(action.user));
                this.router.navigateByUrl('/courses');
            })
        ), {dispatch:false});

        loggout$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.logout),
            tap(() => {
                localStorage.removeItem('user');
                this.router.navigateByUrl('/');
            })
        ),{dispatch:false});

    constructor(private actions$: Actions, private router: Router) {}

 

}