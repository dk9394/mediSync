import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

import { HomeService } from '../../services/home.service';
import { IDoctor } from '../../store/doctors/doctor';

@Component({
	selector: 'app-appointment',
	imports: [RouterModule],
	templateUrl: './appointment.component.html',
	styleUrl: './appointment.component.scss',
})
export class AppointmentComponent implements OnInit {
	route = inject(ActivatedRoute);
	homeService = inject(HomeService);

	doctor!: IDoctor | undefined;

	ngOnInit(): void {
		this.route.params.subscribe((params) => {
			this.doctor = this.homeService.getDoctor(params['id']);
			console.log(this.doctor);
		});
	}
}
