import { IAppNotification } from '../services/app-notification.service';

export abstract class AppNotifications {
	static LOGIN_USER: IAppNotification = {
		message: `You're logged in successfully`,
	};
	static LOGIN_WARNING: IAppNotification = {
		title: 'Login required',
		message: `You're needed to login before booking any appointment`,
	};
}
