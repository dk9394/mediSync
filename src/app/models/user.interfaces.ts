export enum UserRole {
	User = 'user',
	Admin = 'admin',
	Doctor = 'doctor',
}

export interface ILoginCredentials {
	credentials: {
		email: string;
		password: string;
	};
	role: UserRole;
}

export interface ILoginResponse {
	success: boolean;
	token: string;
}

export interface ILoginWithRoleResponse extends ILoginResponse {
	role: UserRole;
}

export interface ILoggedInStatus {
	token: string;
	role: UserRole;
}

export interface IUser {
	_id: string;
	name: string;
	email: string;
	image: string;
	phone: string;
	address: {
		line1: string;
		line2: string;
	};
	gender: string;
	dob: string;
}

export interface IUserResponse {
	success: boolean;
	userData: IUser;
}
