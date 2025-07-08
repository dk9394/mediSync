import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
	FormBuilder,
	FormControl,
	FormGroup,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, takeUntil } from 'rxjs';

import { UserRole } from '../../models/user.interfaces';
import { UserActions } from '../../store/user/user.actions';
import { selectUser } from '../../store/user/user.selectors';
import { UntilDestroyed } from '../../utils/until-destroyed.directive';
import { AuthDialogService } from './auth-dialog.service';

@Component({
	selector: 'app-auth-dialog',
	imports: [CommonModule, ReactiveFormsModule],
	templateUrl: './auth-dialog.component.html',
	styleUrl: './auth-dialog.component.scss',
})
export class AuthDialogComponent extends UntilDestroyed implements OnInit {
	store = inject(Store);
	fb = inject(FormBuilder);
	authDialogService = inject(AuthDialogService);

	// Update user role based on user type login
	userRole = UserRole.User;
	isCreateMode = false;
	form!: FormGroup;
	loading$!: Observable<boolean>;

	get nameField() {
		return this.form.get('name');
	}

	get emailField() {
		return this.form.get('email');
	}

	get passwordField() {
		return this.form.get('password');
	}

	ngOnInit(): void {
		this.store
			.select(selectUser.isUserLoggedIn)
			.pipe(takeUntil(this.destroy$))
			.subscribe((status) => {
				if (status) {
					this.authDialogService.close();
				}
			});
		this.loading$ = this.store.select(selectUser.loading);
		this.authDialogService.isCreateMode$.pipe(takeUntil(this.destroy$)).subscribe((mode) => {
			this.isCreateMode = mode;
			this.initializeForm();
		});
	}

	onSubmit(): void {
		if (this.form.valid) {
			this.store.dispatch(
				UserActions.loadUser({
					loginCredentials: {
						credentials: this.form.value,
						role: this.userRole,
					},
				})
			);
		}
	}

	toggleMode(): void {
		this.isCreateMode = !this.isCreateMode;
		this.initializeForm();
		this.form.reset();
	}

	onClose(): void {
		this.authDialogService.close();
		this.form.reset();
	}

	private initializeForm(): void {
		this.form = this.fb.group({
			email: this.fb.control('deepak@gmail.com', [Validators.required]),
			password: this.fb.control('medSync@123', [Validators.required]),
		});
		if (this.isCreateMode) {
			this.form.addControl('name', new FormControl('', [Validators.required]));
		}
	}
}
