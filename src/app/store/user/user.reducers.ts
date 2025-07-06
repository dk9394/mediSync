import { createReducer, on } from '@ngrx/store';

import { UserRole } from '../../models/user.interfaces';
import { UserActions } from './user.actions';

export interface UserState {
	token: string | null;
	role: UserRole | null;
	loading: boolean;
	success: boolean;
	failure: boolean;
	successMsg?: string | null;
	failureMsg?: string | null;
}

const initialState: UserState = {
	token: null,
	role: null,
	loading: false,
	success: false,
	failure: false,
	successMsg: null,
	failureMsg: null,
};

export const userReducer = createReducer(
	initialState,
	on(UserActions.loadUser, (state) => ({ ...state, loading: true })),
	on(UserActions.loadUserSuccess, (state, { data }) => ({
		...state,
		token: data.token,
		role: data.role,
		loading: false,
		success: data.success,
		failure: false,
	})),
	on(UserActions.loadUserFailure, (state, { message }) => ({
		...state,
		token: null,
		role: null,
		loading: false,
		success: false,
		failure: true,
		failureMsg: message,
	}))
);
