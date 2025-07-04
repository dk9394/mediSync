import { createAction, props } from '@ngrx/store';

import { IDoctorResponse } from './doctor';

const LOAD_DOCTORS = '[DOCTORS] add feeds';
const LOAD_DOCTORS_SUCCESS = '[DOCTORS] add feeds success';
const LOAD_DOCTORS_FAILURE = '[DOCTORS] add feeds failure';

const loadDoctors = createAction(LOAD_DOCTORS);
const loadDoctorsSuccess = createAction(LOAD_DOCTORS_SUCCESS, props<{ data: IDoctorResponse }>());
const loadDoctorsFailure = createAction(LOAD_DOCTORS_FAILURE, props<{ message: string }>());

export const DoctorsActions = {
	loadDoctors,
	loadDoctorsSuccess,
	loadDoctorsFailure,
};
