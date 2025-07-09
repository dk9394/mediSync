import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import { UserService } from '../../services/user.service';

@Component({
	selector: 'app-my',
	imports: [CommonModule, RouterModule, FormsModule],
	templateUrl: './my.component.html',
	styleUrl: './my.component.scss',
})
export class MyComponent implements OnInit {
	router = inject(Router);
	route = inject(ActivatedRoute);
	userService = inject(UserService);

	currentUrl!: string;
	myLinks = this.userService.userLinks;

	ngOnInit(): void {
		// This logic below needs to be reactive not static
		const fragments = this.router.url.split('/');
		this.currentUrl = fragments[fragments.length - 1];
	}

	onMyLinkChange(event: Event) {
		const url = (event.target as HTMLInputElement).value;
		this.router.navigate([url], { relativeTo: this.route });
		this.currentUrl = url;
	}
}
