import { createAction, props } from '@ngrx/store';

import { ILoginCredentials, ILoginWithRoleResponse } from '../../models/user.interfaces';

const LOAD_USER = '[USER] load user';
const LOAD_USER_SUCCESS = '[USER] load user success';
const LOAD_USER_FAILURE = '[USER] load user failure';

const loadUser = createAction(LOAD_USER, props<{ loginCredentials: ILoginCredentials }>());
const loadUserSuccess = createAction(LOAD_USER_SUCCESS, props<{ data: ILoginWithRoleResponse }>());
const loadUserFailure = createAction(LOAD_USER_FAILURE, props<{ message: string }>());

export const UserActions = {
	loadUser,
	loadUserSuccess,
	loadUserFailure,
};
