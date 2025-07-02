export interface IDoctor {
	_id: string;
	name: string;
	image: string;
	speciality: string;
	degree: string;
	experience: string;
	about: string;
	fees: number;
	available: boolean;
	date: number;
	// slots_booked: {},
	address: {
		line1: string;
		line2: string;
	};
}

export interface IDoctorResponse {
	success: boolean;
	doctors: IDoctor[];
}

export interface IDoctorSpeciality {
	speciality: string;
	image: string;
}
