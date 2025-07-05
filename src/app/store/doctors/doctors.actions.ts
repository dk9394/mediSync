import { createAction, props } from '@ngrx/store';

import { IDoctorResponse } from '../../models/doctors.interfaces';
import { IDoctor } from './doctor';

const LOAD_DOCTORS = '[DOCTORS] load doctors';
const LOAD_DOCTORS_SUCCESS = '[DOCTORS] load doctors success';
const LOAD_DOCTORS_FAILURE = '[DOCTORS] load doctors failure';

const ADD_CURRENT_DOCTOR = '[DOCTORS] add current doctor';
const ADD_CURRENT_DOCTOR_USING_ID = '[DOCTORS] add current doctor using id';

const loadDoctors = createAction(LOAD_DOCTORS);
const loadDoctorsSuccess = createAction(LOAD_DOCTORS_SUCCESS, props<{ data: IDoctorResponse }>());
const loadDoctorsFailure = createAction(LOAD_DOCTORS_FAILURE, props<{ message: string }>());

const addCurrentDoctor = createAction(
	ADD_CURRENT_DOCTOR,
	props<{ currentDoctor: IDoctor | null }>()
);
const addCurrentDoctorUsingId = createAction(ADD_CURRENT_DOCTOR_USING_ID, props<{ id: string }>());

export const DoctorsActions = {
	loadDoctors,
	loadDoctorsSuccess,
	loadDoctorsFailure,
	addCurrentDoctor,
	addCurrentDoctorUsingId,
};
