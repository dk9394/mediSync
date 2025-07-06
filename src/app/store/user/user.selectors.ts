import { createSelector } from '@ngrx/store';

import { AppState } from '../app.state';

const state = (state: AppState) => state.user;
const token = createSelector(state, (user) => user.token);

export const selectUser = {
	token,
};
