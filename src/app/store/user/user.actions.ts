import { createAction, props } from '@ngrx/store';

import {
	ILoginCredentials,
	ILoginWithRoleResponse,
	IUserResponse,
} from '../../models/user.interfaces';

const LOAD_USER = '[USER] load user';
const LOAD_USER_SUCCESS = '[USER] load user success';
const LOAD_USER_FAILURE = '[USER] load user failure';

const LOAD_USER_PROFILE = '[USER] load user profile';
const LOAD_USER_PROFILE_SUCCESS = '[USER] load user profile success';
const LOAD_USER_PROFILE_FAILURE = '[USER] load user profile failure';

const loadUser = createAction(LOAD_USER, props<{ loginCredentials: ILoginCredentials }>());
const loadUserSuccess = createAction(LOAD_USER_SUCCESS, props<{ data: ILoginWithRoleResponse }>());
const loadUserFailure = createAction(LOAD_USER_FAILURE, props<{ message: string }>());

const loadUserProfile = createAction(LOAD_USER_PROFILE);
const loadUserProfileSuccess = createAction(
	LOAD_USER_PROFILE_SUCCESS,
	props<{ data: IUserResponse }>()
);
const loadUserProfileFailure = createAction(
	LOAD_USER_PROFILE_FAILURE,
	props<{ message: string }>()
);

export const UserActions = {
	loadUser,
	loadUserSuccess,
	loadUserFailure,
	loadUserProfile,
	loadUserProfileSuccess,
	loadUserProfileFailure,
};
