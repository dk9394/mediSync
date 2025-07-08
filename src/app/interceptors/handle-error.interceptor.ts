import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';

import { GlobalErrorHandlerService } from '../services/global-error-handler.service';

export const handleErrorInterceptor: HttpInterceptorFn = (req, next) => {
	const globalErrorHandlerService = inject(GlobalErrorHandlerService);
	return next(req).pipe(
		catchError((error) => {
			globalErrorHandlerService.handleError(error);
			return throwError(() => error);
		})
	);
};
