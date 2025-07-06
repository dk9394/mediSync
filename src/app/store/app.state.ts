import { DoctorsState } from './doctors/doctors.reducers';
import { UserState } from './user/user.reducers';

export interface AppState {
	doctors: DoctorsState;
	user: UserState;
}
