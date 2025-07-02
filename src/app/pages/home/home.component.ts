import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { map, Observable, of } from 'rxjs';

import { IDoctor, IDoctorSpeciality } from '../../models/doctor';
import { HomeService } from '../../services/home.service';

@Component({
	selector: 'app-home',
	imports: [CommonModule],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
	homeService = inject(HomeService);
	doctors$: Observable<IDoctor[]> = of([]);
	specialities: IDoctorSpeciality[] = [];

	ngOnInit(): void {
		this.doctors$ = this.homeService.getAllDoctors().pipe(
			map((val) => {
				return val.slice(0, 5);
			})
		);
		this.specialities = this.homeService.getSpecialities();
	}
}
