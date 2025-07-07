import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import { UserService } from '../../services/user.service';
import { UserActions } from './user.actions';

@Injectable()
export class UserEffects {
	private actions$ = inject(Actions);
	private userService = inject(UserService);

	loadUser$ = createEffect(() =>
		this.actions$.pipe(
			ofType(UserActions.loadUser),
			switchMap(({ loginCredentials }) =>
				this.userService.login(loginCredentials).pipe(
					map((data) => {
						if (data.success) {
							localStorage.setItem('auth-token', data.token);
							localStorage.setItem('auth-userRole', data.role);
							return UserActions.loadUserSuccess({ data });
						} else {
							return UserActions.loadUserFailure({ message: data.message ?? '' });
						}
					}),
					catchError((error) => of(UserActions.loadUserFailure({ message: error.message })))
				)
			)
		)
	);

	loadUserProfileOnLogin$ = createEffect(() =>
		this.actions$.pipe(
			ofType(UserActions.loadUserSuccess),
			map(() => UserActions.loadUserProfile())
		)
	);

	loadUserProfile$ = createEffect(() =>
		this.actions$.pipe(
			ofType(UserActions.loadUserProfile),
			switchMap(() =>
				this.userService.getProfile().pipe(
					map((data) => {
						if (data.success) {
							return UserActions.loadUserProfileSuccess({ data });
						} else {
							return UserActions.loadUserProfileFailure({ message: data.message ?? '' });
						}
					}),
					catchError((error) => of(UserActions.loadUserProfileFailure({ message: error.message })))
				)
			)
		)
	);
}
