import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import { AppNotificationService } from '../../services/app-notification.service';
import { UserService } from '../../services/user.service';
import { AppNotifications } from '../../utils/app-notifications.constants';
import { UserActions } from './user.actions';

@Injectable()
export class UserEffects {
	router = inject(Router);
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
						localStorage.setItem('auth-user-role', data.role);
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

	logoutUser$ = createEffect(() =>
		this.actions$.pipe(
			ofType(UserActions.logoutUser),
			switchMap(() =>
				this.userService.logout().pipe(
					map(() => {
						localStorage.removeItem('auth-token');
						localStorage.removeItem('auth-user-role');
						this.appNotificationService.showInfo(AppNotifications.LOGOUT_INFO);
						this.router.navigateByUrl('/');
						return UserActions.logoutUserSuccess();
					}),
					catchError((error) => {
						return of(UserActions.logoutUserFailure({ message: error.message }));
					})
				)
			)
		)
	);

	updateUserProfile$ = createEffect(() =>
		this.actions$.pipe(
			ofType(UserActions.updateUserProfile),
			switchMap(({ userData }) =>
				this.userService.updateProfile(userData).pipe(
					map((data) => {
						this.appNotificationService.showSuccess({
							message: AppNotifications.USER_UPDATE.message,
							title: data.userData.name,
						});
						return UserActions.updateUserProfileSuccess({ data });
					}),
					catchError((error) =>
						of(UserActions.updateUserProfileFailure({ message: error.message }))
					)
				)
			)
		)
	);
}
