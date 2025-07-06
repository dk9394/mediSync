import { DoctorsEffects } from './doctors/doctors.effects';
import { doctorsReducer } from './doctors/doctors.reducers';
import { UserEffects } from './user/user.effects';
import { userReducer } from './user/user.reducers';

export const appReducers = {
	doctors: doctorsReducer,
	user: userReducer,
};

export const appEffects = [DoctorsEffects, UserEffects];
