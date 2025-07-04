import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { BehaviorSubject, takeUntil } from 'rxjs';

import { DoctorsListComponent } from '../../components/doctors-list/doctors-list.component';
import { HomeService } from '../../services/home.service';
import { IDoctor } from '../../store/doctors/doctor';
import { selectDoctors } from '../../store/doctors/doctors.selectors';
import { UntilDestroyed } from '../../utils/until-destroyed.directive';

@Component({
	selector: 'app-doctors',
	imports: [CommonModule, DoctorsListComponent, RouterModule],
	templateUrl: './doctors.component.html',
	styleUrl: './doctors.component.scss',
})
export class DoctorsComponent extends UntilDestroyed implements OnInit {
	homeService = inject(HomeService);
	store = inject(Store);
	router = inject(Router);
	route = inject(ActivatedRoute);

	private _doctors: IDoctor[] = [];
	doctors$ = new BehaviorSubject<IDoctor[]>([]);
	filterby: string | null = null;

	specialities = this.homeService.getSpecialities().slice();

	ngOnInit(): void {
		this.store
			.select(selectDoctors.list)
			.pipe(takeUntil(this.destroy$))
			.subscribe((val) => {
				this._doctors = val;
				this.doctors$.next(val);
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

	private loadFilteredData(): void {
		this.route.queryParams.pipe(takeUntil(this.destroy$)).subscribe((val) => {
			this.filterby = val['filterBy'];
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
