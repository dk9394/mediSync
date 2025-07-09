import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

export interface IMyLink {
	id: number;
	label: string;
	url: string;
}

@Component({
	selector: 'app-my',
	imports: [CommonModule, RouterModule],
	templateUrl: './my.component.html',
	styleUrl: './my.component.scss',
})
export class MyComponent {
	router = inject(Router);
	route = inject(ActivatedRoute);

	myLinks = [
		{
			id: 1,
			label: 'Profile',
			url: 'profile',
		},
		{
			id: 2,
			label: 'Appointments',
			url: 'appointments',
		},
	];

	onMyLinkChange(event: Event) {
		this.router.navigate([(event.target as HTMLInputElement).value], { relativeTo: this.route });
	}
}
