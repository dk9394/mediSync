import { inject, Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { IAppError } from './global-error-handler.service';

export interface IAppNotification {
	title: string;
	message: string;
}

@Injectable({
	providedIn: 'root',
})
export class AppNotificationService {
	toastrService = inject(ToastrService);

	showSuccess(error: IAppNotification): void {
		this.toastrService.success(error.message, error.title);
	}

	showError(error: IAppError): void {
		this.toastrService.error(error.message, error.title);
	}

	showWarning(error: IAppNotification): void {
		this.toastrService.warning(error.message, error.title);
	}

	showInfo(error: IAppNotification): void {
		this.toastrService.info(error.message, error.title);
	}
}
