import { createAction, props } from '@ngrx/store';

import {
	ILoginCredentials,
	ILoginWithRoleResponse,
	IUser,
	IUserResponse,
} from '../../models/user.interfaces';

const LOAD_USER = '[USER] load user';
const LOAD_USER_SUCCESS = '[USER] load user success';
const LOAD_USER_FAILURE = '[USER] load user failure';

const LOAD_USER_PROFILE = '[USER] load user profile';
const LOAD_USER_PROFILE_SUCCESS = '[USER] load user profile success';
const LOAD_USER_PROFILE_FAILURE = '[USER] load user profile failure';

const LOGOUT_USER = '[USER] logout user';
const LOGOUT_USER_SUCCESS = '[USER] logout user success';
const LOGOUT_USER_FAILURE = '[USER] logout user failure';

const UPDATE_USER_PROFILE = '[USER] update user profile';
const UPDATE_USER_PROFILE_SUCCESS = '[USER] update user profile success';
const UPDATE_USER_PROFILE_FAILURE = '[USER] update user profile failure';

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

const logoutUser = createAction(LOGOUT_USER);
const logoutUserSuccess = createAction(LOGOUT_USER_SUCCESS);
const logoutUserFailure = createAction(LOGOUT_USER_FAILURE, props<{ message: string }>());

const updateUserProfile = createAction(UPDATE_USER_PROFILE, props<{ userData: IUser }>());
const updateUserProfileSuccess = createAction(
	UPDATE_USER_PROFILE_SUCCESS,
	props<{ data: IUserResponse }>()
);
const updateUserProfileFailure = createAction(
	UPDATE_USER_PROFILE_FAILURE,
	props<{ message: string }>()
);

export const UserActions = {
	loadUser,
	loadUserSuccess,
	loadUserFailure,
	loadUserProfile,
	loadUserProfileSuccess,
	loadUserProfileFailure,
	logoutUser,
	logoutUserSuccess,
	logoutUserFailure,
	updateUserProfile,
	updateUserProfileSuccess,
	updateUserProfileFailure,
};
