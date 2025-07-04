import { DoctorsEffects } from './doctors/doctors.effects';
import { doctorsReducer } from './doctors/doctors.reducers';

export const appReducers = {
	doctors: doctorsReducer,
};

export const appEffects = [DoctorsEffects];
