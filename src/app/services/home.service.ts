import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IDoctorResponse, IDoctorSpeciality } from '../models/doctors.interfaces';

@Injectable({
	providedIn: 'root',
})
export class HomeService {
	httpClient = inject(HttpClient);

	private DOCTORS_ENDPOINT = '/api/doctor';

	getAllDoctors(): Observable<IDoctorResponse> {
		return this.httpClient.get<IDoctorResponse>(`${this.DOCTORS_ENDPOINT}/list`);
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
		].slice();
	}
}
