import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, takeUntil } from 'rxjs';

import { AuthDialogService } from '../../components/auth-dialog/auth-dialog.service';
import { LoadingComponent } from '../../components/loading/loading.component';
import { IDoctor } from '../../models/doctors.interfaces';
import { DoctorsActions } from '../../store/doctors/doctors.actions';
import { selectDoctors } from '../../store/doctors/doctors.selectors';
import { selectUser } from '../../store/user/user.selectors';
import { UntilDestroyed } from '../../utils/until-destroyed.directive';
import { AppointmentService, IBookingSlot } from './appointment.service';

@Component({
	selector: 'app-appointment',
	imports: [CommonModule, RouterModule, LoadingComponent],
	templateUrl: './appointment.component.html',
	styleUrl: './appointment.component.scss',
})
export class AppointmentComponent extends UntilDestroyed implements OnInit {
	store = inject(Store);
	router = inject(Router);
	route = inject(ActivatedRoute);
	appointmentService = inject(AppointmentService);
	authDialogService = inject(AuthDialogService);

	doctor$!: Observable<IDoctor | null>;
	bookingSlots: IBookingSlot[] = this.appointmentService.getBookingSlots();
	bookingSlot: IBookingSlot = this.bookingSlots[0];
	isUserLoggedIn = false;

	ngOnInit(): void {
		this.doctor$ = this.store.select(selectDoctors.currentDoctor);
		this.store
			.select(selectDoctors.list)
			.pipe(takeUntil(this.destroy$))
			.subscribe((list) => {
				const doctor =
					list.find((doc) => doc._id === this.route.snapshot.paramMap.get('id')) ?? null;
				this.store.dispatch(DoctorsActions.addCurrentDoctor({ currentDoctor: doctor }));
			});
		this.store
			.select(selectUser.isUserLoggedIn)
			.pipe(takeUntil(this.destroy$))
			.subscribe((status) => {
				this.isUserLoggedIn = status;
			});
	}

	onBookingDay(slot: IBookingSlot): void {
		this.bookingSlot = slot;
	}

	onBookingHour(hour: string): void {
		this.bookingSlot.slotTime = hour;
	}

	onBookAppointment(): void {
		if (this.isUserLoggedIn) {
			console.log(this.bookingSlot);
		} else {
			this.authDialogService.open();
		}
	}
}
