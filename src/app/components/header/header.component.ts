import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs';

import { IUser } from '../../models/user.interfaces';
import { selectUser } from '../../store/user/user.selectors';
import { UntilDestroyed } from '../../utils/until-destroyed.directive';
import { AuthDialogService } from '../auth-dialog/auth-dialog.service';
import { IMenu } from './menu.interface';

@Component({
	selector: 'app-header',
	imports: [CommonModule, RouterModule],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss',
})
export class HeaderComponent extends UntilDestroyed implements OnInit {
	store = inject(Store);
	router = inject(Router);
	authDialogService = inject(AuthDialogService);

	loggedInUser: IUser | null = null;
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

	ngOnInit(): void {
		this.store
			.select(selectUser.userData)
			.pipe(takeUntil(this.destroy$))
			.subscribe((user) => {
				this.loggedInUser = user;
			});
	}

	showMobileMenu(): void {
		this.isMobileMenuOpen = true;
	}

	hideMobileMenu(): void {
		this.isMobileMenuOpen = false;
	}

	toggleDropdown(): void {
		this.isDropdownVisible = !this.isDropdownVisible;
	}

	onLogin(): void {
		this.hideMobileMenu();
		this.authDialogService.open();
	}

	onCreateAccount(): void {
		this.hideMobileMenu();
		this.authDialogService.open(true);
	}

	hasQueryParamsOrDynamicRoute(url: string): boolean {
		return this.router.url.startsWith(`/${url}`);
	}
}
