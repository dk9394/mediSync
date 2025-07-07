import { createReducer, on } from '@ngrx/store';

import { IDoctor } from '../../models/doctors.interfaces';
import { DoctorsActions } from './doctors.actions';

export interface DoctorsState {
	list: IDoctor[];
	currentDoctor: IDoctor | null;
	loading: boolean;
	success: boolean;
	failure: boolean;
	successMsg?: string | null;
	failureMsg?: string | null;
}

const initialState: DoctorsState = {
	list: [],
	currentDoctor: null,
	loading: false,
	success: false,
	failure: false,
	successMsg: null,
	failureMsg: null,
};

export const doctorsReducer = createReducer(
	initialState,
	on(DoctorsActions.loadDoctors, (state) => ({ ...state, loading: true })),
	on(DoctorsActions.loadDoctorsSuccess, (state, { data }) => ({
		...state,
		list: data.doctors,
		loading: false,
		success: data.success,
		failure: false,
	})),
	on(DoctorsActions.loadDoctorsFailure, (state, { message }) => ({
		...state,
		list: [],
		currentDoctor: null,
		loading: false,
		success: false,
		failure: true,
		failureMsg: message,
	})),
	on(DoctorsActions.addCurrentDoctor, (state, { currentDoctor }) => ({
		...state,
		currentDoctor,
	})),
	on(DoctorsActions.addCurrentDoctorUsingId, (state, { id }) => ({
		...state,
		currentDoctor: state.list.find((doctor) => doctor._id === id) || null,
	}))
);
