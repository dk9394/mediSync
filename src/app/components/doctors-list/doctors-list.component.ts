import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';

import { IDoctor } from '../../models/doctors.interfaces';

@Component({
	selector: 'app-doctors-list',
	imports: [CommonModule, RouterModule],
	templateUrl: './doctors-list.component.html',
	styleUrl: './doctors-list.component.scss',
})
export class DoctorsListComponent {
	@Input() doctorsList$!: Observable<IDoctor[]>;
	@Input() overrideCSS?: string =
		'sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 pt-5';
	@Output() itemClick = new EventEmitter<IDoctor>();

	onDoctorClick(doctor: IDoctor): void {
		this.itemClick.emit(doctor);
	}
}
