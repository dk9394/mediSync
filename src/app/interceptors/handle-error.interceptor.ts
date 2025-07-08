import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';

import { GlobalErrorHandlerService } from '../services/global-error-handler.service';

export const handleErrorInterceptor: HttpInterceptorFn = (req, next) => {
	const globalErrorHandlerService = inject(GlobalErrorHandlerService);
	return next(req).pipe(
		// tap((res) => {
		// 	if (res instanceof HttpResponse && res.status === 200) {
		//		// Handle global success responses here and notify users
		// 		console.log('Success response', res);
		// 	}
		// }),
		catchError((error) => {
			globalErrorHandlerService.handleError(error);
			return throwError(() => error);
		})
	);
};
