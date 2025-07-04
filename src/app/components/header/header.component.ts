import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { IMenu } from './menu.interface';

@Component({
	selector: 'app-header',
	imports: [CommonModule, RouterModule],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss',
})
export class HeaderComponent {
	router = inject(Router);

	loggedIn = false;
	isMobileMenuOpen = false;
	isDropdownVisible = false;

	menu: IMenu[] = [
		{
			id: 1,
			name: 'Home',
			url: '/',
			active: false,
		},
		{
			id: 2,
			name: 'Doctors',
			url: 'doctors',
			active: false,
		},
		{
			id: 3,
			name: 'About',
			url: 'about',
			active: false,
		},
		{
			id: 4,
			name: 'Contact us',
			url: 'contact',
			active: false,
		},
	];

	showMobileMenu(): void {
		this.isMobileMenuOpen = true;
	}

	hideMobileMenu(): void {
		this.isMobileMenuOpen = false;
	}

	toggleDropdown(): void {
		this.isDropdownVisible = !this.isDropdownVisible;
	}

	hasQueryParamsOrDynamicRoute(url: string): boolean {
		return this.router.url.startsWith(`/${url}`);
	}
}
