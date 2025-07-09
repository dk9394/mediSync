import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';

import {
	ILoginCredentials,
	ILoginResponse,
	ILoginWithRoleResponse,
	IUser,
	IUserResponse,
} from '../models/user.interfaces';

export interface IUserLink {
	id: number;
	label: string;
	url: string;
}

@Injectable({
	providedIn: 'root',
})
export class UserService {
	httpClient = inject(HttpClient);

	private readonly USER_ENDPOINT = '/api/user';

	login(loginCredentials: ILoginCredentials): Observable<ILoginWithRoleResponse> {
		return this.httpClient
			.post<ILoginResponse>(`${this.USER_ENDPOINT}/login`, loginCredentials.credentials)
			.pipe(
				map((loginResponse) => {
					return {
						...loginResponse,
						role: loginCredentials.role,
					};
				})
			);
	}

	getProfile(): Observable<IUserResponse> {
		return this.httpClient.get<IUserResponse>(`${this.USER_ENDPOINT}/get-profile`);
	}

	updateProfile(userData: IUser): Observable<IUserResponse> {
		return this.httpClient.post<IUserResponse>(`${this.USER_ENDPOINT}/update-profile`, userData);
	}

	logout(): Observable<boolean> {
		return of(true);
	}

	userLinks: IUserLink[] = [
		{
			id: 1,
			label: 'Profile',
			url: 'profile',
		},
		{
			id: 2,
			label: 'Appointments',
			url: 'appointments',
		},
	];
}
