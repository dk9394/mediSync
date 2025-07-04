import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { AppointmentComponent } from './appointment.component';

describe('AppointmentComponent', () => {
	let component: AppointmentComponent;
	let fixture: ComponentFixture<AppointmentComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [AppointmentComponent],
			providers: [provideMockStore()],
		}).compileComponents();

		fixture = TestBed.createComponent(AppointmentComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
