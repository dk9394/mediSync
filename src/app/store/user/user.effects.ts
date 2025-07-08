import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import { AppNotificationService } from '../../services/app-notification.service';
import { UserService } from '../../services/user.service';
import { AppNotifications } from '../../utils/app-notifications';
import { UserActions } from './user.actions';

@Injectable()
export class UserEffects {
	private actions$ = inject(Actions);
	private userService = inject(UserService);
	appNotificationService = inject(AppNotificationService);

	loadUser$ = createEffect(() =>
		this.actions$.pipe(
			ofType(UserActions.loadUser),
			switchMap(({ loginCredentials }) =>
				this.userService.login(loginCredentials).pipe(
					map((data) => {
						localStorage.setItem('auth-token', data.token);
						localStorage.setItem('auth-userRole', data.role);
						return UserActions.loadUserSuccess({ data });
					}),
					catchError((error) => {
						return of(UserActions.loadUserFailure({ message: error.message }));
					})
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
						this.appNotificationService.showSuccess({
							message: AppNotifications.LOGIN_USER.message,
							title: data.userData.name,
						});
						return UserActions.loadUserProfileSuccess({ data });
					}),
					catchError((error) => of(UserActions.loadUserProfileFailure({ message: error.message })))
				)
			)
		)
	);
}
