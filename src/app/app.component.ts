import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';

import { jwtDecode } from 'jwt-decode';

import { AuthDialogComponent } from './components/auth-dialog/auth-dialog.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { DoctorsActions } from './store/doctors/doctors.actions';
import { UserActions } from './store/user/user.actions';

@Component({
	selector: 'app-root',
	imports: [RouterOutlet, HeaderComponent, FooterComponent, AuthDialogComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
	store = inject(Store);

	ngOnInit(): void {
		this.store.dispatch(DoctorsActions.loadDoctors());
		this.restoreUser();
	}

	private restoreUser(): void {
		const token = localStorage.getItem('auth-token');
		const decoded: { id: string; iat: number } | null = token ? jwtDecode(token) : null;

		if (decoded?.id) {
			this.store.dispatch(UserActions.loadUserProfile());
		}
	}
}
