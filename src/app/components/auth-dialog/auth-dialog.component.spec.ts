import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { AuthDialogComponent } from './auth-dialog.component';

describe('AuthDialogComponent', () => {
	let component: AuthDialogComponent;
	let fixture: ComponentFixture<AuthDialogComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [AuthDialogComponent],
			providers: [provideMockStore()],
		}).compileComponents();

		fixture = TestBed.createComponent(AuthDialogComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
