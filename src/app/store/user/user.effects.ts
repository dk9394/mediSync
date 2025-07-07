import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';

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
					tap((data) => {
						localStorage.setItem('auth-token', data.token);
						localStorage.setItem('auth-userRole', data.role);
					}),
					map((data) => UserActions.loadUserSuccess({ data })),
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
					map((data) => UserActions.loadUserProfileSuccess({ data })),
					catchError((error) => of(UserActions.loadUserProfileFailure({ message: error.message })))
				)
			)
		)
	);
}
