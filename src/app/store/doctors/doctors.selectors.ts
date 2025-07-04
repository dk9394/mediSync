import { createSelector } from '@ngrx/store';

import { AppState } from '../app.state';

const state = (state: AppState) => state.doctors;
const list = createSelector(state, (feeds) => feeds.list);

export const selectDoctors = {
	state,
	list,
};
