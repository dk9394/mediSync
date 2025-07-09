import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs';

import { LoadingComponent } from '../../components/loading/loading.component';
import { IUser } from '../../models/user.interfaces';
import { UserActions } from '../../store/user/user.actions';
import { selectUser } from '../../store/user/user.selectors';
import { UntilDestroyed } from '../../utils/until-destroyed.directive';

@Component({
	selector: 'app-profile',
	imports: [CommonModule, ReactiveFormsModule, LoadingComponent],
	templateUrl: './profile.component.html',
	styleUrl: './profile.component.scss',
})
export class ProfileComponent extends UntilDestroyed implements OnInit {
	store = inject(Store);
	fb = inject(FormBuilder);

	form!: FormGroup;
	user: IUser | null = null;
	isEditMode = false;
	selectedImage: string | null = null;
	loading = false;

	get imageField() {
		return this.form.get('image');
	}

	get nameField() {
		return this.form.get('name');
	}

	get phoneField() {
		return this.form.get('phone');
	}

	get addressField() {
		return this.form.get('address');
	}

	get genderField() {
		return this.form.get('gender');
	}

	get dobField() {
		return this.form.get('dob');
	}

	ngOnInit(): void {
		this.initializeForm();
		this.store
			.select(selectUser.userData)
			.pipe(takeUntil(this.destroy$))
			.subscribe((userData) => {
				this.user = userData;
				this.form.patchValue({ ...userData });
			});
		this.store
			.select(selectUser.loading)
			.pipe(takeUntil(this.destroy$))
			.subscribe((loading) => {
				this.loading = loading;
				if (!loading) {
					this.isEditMode = false;
				}
			});
	}

	onEditCancel(): void {
		this.isEditMode = false;
		this.form.patchValue({ ...this.user });
	}

	onSubmit(): void {
		if (this.isEditMode && this.form.valid) {
			const formData = new FormData();
			formData.append('image', this.imageField?.value);
			formData.append('name', this.nameField?.value);
			formData.append('phone', this.phoneField?.value);
			formData.append('address', JSON.stringify(this.addressField?.value));
			formData.append('gender', this.genderField?.value);
			formData.append('dob', this.dobField?.value);

			this.store.dispatch(
				UserActions.updateUserProfile({ userData: formData as unknown as IUser })
			);
		}
	}

	setImage(event: Event): void {
		const input = (event.target as HTMLInputElement)?.files?.[0] ?? null;
		if (input) {
			this.selectedImage = URL.createObjectURL(input);
			this.imageField?.setValue(input);
		}
	}

	private initializeForm(): void {
		this.form = this.fb.group({
			image: this.fb.control('', [Validators.required]),
			name: this.fb.control('', [Validators.required]),
			phone: this.fb.control('', [Validators.required]),
			address: this.fb.group({
				line1: this.fb.control('', [Validators.required]),
				line2: this.fb.control('', [Validators.required]),
			}),
			gender: this.fb.control('', [Validators.required]),
			dob: this.fb.control('', [Validators.required]),
		});
	}
}
