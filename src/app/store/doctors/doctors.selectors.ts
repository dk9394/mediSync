import { createSelector } from '@ngrx/store';

import { AppState } from '../app.state';

const state = (state: AppState) => state.doctors;
const doctors = createSelector(state, (feeds) => feeds.doctors);

export const selectDoctors = {
	state,
	doctors,
};
