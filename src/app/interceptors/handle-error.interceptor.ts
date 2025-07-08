import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';

import { GlobalErrorHandlerService } from '../services/global-error-handler.service';

export const handleErrorInterceptor: HttpInterceptorFn = (req, next) => {
	const globalErrorHandlerService = inject(GlobalErrorHandlerService);
	return next(req).pipe(
		// tap((res) => {
		// 	if (res instanceof HttpResponse) {
		// 		// Handle global success responses here and notify users
		//
		// 		let title = '';
		// 		let message = '';
		// 		switch (res.status) {
		// 			case 200:
		// 				title = 'OK';
		// 				message = 'Request succeeded';
		// 				break;
		// 			case 201:
		// 				title = 'Created';
		// 				message = 'Resource created (e.g, POST)';
		// 				break;
		// 			case 202:
		// 				title = 'Accepted';
		// 				message = 'Request accepted but processing not completed yet';
		// 				break;
		// 			case 204:
		// 				title = 'No content';
		// 				message = 'Success without response body';
		// 				break;
		// 			case 206:
		// 				title = 'Partial content';
		// 				message = 'Partial response for ranged requests';
		// 				break;
		// 			default:
		// 				title = 'Others';
		// 				message = `${res.status}}`;
		// 		}
		//
		// 		console.log('Success response', { title, message });
		// 	}
		// }),
		catchError((error) => {
			globalErrorHandlerService.handleError(error);
			return throwError(() => error);
		})
	);
};
