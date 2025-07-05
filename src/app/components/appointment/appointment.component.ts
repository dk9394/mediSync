import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IDoctor } from '../../store/doctors/doctor';
import { selectDoctors } from '../../store/doctors/doctors.selectors';

@Component({
	selector: 'app-appointment',
	imports: [CommonModule, RouterModule],
	templateUrl: './appointment.component.html',
	styleUrl: './appointment.component.scss',
})
export class AppointmentComponent implements OnInit {
	store = inject(Store);

	doctor$!: Observable<IDoctor | null>;

	ngOnInit(): void {
		this.doctor$ = this.store.select(selectDoctors.currentDoctor);
	}
}
