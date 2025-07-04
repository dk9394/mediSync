import { createSelector } from '@ngrx/store';

import { AppState } from '../app.state';

const state = (state: AppState) => state.doctors;
const list = createSelector(state, (doctors) => doctors.list);
const currentDoctor = createSelector(state, (doctors) => doctors.currentDoctor);
const loading = createSelector(state, (doctors) => doctors.loading);

export const selectDoctors = {
	state,
	list,
	currentDoctor,
	loading,
};
