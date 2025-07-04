import { IDoctor } from '../store/doctors/doctor';

export interface IDoctorResponse {
	success: boolean;
	doctors: IDoctor[];
}

export interface IDoctorSpeciality {
	id: number;
	label: string;
	speciality: string;
	image: string;
	active: boolean;
}
