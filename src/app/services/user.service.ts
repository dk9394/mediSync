import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import {
	ILoginCredentials,
	ILoginResponse,
	ILoginWithRoleResponse,
} from '../models/user.interfaces';

@Injectable({
	providedIn: 'root',
})
export class UserService {
	httpClient = inject(HttpClient);

	login(loginCredentials: ILoginCredentials): Observable<ILoginWithRoleResponse> {
		return this.httpClient
			.post<ILoginResponse>('/api/user/login', loginCredentials.credentials)
			.pipe(
				map((loginResponse) => {
					return {
						...loginResponse,
						role: loginCredentials.role,
					};
				})
			);
	}
}
