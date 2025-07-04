import { createReducer, on } from '@ngrx/store';

import { IDoctor } from './doctor';
import { DoctorsActions } from './doctors.actions';

export interface DoctorsState {
	doctors: IDoctor[];
	currentDoctor: IDoctor | null;
	loading: boolean;
	success: string | null;
	failure: string | null;
}

const initialState: DoctorsState = {
	doctors: [],
	currentDoctor: null,
	loading: false,
	success: null,
	failure: null,
};

export const doctorsReducer = createReducer(
	initialState,
	on(DoctorsActions.loadDoctors, (state) => ({ ...state, loading: true })),
	on(DoctorsActions.loadDoctorsSuccess, (state, { data }) => ({
		...state,
		doctors: data.doctors,
		loading: false,
		success: data.success,
		failure: null,
	})),
	on(DoctorsActions.loadDoctorsFailure, (state, { message }) => ({
		...state,
		doctors: [],
		currentDoctor: null,
		loading: false,
		success: null,
		failure: message,
	}))
);
