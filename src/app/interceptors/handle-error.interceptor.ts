import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const handleErrorInterceptor: HttpInterceptorFn = (req, next) => {
	return next(req).pipe(
		catchError((error) => {
			console.log('Interceptor');
			return throwError(() => error);
		})
	);
};
