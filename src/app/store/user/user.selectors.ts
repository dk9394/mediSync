import { createSelector } from '@ngrx/store';

import { AppState } from '../app.state';

const state = (state: AppState) => state.user;
const userData = createSelector(state, (user) => user.userData);
const isUserLoggedIn = createSelector(state, (user) => !!user.userData);
const loading = createSelector(state, (user) => user.loading);

export const selectUser = {
	userData,
	isUserLoggedIn,
	loading,
};
