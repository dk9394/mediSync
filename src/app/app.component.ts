import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';

import { AuthDialogComponent } from './components/auth-dialog/auth-dialog.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { DoctorsActions } from './store/doctors/doctors.actions';

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
	}
}
