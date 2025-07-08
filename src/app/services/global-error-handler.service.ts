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
		let errorDetails: IAppError | null = null;

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
				message = 'Please check your input';
				break;
			case 401:
				title = 'Unauthorized';
				message = 'Please log in again';
				break;
			case 403:
				title = 'Forbidden';
				message = "You don't have permission to access this resource";
				break;
			case 404:
				title = 'Not Found';
				message = 'The requested resource was not found';
				break;
			case 500:
				title = 'Internal Server Error';
				message = 'Please try again later';
				break;
			case 503:
				title = 'Service Unavailable';
				message = 'Server is temporarily down';
				break;
			default:
				title = 'Error';
				message = `${error.status}: ${error.message}`;
		}

		return {
			title: title,
			message: error.error?.message ?? message,
			status: error.status,
		};
	}
}
