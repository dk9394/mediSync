import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable, of } from 'rxjs';

import { DoctorsListComponent } from '../../components/doctors-list/doctors-list.component';
import { HomeService } from '../../services/home.service';
import { IDoctor, IDoctorSpeciality } from '../../store/doctors/doctor';
import { selectDoctors } from '../../store/doctors/doctors.selectors';

@Component({
	selector: 'app-home',
	imports: [CommonModule, DoctorsListComponent],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
	homeService = inject(HomeService);
	store = inject(Store);

	doctors$: Observable<IDoctor[]> = of([]);
	specialities: IDoctorSpeciality[] = [];

	ngOnInit(): void {
		this.doctors$ = this.store.select(selectDoctors.list).pipe(
			map((val) => {
				return val.slice(0, 5);
			})
		);
		this.specialities = this.homeService.getSpecialities();
	}
}
