import { tap } from 'rxjs/operators';
import { isLoggedId } from './auth.selectors';
import { AppState } from './../reducers/index';
import { select, Store } from '@ngrx/store';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate{

constructor(private store:Store<AppState>,private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.store.pipe(
            select(isLoggedId),
            tap(loggedId => {
              loggedId ? null : this.router.navigateByUrl('/login');
            })
        );
        
    }


}