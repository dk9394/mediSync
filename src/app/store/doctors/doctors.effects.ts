import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';

import { HomeService } from '../../services/home.service';
import { DoctorsActions } from './doctors.actions';

@Injectable()
export class DoctorsEffects {
	private actions$ = inject(Actions);
	private homeService = inject(HomeService);

	loadDoctors$ = createEffect(() =>
		this.actions$.pipe(
			ofType(DoctorsActions.loadDoctors),
			mergeMap(() =>
				this.homeService.getAllDoctors().pipe(
					map((data) => DoctorsActions.loadDoctorsSuccess({ data })),
					catchError((error) => of(DoctorsActions.loadDoctorsFailure({ message: error.message })))
				)
			)
		)
	);
}
