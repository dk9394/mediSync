import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable, of } from 'rxjs';

import { AuthDialogService } from '../../components/auth-dialog/auth-dialog.service';
import { DoctorsListComponent } from '../../components/doctors-list/doctors-list.component';
import { LoadingComponent } from '../../components/loading/loading.component';
import { HomeService } from '../../services/home.service';
import { IDoctor } from '../../store/doctors/doctor';
import { DoctorsActions } from '../../store/doctors/doctors.actions';
import { selectDoctors } from '../../store/doctors/doctors.selectors';
import { selectUser } from '../../store/user/user.selectors';

@Component({
	selector: 'app-home',
	imports: [CommonModule, RouterModule, DoctorsListComponent, LoadingComponent],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
	store = inject(Store);
	router = inject(Router);
	route = inject(ActivatedRoute);
	homeService = inject(HomeService);
	authDialogService = inject(AuthDialogService);

	doctors$: Observable<IDoctor[]> = of([]);
	loading$: Observable<boolean> = of(false);
	specialities = this.homeService.getSpecialities();
	isUserLoggedIn$!: Observable<boolean>;

	ngOnInit(): void {
		this.doctors$ = this.store.select(selectDoctors.list).pipe(
			map((val) => {
				return val.slice(0, 5);
			})
		);
		this.isUserLoggedIn$ = this.store.select(selectUser.isUserLoggedIn);
		this.loading$ = this.store.select(selectDoctors.loading);
	}

	onCreateAccount(): void {
		this.authDialogService.open(true);
	}

	onDoctorClick(doctor: IDoctor): void {
		this.store.dispatch(DoctorsActions.addCurrentDoctor({ currentDoctor: doctor }));
		this.router.navigate(['doctors', doctor._id], { relativeTo: this.route });
	}
}
