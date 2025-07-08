import { IAppNotification } from '../services/app-notification.service';

export abstract class AppNotifications {
	static readonly LOGIN_USER: IAppNotification = {
		message: `You're logged in successfully`,
	};
	static readonly LOGIN_WARNING: IAppNotification = {
		title: 'Login required',
		message: `Please login to book any appointment`,
	};
}
