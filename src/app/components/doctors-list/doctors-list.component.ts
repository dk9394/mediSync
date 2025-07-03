import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Observable, of } from 'rxjs';

import { IDoctor } from '../../models/doctor';

@Component({
	selector: 'app-doctors-list',
	imports: [CommonModule, RouterModule],
	templateUrl: './doctors-list.component.html',
	styleUrl: './doctors-list.component.scss',
})
export class DoctorsListComponent {
	@Input() doctorsList$: Observable<IDoctor[]> = of([]);
	@Input() overrideCSS?: string =
		'sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 pt-5';
	router = inject(Router);
	route = inject(ActivatedRoute);

	onDoctorClick(doctor: IDoctor): void {
		this.router.navigate([doctor._id], { relativeTo: this.route });
	}
}
