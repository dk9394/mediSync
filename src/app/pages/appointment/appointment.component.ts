import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, takeUntil } from 'rxjs';

import { LoadingComponent } from '../../components/loading/loading.component';
import { IDoctor } from '../../store/doctors/doctor';
import { DoctorsActions } from '../../store/doctors/doctors.actions';
import { selectDoctors } from '../../store/doctors/doctors.selectors';
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

	doctor$!: Observable<IDoctor | null>;
	bookingSlots: IBookingSlot[] = this.appointmentService.getBookingSlots();
	bookingSlot: IBookingSlot = this.bookingSlots[0];
	slotTime = '';

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
	}

	onBookingDay(slot: IBookingSlot): void {
		this.bookingSlot = slot;
	}

	onBookingHour(hour: string): void {
		this.slotTime = hour;
	}
}
