import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { IDoctor, IDoctorResponse, IDoctorSpeciality } from '../models/doctor';

@Injectable({
	providedIn: 'root',
})
export class HomeService {
	httpClient = inject(HttpClient);

	getAllDoctors(): Observable<IDoctor[]> {
		return this.httpClient.get<IDoctorResponse>('/api/doctor/list').pipe(map((res) => res.doctors));
	}

	getSpecialities(): IDoctorSpeciality[] {
		return [
			{
				speciality: 'General physician',
				image: 'assets/General_physician.svg',
			},
			{
				speciality: 'Gynecologist',
				image: 'assets/Gynecologist.svg',
			},
			{
				speciality: 'Dermatologist',
				image: 'assets/Dermatologist.svg',
			},
			{
				speciality: 'Pediatricians',
				image: 'assets/Pediatricians.svg',
			},
			{
				speciality: 'Neurologist',
				image: 'assets/Neurologist.svg',
			},
			{
				speciality: 'Gastroenterologist',
				image: 'assets/Gastroenterologist.svg',
			},
		];
	}
}
