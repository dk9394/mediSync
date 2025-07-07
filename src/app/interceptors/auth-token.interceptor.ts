import { HttpInterceptorFn } from '@angular/common/http';
import { UserRole } from '../models/user.interfaces';

export const authTokenInterceptor: HttpInterceptorFn = (req, next) => {
	const token = localStorage.getItem('auth-token');
	const role = localStorage.getItem('auth-userRole');

	const reqHeaders: { token?: string; atoken?: string; dtoken?: string } = {};

	switch (role) {
		case UserRole.Admin: {
			reqHeaders.atoken = token || '';
			break;
		}
		case UserRole.Doctor: {
			reqHeaders.dtoken = token || '';
			break;
		}
		default: {
			reqHeaders.token = token || '';
		}
	}

	const clone = req.clone({
		setHeaders: reqHeaders,
	});

	return next(clone);
};
