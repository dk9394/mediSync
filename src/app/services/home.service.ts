import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { IDoctor, IDoctorResponse, IDoctorSpeciality } from '../models/doctor';

@Injectable({
	providedIn: 'root',
})
export class HomeService {
	httpClient = inject(HttpClient);

	doctorsList: IDoctor[] = [];

	getAllDoctors(): Observable<IDoctor[]> {
		return this.httpClient.get<IDoctorResponse>('/api/doctor/list').pipe(
			map((res) => {
				this.doctorsList = res.doctors; // Use Ngrx store instead.
				return this.doctorsList;
			})
		);
	}

	getDoctor(id: string): IDoctor | undefined {
		return this.doctorsList.find((doctor) => doctor._id === id);
	}

	getSpecialities(): IDoctorSpeciality[] {
		return [
			{
				id: 1,
				label: 'General physician',
				speciality: 'General physician',
				image: 'assets/General_physician.svg',
				active: false,
			},
			{
				id: 2,
				label: 'Gynecologist',
				speciality: 'Gynecologist',
				image: 'assets/Gynecologist.svg',
				active: false,
			},
			{
				id: 3,
				label: 'Dermatologist',
				speciality: 'Dermatologist',
				image: 'assets/Dermatologist.svg',
				active: false,
			},
			{
				id: 4,
				label: 'Pediatricians',
				speciality: 'Pediatricians',
				image: 'assets/Pediatricians.svg',
				active: false,
			},
			{
				id: 5,
				label: 'Neurologist',
				speciality: 'Neurologist',
				image: 'assets/Neurologist.svg',
				active: false,
			},
			{
				id: 6,
				label: 'Gastroenterologist',
				speciality: 'Gastroenterologist',
				image: 'assets/Gastroenterologist.svg',
				active: false,
			},
		];
	}
}
