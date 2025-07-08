import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, inject, Injectable, Injector } from '@angular/core';

import { AppNotificationService } from './app-notification.service';

export interface IAppError {
	title?: string;
	message: string;
	status?: number;
}

@Injectable({
	providedIn: 'root',
})
export class GlobalErrorHandlerService implements ErrorHandler {
	injector = inject(Injector);

	handleError(error: Error): void {
		const appNotificationService = this.injector.get(AppNotificationService);
		let errorDetails: IAppError = { message: '' };

		if (error instanceof HttpErrorResponse) {
			console.log('Server side error: ', error);
			errorDetails = this.handleHttpError(error);
		} else if (error instanceof Error) {
			console.log('Client side error: ', error);

			errorDetails = {
				message: error.message,
			};
		} else {
			console.log('System error: ', error);

			errorDetails = {
				message: (error as Error).toString(),
			};
		}

		appNotificationService.showError(errorDetails);
	}

	private handleHttpError(error: HttpErrorResponse): IAppError {
		let message = 'An error occurred';
		let title = 'Error';

		switch (error.status) {
			case 400:
				title = 'Bad Request';
				message = 'Invalid input from client';
				break;
			case 401:
				title = 'Unauthorized';
				message = 'Missing/invalid auth credentials';
				break;
			case 403:
				title = 'Forbidden';
				message = 'Authenticated but no permissions';
				break;
			case 404:
				title = 'Not Found';
				message = 'Resource does not exists';
				break;
			case 405:
				title = 'Method not allowed';
				message = 'HTTP method not supported';
				break;
			case 409:
				title = 'Conflict';
				message = 'Resource conflict (e.g., duplicate entries)';
				break;
			case 422:
				title = 'Unprocessible Entity';
				message = 'Valid input structure, semantic errors';
				break;
			case 429:
				title = 'Too many requests';
				message = 'Rate-limitting throttled the request';
				break;
			case 500:
				title = 'Internal Server Error';
				message = 'Server crashed or unhandled exception';
				break;
			case 502:
				title = 'Bad Gateway';
				message = 'Invalid response from upstream server';
				break;
			case 503:
				title = 'Service Unavailable';
				message = 'Server is temporarily down';
				break;
			case 504:
				title = 'Gateway Timout';
				message = 'Upstream server timed out';
				break;
			default:
				title = 'Error';
				message = `${error.status}: ${error.message}`;
		}

		return {
			title: error.error?.title ?? title,
			message: error.error?.message ?? message,
			status: error.status,
		};
	}
}
