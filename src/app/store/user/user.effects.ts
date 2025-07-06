import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import { UserService } from '../../services/user.service';
import { UserActions } from './user.actions';

@Injectable()
export class UserEffects {
	private actions$ = inject(Actions);
	private userService = inject(UserService);

	loadDoctors$ = createEffect(() =>
		this.actions$.pipe(
			ofType(UserActions.loadUser),
			switchMap(({ loginCredentials }) =>
				this.userService.login(loginCredentials).pipe(
					map((data) => UserActions.loadUserSuccess({ data })),
					catchError((error) => of(UserActions.loadUserFailure({ message: error.message })))
				)
			)
		)
	);
}
