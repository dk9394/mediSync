import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable, of, takeUntil } from 'rxjs';

import { DoctorsListComponent } from '../../components/doctors-list/doctors-list.component';
import { HomeService } from '../../services/home.service';
import { IDoctor } from '../../store/doctors/doctor';
import { DoctorsActions } from '../../store/doctors/doctors.actions';
import { selectDoctors } from '../../store/doctors/doctors.selectors';
import { UntilDestroyed } from '../../utils/until-destroyed.directive';

@Component({
	selector: 'app-doctors',
	imports: [CommonModule, DoctorsListComponent, RouterModule],
	templateUrl: './doctors.component.html',
	styleUrl: './doctors.component.scss',
})
export class DoctorsComponent extends UntilDestroyed implements OnInit {
	store = inject(Store);
	homeService = inject(HomeService);
	router = inject(Router);
	route = inject(ActivatedRoute);

	private _doctors: IDoctor[] = [];
	loading$: Observable<boolean> = of(false);
	doctors$ = new BehaviorSubject<IDoctor[]>([]);
	filterby: string | null = null;

	specialities = this.homeService.getSpecialities();

	ngOnInit(): void {
		this.loading$ = this.store.select(selectDoctors.loading);
		this.store
			.select(selectDoctors.list)
			.pipe(takeUntil(this.destroy$))
			.subscribe((allDoctors) => {
				this._doctors = allDoctors;
				this.doctors$.next(allDoctors);
				this.loadFilteredData();
			});
	}

	onSpeciality(filterBy: string | null): void {
		if (filterBy) {
			this.router.navigate([], {
				relativeTo: this.route,
				queryParams: { filterBy },
			});
		} else {
			this.router.navigate([], {
				relativeTo: this.route,
				queryParams: {},
			});
		}
	}

	onDoctorClick(doctor: IDoctor): void {
		this.store.dispatch(DoctorsActions.addCurrentDoctor({ currentDoctor: doctor }));
		this.router.navigate([doctor._id], { relativeTo: this.route });
	}

	private loadFilteredData(): void {
		this.route.queryParams.pipe(takeUntil(this.destroy$)).subscribe((queryParams) => {
			this.filterby = queryParams['filterBy'];
			if (this.filterby) {
				this.doctors$.next(
					this._doctors.slice().filter((doctor) => doctor.speciality === this.filterby)
				);
			} else {
				this.doctors$.next(this._doctors.slice());
			}
		});
	}
}
