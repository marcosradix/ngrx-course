import { AuthState } from './reducers/index';
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const selectAuthState = createFeatureSelector<AuthState>("auth");

export const isLoggedId = createSelector(
selectAuthState,
auth =>  !!auth.user 
);

export const isLoggedOut = createSelector(
isLoggedId,
loggedId => !loggedId
);